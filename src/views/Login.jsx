import React from 'react';
import { useSelector } from 'react-redux';

const Login = () => {
  const data = useSelector((state) => state.queryresult);
  console.log(data?.data?.docs);
  return <div>Login</div>;
};

export default Login;
