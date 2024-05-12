import React from 'react';
import { Link } from 'react-router-dom';
import eyes from '../../assets/icons/eye.svg';
import heart from '../../assets/icons/heart.svg';
import profileImage from '../../assets/icons/profileImage.svg';
import BestClient from '../../components/ClientComponent/BestClient';
import Footer from '../../components/Footer';
import HeaderToClient from '../../components/Header/HeaderToClient';
const MainClient = () => {
  return (
    <>
      <div className="bg-[#E3E3E3]">
      <HeaderToClient />
        <div className="flex gap-[30px] font-monserrat mt-[3rem] ml-[2.8rem]  mx-[auto] ">
          <div className=" pl-[4rem] flex flex-col gap-[30px]">
            <div className="naivigate flex flex-col gap-[20px] w-[972px] bg-[#FFFFFF] h-[120px] rounded-[10px]  pl-[25px] ">
              <h1 className="font-[600] text-[30px] leaning-[36.57px] mt-[10px] ">
                Просмотренные страницы работников
              </h1>
              <nav>
                <ul className="flex gap-[31px] w-[691px] h-[24px] text-[18px] font-[500] leaning-[24.38px] ">
                  <li className="cursor-pointer">Лучшие совпадения</li>
                  <li className="cursor-pointer text-[#A1A1A1]">Самые последние</li>
                  <Link to="/saved">
                    <li className="cursor-pointer text-[#A1A1A1]">Сохраненные задания</li>
                  </Link>
                </ul>
              </nav>
            </div>
            <BestClient />
          </div>
          <div>
            <div className="flex flex-col gap-[20px]">
              <div className="w-[248px] h-[218px] rounded-[10px] p-[40px] flex flex-col bg-[#FFFFFF] gap-[10px]  text-center ">
                <div className="flex justify-center ">
                  <img className=" rounded-[50%] w-[70px] h-[70px]" src={profileImage} alt="" />
                </div>
                <div className="name-section">
                  <h1 className="montserrat font-[600] leaning-[24.38px] text-[20px] ">
                    Сыймык Н. у
                  </h1>
                </div>
                <div className="profile-section">
                  <h3 className=" font-[400] text-[16px] leaning-[19.5px] text-[#A1A1A1] ">
                    Заказчик
                  </h3>
                </div>
              </div>
              <div className="w-[248px] bg-[#FFFFFF] rounded-[10px]  pt-[15px] pr-[28px] pb-[20px] pl-[28px] flex flex-col gap-[10px]  ">
                <div className="statistic-section">
                  <h1 className=" font-[600] text-[20px] leaning-[24.38px]">Статистика</h1>
                </div>
                <div className=" font-[400] text-[12px] leaning-[14.63px] flex gap-[20px] justify-between ">
                  <img src={eyes} alt="" />
                  <h3>Кол-во вакансии</h3>
                  <span>5</span>
                </div>
                <div className="mb-[20px] font-[400] text-[12px] leaning-[14.63px] flex justify-between w-[192px] ">
                  <img src={heart} alt="" />
                  <h3>Всего откликов</h3>
                  <span>9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainClient;
