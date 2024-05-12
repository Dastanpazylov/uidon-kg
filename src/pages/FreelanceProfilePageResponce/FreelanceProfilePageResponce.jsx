import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import {
  AcceptedForWork,
  FavoritesVacancies,
  ResponsesVacancy,
  StarRating,
} from '../../components/FreelancerProfilePageResponse';

const FreelanceProfilePageResponce = () => {
  const [userData, setUserData] = useState({
    rating: 3.8,
  });
  const [activeLink, setActiveLink] = useState('Отклики');
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
  const authworker = {
    favourite: 'Избранные',
    response: 'Отклики',
  };

  return (
    <>
      <Header auth={authworker} />
      <div className="container w-[78.375rem] mx-auto mt-[5.813rem] ">
        <div className="  mt-[1.875rem] flex justify-between">
          <div className=" container w-[18.625rem] font-[Montserrat] mx-auto mr-[2.313rem] pt-[1.25rem] pb-[1.25rem]  pr-[1.25rem] border border-purple-300 rounded-2xl">
            <div className="  h-[4.375rem]  flex  ">
              <div className="w-[4.688rem] h-[4.688rem] ml-[1.25rem]">
                <img src="/src/assets/image/Ellipse 27.jpg" alt="photouser" />
              </div>
              <div className="ml-[0.625rem]">
                <p className="text-[#A1A1A1] text-[0.75rem]">UX/UI дизайнер</p>
                <h1 className="text-[1.25rem]">Баланчаев Тукунчу</h1>
              </div>
            </div>
            <div className=" mt-[1.25rem] w-[18.563rem] pl-[1.25rem]  border-t border-purple-200">
              <button className="w-[16.125rem] h-[2.125rem] mt-[1.25rem] text-[1rem] bg-[#9747FF] rounded-2xl font-normal text-white">
                Настроить профиль
              </button>
              <p className="mt-[1.875rem] text-[#6E4B84] text-[1rem] font-semibold">Статистика</p>
              <div>
                <div className=" w-[16.125rem] h-[1.5rem] flex justify-between">
                  <p className="pt-[0.625rem] text-[0.875rem]">Оценка</p>
                  <p>
                    {' '}
                    <StarRating rating={userData.rating} />
                  </p>
                </div>
                <div className="w-[16.125rem] h-[1.5rem]  flex justify-between">
                  <p className=" text-[0.875rem] pt-[0.625rem]">Отзывы</p>
                  <p className=" text-[0.875rem] pt-[0.625rem]">30</p>
                </div>
              </div>
              <p className="text-[#6E4B84] text-[1rem] mt-[1.25rem] mb-[1.25rem] font-semibold">
                Контакты
              </p>
              <div>
                <div className="flex ">
                  <img src="/src/assets/image/Telegram.svg" alt="telegram" />
                  <a className="pl-[0.625rem] text-[0.625rem]" href="">
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
            <div className=" container w-[57.625rem] font-[Montserrat] mx-auto pt-[1.25rem] pb-[1.25rem] pl-[1.25rem] pr-[1.25rem] border border-purple-300 rounded-2xl">
              <div className="flex ">
                <p className="text-[1.5rem]">UX/UI designer</p>
                <p className="text-[1.5rem] ml-[16.375rem] ">300 cом/час</p>
              </div>
              <div className="w-[55.125rem] pt-[1.563] text-[1rem] pb-[1.875rem] ">
                <p className="mt-[1.563rem]">
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
                <p className="text-[1.5rem]">Навыки</p>
              </div>
              <div className="container mx-auto font-[Montserrat] mt-5 flex flex-wrap  gap-4 ">
                <p className=" h-37 pt-[0.625rem]  pl-[0.938rem] pb-[0.75rem] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[14px] text-center mb-[1.25rem] mr-[1.25rem]">
                  Веб-дизайн
                </p>
                <p className=" h-37 pt-[0.625rem]  pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[14px] text-center mb-[1.25rem] mr-[1.25rem]">
                  Figma
                </p>
                <p className=" h-37 pt-[0.625rem]  pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[14px] text-center mb-[1.25rem] mr-[1.25rem]">
                  Отзывчивый дизайнер
                </p>
                <p className=" h-37 pt-[0.625rem]  pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[14px] text-center mb-[1.25rem] mr-[1.25rem]">
                  Дизайн пользовательского интерфейса
                </p>
                <p className=" h-39 pt-[0.625rem] pb-[0.75rem] pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
                  Веб-дизайн
                </p>
                <p className=" h-37 pt-[0.625rem] pb-[0.75rem] pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
                  Figma
                </p>
                <p className=" h-37 pt-[0.625rem] pb-[0.75rem] pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
                  Отзывчивый дизайнер
                </p>
                <p className=" h-37 pt-[0.625rem] pb-[0.75rem] pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
                  Дизайн пользовательского интерфейса
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[52rem] font-[Montserrat] mt-[1.25rem]">
          <a
            href="#"
            className={`mr-[2.5rem] text-[1.25rem] p-[0.625rem] ${
              activeLink === 'В работе' ? 'bg-[#6F00B6] rounded-3xl text-white' : 'text-black'
            }`}
            onClick={() => setActiveLink('В работе')}>
            В работе
          </a>
          <a
            href="#"
            className={`mr-[2.5rem] text-[1.25rem] p-[0.625rem] ${
              activeLink === 'Отклики' ? 'bg-[#6F00B6] rounded-3xl text-white' : 'text-black'
            }`}
            onClick={() => setActiveLink('Отклики')}>
            Отклики
          </a>
          <a
            href="#"
            className={`mr-[2.5rem] text-[1.25rem] p-[0.625rem] ${
              activeLink === 'Избранное' ? 'bg-[#6F00B6] rounded-3xl text-white' : 'text-black'
            }`}
            onClick={() => setActiveLink('Избранное')}>
            Избранное
          </a>
          <a
            href="#"
            className={`mr-[2.5rem] text-[1.25rem] p-[0.625rem] ${
              activeLink === 'Завершённые' ? 'bg-[#6F00B6] rounded-3xl text-white' : 'text-black'
            }`}
            onClick={() => setActiveLink('Завершённые')}>
            Завершённые
          </a>
          <a
            href="#"
            className={`mr-[2.5rem] text-[1.25rem] p-[0.625rem] ${
              activeLink === 'Отзывы' ? 'bg-[#6F00B6] rounded-3xl text-white' : 'text-black'
            }`}
            onClick={() => setActiveLink('Отзывы')}>
            Отзывы
          </a>
        </div>
        {activeLink === 'Избранное' && <FavoritesVacancies />}
        {activeLink === 'Отклики' && <ResponsesVacancy />}
        {activeLink === 'В работе' && <AcceptedForWork />}
      </div>
      <Footer
        footerLinks={footerLinks}
        customStyles=" relative flex justify-evenly items-center h-[266px] gap-[100px] mt-[8.9em] bg-[#FFFFFF] border border-[#6E4B84]"
        customArrStyles="h-0 relative bottom-[70px] right-[10px] gap-2"
      />
    </>
  );
};

export default FreelanceProfilePageResponce;
