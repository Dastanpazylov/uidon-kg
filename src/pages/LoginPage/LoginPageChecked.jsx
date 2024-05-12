import React from 'react';
import HeaderToReg from '../../components/Header/HeaderToReg';
import { useNavigate } from 'react-router-dom';

const LoginPageChecked = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderToReg />
      <div className="bg-[#F4F4F9] w-full font-montserrat overflow-hidden h-[100vh] ">
        <div className="h-[22rem] w-[54.8%] flex flex-col items-center gap-3 rounded-[20px] mt-[9.063rem] ml-[18.125rem] bg-[#ffffff] shadow-[4px_4px_10px_0px_#00000040]">
          <h1 className="mt-8 text-[1.67rem] font-semibold text-[#232323]">Восстановить пароль</h1>
          <h3 className="text-[1.337rem] font-normal text-[#232323]  ">
            Введите имя пользователя или адрес электронной почты
          </h3>
          <form className="flex flex-col items-center gap-5 w-full">
            <input
              type="email"
              className="w-[77%] border-x border-y text-[1.12rem] border-solid placeholder:text-[#9DB2BF] placeholder:text-[1.12rem] border-[#9DB2BF] py-[0.68rem] px-3 rounded-[1.7rem] "
              placeholder="emil@example.com"
            />
            
            <button onClick={()=>navigate('/sign-in/email')} className="bg-[#9747FF] w-[77%] py-[.6rem] rounded-[1rem] text-[1.67rem] text-white">
              Отправить на почту
            </button>
          </form>

          <button className="border-x text-[#232323] border-y mt-2 border-[#9747FF] py-[0.40rem] font-normal rounded-[.8rem] text-[1.1rem] w-[25.23%] " onClick={() => navigate(-1)}>
            Отменить
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPageChecked;
