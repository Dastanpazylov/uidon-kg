import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderToReg from '../../components/Header/HeaderToReg';
import { useDispatch } from 'react-redux';
import { signUp } from '../../api';
import { setRole } from '../../redux/slices/rolesSlice';
import { login } from '../../redux/slices/authSlice';

const AuthCustomer = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const userData = {
    role: 'customer',
    email,
    password,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password || !isValidEmail) {
      alert('Заполните ваш имейл');
      return;
    }
    try {
      const response = await signUp(userData);
      if (response.status >= 200 && response.status < 300) {
        dispatch(setRole('customer'))
        dispatch(login(userData));
        console.log(userData);
        navigate('/sign-up/email-verification');
      } else {
        console.log('Ошибка при создании аккаунта');
      }
    } catch (error) {
      console.error('Произошла сетевая ошибка', error);
    }

    setEmail('');
    setPassword('');
  };
  const validateEmail = (inputEmail) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailPattern.test(inputEmail));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = () => {};

  return (
    <div className="bg-[#F4F4F9] relative font-montserrat h-[120vh]">
      <HeaderToReg />
      <div className="w-[680px] h-auto relative top-[90px] left-[300px] py-[24px] px-[60px] bg-[#F4F4F9] shadow-[4px_4px_10px_0px_#00000040] rounded-[20px] flex flex-col items-center gap-[10px]">
        <h2 className="mb-4 relative text-2xl  tracking-wider top-[10px] font-semibold text-center">
          Начать как Заказчик
        </h2>
        <div className=" flex flex-col items-center gap-[20px] w-[97%]">
          <input
            type="email"
            placeholder="Почта"
            className="w-full bg-transparent h-[50px] placeholder:text-[#9DB2BF] placeholder:font-light text-lg placeholder:tracking-[0.5px] font-montserrat font-light px-[16px]  text-start gap-[10px] border-0 border-solid border-y border-x rounded-[30px]"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full bg-transparent h-[50px] placeholder:text-[#9DB2BF] placeholder:text-lg text-xl tracking-[0.5px] font-montserrat font-light p-[16px] gap-[10px] border-0 border-solid border-y border-x rounded-[30px]"
              placeholder="Пароль"
              value={password}
              onChange={handlePasswordChange}
            />
            <button className="absolute top-3 w-5 right-[13px]" onClick={handleTogglePassword}>
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <img src="/src/assets/img/RegPage/passwordViewer.svg" alt="viewer" />
              )}
            </button>
            <p className="text-[1rem] font-normal text-[#9DB2BF]">Минимум 8 символов</p>
          </div>
        </div>
        <button
          className={`flex items-center justify-center text-[30px] leading-[28px] font-light w-[540px] h-[60px] py-[10px] px-[20px] mt-2 text-white bg-[#9747FF] rounded-[20px] ${
            !email || !password || !isValidEmail ? 'opacity-50 cursor-not-allowed' : ':bg-[#9747FF]'
          }`}
          onClick={handleSubmit}
          disabled={!email || !password || !isValidEmail}>
          Создать аккаунт
        </button>
        <p className="mb-2 text-lg text-center text-gray-500">Или войти с помощью</p>
        <button
          className="flex items-center justify-center text-center w-[540px] h-[52px] py-[12px] px-[10px] text-xl font-light tracking-[2px] text-white bg-[#4657F0] rounded-[20px]"
          onClick={handleGoogleSignIn}>
          <img src="/src/assets/img/RegPage/regGoogle.svg" alt="Google" className="mr-3" />
          Войти через Google
        </button>
      </div>
    </div>
  );
};

export default AuthCustomer;
