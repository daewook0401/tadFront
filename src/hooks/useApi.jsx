import { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * 공통 API 요청 훅
 * @param {string} url - 요청 URL
 * @param {boolean} immediate - mount 시 바로 호출할지 여부
 */
const useApi = (url, options = {}, immediate = true) => {
  const [data, setData] = useState([]); // body.items
  const [totalCount, setTotalCount] = useState(0); // body.totalCount
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const fetch = async () => {
    setLoading(true);
    setError(null);
    const fullurl = "http://localhost:8080" + url;
    try {
      const res = await axios.get(fullurl, options);

      const { header, body } = res.data;

      if (header.code !== 0) {
        setError(header.message || '알 수 없는 오류');
        setData([]);
        setTotalCount(0);
      } else {
        setData(body.items || []);
        setTotalCount(body.totalCount || 0);
      }
    } catch (e) {
      console.error(e);
      setError('요청 실패');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) fetch();
  }, [url]);

  return { data, totalCount, loading, error, refetch: fetch };
};

export default useApi;
