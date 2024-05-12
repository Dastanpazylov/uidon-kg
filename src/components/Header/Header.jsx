import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';

const Header = () => {
  return (
    <div className="border-solid border-0 border-b border-[#6E4B84] h-[90px] w-full">
      <div className=" flex items-center justify-between relative left-[90px] bottom-[-19px] w-11/12">
        <Link to="/" className="text-[#6F00B6] font-roboto tracking-wide font-semibold text-3xl whitespace-nowrap">
          UIDON.KG
        </Link>
        <div className="border-0 border-b border-solid border-r border-l border-t border-[#6E4B84] bg-white w-[330px] relative left-[140px] h-[38px] rounded-[12px] py-[18px] px-[24px] flex items-center">
          <img src="src/assets/img/WelcomePage/SearchIcon.svg" alt="search" className="h-6 w-6 mr-1" />
          <input type="text" placeholder="Найти" className="bg-transparent focus:outline-none  placeholder:text-[#9DB2BF]  placeholder:font-montserrat placeholder:text-lg font-montserrat font-light " />
        </div>
        <CustomButton
          title="О нас"
          customStyles="text-black font-montserrat relative left-[70px] font-normal text-lg whitespace-nowrap"
        />
        <Link to='/sign-in'>
        <CustomButton
          title="Вход"
          customStyles="text-black font-montserrat font-normal text-lg whitespace-nowrap"
        />
        </Link>
        
        <Link to='/sign-up'>
        <CustomButton
          title="Регистрация"
          customStyles="relative font-montserrat right-[74px] rounded-[12px] text-[#e8e8e8] font-normal hover:bg-[#6F00D0] transition-opacity  bg-[#6F00B6] text-lg  w-[140px] h-[42px]"
        />
        </Link>
      </div>
    </div>
  );
};

export default Header;
