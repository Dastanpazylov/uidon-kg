import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderToReg from '../../components/Header/HeaderToReg';
import { useSelector } from 'react-redux';

const EmailVerification = () => {

  const navigate = useNavigate()
  const userEmail = useSelector((state) => state.authSlice.userData)
  console.log(userEmail);

  return (
    <div className="bg-[#F4F4F9] h-[100vh]">
      <HeaderToReg />
        <div className="w-[710px] h-[365px] py-[40px] px-[40px] gap-[50px] rounded-[20px] relative top-[90px] left-[283px] bg-[#FFFFFF] shadow-[4px_4px_10px_0px_#00000040] flex flex-col items-center">
          <div className="w-[87%] h-[200px] gap-[10px] flex flex-col items-center text-center ">
            <div className="relative bottom-[5px] left-1">
              <img
                src="/src/assets/img/RegPage/email.svg"
                className="w-[89%] "
                alt="Email Verification"
              />
            </div>
            <h1 className="text-[#232323] font-normal font-montserrat text-[25px] tracking-wider ">
              Проверьте свою электронную почту
            </h1>
            <h2 className="text-[#232323] mt-1 mb-1 font-montserrat text-xl font-normal tracking-normal leading-7 ">
              Мы выслали вам ссылку для подтверждения на {userEmail.email}
            </h2>
            <p className="text-[#232323]  text-base font-montserrat font-normal tracking-wide leading-5">
              Проверьте свою почту и перейдите по ссылке для завершения регистрации на UIDON.KG.
              Если вы не можете найти письмо, то проверьте в “Спаме”.
            </p>
          </div>
          <div className="flex items-center justify-around w-full mt-2 gap-[80px]">
            <Link to={"#"}>
              <button className="text-[#667EFF] text-[21px] font-montserrat font-light tracking-wide">
                Переотправить ссылку
              </button>
            </Link>
            <Link onClick={()=>navigate(-1)}>
              <button className="text-[#667EFF] font-montserrat text-[21px] font-light tracking-wide">
                Изменить почту
              </button>
            </Link>
          </div>
        </div>
     
    </div>
  );
};

export default EmailVerification;
