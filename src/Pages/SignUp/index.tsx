import useInput from '../../Hooks/useInput';
// import { IUser } from '@typings/db';
import fetcher from '../../@utils/fetcher';
import React, { useCallback, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from './styles';
import { Link, useNavigate } from 'react-router-dom';

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


interface IUser {
  id: number;
  nickname:string;
  email:string;
}

const SignUp = () => {
  const { isLoading, isSuccess, status, isError, data, error } = useQuery('user', () =>
    fetcher({ queryKey: '/api/v1/users/join' }),
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

  const mutation = useMutation<IUser, AxiosError, { email: string; password: string; nickname: string }>(
    'user',
    (data) => axios.post('/api/users', data).then((response) => response.data),
    {
      onMutate() {
        setSignUpError('');
        setSignUpSuccess(false);
      },
      onSuccess() {
        setSignUpSuccess(true);
      },
      onError(error:any) {
        setSignUpError(error.response?.data);
      },
    },
  );

  const onSubmit = useCallback(
    (e:any) => {
      e.preventDefault();
      if (!mismatchError && nickname) {
        console.log('서버로 회원가입하기');
        mutation.mutate({ email, nickname, password });
      }
    },
    [email, nickname, password, mismatchError, mutation],
  );

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  // if (data) {
  //   // return <Redirect to="/workspace/sleact/channel/일반" />;

  // }

  return (
    <div id="container">
      <Header>Sleact</Header>
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