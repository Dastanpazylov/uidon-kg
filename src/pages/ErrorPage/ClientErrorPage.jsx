import React from 'react';
import HeaderToClient from '../../components/Header/HeaderToClient';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router';

const ClientErrorPage = () => {
    const navigate = useNavigate()
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
      <div className="bg-[#F4F4F9] w-auto font-montserrat overflow-hidden h-[82vh]">
        <div className="flex flex-col items-center gap-[-1rem] mt-[6.2rem]">
          <h1 className="text-[8.5rem] font-roboto text-[#6E4B84] font-semibold ">404</h1>
          <h3 className="text-[1.6rem] font-normal mb-3 text-[#232323]">Упс!</h3>
          <p className="text-[1.336rem] mb-5 font-normal text-[#232323]">
            Нам очень жаль. Эта страница, которую вы ищете, не найдена.
          </p>

          <button onClick={()=>navigate('/')} className="bg-[#9747FF] w-[14%] mt-7 py-[.6rem] mr-2 rounded-[.7rem] text-[.98rem] text-white">
            Вернуться домой
          </button>
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

export default ClientErrorPage;
