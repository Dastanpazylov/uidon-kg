import React from 'react';

const FilterBlock = ({ title, worker }) => {
  return (
    <div className="flex flex-col w-[22.7%] font-montserrat ml-[4.5rem] h-[820px] mt-[5.89rem] border-r-[1px] border-[#6E4B84]">
      <h2 className="text-[#232323] text-[1.66rem] font-normal">Фильтрация</h2>
      <div className="h-[1px] mt-[.5rem] mr-[1rem] w-[181px] bg-gray-400" />
      <div className="mt-[-.3rem] w-[210px] h-[123px] flex flex-col gap-6">
        <h3 className="mt-[15px] text-[#232323] text-[1.1rem] font-normal">Категория</h3>
        <select className="flex w-[84%] px-1 h-[1.7rem] justify-between items-center rounded-[30px] border border-main-black bg-card-white">
          <option className="gap-5" value="1">
            Категории
          </option>
          <option className="gap-5" value="2">
            Программирование
          </option>
          <option className="gap-5" value="3">
            Все категории
          </option>
          <option className="gap-5" value="4">
            3D Графика
          </option>
          <option className="gap-5" value="5">
            Дизайн и арт
          </option>
          <option className="gap-5" value="6">
            Маркетинг
          </option>
          <option className="gap-5" value="6">
            Тексты
          </option>
          <option className="gap-5" value="6">
            Фотография
          </option>
          <option className="gap-5" value="6">
            Другое
          </option>
        </select>
      </div>

      {worker && (
        <div className="w-[180px] h-[123px] mt-[-10px] mb-6 border-t border-[#9DB2BF] pt-[13px] flex flex-col gap-[.7rem]">
          <div className="flex w-[103%] h-[2rem] items-center rounded-[10px] border border-solid border-[#6E4B84] bg-white ">
            <img
              className="ml-[1.2rem] w-[1.3rem]"
              src="/src/assets/img/WelcomePage/SearchIcon.svg"
              alt="searchIcon"
            />
            <input
              className="text-[.83rem] w-full focus:outline-none placeholder:text-[#9DB2BF] font-[400] ml-3"
              placeholder="ux/ui"
            />
          </div>
          <div className="w-[70%] h-[4px] flex gap-[.2rem] mt-4 items-center">
            <p className="text-[#232323] text-[.7rem] font-normal  px-[.2rem] ] rounded-[20px] border border-[#E3E3E3] bg-[#E3E3E3]">
              Ui/Ux
            </p>
            <p className="text-[#232323] text-[.7rem] font-normal  px-[13px]  gap-[10px] rounded-[20px] border border-[#E3E3E3] bg-[#E3E3E3]">
              Веб-дизайн
            </p>
            <p className="text-[#232323] text-[.7rem] font-normal  px-[13px] gap-[10px] rounded-[20px] border border-[#E3E3E3] bg-[#E3E3E3]">
              Figma
            </p>
          </div>
        </div>
      )}

      <div className="w-[180px] h-[123px] mt-[-7px] border-t border-[#9DB2BF] pt-[13px] flex flex-col gap-[.7rem]">
        <h3 className="text-[1.1rem] ">Тип оплаты</h3>
        <div className="w-[70%] h-[24px] flex items-center gap-[1.6rem]">
          <input type="checkbox" className="w-[20%] h-[24px] bg-white" />
          <p className="text-[.8rem] w-full">Почасовая</p>
        </div>

        <div className="w-[70%] h-[24px] flex items-center gap-[1.6rem]">
          <input type="checkbox" className="w-[20%] h-[24px] bg-white" />
          <p className="text-[.8rem] w-full">Фикс.плата</p>
        </div>
      </div>
      <div className="w-[180px] h-[123px] mt-[1rem] border-t border-[#9DB2BF] pt-[10px] flex flex-col gap-[.6rem]">
        <h3 className="text-[1.1rem] ">{title}</h3>
        <div className="w-full h-[24px] flex items-center gap-[1.2rem]">
          <input type="checkbox" className="w-[10%] h-[24px] bg-white" />
          <p className="text-[.8rem]  ">Меньше месяца</p>
        </div>

        <div className="w-full h-[24px] flex items-center gap-[1.2rem]">
          <input type="checkbox" className="w-[10%] h-[24px] bg-white" />
          <p className="text-[.77rem]  ">От 1-го до 3-х месяцев</p>
        </div>

        <div className="w-full h-[24px] flex items-center gap-[1.2rem]">
          <input type="checkbox" className="w-[10%] h-[24px] bg-white" />
          <p className="text-[.77rem]  ">От 3-х до 6-ти месяцев</p>
        </div>

        <div className="w-full h-[24px] flex items-center gap-[1.2rem]">
          <input type="checkbox" className="w-[10%] h-[24px] bg-white" />
          <p className="text-[.8rem]  ">Больше полугода</p>
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;
