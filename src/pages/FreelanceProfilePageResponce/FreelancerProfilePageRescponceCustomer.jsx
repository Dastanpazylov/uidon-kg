import React, { useState } from 'react';
import { StarRating } from '../../components/FreelancerProfilePageResponse';
import { useNavigate } from 'react-router';
import HeaderToClient from '../../components/Header/HeaderToClient';
import Footer from '../../components/Footer/Footer';

const FreelanceProfilePageResponceCustomer = () => {
  const [userData, setUserData] = useState({ rating: 3.8 });
  const [buttonText, setButtonText] = useState('Нанять');
  const [buttonColor, setButtonColor] = useState('#9747FF');
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (buttonText === 'Нанять') {
      setButtonText('Работает');
      setButtonColor('#1EBB04');
    } else {
      setButtonText('Нанять');
      setButtonColor('#9747FF');
    }
  };
  const footerLinks = [
    {
      title: 'Главная',
      links: ['Заказы', 'Профиль', 'Поиск'],
    },
    {
      title: 'Ресурсы',
      links: ['О нас', 'Помощь ', 'Настройки'],
    },
  ];

  return (
    <>
      <HeaderToClient />
      <div className="container w-[90rem] mx-auto font-[Montserrat] mt-[2.813rem] ">
        <button onClick={() => navigate(-1)}>
          <img
            src="/src/assets/img/ClientProfilePage/arrowback.svg"
            alt="Layer"
            className="ml-[2rem]"
          />
        </button>
        <div className="  mt-[1.875rem] flex justify-between">
          <div className=" container w-[18.625rem] mx-auto mr-[2.313rem] pt-[1.25rem] pb-[1.25rem]  pr-[1.25rem] border border-purple-300 rounded-2xl">
            <div className="  h-[4.375rem]  flex  ">
              <div className="w-[4.688rem] h-[4.688rem] ml-[1.25rem]">
                <img src="/src/assets/image/Ellipse 27.jpg" alt="photouser" />
              </div>
              <div className="ml-[0.625rem]">
                <p className="text-[#A1A1A1] text-[0.75rem] font-[Montserrat]">UX/UI дизайнер</p>
                <h1 className="text-[1.1rem] font-[Montserrat] font-semibold">Баланчаев Тукунчу</h1>
              </div>
            </div>
            <div className=" mt-[1.25rem] w-[18.563rem] pl-[1.25rem]  border-t border-purple-200">
              <button
                className="w-[16.125rem] h-[2.125rem] mt-[1.25rem] text-[1rem] rounded-2xl font-normal text-white"
                style={{ backgroundColor: buttonColor }}
                onClick={handleButtonClick}>
                {buttonText}
              </button>
              <p className="mt-[1.875rem] text-[#6E4B84] text-[1rem] font-semibold">Статистика</p>
              <div>
                <div className=" w-[16.125rem] h-[1.5rem] flex justify-between">
                  <p className="pt-[0.625rem] font-[Montserrat] text-[0.875rem]">Оценка</p>
                  <p>
                    <StarRating rating={userData.rating} />
                  </p>
                </div>
                <div className=" w-[16.125rem] h-[1.5rem] flex justify-between">
                  <p className=" font-[Montserrat] text-[0.625rem] pt-[0.625rem]">Отзывы</p>
                  <p className=" font-[Montserrat]  text-[0.875] pt-[0.625rem]">30</p>
                </div>
              </div>
              <p className=" font-[Montserrat] text-[#6E4B84] text-[1rem] mt-[1.25rem] mb-[1.25rem] font-semibold">
                Контакты
              </p>
              <div>
                <div className="flex ">
                  <img src="/src/assets/image/Telegram.svg" alt="telegram" />
                  <a className="pl-[0.625rem] text-[1rem]" href="">
                    Telegram
                  </a>
                </div>
                <div className="flex  pt-[0.75rem]">
                  <img src="/src/assets/image/Group.svg" alt="" />
                  <a className="pl-[0.625rem] text-[1rem]" href="">
                    WhatsApp
                  </a>
                </div>
                <div className="flex pt-[0.75rem]">
                  <img src="/src/assets/image/Gmail.svg" alt="" />
                  <a className="pl-[0.625rem] text-[1rem]" href="">
                    Gmail
                  </a>
                </div>
                <p className="text-[#6E4B84] text-[1rem] mt-[1.25rem] mb-[1.25rem] font-semibold">
                  Портфолио
                </p>
                <div className="flex ">
                  <img src="/src/assets/image/Behance.svg" alt="" />
                  <a className="pl-[0.625rem] text-[1rem]" href="">
                    Behance
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" container w-[57.625rem] mx-auto pt-[1.25rem] pb-[1.25rem] pl-[1.25rem] pr-[1.25rem] border border-purple-300 rounded-2xl">
              <div className="flex ">
                <p className=" font-[Montserrat] text-[1.5rem]">UX/UI designer</p>
                <p className="font-[Montserrat] text-[1.5rem] ml-[16.375rem] ">300 cом/час</p>
              </div>
              <div className="w-[55.125rem] pt-[1.563rem] font-[Montserrat] text-[1rem] pb-[1.875rem] ">
                <p>
                  Привет! Я - опытный UX/UI дизайнер с фокусом на создании незабываемых
                  пользовательских интерфейсов. Я занимаюсь разработкой веб-сайтов, мобильных
                  приложений и других цифровых продуктов, которые сочетают в себе функциональность,
                  привлекательность и удобство использования. Как опытный дизайнер UX/UI, моя цель
                  не только в оформлении красивых интерфейсов, но и в безупречном опыте
                  пользователей. Я уделяю особое внимание исследованию пользовательского поведения и
                  заявляю, чтобы оформить под дизайн конкретной аудитории. Мой подход основан на
                  глубоком изучении пользователей, анализе конкурентной среды и учете последних
                  проявлений в сфере UX/UI.
                </p>
              </div>
            </div>
            <div className="container w-[57.625rem] mx-auto mt-[1.25rem] h-[14.063rem] pt-[1.25rem] pb-[1.875rem] pl-[1.25rem] pr-[1.25rem] border border-purple-300 rounded-2xl">
              <div>
                <p className="text-[24px] font-[Montserrat] ">Навыки</p>
              </div>
              <div className="container mx-auto  mt-5 flex flex-wrap  gap-4 ">
                <p className=" h-37 pt-[0.625rem]  pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] font-[Montserrat] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
                  Веб-дизайн
                </p>
                <p className="  h-37 pt-[0.625rem]  pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] font-[Montserrat] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
                  Figma
                </p>
                <p className="  h-37 pt-[0.625rem]  pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] font-[Montserrat] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
                  Отзывчивый дизайнер
                </p>
                <p className=" h-37 pt-[0.625rem]  pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] font-[Montserrat] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
                  Дизайн пользовательского интерфейса
                </p>
                <p className=" h-37 pt-[0.625rem]  pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] font-[Montserrat] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
                  Веб-дизайн
                </p>
                <p className=" h-37 pt-[0.625rem]  pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] font-[Montserrat] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
                  Figma
                </p>
                <p className=" h-37 pt-[0.625rem]  pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] font-[Montserrat] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
                  Отзывчивый дизайнер
                </p>
                <p className="  h-37 pt-[0.625rem]  pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] font-[Montserrat] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
                  Дизайн пользовательского интерфейса
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        footerLinks={footerLinks}
        customStyles=" relative flex justify-evenly items-center h-[266px] mt-14 gap-[100px] bg-[#FFFFFF] border border-[#6E4B84]"
        customArrStyles="h-0 relative bottom-[70px] right-[10px] gap-2"
      />
    </>
  );
};
export default FreelanceProfilePageResponceCustomer;
