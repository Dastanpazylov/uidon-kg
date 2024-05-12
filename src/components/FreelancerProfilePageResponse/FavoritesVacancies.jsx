import { useState } from 'react';
const FavoritesVacancies = () => {
  const [isImageGrayed, setImageGrayed] = useState(false);
  const handleImageClick = () => {
    setImageGrayed(!isImageGrayed);
  };
  return (
    <div className="pb-[5.063rem] w-[60.75rem] font-[Montserrat]">
      <div className="mt-[1.25rem] pl-[1.25rem] pb-[1.25rem] pt-[1.25rem] pr-[1.25rem] border border-[#9DB2BF]-400 rounded-2xl">
        <div>
          <div className="flex justify-between">
            <h1 className="text-[1.25rem]">
              Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma
            </h1>
            <img
              src="/src/assets/image/Bookmark.svg"
              alt="Bookmark"
              style={{ filter: isImageGrayed ? 'grayscale(100%)' : 'none' }}
              onClick={handleImageClick}
            />
          </div>
          <p className="text-[1.125rem] mt-[0.938rem]">Оклад: 20 000</p>
          <p className=" mt-[0.375rem] text-[0.875rem] text-[#A1A1A1]">
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
        <div className="container mx-auto mt-[1.25rem] flex flex-wrap gap-4">
          <p className=" h-[2.438rem] pt-[0.7rem] pb-[12px] pl-[15px] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Дизайн пользовательского интерфейса
          </p>
          <p className=" h-[2.438rem] pt-[0.7rem] pb-[12px] pl-[15px] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Отзывчивый дизайнер
          </p>
          <p className=" h-[2.438rem] pt-[0.7rem] pb-[12px] pl-[15px] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Figma
          </p>
          <p className=" h-[2.438rem] pt-[0.7rem] pb-[12px] pl-[15px] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Веб-дизайн
          </p>
        </div>
      </div>
      <div className="mt-[1.25rem] pl-[1.25rem] pb-[1.25rem] pt-[1.25rem] pr-[1.25rem] border border-[#9DB2BF]-400 rounded-2xl">
        <div>
          <div className="flex justify-between">
            <h1 className="text-[1.25rem]">
              Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma
            </h1>
            <img
              src="/src/assets/image/Bookmark.svg"
              alt="Bookmark"
              style={{ filter: isImageGrayed ? 'grayscale(100%)' : 'none' }}
              onClick={handleImageClick}
            />
          </div>
          <p className="text-[1.125rem] mt-[0.938rem]">Оклад: 20 000</p>
          <p className=" mt-[0.375rem] text-[0.875rem] text-[#A1A1A1]">
            Опубликовано: 3 часа назад
          </p>
          <p className="mt-[0.938rem] text-[1rem]">
            Мы ищем талантливого и опытного дизайнера UI/UX, который присоединится к нашей команде и
            поможет создать потрясающий и удобный дизайн для нашего веб-сайта.Идеальный кандидат
            должен иметь четкое представление о принципах дизайна, ориентированного на пользователя,
            и уметь использовать Figma в качестве основного инструмента проектирования
          </p>
        </div>
        <p className="text-[1rem] bg-[#619F56] mt-[1.25rem] rounded-2xl p-[0.625rem] text-white w-[19.563rem]">
          Откликов на вакансию: 14 человек
        </p>
        <div className="container mx-auto mt-[1.25rem] flex flex-wrap gap-4">
          <p className=" h-[2.438rem] pt-[0.7rem] pb-[12px] pl-[15px] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Дизайн пользовательского интерфейса
          </p>
          <p className=" h-[2.438rem] pt-[0.7rem] pb-[12px] pl-[15px] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Отзывчивый дизайнер
          </p>
          <p className=" h-[2.438rem] pt-[0.7rem] pb-[12px] pl-[15px] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Figma
          </p>
          <p className=" h-[2.438rem] pt-[0.7rem] pb-[12px] pl-[15px] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Веб-дизайн
          </p>
        </div>
      </div>
      <div className="mt-[1.25rem] pl-[1.25rem] pb-[1.25rem] pt-[1.25rem] pr-[1.25rem] border border-[#9DB2BF]-400 rounded-2xl">
        <div>
          <div className="flex justify-between">
            <h1 className="text-[1.25rem]">
              Требуется опытный Ux/Ui дизайнер для разработки веб сайтов в Figma
            </h1>
            <img
              src="/src/assets/image/Bookmark.svg"
              alt="Bookmark"
              style={{ filter: isImageGrayed ? 'grayscale(100%)' : 'none' }}
              onClick={handleImageClick}
            />
          </div>
          <p className="text-[1.125rem] mt-[0.938rem]">Оклад: 20 000</p>
          <p className=" mt-[0.375rem] text-[0.875rem] text-[#A1A1A1]">
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
        <div className="container mx-auto mt-[1.25rem] flex flex-wrap gap-4">
          <p className=" h-[2.438rem] pt-[0.7rem] pb-[12px] pl-[15px] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Дизайн пользовательского интерфейса
          </p>
          <p className=" h-[2.438rem] pt-[0.7rem] pb-[12px] pl-[15px] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Отзывчивый дизайнер
          </p>
          <p className=" h-[2.438rem] pt-[0.7rem] pb-[12px] pl-[15px] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Figma
          </p>
          <p className=" h-[2.438rem] pt-[0.7rem] pb-[12px] pl-[15px] pr-[0.938rem] bg-[#E3E3E3] rounded-3xl text-[0.875rem] text-center mb-[1.25rem] mr-[1.25rem]">
            Веб-дизайн
          </p>
        </div>
      </div>
    </div>
  );
};
export default FavoritesVacancies;
