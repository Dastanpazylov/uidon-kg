import React from 'react';

const SearchBlock = ({title}) => {
  return (
    <div className="w-[100%]">
      <div className="flex ml-4 mt-[6rem] w-[100%] h-[2.79rem] items-center rounded-[10px] border border-solid border-[#6E4B84] bg-white ">
        <img
          className="ml-[1.2rem] w-[1.3rem]"
          src="/src/assets/img/WelcomePage/SearchIcon.svg"
          alt="searchIcon"
        />
        <input
          className="text-[1.11rem] focus:outline-none placeholder:text-[#9DB2BF] font-[400] ml-3"
          placeholder="ux/ui дизайн"></input>
      </div>
      <div className="flex justify-between items-center ml-4 w-full h-[30px] mt-[1rem]">
        <h2 className="text-[#232323] font-Montserrat text-[1.34rem] font-normal">
          {title}
        </h2>
        <h2 className="text-[#232323] text-[1.3rem] ml-[17rem] font-light ">Сортировка:</h2>
        <select className="ml-[10px] px-[.38rem] flex w-[20.4%] h-[30px] justify-between items-center rounded-[20px] border border-[#111] bg-[#FFF] text-[#232323] font-normal text-[1rem]">
          <option value="1">Актуальность</option>
          <option value="2">Зеленый</option>
          <option value="3">Желтый</option>
          <option value="4">Красный</option>
          <option value="5">Оранжевый</option>
          <option value="6">Черный</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBlock;
