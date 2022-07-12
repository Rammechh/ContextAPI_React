import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useAPI(Url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(Url);
      setData(res.data);
      setIsLoading(false);
    } catch (e) {
      setLoadError(e);
      setIsLoading(false);
    }
  }, [Url]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    data,
    isLoading,
    loadError
  };
}
