import { useState, useEffect } from 'react';

/**
 * A custom hook for fetching data from an API.
 *
 * @param {string} url - The URL of the API endpoint to fetch data from.
 * @returns {object} - An object containing the fetched data and a boolean indicating whether the data is currently being fetched.
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            'Error: Unable to fetch resource. API endpoint may be faulty.'
          );
        }
        return res.json();
      })
      .then((returnedData) => {
        setData(returnedData);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          // for testing purposes only as only applies when user aborts fetch
          // console.log('Fetch aborted.');
        } else {
          setError(err.message);
          //   console.error(err.message);
          setIsPending(false);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
