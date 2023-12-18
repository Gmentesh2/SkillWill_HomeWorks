import React, { useCallback, useEffect, useState } from "react";

const useFetch = (url, method) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = `PWqx8-3636z6m8y6laul3X7MuuElun9o68_MJHKdOe1eO4ahrQ`

  const onFetch = useCallback(() => {
    setLoading(true);
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) 
          throw new Error('Failed to get response');

        return res.json();
      })
      .then((data) => {
        setResponse(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [url, method]);

  useEffect(() => {
    onFetch();
  }, []);

  return { response, error, loading, resendRequest: onFetch };
};

export default useFetch;