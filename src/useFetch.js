import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data,setData] = useState(null);
    useEffect(() => {
        const fetchData =()=> {
            try {
                setLoading(true);
                fetch(url)
                .then(response=>response.json())
                .then(r=>setData(r))
            } catch (error) {
                setError(error);
               //throw error;
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { loading,error, data };

};

export default useFetch;