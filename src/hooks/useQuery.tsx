import { useEffect, useState } from "react";

const useQuery = (promise: any, dependencies = []) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData();
  }, dependencies);

  const fetchData = async (query: string) => {
    setLoading(true);
    try {
      const res = await promise(query);
      if (res?.data) {
        setData(res.data?.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};
export default useQuery;
