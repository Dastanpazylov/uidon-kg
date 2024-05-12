import React, { useState } from 'react';
import HeaderToClient from '../../components/Header/HeaderToClient';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import ClientOrderCard from '../../components/ClientOrderCard/ClientOrderCard.jsx';

const ListOfJob = () => {
  const [selectedOption, setSelectedOption] = useState('active'); // Initial value

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const navigate = useNavigate();
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const replyArr = [
    {
      text: 'Дизайн пользовательского интерфейса',
    },
    {
      text: 'Отзывчивый дизайнер',
    },
    {
      text: 'Figma',
    },
    {
      text: 'Веб-дизайн',
    },
  ];
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
      <div className="pb-[50px] bg-[#F4F4F9] flex flex-col gap-[28px] ">
        <div className="relative mb-[36px] top-[30px]">
          <button onClick={() => navigate(-1)} className="absolute left-[88px]">
            <img src="/src/assets/img/ClientProfilePage/arrowback.svg" alt="arrow" />
          </button>
          <select
            onClick={() => setIsSelectOpen(!isSelectOpen)}
            onBlur={() => setIsSelectOpen(false)}
            className="text-[#232323] relative bottom-1 mb-2 text-2xl font-light ml-[182px] tracking-wide  bg-transparent  rounded-md pl-3 pr-8  appearance-none focus:outline-none"
            value={selectedOption}
            onChange={handleOptionChange}>
            <option value="active">Актуальные вакансии</option>
            <option value="inactive">Неактуальные вакансии</option>
            <option value="noResponse">Вакансии без откликов</option>
          </select>
          <div
            className={`absolute  transform-translate-y-1/2 pointer-events-none left-[29.375rem] bottom-[.625rem]`}>
            <svg
              className={`w-4 h-4 ${
                isSelectOpen === true ? 'rotate-180' : ''
              } transition-transform duration-300`}
              fill="none"
              stroke="#6E4B84"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        
        <div className="flex flex-col gap-[1.375rem]">
          {selectedOption === 'active' && (
            <>
              <ClientOrderCard img="/src/assets/img/ClientProfilePage/trash.svg" customStyles="border-0 border-solid border-y border-x bg-transparent top-[24px]  border-[#6E4B84] rounded-[5px] p-[8px] mb-4 w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[18px]" activeStatus={true} responseCount={14} />
              <ClientOrderCard img="/src/assets/img/ClientProfilePage/trash.svg" customStyles="border-0 border-solid border-y border-x bg-transparent top-[24px]  border-[#6E4B84] rounded-[5px] p-[8px] mb-4 w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[18px]" activeStatus={true} responseCount={14} />
              <ClientOrderCard img="/src/assets/img/ClientProfilePage/trash.svg" customStyles="border-0 border-solid border-y border-x bg-transparent top-[24px]  border-[#6E4B84] rounded-[5px] p-[8px] mb-4 w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[18px]" activeStatus={true} responseCount={14} />
            </>
          )}
          {selectedOption === 'inactive' && (
            <>
              <ClientOrderCard img="/src/assets/img/ClientProfilePage/trash.svg" customStyles="border-0 border-solid border-y border-x bg-transparent top-[24px]  border-[#6E4B84] rounded-[5px] p-[8px] mb-4 w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[18px]" activeStatus={false} responseCount={14} />
              <ClientOrderCard img="/src/assets/img/ClientProfilePage/trash.svg" customStyles="border-0 border-solid border-y border-x bg-transparent top-[24px]  border-[#6E4B84] rounded-[5px] p-[8px] mb-4 w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[18px]" activeStatus={false} responseCount={14} />
              <ClientOrderCard img="/src/assets/img/ClientProfilePage/trash.svg" customStyles="border-0 border-solid border-y border-x bg-transparent top-[24px]  border-[#6E4B84] rounded-[5px] p-[8px] mb-4 w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[18px]" activeStatus={false} responseCount={14} />
            </>
          )}
          {selectedOption === 'noResponse' && (
            <>
              <ClientOrderCard img="/src/assets/img/ClientProfilePage/trash.svg" customStyles="border-0 border-solid border-y border-x bg-transparent top-[24px]  border-[#6E4B84] rounded-[5px] p-[8px] mb-4 w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[18px]" activeStatus={true} responseCount={0} />
              <ClientOrderCard img="/src/assets/img/ClientProfilePage/trash.svg" customStyles="border-0 border-solid border-y border-x bg-transparent top-[24px]  border-[#6E4B84] rounded-[5px] p-[8px] mb-4 w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[18px]" activeStatus={true} responseCount={0} />
              <ClientOrderCard img="/src/assets/img/ClientProfilePage/trash.svg" customStyles="border-0 border-solid border-y border-x bg-transparent top-[24px]  border-[#6E4B84] rounded-[5px] p-[8px] mb-4 w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[18px]" activeStatus={true} responseCount={0} />
            </>
          )}
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

export default ListOfJob;
