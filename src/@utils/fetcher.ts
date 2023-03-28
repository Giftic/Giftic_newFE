import axios from 'axios';
const fetcher = async ({ queryKey }: { queryKey: string }) => {
  //fetcher에 전달한 상대주소 (default로 baseURL설정한 것을 기반으로 queryKey(url)을 파라미터로 받음)
  const response = await axios.get(queryKey, {
    withCredentials: true,
  });
  //응답객체.data를 프로미스로 wrapping하여 return
  return response.data;
};

export default fetcher;