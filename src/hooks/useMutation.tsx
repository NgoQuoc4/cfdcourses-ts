import { useState } from "react";

const useMutation = (promise: any) => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  const execution = async (
    payload: any,
    options: { onSuccess: any; onFailure: any }
  ) => {
    const { onSuccess, onFailure } = options || {};
    setLoading(true);
    try {
      const res = await promise(payload);
      setData(res?.data?.data || []);
      onSuccess?.(res?.data?.data);
    } catch (error) {
      setError(error);
      onFailure?.(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    execution,
    data,
    setData,
    loading,
    error,
  };
};

export default useMutation;
