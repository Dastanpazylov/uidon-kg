import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';




const ProfileSettings = () => {

  const navigate = useNavigate();
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
      <div>
          <div className='flex'>
            <div className='mt-[2em] ml-[8.2em]'>
              <h5 className='font-[Montserrat] font-normal text-lg text-[#000000]'>Главная страница</h5>
              <button onClick={() => navigate(-1)}>
                <img src="src/assets/image/rightarrow.svg"className="mt-[-2.4em] pl-[11.2em]"alt="back" />
              </button>
            </div>
            <div className='mt-[2em] ml-[1em]'>
              <h5 className='font-[Montserrat] font-normal text-lg text-[#000000]'>Профиль</h5>
              <button onClick={() => navigate(-2)}>
                <img src="src/assets/image/rightarrow.svg"className="mt-[-2.4em] pl-[6.2em]"alt="back" />
              </button>
            </div>
            <div className='mt-[2em] ml-[1em]'>
              <h5 className='font-[Montserrat] font-normal text-lg text-[#000000]'>Настройки</h5>
            </div>
          </div>
          <div className="mt-[5.8em]">
            <h1 className="my-[-2.7em] leading-6 text-2xl font-semibold font-[Montserrat] pb-[0.75em] pl-[5.5em]">
               Настройки
            </h1>
          </div>
        

        <div className="w-[52.8em] h-[62.5em] border border-[#6E4B84] rounded-xl bg-white flex justify-between float-right mr-[9.1em] mt-[1.1em]">
          <div className="ml-[19em] mt-[0.375em]">
            <h1 className="font-[Roboto] text-2xl font-semibold text-[#232323]">
              Настройка профиля
            </h1>
            <div className="pt-[0.5em] ml-[-16.2em]">
              <hr className="w-[46.9em] h-[2px] bg-[#A1A1A1]"></hr>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center float-right mr-[-33.5em] mt-[4em]">
          <div className="mr-[-21.4em] pt-[1.7em]">
            <h1 className="pr-[23.6em]  font-[Montserrat] font-normal text-xl text-[#232323]">
              Полное имя
            </h1>
            <h1 className="pr-[13em] pt-[2.1em] font-[Montserrat] font-normal text-xl text-[#232323]">
              Электронная почта
            </h1>
            <h1 className="pr-[13em] pt-[2.1em] font-[Montserrat] font-normal text-xl text-[#232323]">
              Номер телефона
            </h1>
          </div>
          <form className="mr-[-21.3em]">
            <input
              type="text"
              className="mr-[4em] w-[495px] h-[42px] border-[2px] border-[#6E4B84] rounded-xl mt-[1.25em]  font-medium text-xl text-#A1A1A1] pl-[0.625em] font-[Montserrat]"
              placeholder="Asusnout"
              name="name"
            />
            <br />
            <input
              type="email"
              className="mr-[4em] w-[495px] h-[42px] border-[2px] border-[#6E4B84] rounded-xl mt-[1.25em]  font-medium text-xl text-#A1A1A1] pl-[0.625em] font-[Montserrat]"
              placeholder="K********0@mail.com"
              name="email"
            />
            <br />
            <input
              type="text"
              className="mr-[4em] w-[495px] h-[42px] border-[2px] border-[#6E4B84] rounded-xl mt-[1.25em]  font-medium text-xl text-#A1A1A1] pl-[0.625em] font-[Montserrat]"
              placeholder="0555****66"
              name="phoneNumber"
            />
            <br />
          </form>
        </div>
        <div className="float-right mr-[-49.8em] mt-[19em]">
          <button className="w-[13.5em] h-[2.75em] bg-[#6F00B6] rounded-md text-[#E8E8E8] text-base font-[Montserrat]">
            Сохранить изменения
          </button>
        </div>
        <div className="float-right mt-[25.1em] mr-[-32.2em]">
          <h1 className="font-[Roboto] text-2xl font-semibold text-[#232323]">Настройка пароля</h1>
        </div>
        <div className="float-right mt-[27.9em] mr-[-49.5em]">
          <hr className="w-[46.9em] h-[2px] bg-[#A1A1A1]"></hr>
        </div>
        <div className="float-right mt-[30.2em] mr-[-14.6em]">
          <h1 className="font-[Montserrat] font-normal text-xl text-[#232323]">Поменять пароль</h1>
          <h1 className="font-[Montserrat] pt-[1.9em] font-normal text-xl text-[#232323]">
            Повторить пароль
          </h1>
        </div>
        <form  className="float-right mt-[26.9em] mr-[-49.4em]">
          <input
            type="password"
            id="oldPassword"
            className="w-[495px] h-[42px] border-[2px] border-[#6E4B84] rounded-xl mt-[2.25em]  font-medium text-xl text-#A1A1A1] pl-[0.625em] font-[Montserrat]"
            placeholder="Asusnout"

          />
          <br />
          <input
            type="password"
            id="newPassword"
            className="w-[495px] h-[42px] border-[2px] border-[#6E4B84] rounded-xl mt-[1.25em]  font-medium text-xl text-#A1A1A1] pl-[0.625em] font-[Montserrat]"
            placeholder="Asusnout"
          />
          <br />
        </form>

        <div className="float-right mt-[39.8em] mr-[-49.5em]">
          <button  className="w-[13.8em] h-[2.75em] bg-[#6F00B6] rounded-md text-[#E8E8E8] text-base font-[Montserrat]">
            Сохранить изменения
          </button>
        </div>

        <div className="float-right mt-[44.9em] mr-[-49.5em]">
          <hr className="w-[46.9em] h-[2px] bg-[#A1A1A1]"></hr>
        </div>

        <div className="float-right mt-[46.9em] mr-[-18em]">
          <h1 className="font-[Montserrat] font-semibold text-2xl text-[#232323]">
            Удаление аккаунта
          </h1>
        </div>

        <div className="float-right mt-[47.1em] mr-[-49.3em]">
          <p className="font-[Montserrat] font-normal text-lg text-[#232323] pl-[-1em]">
          Вы не сможете больше пользоваться данным <br />
аккаунтом.
          </p>
        </div>
        <div className="float-right mt-[54.5em] mr-[-49.3em]">
          <button className="w-[174px] h-[42px] bg-[#6F00B6] rounded-md text-[#E8E8E8] text-base font-[Montserrat]">
            Удалить аккаунт
          </button>
        </div>
      </div>
      <Footer
        footerLinks={footerLinks}
        customStyles=" relative flex justify-evenly items-center h-[266px] gap-[100px] mt-[86.9em] bg-[#FFFFFF] border border-[#6E4B84]"
        customArrStyles="h-0 relative bottom-[70px] right-[10px] gap-2"
      />
    </>
  );
};

export default ProfileSettings;
