import React from 'react';
import HeaderToReg from '../../components/Header/HeaderToReg';
import google from '../../assets/icons/google.svg';
import eyes from '../../assets/icons/Eyes.svg';
import { useState } from 'react';
import seteyes from '../../assets/icons/DondShow.svg';
import mistake from '../../assets/icons/mistake.svg';
import { Link } from 'react-router-dom';
const LogIn = () => {
  const [show, setShow] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPass, setValidPass] = useState(true);
  
  const showPassword = (event) => {
    event.preventDefault();
    show ? setShow(false) : setShow(true);
  };

  return (
    <>
      <HeaderToReg />
      <div className="pl-[25%] pt-[5%] ">
        <div className="  font-monserrat text-center shadow-[4px_4px_10px_0px_#00000040]  rounded-3xl flex flex-col w-[669px] pb-[20px]">
          <form action="" className="flex gap-[30px] ml-[30px]  flex-col">
            <h1 className="mt-[5%]  text-[30px] font-bold  ">Войти</h1>
            <div className="relative w-[609px] h-[56px] rounded-[30px]">
              <input
                type="email"
                className="w-[609px] h-[56px] rounded-[30px] border-[#767676] border-[1px] pl-[20px] placeholder:text-[20px] placeholder:font-[400] placeholder:text-[#9DB2BF]"
                placeholder="Почта"
                name=""
                id=""
              />
              {validEmail ? (
                null
                ) : (
                  <img src={mistake} alt="" className="absolute right-[15px] top-[-15px]" />
              )}
            </div>
            {!validEmail ? (
              <label
                className=" text-[#FF4343] text-[18px] h-[10px] translate-y-[-10px]"
                htmlFor="">
                Мы не смогли найти учетную запись с этим адресом электронной почты.
              </label>
            ) : (
              ''
            )}
            <div className="relative w-[609px] h-[56px]">
              <input
                type={show ? 'password' : 'text'}
                className=" rounded-[30px] border-[1px] border-[#767676]  pl-[20px] w-[609px] h-[56px] placeholder:text-[20px] placeholder:font-[400] placeholder:text-[#9DB2BF]"
                name=""
                placeholder="Пароль"
                id=""
              />
              <button
                className="absolute border-none  right-[15px] top-[10px] z-10 "
                onClick={(e) => showPassword(e)}>
                <img className="w-[30px] h-[30px]" src={show ? eyes : seteyes} alt="" />
              </button>
              {!validPass ? (
                <img src={mistake} alt="" className="absolute right-[50px] top-[15px]" />
              ) : (
                ''
              )}
            </div>
            {!validPass ? (
              <label
                htmlFor=""
                className="text-[#FF4343] text-[18px] h-[10px] translate-y-[-10px] ">
                Не верный пароль. Повторите попытку.
              </label>
            ) : (
              ''
            )}
              <button
                type="button"
                className="bg-[#9747FF] w-[609px] h-[61px] rounded-[20px] gap-[10px] text-[24px] font-[400] text-[#E8E8E8]">
                Войти
              </button>
          </form>
          <h1 className="text-[24px] mb-[20px] mt-[20px]">Или войти с помощью</h1>
          <button
            type="button"
            className="ml-[5%] bg-[#4657F0] w-[609px] h-[61px] rounded-[20px] gap-[10px] text-[24px] font-[400] text-[#E8E8E8] flex justify-center items-center ">
            <img src={google} alt="google" />
            Войти через Google
          </button>
          <Link to="/sign-in/checking">
            <h1 className=" font-montserrat mt-[1rem] text-[20px] text-[#667EFF]">
              Забыли пароль ?{' '}
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LogIn;
