import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';

const HeaderToClient = () => {
  return (
    <div className="border-solid bg-white border-0 border-y border-[#6E4B84] h-[80px] w-full">
      <div className="flex items-center relative left-3 top-5 justify-evenly">
        <Link
          to="/"
          className="UIDON-KG text-[#6F00B6] font-roboto tracking-tight font-semibold text-3xl">
          UIDON.KG
        </Link>
        <Link to='/client/listOfJob'>
          <CustomButton
            title="Список вакансии"
            customStyles="text-black font-montserrat relative left-[23px] font-light  text-[18px]"
          />
        </Link>
        <CustomButton
          title="Отклики"
          customStyles="text-black font-montserrat relative left-[40px] font-light text-[18px]"
        />
        <div className="border-0 border-b border-solid border-r blocked border-l border-t border-[#6E4B84] bg-white w-[330px] h-[38px] rounded-[12px] py-[7px] px-[17px] relative left-[30px] flex items-center">
          <img
            src="/src/assets/img/WelcomePage/SearchIcon.svg"
            alt="search"
            className="h-6 w-6 mr-2"
          />
          <input
            type="text"
            placeholder="Найти вакансию"
            className="bg-transparent font-montserrat text-[18px] tracking-wide font-light focus:outline-none placeholder:text-[#9DB2BF] placeholder:font-montserrat placeholder:text-[18px] placeholder:tracking-wide placeholder:font-light placeholder:leading-[90px]  "
          />
        </div>

        <button className="mr-3">
          <img
            src="/src/assets/img/ClientProfilePage/profileImg.svg"
            className="w-[35px] h-[35px]"
            alt="profile"
          />
        </button>
      </div>
    </div>
  );
};

export default HeaderToClient;
