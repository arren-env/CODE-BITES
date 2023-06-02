import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Layouts";
import { useEffect, useState } from "react";
import useFetch from "../Components/Hooks/useFetch";
import { ROUTE_HOME } from "../store/constants";
import { useSelector } from "react-redux";

const SingleBlogPage = (props) => {

  const { id } = useParams();
  const nav = useNavigate();
  const user = useSelector(state => state.auth.user);
  const { error, loading, getSingleBlog, deleteBlog } = useFetch();
  const [blog, setBlog] = useState({
    title: "",
    story: "",
    user: {},
    image: null
  });
  const isOwner = user && blog.user && user._id === blog.user._id;
  const placeholderImg = "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1";

  useEffect(() => {
    getSingleBlog(id).then(blog => setBlog(blog)).catch(err => console.log(err));
  }, []);

  const handleDelete = () => {
    deleteBlog(id).then(res => {
      if (Object.entries(res).length > 0) {
        window.Swal.fire(
          'Success!',
          'Successfully deleted the blog!',
          'success'
        ).then(() => {
          nav(ROUTE_HOME, { replace: true });
        });
      } else {
        window.Swal.fire(
          'Failed!',
          'Cannot delete the blog due to server error!',
          'error'
        );
      }
    })
  };

  return (
    <Layout>
      {/* <div className="p-5 font-serif dark:text-white text-black container">
        <h1 className="text-center text-5xl mb-5">
          {blog.title}
        </h1>
        <img src={blog.image || "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1"}
          alt="" className="max-w-[500px] mx-auto" />
        <div className="text-content items-center mx-auto flex flex-col">

          <p className="mt-5 text-base">
            {blog.story}
          </p>
          {blog.user &&
            <>
              <p>
                By {blog.user.name}
              </p>
              <p>
                Created at {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              {blog.createdAt !== blog.updatedAt && <p>
                Last updated at {blog.updatedAt}
              </p>}
            </>
          }
        </div>
        <br />
        {isOwner && <button className="btn btn error float-right" onClick={handleDelete}>
          <i className="material-icons">delete</i>
          &nbsp;Delete
        </button>}
      </div> */}

      {/* <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={blog.image || placeholderImg}
            alt="Blog"
            className="w-full h-100 object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>

            <p className="text-gray-800 leading-relaxed mb-4">{blog.story}</p>

            {blog.user && (
              <div className="flex items-center mb-4">
                <img
                  src={blog.user.avatar || placeholderImg}
                  alt="Author"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <p className="text-gray-700">By {blog.user.name}</p>
              </div>
            )}

            <p className="text-gray-500 text-sm mb-4">
              Created at {new Date(blog.createdAt).toLocaleDateString()}
              {blog.createdAt !== blog.updatedAt && (
                <span className="ml-2">Last updated at {blog.updatedAt}</span>
              )}
            </p>


            {isOwner && (
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                onClick={handleDelete}
              >
                <i className="material-icons">delete</i>
                <span className="ml-2">Delete</span>
              </button>
            )}
          </div>
        </div>
      </div> */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg">
          <div className="lg:flex">
            {/* Blog Image */}

            <div className="lg:w-3/5">
              <img
                src={blog.image || placeholderImg}
                alt="Blog"
                className="w-full h-auto lg:h-full object-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg"
              />
            </div>


            {/* Blog Content */}
            <div className="lg:w-1/2 p-6 bg-white dark:bg-zinc-900 dark:text-white flex flex-col">
              {/* Title */}
              <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>

              {/* Story */}
              <p className="text-lg leading-relaxed mb-6">{blog.story}</p>

              {/* Author Information */}
              {blog.user && (
                <div className="flex items-center mb-4">
                  <img
                    src={blog.user.avatar || placeholderImg}
                    alt="Author"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-lg font-bold">{blog.user.name}</p>
                    <p className="text-gray-600 text-sm">
                      Created at {new Date(blog.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              )}

              {/* Last Updated */}
              {blog.updatedAt !== blog.createdAt && (
                <p className="text-gray-600 text-sm mb-4">
                  Last updated: {new Date(blog.updatedAt).toLocaleDateString()}
                </p>
              )}

              {/* Delete Button */}
              {isOwner && (
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md flex ml-auto mt-auto"
                  onClick={handleDelete}
                >
                  <i className="material-icons">delete</i>
                  <span className="ml-2">Delete</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlogPage;