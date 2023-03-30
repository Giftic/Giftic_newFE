import useInput from '../../Hooks/useInput';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from './styles';
import { User } from '../../@typings/db';
import fetcher from '../../@utils/fetcher';
import axios, { AxiosError } from 'axios';
import React, { useCallback, useState } from 'react';
import { Link, useNavigate,  } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { LogoImg } from '../Landing/styles';
const LogIn = () => { 
  const navigate= useNavigate();
  const queryClient = useQueryClient();
  //컴포넌트 마운트시 로그인상태값을 data/false로 반환,(쿠키에 서버에서 받아온 jwt토큰이존재한다면 data리턴->home 리다이렉트 조건활성화 ,없다면 그대로)
  const { isLoading,data, isSuccess, status, isError,  error } = useQuery('user', () =>
  // const { queryKey } = 객체 구조분해
    fetcher({ queryKey: '/api/users' }),
  );
  // if (data){ navigate('/landing')} : navagate로 리다이렉팅은 훅 실행순서를 보장
  // const { data, error, revalidate, mutate } = useSWR('/api/users', fetcher);
  // 로그인 post요청 (로그인되어있다면 data값(id,nickname,email를 반환하고 jwt 쿠키셋해서 응답객체를보내줌 ))
  const mutation = useMutation<User, AxiosError, { email: string; password: string }>(
    'user',
    (data) =>
      axios
        .post('/api/v1/users/login', data, {
          //쿠키공유옵션
          withCredentials: true,
        })
        .then((response) => response.data),
    {
      onMutate() {
        setLogInError(false);
      },
      onSuccess() {
        // 로그인요청 성공시 user쿼리문 재호출 -> data받아옴 -> 자동 home 리다이렉트
        // queryClient.invalidateQueries('user'); 와 차이점 연구 
        // 뮤테이션함수 성공시 쿼리 refetch -> 리다이렉트
      
        //  mutation요청 성공시 응답객체의 cookie를 클라이언트 헤더에 전역으로 설정
        //[TO BE DONE] axios.defaults.headers.common['Cookie'] = `${cookieName}=${cookieValue}`;;
        // 쿼리 재요청하면 토큰이 존재하므로 data를 받아서 리다이렉트
        queryClient.refetchQueries('user');
      },
      onError(error:AxiosError) {
        // error.response.status가 401이면 true리턴 후 에러문구 띄우기
        setLogInError(error.response?.status === 401);
      },
    },
  );

  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput(''); // hook: return value,handler,setValue
  const onSubmit = useCallback(
    (e:any) => {
      e.preventDefault();
      mutation.mutate({ email, password });
    },
    [email, password, mutation],
  );

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (data) {
    navigate('/home');
  }
  return (
    <div id="container">
      <Header><LogoImg onClick={()=>{navigate('/') } }src="/imgs/logo.png"></LogoImg></Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;