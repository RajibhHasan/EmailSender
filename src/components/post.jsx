import { useState } from 'react';
import axios from 'axios';

const useFormDataPost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postFormData = async (url, formData) => {
    try {
      setLoading(true);
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

     await setData(response.data);
    } catch (err) {
     await setError(err);
    } finally {
      await setLoading(false);
    }
  };

  return  { data, loading, error, postFormData };
};

export default useFormDataPost;
