import React from 'react';
import Footer from '../../components/Footer/Footer';
import HeaderToReg from '../../components/Header/HeaderToReg';

const FreelancerDetails = () => {
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
      <HeaderToReg />
      <div className="w-full mb-[5rem] h-full font-montserrat mx-auto flex flex-col items-center ">
        <div className="w-[1030px]">
          <h2 className="text-main-colors-main-black font-montserrat text-[30px] font-semibold pt-[70px]">
            Предпросмотр профиля
          </h2>
          <div className="mt-[65px] flex flex-col w-[1030px] h-[54rem] px-[20px] py-[27px] pr-[746px] pb-[639px] items-center rounded-md border border-[#6E4B84]">
            <div className="flex items-center">
              <div className="flex flex-col w-[264px] h-[127px]">
                <div className=" ">
                  <div className="absolute mt-[5px] ml-[25px] w-[100px] h-[100px]  rounded-full flex justify-center items-center p-[10px] bg-white">
                    <img src="/src/assets/image/Ellipse 16.svg" alt={''} />
                  </div>
                  <div className="bg-cover text-[100px] flex justify-center items-center border-none w-[100px] h-[100px] rounded-full"></div>
                </div>
                <a
                  href={''}
                  className="text-link-blue font-montserrat text-[14px] font-normal leading-normal list-none pt-[10px]">
                  Изменить фотографию
                </a>
              </div>
              <div className="flex flex-col items-start gap-[10px] w-[139px] h-[86px] absolute ml-[200px] mt-[-30px]">
                <p className="text-black font-montserrat text-[20px] font-medium leading-normal">
                  Иван Иванов
                </p>
                <p className="font-montserrat text-[16px] font-medium leading-normal  text-gray-400">
                  UX/UI Дизайнер
                </p>
                <p className="text-black font-montserrat text-[18px] font-medium leading-normal">
                  Бишкек
                </p>
              </div>
            </div>
            <div className="flex h-[200px] w-[1029px] mx-auto -ml-[21px] mt-[22px] border-t-[1px] border-b-[1px] border-additional-colors-additional-purple p-[0px] pb-[23px]">
              <div className="flex flex-col pt-[22px] pl-[20px] gap-[18px] h-[199px] w-[242px] border-r-[1px] ">
                <h2>Портфолио</h2>
                <div className="flex gap-[14px] ">
                  <img src="/src/assets/image/Behance.svg" alt={''} />
                  <a className="text-black font-montserrat text-base font-normal leading-normal">
                    asmolgus
                  </a>
                </div>
              </div>
              <div className="w-[338px] flex flex-col pt-[22px] pl-[20px] gap-[18px] h-[199px] border-r-[1px] border-additional-purple">
                <h2>Контакты</h2>
                <div className="flex gap-[14px]">
                  <img src="/src/assets/image/Gmail.svg" alt={''} />
                  <a
                    href={''}
                    className="text-text-black font-montserrat text-[18px] font-normal leading-normal no-underline">
                    @asmolgus
                  </a>
                </div>
                <div className="flex gap-[14px]">
                  <img src="/src/assets/img/WelcomePage/tg.svg" lt={''} />
                  <a
                    href={''}
                    className="text-text-black font-montserrat text-[18px] font-normal leading-normal no-underline">
                    +996 555 123 123
                  </a>
                </div>
                <div className="flex gap-[14px]">
                  <img src="/src/assets/img/WelcomePage/tg.svg" lt={''} />
                  <a
                    href={''}
                    className="text-text-black font-montserrat text-[18px] font-normal leading-normal no-underline">
                    asmolgus@example.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] pt-[22px] pl-[20px]">
                <h2>Языки</h2>
                <p className="text-text-black font-montserrat text-[18px] font-normal leading-normal no-underline">
                  Русский: Родной{' '}
                </p>
                <p className="text-text-black font-montserrat text-[18px] font-normal leading-normal no-underline">
                  Английский: Свободный
                </p>
                <p className="text-text-black font-montserrat text-[18px] font-normal leading-normal no-underline">
                  Кыргызский: Разговорный
                </p>
              </div>
            </div>
            <div className="pt-[18px] flex flex-col gap-[35px] mx-auto">
              <h2 className="text-text-colors-text-black font-montserrat text-[20px] font-semibold">
                О себе
              </h2>
              <p className="mx-auto w-[880px] h-[100px] text-main-colors-main-black font-montserrat text-[18px] font-normal">
                Привет! Я - опытный UX/UI дизайнер с фокусом на создании незабываемых <br />
                пользовательских интерфейсов. Я занимаюсь разработкой веб-сайтов, мобильных <br />{' '}
                приложений и других цифровых продуктов, которые сочетают в себе функциональность,
                <br />
                привлекательность и удобство использования.
              </p>
            </div>
            <div className="w-[1029px] h-[200px] mx-auto  mt-[43px] px-[20px] -ml-[20px] border-t ">
              <h2 className="mt-[20px] font-montserrat text-[20px] font-semibold leading-normal">
                Навыки и опыт
              </h2>
              <div className="w-[800px] h-[82px] mt-[35px] flex align-items-flex-start align-content-flex-start gap-[20px] flex-wrap-wrap">
                <div className="w-[200px] h-[31px] flex p-7-15 justify-center items-center border-[px] gap-[10px] rounded-[20px] bg-[#E3E3E3]">
                  <p className="text-black font-montserrat text-[14px] font-normal">
                    Ux/Ui иследования
                  </p>
                </div>
                <div className="w-[200px] h-[31px] flex p-7-15 justify-center items-center gap-[10px] rounded-[20px] bg-[#E3E3E3]">
                  <p className="text-black font-montserrat text-[14px] font-normal">
                    Ux/Ui иследования
                  </p>
                </div>
                <div className="w-[200px] h-[31px] flex p-7-15 justify-center items-center gap-[10px] rounded-[20px] bg-[#E3E3E3]">
                  <p className="text-black font-montserrat text-[14px] font-normal">
                    Ux/Ui иследования
                  </p>
                </div>
                <div className="w-[200px] h-[31px] flex p-7-15 justify-center items-center gap-[10px] rounded-[20px] bg-[#E3E3E3]">
                  <p className="text-black font-montserrat text-[14px] font-normal">
                    Ux/Ui иследования
                  </p>
                </div>
              </div>
              <div className="w-[185px] h-[31px] flex mt-[-20px] justify-center items-center  rounded-[20px] bg-[#E3E3E3]">
                <p className="text-black font-montserrat text-[14px] font-normal">
                  Ux/Ui иследования
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start gap-3'>
            <button className="flex w-[420px] px-[24px] py-[12px] justify-center items-center gap-[10px] rounded-[20px] border-none bg-[#9747FF] text-white font-montserrat text-[24px] font-normal leading-normal mt-[100px]">
              Сохранить и опубликовать
            </button>
            <button className="w-[220px] px-[24px] py-[12px] border-[#6F00B6] rounded-[20px] border bg-white text-[#6F00B6] font-montserrat text-[1.5rem] font-normal leading-normal mt-[100px]">
              Назад
            </button>
          </div>
        </div>
      </div>
      <Footer
        customStyles="relative flex justify-around items-center h-[263px] bg-[#FFFFFF] border border-[#6E4B84]"
        footerLinks={footerLinks}
        customArrStyles="h-0 relative bottom-[70px] right-3 gap-2 "
      />
    </>
  );
};

export default FreelancerDetails;
