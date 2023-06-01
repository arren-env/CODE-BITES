import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_REFRESH_TOKEN_ENDPOINT, BLOG_ENDPOINT } from "../../store/constants";
import Cookies from "js-cookie";
import { renewTokens } from "../../store/actions";

const useFetch = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    var accessToken = useSelector(state => state.auth.accessToken);
    const userName = useSelector(state => state.auth.user ? state.auth.user.name : 'Unknown');
    const dispatch = useDispatch();

    const getSingleBlog = async (id) => {
        // GET /products
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        const blog = await apiRequest(`${BLOG_ENDPOINT}/${id}`, requestOptions);
        return blog ?? {};
    };

    const getBlogs = async () => {
        // GET /products
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        const blogs = await apiRequest(BLOG_ENDPOINT, requestOptions);
        return blogs ?? [];
    }

    const createBlog = async (formData) => {
        // POST /products

        // If Access Token has expired, it will automatically renew using refresh token
        if (!accessToken) {
            // Fetch new token using refresh token
            const refreshToken = Cookies.get("refreshToken"); // Retrieve the refresh token from storage mechanism
            const reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refresh_token: refreshToken }),
            }
            // Making a request to server's token refresh endpoint
            var { access_token, refresh_token } = await apiRequest(API_REFRESH_TOKEN_ENDPOINT, reqOptions);
            accessToken = access_token;
            dispatch(renewTokens({
                accessToken: access_token,
                refreshToken: refresh_token,
            }));

            if (!accessToken) {
                console.log("Error refreshing token");
                setError("Error occured while refreshing access token");
                return;
            }
        }

        // Adding user details
        formData.append("createdBy", userName || "Unknown");

        // Creating request to the server
        const requestOptions = {
            method: "POST",
            redirect: "follow",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: formData
        };
        const ack = await apiRequest(BLOG_ENDPOINT, requestOptions);
        if (!ack) {
            console.log("Error creating blog");
            return;
        }
        return ack;
    }

    const deleteBlog = async (id) => {
        // DELETE /products/:id
        const requestOptions = {
            method: "DELETE",
            redirect: "follow",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
        const blog = await apiRequest(`${BLOG_ENDPOINT}/${id}`, requestOptions);
        return blog ?? {};
    }

    const updateBlog = () => {
        // PUT /products/:id
    }

    const apiRequest = async (url, options = {}) => {
        setLoading(true);
        try {
            const res = await fetch(url, options);
            if (!res.ok) {
                throw new Error("Error occured while requesting: " + res.statusText);
            } else {
                const data = await res.json();
                console.log(data);
                if (!data) {
                    throw new Error("Cannot parse JSON data");
                }
                setLoading(false);
                return data;
            }
        } catch (error) {
            console.log("Api Request Error:\n", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
        return;
    }

    return { loading, error, getSingleBlog, getBlogs, createBlog, deleteBlog, updateBlog };
}

export default useFetch;