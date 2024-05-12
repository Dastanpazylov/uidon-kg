import React from 'react';
import { useNavigate } from 'react-router';
import Footer from '../../components/Footer/Footer';
import ClientOrderCard from '../../components/ClientOrderCard/ClientOrderCard';
import HeaderToClient from '../../components/Header/HeaderToClient';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Link } from 'react-router-dom';

const ClientProfilePage = () => {
  const navigate = useNavigate();
  const footerLinks = [
    {
      title: 'Главная',
      links: ['Вакансии', 'Профиль', 'Поиск'],
    },
    {
      title: 'Ресурсы',
      links: ['О нас', 'Помощь ', 'Настройки'],
    },
  ];

  return (
    <>
      <HeaderToClient />
      <div className="bg-[#F4F4F9] h-[1905px] flex flex-col  gap-[28px] ">
        <div className="mt-[2.063rem]">

            <button onClick={() => navigate(-1)} className=" ml-[5.5rem]">
              <img src="/src/assets/img/ClientProfilePage/arrowback.svg" alt="arrow" />
            </button>

        </div>
        <div className="border-0 border-solid flex items-center ml-[90px] mt-[25px] gap-[35px] justify-between border-y border-x bg-transparent border-[#6E4B84] rounded-[10px] p-[8px] w-[86%] h-[150px]">
          <div className="flex items-center gap-[35px] justify-around">
            <div className="ml-1">
              <img
                src="/src/assets/img/ClientProfilePage/profileImg.svg"
                alt="profileImg"
                className="w-[120px] z-[0] h-[115px]"
              />
              <img
                src="/src/assets/img/ClientProfilePage/edit.svg"
                alt="edit"
                className="absolute z-[1] top-[13rem] w-[40px] left-[7rem]"
              />
            </div>
            <div className="flex flex-col items-start gap-3">
              <h1 className="font-semibold text-[25px] font-montserrat leading-[33px] mb-[3px] ml-[7px] tracking-wide text-[#232323] ">
                Адилет Н. у
              </h1>
              <div className="flex items-center justify-around gap-[14px]">
                <img
                  src="/src/assets/img/ClientProfilePage/location.svg"
                  alt="location"
                  className="w-[35px] h-[35px]"
                />
                <p className="font-light text-[22px] leading-[29px] font-montserrat tracking-tight text-[#232323] ">
                  Кыргызстан
                </p>
                <p className="font-light text-[22px] leading-[29px] font-montserrat tracking-tight text-[#232323] ">
                  г. Бишкек
                </p>
                <p className="font-light text-[20px] ml-5 leading-[29px] font-montserrat  tracking-extratight text-[#232323] ">
                  0555666777
                </p>
              </div>
            </div>
          </div>
          <CustomButton
            title="Настроить профиль"
            customStyles="bg-[#9747FF] relative right-3 bottom-[38px] rounded-[10px] text-white w-[263px] h-[43px] text-2xl tracking-wide "
          />
        </div>
        <div className="flex justify-between mb-[-22px] ml-[5.5rem]">
          <h1 className="text-[#232323] text-[26px] font-normal  font-montserrat  tracking-wide ">
            Опубликованные вакансии
          </h1>
          <Link to="/client/post">
            <CustomButton
              title="Создать вакансию"
              customStyles="font-montserrat text-[#e8e8e8] mr-[5rem] bg-[#9747FF] rounded-[0.5rem] tracking-tighest h-[2.8rem] w-[17rem] text-[1.5rem] text-center px-[1rem] "
            />
          </Link>
        </div>
        <div className="flex flex-col gap-[18px] relative top-5">
          <ClientOrderCard img='/src/assets/img/ClientProfilePage/trash.svg' customStyles='border-0 border-solid border-y border-x bg-transparent bottom-[10px]  border-[#6E4B84] rounded-[5px] p-[8px] w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[88px]' />
        </div>
      </div>
      <Footer
        footerLinks={footerLinks}
        customStyles="relative flex justify-evenly items-center h-[266px] gap-[100px] bg-[#FFFFFF] border border-[#6E4B84]"
        customArrStyles="h-0 relative bottom-[70px] right-[10px] gap-2"
      />
    </>
  );
};

export default ClientProfilePage;
