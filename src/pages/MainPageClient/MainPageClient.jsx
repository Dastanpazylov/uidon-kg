import Footer from '../../components/Footer/Footer';
import HeaderToClient from '../../components/Header/HeaderToClient';

const MainPageClient = () => {
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
      <div className=" container mx-auto flex  font-[Montserrat] justify-center mt-[1.875rem] mb-[7.188rem]">
        <div>
          <div className="w-[60.75rem] pl-[1.563rem] pt-[1.25rem] pb-[0.6 25rem] border border-purple-300 rounded-2xl">
            <div>
              <h1 className="text-[1.75rem] font-semibold ">Просмотреные страницы</h1>
            </div>
            <div className="flex pt-[2rem]">
              <p className=" text-[1.25rem] mb-[0.5rem] pr-[2.125rem]">Лучшие совпадения</p>
              <p className=" text-[1.25rem] text-[#A1A1A1] pr-[2.125rem]">Самые последние</p>
              <p className=" text-[1.25rem] text-[#A1A1A1]">Сохраненые задания</p>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Найти"
              className="block w-full px-4 py-2 border mt-[1rem] border-purple-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 15l5.5 5.5M17 7a5 5 0 10-10 0 5 5 0 0010 0z"></path>
              </svg>
            </button>
          </div>
          <div className="w-[60.75rem] mt-[1.25rem] p-[1.25rem]  border border-purple-300 rounded-2xl">
            <div className="flex">
              <img src="/src/assets/image/Ellipse 16.svg" alt="" />
              <div className="ml-[0.813rem]">
                <p className="text-[1rem]">Гульчапчап</p>
                <p className="text-[1rem]">UX/UI Designer</p>
                <p className="text-[1rem] text-[#A1A1A1]">Кыргызстан</p>
              </div>
              <div className="text-[1rem] flex flex-col items-center justify-center ml-[1.875rem]">
                <p className="text-[1rem] ">700 сом/час</p>
              </div>
            </div>
            <p className=" w-[52.438rem] text-[1.125rem] mt-[1.25rem] font-Montserrat">
              Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам воплотить
              ваши творческие идеи в жизнь. Специализируюсь на построении конструкций и эффектах
              дизайнерских решений.
            </p>
            <div className="mt-[1.25rem] w-[60.75rem] flex space-x-5 ">
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem] bg-[#E3E3E3] rounded-3xl">
                Дизайн пользовательского интерфейса
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem]  bg-[#E3E3E3] rounded-3xl">
                Figma
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem]  bg-[#E3E3E3] rounded-3xl">
                Ux/UI
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem] bg-[#E3E3E3] rounded-3xl">
                Web designe
              </p>
            </div>
          </div>
          <div className="w-[60.75rem] mt-[1.25rem] p-[1.25rem]  border border-purple-300 rounded-2xl">
            <div className="flex">
              <img src="/src/assets/image/Ellipse 16.svg" alt="" />
              <div className="ml-[0.813rem]">
                <p className="text-[1rem]">Гульчапчап</p>
                <p className="text-[1rem]">UX/UI Designer</p>
                <p className="text-[1rem] text-[#A1A1A1]">Кыргызстан</p>
              </div>
              <div className="text-[1rem] flex flex-col items-center justify-center ml-[1.875rem]">
                <p className="text-[1rem] ">700 сом/час</p>
              </div>
            </div>
            <p className=" w-[52.438rem] text-[1.125rem] mt-[1.25rem] font-Montserrat">
              Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам воплотить
              ваши творческие идеи в жизнь. Специализируюсь на построении конструкций и эффектах
              дизайнерских решений.
            </p>
            <div className="mt-[1.25rem] w-[60.75rem] flex space-x-5 ">
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem] bg-[#E3E3E3] rounded-3xl">
                Дизайн пользовательского интерфейса
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem]  bg-[#E3E3E3] rounded-3xl">
                Figma
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem]  bg-[#E3E3E3] rounded-3xl">
                Ux/UI
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem] bg-[#E3E3E3] rounded-3xl">
                Web designe
              </p>
            </div>
          </div>
          <div className="w-[60.75rem] mt-[1.25rem] p-[1.25rem]  border border-purple-300 rounded-2xl">
            <div className="flex">
              <img src="/src/assets/image/Ellipse 16.svg" alt="" />
              <div className="ml-[0.813rem]">
                <p className="text-[1rem]">Гульчапчап</p>
                <p className="text-[1rem]">UX/UI Designer</p>
                <p className="text-[1rem] text-[#A1A1A1]">Кыргызстан</p>
              </div>
              <div className="text-[1rem] flex flex-col items-center justify-center ml-[1.875rem]">
                <p className="text-[1rem] ">700 сом/час</p>
              </div>
            </div>
            <p className=" w-[52.438rem] text-[1.125rem] mt-[1.25rem] font-Montserrat">
              Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам воплотить
              ваши творческие идеи в жизнь. Специализируюсь на построении конструкций и эффектах
              дизайнерских решений.
            </p>
            <div className="mt-[1.25rem] w-[60.75rem] flex space-x-5 ">
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem] bg-[#E3E3E3] rounded-3xl">
                Дизайн пользовательского интерфейса
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem]  bg-[#E3E3E3] rounded-3xl">
                Figma
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem]  bg-[#E3E3E3] rounded-3xl">
                Ux/UI
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem] bg-[#E3E3E3] rounded-3xl">
                Web designe
              </p>
            </div>
          </div>
          <div className="w-[60.75rem] mt-[1.25rem] p-[1.25rem]  border border-purple-300 rounded-2xl">
            <div className="flex">
              <img src="/src/assets/image/Ellipse 16.svg" alt="" />
              <div className="ml-[0.813rem]">
                <p className="text-[1rem]">Гульчапчап</p>
                <p className="text-[1rem]">UX/UI Designer</p>
                <p className="text-[1rem] text-[#A1A1A1]">Кыргызстан</p>
              </div>
              <div className="text-[1rem] flex flex-col items-center justify-center ml-[1.875rem]">
                <p className="text-[1rem] ">700 сом/час</p>
              </div>
            </div>
            <p className=" w-[52.438rem] text-[1.125rem] mt-[1.25rem] font-Montserrat">
              Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам воплотить
              ваши творческие идеи в жизнь. Специализируюсь на построении конструкций и эффектах
              дизайнерских решений.
            </p>
            <div className="mt-[1.25rem] w-[60.75rem] flex space-x-5 ">
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem] bg-[#E3E3E3] rounded-3xl">
                Дизайн пользовательского интерфейса
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem]  bg-[#E3E3E3] rounded-3xl">
                Figma
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem]  bg-[#E3E3E3] rounded-3xl">
                Ux/UI
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem] bg-[#E3E3E3] rounded-3xl">
                Web designe
              </p>
            </div>
          </div>
          <div className="w-[60.75rem] mt-[1.25rem] p-[1.25rem]  border border-purple-300 rounded-2xl">
            <div className="flex">
              <img src="/src/assets/image/Ellipse 16.svg" alt="" />
              <div className="ml-[0.813rem]">
                <p className="text-[1rem]">Гульчапчап</p>
                <p className="text-[1rem]">UX/UI Designer</p>
                <p className="text-[1rem] text-[#A1A1A1]">Кыргызстан</p>
              </div>
              <div className="text-[1rem] flex flex-col items-center justify-center ml-[1.875rem]">
                <p className="text-[1rem] ">700 сом/час</p>
              </div>
            </div>
            <p className=" w-[52.438rem] text-[1.125rem] mt-[1.25rem] font-Montserrat">
              Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам воплотить
              ваши творческие идеи в жизнь. Специализируюсь на построении конструкций и эффектах
              дизайнерских решений.
            </p>
            <div className="mt-[1.25rem] w-[60.75rem] flex space-x-5 ">
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem] bg-[#E3E3E3] rounded-3xl">
                Дизайн пользовательского интерфейса
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem]  bg-[#E3E3E3] rounded-3xl">
                Figma
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem]  bg-[#E3E3E3] rounded-3xl">
                Ux/UI
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem] bg-[#E3E3E3] rounded-3xl">
                Web designe
              </p>
            </div>
          </div>
          <div className="w-[60.75rem] mt-[1.25rem] p-[1.25rem]  border border-purple-300 rounded-2xl">
            <div className="flex">
              <img src="/src/assets/image/Ellipse 16.svg" alt="" />
              <div className="ml-[0.813rem]">
                <p className="text-[1rem]">Гульчапчап</p>
                <p className="text-[1rem]">UX/UI Designer</p>
                <p className="text-[1rem] text-[#A1A1A1]">Кыргызстан</p>
              </div>
              <div className="text-[1rem] flex flex-col items-center justify-center ml-[1.875rem]">
                <p className="text-[1rem] ">700 сом/час</p>
              </div>
            </div>
            <p className=" w-[52.438rem] text-[1.125rem] mt-[1.25rem] font-Montserrat">
              Здравствуйте! Я - профессиональный дизайнер-фрилансер, готовый помочь вам воплотить
              ваши творческие идеи в жизнь. Специализируюсь на построении конструкций и эффектах
              дизайнерских решений.
            </p>
            <div className="mt-[1.25rem] w-[60.75rem] flex space-x-5 ">
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem] bg-[#E3E3E3] rounded-3xl">
                Дизайн пользовательского интерфейса
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem]  bg-[#E3E3E3] rounded-3xl">
                Figma
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem]  bg-[#E3E3E3] rounded-3xl">
                Ux/UI
              </p>
              <p className="pb-[0.625rem] pt-[0.625rem] pl-[0.813rem] pr-[0.813rem] bg-[#E3E3E3] rounded-3xl">
                Web designe
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[1.25rem]">
          <div className="w-[15.5rem] p-[2.5rem] border border-purple-300 rounded-2xl flex flex-col items-center">
            <img src="/src/assets/image/User.svg" alt="Customer" />
            <h1 className=" text-[1.25rem] ">Сыймык Н.</h1>
            <p className=" text-[1rem] text-[#A1A1A1]">Заказчик</p>
          </div>
          <div className="w-[15.5rem] p-[1.25rem] border border-purple-300 rounded-2xl  mt-[1.25rem]">
            <h1 className=" text-[1.25rem] font-semibold">Статистика</h1>
            <div className=" flex w-[12rem] mt-[0.625rem] ">
              <img src="/src/assets/image/Frame 342.svg" alt="eye" />
              <p className="pl-[0.625rem]">Кол-во вакансии</p> <p className="ml-auto">5</p>
            </div>
            <div className=" flex w-[12rem] mt-[0.625rem]">
              <img src="/src/assets/image/Vector.svg" alt="like" />
              <p className="pl-[0.625rem]">Всего откликов</p>
              <p className="pl-[0.625rem]">9</p>
            </div>
          </div>
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
export default MainPageClient;
