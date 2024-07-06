import { useEffect, useState } from "react";

export const useFetchPosts = (url) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((postsFromServer) => {
        setBlogPosts(postsFromServer);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setError(error);
      });
  }, [url]);
  return { blogPosts, setBlogPosts, isLoading, error };
};
