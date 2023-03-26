// import {css} from '@emotion/react';
import { User } from '../../@typings/db';
import useInput from '../../Hooks/useInput';
// import { IUser } from '@typings/db';
import fetcher from '../../@utils/fetcher';
import React, { useCallback, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { LogoImg } from '../Landing/styles';
// import { QueryClient } from 'react-query';

// interface CustomError extends Error {
//   // name: string; 
//   // message: string;
//   // stack?: string; - Error 인터페이스 프로퍼티들을 직접 쓰거나 아니면 상속해준다.
  
//   response?: {
//     data: any;
//     status: number;
//     headers: string;
//   };
// }

//회원가입 여부 조회 
const SignUp = () => {
  const navigate = useNavigate();
  // 로그인상태여부 조회 data(email,nickname,id) | false
  const { isLoading, isSuccess, status, isError, data, error } = useQuery('user', () =>
    fetcher({ queryKey: '/api/users' }),
  );

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangePassword = useCallback(
    (e:any) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck, setPassword],
  );

  const onChangePasswordCheck = useCallback(
    (e:any) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password, setPasswordCheck],
  );

  const mutation = useMutation<User, AxiosError, { email: string; password: string; nickname: string }>(
    'user',
    (data) => axios.post('/api/v1/users/join ', data,{withCredentials:true,}).then((response) => response.data),
    {//mutation함수 동작 전 실행함수 
      onMutate() {
        setSignUpError('');
        setSignUpSuccess(false);
      },
      //mutation 함수 동작 후 실행
      onSuccess() {
        setSignUpSuccess(true);
      },
      //네트워크 요청 에러시 실행
      onError(error:any) {
        //에러문구로 state초기화
        setSignUpError(error.response?.data);
      },
    },
  );

  const onSubmit = useCallback(
    (e:any) => {
      e.preventDefault();
      //mismatchErr가 없고 nickname이 있으면 
      if (!mismatchError && nickname) {
        console.log('서버로 회원가입하기');
        //data posting
        mutation.mutate({ email, nickname, password });
      }
    },
    [email, nickname, password, mismatchError, mutation],
  );

  // if (isLoading) {
  //   return <div>로딩중...</div>;
  // }

  if (data) {
    navigate('/home')
    // return <Redirect to="/workspace/sleact/channel/일반" />;
  }

  return (
    <div id="container">
      <Header><LogoImg onClick={()=>{navigate('/')}}src="/imgs/logo.png"></LogoImg></Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Link to="/login">로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default SignUp;