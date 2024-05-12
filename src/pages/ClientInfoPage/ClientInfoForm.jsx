import React from 'react';
import HeaderToReg from '../../components/Header/HeaderToReg.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function ClientInfoForm() {
  const footerLinks = [
    {
      title: 'Главная',
      links: ['О нас', 'Поиск'],
    },
    {
      title: 'Регистрация',
      links: ['Работнику', 'Заказчику', 'Вход'],
    },
  ];
  return (
    <div>
      <HeaderToReg />
      <div className=" mt-[5rem] mx-auto w-[77.5rem] ">
        <p className="text-[1.875rem] font-[600] font-montserrat">Регистрация</p>
        <p className="mt-[3.75rem] text-[1.875rem] font-[600] font-montserrat">Задача</p>
        <div className="pr-[3.125rem] mt-[2.313rem] flex justify-start items-center gap-[1.25rem] w-[47.625rem]">
          <span className="w-[18.25rem] text-[1.25rem] text-[#232323] font-normal font-montserrat">
            Название вакансии
          </span>
          <input
            className="text-[1.25rem] p-[.625rem] w-[25rem] h-[3.125rem] rounded-[.75rem] border-[.063rem] border-[#6E4B84] font-montserrat"
            type="text"
          />
        </div>

        <div className="pr-[3.125rem] mt-[2.313rem] flex justify-start items-center gap-[1.25rem] w-[47.625rem]">
          <span className="w-[18.25rem] text-[1.25rem] text-[#232323] font-normal font-montserrat">
            Зарплата
          </span>
          <input
            className="text-[1.25rem] p-[.625rem] w-[25rem] h-[3.125rem] rounded-[.75rem] border-[.063rem] border-[#6E4B84] font-montserrat"
            type="text"
          />
        </div>

        <div className="mt-[2.313rem] flex justify-start items-center gap-[1.25rem] w-[48.500rem]">
          <span className=" w-[18.25rem] text-[1.25rem] text-[#232323] font-normal leading-normal font-montserrat">
            Ключевые навыки которые вам требуются
          </span>

          <div>
            <input
              className="text-[1.25rem] p-[.625rem] w-[25rem] h-[3.125rem] rounded-[.75rem] border-[.063rem] border-[#6E4B84] font-montserrat"
              type="text"
            />
            <div className="flex items-center gap-[1.25rem] mt-[.625rem]">
              <span className="text-[#6E4B84] text-[1.25rem] font-montserrat">Примеры:</span>
              <div className="bg-[#E3E3E3] p-[.625rem] rounded-[.625rem] text-[0.75rem] font-montserrat">
                Mobile App Design
              </div>
              <div className="bg-[#E3E3E3] p-[.625rem] rounded-[.625rem] text-[0.75rem] font-montserrat">
                Mockup
              </div>
              <div className="bg-[#E3E3E3] p-[.625rem] rounded-[.625rem] text-[0.75rem] font-montserrat">
                User Flow
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start gap-[1.25rem] mt-[1.5rem]">
          <span className="pt-[1.625rem] w-[18.25rem] text-[1.25rem] text-[#232323] font-normal font-montserrat">
            О вакансии
          </span>
          <textarea className="w-[40.188rem] h-[21.438rem] text-[1.25rem] p-[.625rem] rounded-[.75rem] border-[.063rem] border-[#6E4B84] font-montserrat"></textarea>
        </div>

        <button className="mt-[2.5rem] w-[32.063rem] h-[3.313rem] rounded-[1.25rem] bg-[#9747FF] text-[1.5rem] text-[white] font-montserrat">
          Сохранить и опубликовать
        </button>
      </div>
      <Footer
        footerLinks={footerLinks}
        customStyles="mt-[7.625rem] relative flex justify-evenly items-center h-[266px] gap-[100px] bg-[#FFFFFF] border border-[#6E4B84]"
        customArrStyles="h-0 relative bottom-[70px] right-[10px] gap-2"
      />
    </div>
  );
}

export default ClientInfoForm;
