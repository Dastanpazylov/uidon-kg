import React from 'react';
import massege from '../../assets/icons/massege.svg';
import HeaderToReg from '../../components/Header/HeaderToReg';
import { Link } from 'react-router-dom';

const LogEmail = () => {
  return (
    <>
      <HeaderToReg />
      <Link to="/sign-in/change-password">
        <div className="pt-[5%] font-montserrat pl-[20%]">
          <div className="w-[800px] h-[416px] rounded-[20px] pl-[7%] pt-[3%] shadow-[4px_4px_10px_0px_#00000040] ">
            <div className="text-center w-[639px] h-[336px] justify-center items-center flex flex-col gap-[20px]">
              <img src={massege} className="w-[50px]" alt="" />
              <h1 className="text-[30px] font-[400] leading-[36.5px]  ">
                Проверьте свою электронную почту
              </h1>
              <div className="w-[600px]">
                <h4 className="text-[24px]">
                  Мы выслали вам ссылку для смены пароля на
                  <span className="font-[600] leading-[29px]"> emil@example.com</span>
                </h4>
              </div>
              <p className="font-[400] text-[20px] leading-[25px]  ">
                Проверьте свою почту и перейдите по ссылке для смены пароля на UIDON.KG. Если вы не
                можете найти письмо, то проверьте в “Спаме”.
              </p>
              <span className="text-[24px] cursor-pointer text-[#667EFF] leading-[30px] font-[400] ">
                Переотправить ссылку
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LogEmail;
