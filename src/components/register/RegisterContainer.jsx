import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { registerAPI } from '../../lib/api/auth';
import { getStorageItem } from '../../lib/util/storage';
import RegisterForm from './RegisterForm';

const RegisterContainer = props => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getStorageItem('token') && navigate('/todo');
  }, []);

  const submitAction = formData => {
    registerAPI(formData, {
      pendingAction: () => setIsLoading(true),
      fulfilledAction: () => {
        setIsLoading(false);
        navigate('/');
      },
      rejectAction: () => setIsLoading(false),
    });
  };

  return (
    <Content>
      <h2>회원가입</h2>
      <RegisterForm
        submitButtonText={isLoading ? '처리중' : '회원가입'}
        isLoading={isLoading}
        submitAction={submitAction}
      />
    </Content>
  );
};

export default RegisterContainer;

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
