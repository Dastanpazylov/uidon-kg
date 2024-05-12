import React, { useState } from 'react';
import HeaderToReg from '../../components/Header/HeaderToReg';
import { useNavigate } from 'react-router';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const navigate = useNavigate()

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };
   const accessButton = () => {
    if(password === confirmPassword) {
        
        const passwordToNav = navigate(`${'/'}`)
        return passwordToNav
    }
    else{
        alert('Please enter password correctly');
    }
   }

  return (
    <>
      <HeaderToReg />
      <div className="bg-[#F4F4F9] w-full font-montserrat overflow-hidden h-[100vh] ">
        <div className="h-[24rem] w-[46.5%] flex flex-col items-center gap-3 rounded-[20px] mt-[8.063rem] ml-[21.4rem] bg-[#ffffff] shadow-[4px_4px_10px_0px_#00000040]">
          <h1 className="mt-8 text-[1.67rem] font-semibold text-[#232323]">Новый пароль</h1>
          <h3 className="text-[1.337rem] font-normal text-[#232323]">Введите новый пароль</h3>
          <form className="flex flex-col items-center  gap-4 w-full">
            <div className="w-full relative flex flex-col items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-[91%] border-x border-y text-[1.12rem] border-solid placeholder:text-[#9DB2BF] placeholder:text-[1.12rem] border-[#9DB2BF] py-[0.68rem] px-3 placeholder:font-light rounded-[1.7rem]"
                placeholder="Новый пароль"
                value={password}
                onChange={handlePassword}
              />
              <button
                className="absolute top-[.9rem] w-5 right-[2.6rem]"
                onClick={handleTogglePassword}>
                {showPassword ? (
                  <img src="/src/assets/icons/DondShow.svg" />
                ) : (
                  <img src="/src/assets/img/RegPage/passwordViewer.svg" alt="viewer" />
                )}
              </button>
              <p className="text-[.86rem]  mt-[.19rem] mr-[22rem] font-normal text-[#9DB2BF]">
                Минимум 8 символов
              </p>
            </div>
            <div className="w-full relative flex flex-col items-center">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-[91%] border-x border-y text-[1.12rem] border-solid placeholder:text-[#9DB2BF] placeholder:font-light placeholder:text-[1.12rem] border-[#9DB2BF] py-[0.68rem] px-3 rounded-[1.7rem]"
                placeholder="Подтвердить пароль"
                value={confirmPassword}
                onChange={handleConfirmPassword}
              />
              <button
                className="absolute top-[.9rem] w-5 right-[2.6rem]"
                onClick={handleToggleConfirmPassword}>
                {showConfirmPassword ? (
                  <img src="/src/assets/icons/DondShow.svg" />
                ) : (
                  <img src="/src/assets/img/RegPage/passwordViewer.svg" alt="viewer" />
                )}
              </button>
            </div>
          </form>

          <button
            onClick={accessButton}
            className="bg-[#9747FF] w-[91%] mt-1 py-[.6rem] rounded-[1rem] text-[1.67rem] text-white">
            Продолжить
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
