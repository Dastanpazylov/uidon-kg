import React from 'react';
import logo from '../assets/icons/logo.svg';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton/CustomButton';
const Header = ({ auth }) => {
  const navigate = useNavigate();

  const navigationHendler = (type) => {
    if (type === 'saved') {
      navigate('/freelancer/saved');
    } else if (type == 'hired') {
      navigate('/main/hired');
    }
  };
  return (
    <div className="border-solid ml-4 bg-white border-0 border-y border-[#6E4B84] h-[80px] w-full">
      <div className="flex items-center relative right-5 top-5 justify-evenly">
        <Link
          to="/"
          className="UIDON-KG text-[#6F00B6] font-roboton font-semibold text-3xl">
          UIDON.KG
        </Link>
        <CustomButton
          onClickBtn={() => navigationHendler('/')}
          title={auth.response}
          customStyles="text-black font-montserrat relative left-[46px] font-light text-[18px]"
        />
        <CustomButton
          onClickBtn={() => navigationHendler('saved')}
          title={auth.favourite}
          customStyles="text-black font-montserrat relative left-[88px] font-light  text-[18px]"
        />
        <div className="border-0 border-b border-solid border-r blocked border-l border-t border-[#6E4B84] bg-white w-[330px] h-[38px] rounded-[12px] py-[7px] px-[17px] relative left-[70px] flex items-center">
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

        <button className="ml-8">
          <img
            src="/src/assets/img/ClientProfilePage/profileImg.svg"
            className="w-[35px] h-[35px]"
            alt="profile"
          />
        </button>
      </div>
    </div>
    // <div className=" bg-[#FFFFFF] font-montserrat  top-[0px]  w-[100%] border-b-[1px] h-[77px] border-[#6E4B84] pr-[40px] pt-[1rem] pl-[100px]">
    //   <div className="">
    //     <ul className=" font-monserrat text-[20px] flex justify-between items-center cursor-pointer">
    //       <Link
    //         to="/"
    //         className="UIDON-KG text-[#6F00B6] font-roboto font-semibold text-[2rem]">
    //         UIDON.KG
    //       </Link>
    //       <li onClick={() => navigationHendler('/')}>{auth.response}</li>
    //       <li onClick={() => navigationHendler('saved')}>{auth.favourite}</li>
    //       <div className="border-0 border-b border-solid border-r blocked border-l border-t border-[#6E4B84] bg-white w-[330px] h-[38px] rounded-[12px] py-[7px] px-[17px] relative left-[30px] flex items-center">
    //         <img
    //           src="/src/assets/img/WelcomePage/SearchIcon.svg"
    //           alt="search"
    //           className="h-6 w-6 mr-2"
    //         />
    //         <input
    //           type="text"
    //           placeholder="Найти вакансию"
    //           className="bg-transparent font-montserrat text-[18px] tracking-wide font-light focus:outline-none placeholder:text-[#9DB2BF] placeholder:font-montserrat placeholder:text-[18px] placeholder:tracking-wide placeholder:font-light placeholder:leading-[90px]  "
    //         />
    //       </div>
    //       <button className="mr-3">
    //         <img
    //           src="/src/assets/img/ClientProfilePage/profileImg.svg"
    //           className="w-[35px] h-[35px]"
    //           alt="profile"
    //         />
    //       </button>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Header;
