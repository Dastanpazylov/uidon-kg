import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import CustomButton from '../../components/CustomButton/CustomButton';
import HeaderToClient from '../../components/Header/HeaderToClient';

const ClientPostPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate()
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const replyArr = [
    {
      text: 'Графический дизайнер',
    },
    {
      text: 'Figma',
    },
    {
      text: 'UX/UI',
    },
    {
      text: 'Web designe',
    },
    {
      text: 'Дизайн пользовательского интерфейса',
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
      <div className="bg-[#F4F4F9] h-[1955px] font-montserrat flex flex-col outline-none gap-[1.75rem] ">
        <div className="mt-[2.063rem]">
          
            <button onClick={()=>navigate(-1)} className="absolute left-[5.5rem]">
              <img src="/src/assets/img/ClientProfilePage/arrowback.svg" alt="arrow" />
            </button>

        </div>
        <div className="w-[44.688rem] h-[23rem] ml-[5.5rem] flex flex-col gap-4 mt-5 ">
          <h1 className="font-semibold text-[2rem] leading-[2.743rem] ">
            Начнем c вашего названия
          </h1>
          <h2 className="font-semibold text-[1.34rem] leading-[2.743rem]">
            Напишите заголовок своей вакансии
          </h2>
          <input
            type="text"
            className="border-y border-x border-[#9DB2BF] rounded-[0.75rem] w-[39.7rem] py-2 px-2"
          />
          <div className="w-[62%] ">
            <h1 className="text-[#A1A1A1] font-normal text-[1rem] leading-[1.3rem] mt-3">
              Примеры
            </h1>
            <ul className="text-[#A1A1A1] list-disc font-light text-[1rem] leading-5 ml-[1.72rem]">
              <li>Дизайнер UX/UI для воплощения макета и прототипа веб-сайта в жизнь</li>
              <li>Видеоредактор, необходимый для создания поясняющего видео на доске</li>
              <li>
                UX-дизайнер с опытом электронной коммерции для поддержки разработки приложений
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[79.7%] h-[37.438rem] ml-[5.5rem] mt-[-2.25rem] shadow-[4px_4px_10px_0px_#00000010] rounded-[0.938rem] ">
          <textarea
            placeholder="Опишите свою вакансию"
            className="border-0 border-solid font-montserrat border-y border-x h-full border-[#9DB2BF] rounded-[0.938rem] py-[13px] px-[18px] w-full resize-none placeholder:text-[#A1A1A1]
          placeholder:text-[1.166rem] placeholder:tracking-tight placeholder:font-light cursor-pointer "
          />
        </div>
        <div className="flex flex-col ml-[5.5rem] mt-12 gap-6">
          <h1 className="font-medium text-[1.66rem] tetx-[#232323] ">
            Укажите основные навыки для вашей вакансии
          </h1>
          <h2 className="font-normal text-[1.34rem] text-[#232323]">Описание навыков</h2>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              className="py-[0.65rem] px-3 w-[39.7rem] mt-[-0.4rem] rounded-[0.938rem] border-0 border-solid border-y border-x border-[#9DB2BF] "
            />
            <p className="text-[#A1A1A1]">Опишите миниум 3 навыка.</p>
          </div>
          <div className="flex items-center gap-[1rem] mb-[3.8rem] mr-1 w-full ">
            {replyArr.map((el, index) => (
              <div
                key={index}
                className="bg-[#E3E3E3] rounded-[20px] items-center tracking-tight mt-2 text-center py-[0.4rem] px-5 ">
                <p className="text-[1rem] text-center font-montserrat font-normal">{el.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="ml-[5.5rem] ">
          <h1 className="font-medium text-[1.66rem] mt-[-0.9rem] text-[#232323]">
            Укажите сроки вашей вакансии
          </h1>
          <div className="flex flex-col gap-[1.2rem] mt-4">
            <label className="flex items-center text-[1.1rem] gap-[0.94rem]">
              <input
                type="radio"
                value="lessThan1"
                checked={selectedOption === 'lessThan1'}
                onChange={handleOptionChange}
                className="ml-[0.30rem] text-[1rem] "
              />
              Меньше месяца
            </label>

            <label className="flex items-center text-[1.1rem] gap-[0.94rem]">
              <input
                type="radio"
                value="1To3"
                checked={selectedOption === '1To3'}
                onChange={handleOptionChange}
                className="ml-[0.30rem] text-[1rem] py-4 "
              />
              От 1-го месяца до 3-х
            </label>

            <label className="flex items-center text-[1.1rem] gap-[0.94rem]">
              <input
                type="radio"
                value="3To6"
                checked={selectedOption === '3To6'}
                onChange={handleOptionChange}
                className="ml-[0.30rem] text-[1rem] "
              />
              От 3-х месяцев до 6
            </label>

            <label className="flex items-center text-[1.1rem] gap-[0.94rem]">
              <input
                type="radio"
                value="moreThan6"
                checked={selectedOption === 'moreThan6'}
                onChange={handleOptionChange}
                className="ml-[0.30rem] text-[1rem] "
              />
              Больше полугода
            </label>
          </div>
        </div>
        <div className="relative ">
          <CustomButton
            title="Опубликовать"
            customStyles="font-montserrat absolute left-[59.4rem] top-10 text-[#e8e8e8] bg-[#9747FF] rounded-[0.5rem] tracking-tighest h-[2.8rem] w-[15rem] text-[1.5rem] text-center px-[1.95rem] "
          />
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

export default ClientPostPage;
