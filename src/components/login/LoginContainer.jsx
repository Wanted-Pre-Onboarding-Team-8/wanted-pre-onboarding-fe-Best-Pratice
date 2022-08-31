import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import baseAPI from '../../lib/api';
import { loginAPI } from '../../lib/api/auth';
import { getStorageItem, setStorageItem } from '../../lib/util/storage';
import Button from '../common/Button';
import RegisterForm from '../register/RegisterForm';

const LoginContainer = props => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getStorageItem('token') && navigate('/todo');
  }, []);

  const submitAction = formData => {
    loginAPI(formData, {
      pendingAction: () => setIsLoading(true),
      fulfilledAction: data => {
        setIsLoading(false);
        setStorageItem('token', data.access_token);
        baseAPI.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
        navigate('/todo');
      },
      rejectAction: () => setIsLoading(false),
    });
  };

  const onClickMoveRegister = () => {
    navigate('/register');
  };

  return (
    <Content>
      <h2>로그인</h2>
      <RegisterForm
        submitButtonText={isLoading ? '로그인중' : '로그인'}
        isLoading={isLoading}
        submitAction={submitAction}
      />
      <Button type="button" text="회원가입" onClick={onClickMoveRegister} />
    </Content>
  );
};

export default LoginContainer;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  > h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 50px;
  }
`;
