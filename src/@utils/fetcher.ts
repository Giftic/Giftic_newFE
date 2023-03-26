import axios from 'axios';

const fetcher = async ({ queryKey }: { queryKey: string }) => {
  //fetcher에 전달한 상대주소 (default로 baseURL설정)
  const response = await axios.get(queryKey, {
    withCredentials: true,
  });
  //res.data = AUTH_TOKEN
  return response.data;
};

export default fetcher;