import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setIsLoading] = useState(false)
    const [error, setIsError] = useState(null)

    var myHeaders = new Headers();
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        setIsLoading(true)
        fetch(url, requestOptions)
            .then(response => {
                response.json().then(data => {
                    setData(data)
                    setIsLoading(false);
                })
            })
            .catch(error => {
                setIsError(error);
                setIsLoading(false);
            });
        return () => { }
    }, []);

    return { data, loading, error };
}

export default useFetch;