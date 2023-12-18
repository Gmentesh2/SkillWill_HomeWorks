import React, { useState } from "react";

const useRequest =  ({url, method}) => {
  const API_KEY = `PWqx8-3636z6m8y6laul3X7MuuElun9o68_MJHKdOe1eO4ahrQ`
  const [loading, setLoading] = useState(false);
  const sendRequest = async(body, custom) => {
    setLoading(true);
  const res =  await fetch(url || custom, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: !!body && method !== 'GET' ? JSON.stringify(body) : undefined
    })
    const data = await res.json();
    setLoading(false);

  return data;
}
return {loading, sendRequest}
}

export default useRequest;