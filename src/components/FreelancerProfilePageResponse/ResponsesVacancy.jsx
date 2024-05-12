import React, { useState } from 'react';
const ResponsesVacancy = () => {
  const [isImageActive, setImageActive] = useState(false);
  const handleImageClick = () => {
    setImageActive(!isImageActive);
  };
  return (
    <div className="mb-[5.063rem] w-[60.75rem]">
      <div className="mt-[1.25rem] pl-[1.25rem] pb-[1.25rem] pt-[1.25rem] pr-[51px] border border-[#9DB2BF]-400 rounded-2xl font-[Montserrat]">
        <div>
          <div className="flex justify-between mt-[1.25rem]">
            <h1 className="text-[1.25rem]">
              Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma
            </h1>
            <img
              src="src/assets/image/Bookmark.svg"
              alt="Bookmark"
              onClick={handleImageClick}
              style={{
                cursor: 'pointer',
                filter: isImageActive ? 'none' : 'grayscale(100%)',
                fill: isImageActive ? '#9747FF' : '#9DB2BF',
              }}
            />
          </div>
          <p className="text-[18px] mt-[15px]">Оклад: 20 000</p>
          <p className=" mt-[1.125rem] text-[0.875rem] text-[#A1A1A1]">
            Опубликовано: 3 часа назад
          </p>
          <p className="mt-[0.938rem] text-[1rem]">
            Мы ищем талантливого и опытного дизайнера UI/UX, который присоединится к нашей команде и
            поможет создать потрясающий и удобный дизайн для нашего веб-сайта. Идеальный кандидат
            должен иметь четкое представление о принципах дизайна, ориентированного на пользователя,
            и уметь использовать Figma в качестве основного инструмента проектирования
          </p>
        </div>
        <p className="text-[1rem] bg-[#619F56] mt-[1.25rem] rounded-2xl p-[0.625rem] text-white w-[19.563rem]">
          Откликов на вакансию: 14 человек
        </p>
        <div className="container mx-auto mt-[20px] flex flex-wrap gap-4">
          <p className=" h-39 pt-[0.75rem] pb-[0.75rem] pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Дизайн пользовательского интерфейса
          </p>
          <p className=" h-39 pt-[0.75rem] pb-[0.75rem] pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Отзывчивый дизайнер
          </p>
          <p className=" h-39 pt-[0.75rem] pb-[0.75rem] pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Figma
          </p>
          <p className="  h-39 pt-[0.75rem] pb-[0.75rem] pl-[0.938rem] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Веб-дизайн
          </p>
        </div>
      </div>
    </div>
  );
};
export default ResponsesVacancy;
