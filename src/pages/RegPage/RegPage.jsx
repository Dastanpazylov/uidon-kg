import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderToReg from '../../components/Header/HeaderToReg';
import CustomButton from '../../components/CustomButton/CustomButton';

const RegPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  const buttonStyle =
    selectedCard !== null
      ? 'bg-[#9747FF] mt-[20px] w-[540px] h-[52px] text-white px-3  font-montserrat text-2xl tracking-wider font-light rounded-[20px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#7B31D6]'
      : 'bg-[#A0A0A0] mt-[20px] w-[540px] h-[52px] text-[#9DB2BF] font-montserrat px-3 py-3 text-2xl tracking-wider font-light rounded-[20px] transition-all duration-300 ease-in-out';

  return (
    <div>
      <HeaderToReg />
      <div className="w-[835px] h-[440px] relative top-[90px] left-[220px] py-[30px] px-[60px] bg-[#FFFFFF] shadow-[4px_4px_10px_0px_#00000040] rounded-[20px] flex flex-col items-center gap-[20px] ">
        <h1 className="text-3xl text-[#232323] font-semibold mb-4">
          Зарегистрироваться как заказчик или работник
        </h1>
        <div className="flex justify-center items-center h-screen">
          <div className="flex gap-[125px]">
            <div
              className={`w-[260px] h-[160px] rounded-[20px] border-0 border-[#6E4B84] border-solid border-x border-y flex flex-col items-center cursor-pointer ${
                selectedCard === 0 ? 'bg-[#F2DFFF] hover:bg-[#F2DFFF]' : 'hover:bg-[#d3c5dd80]'
              } transition-all duration-300 ease-in-out`}
              onClick={() => handleCardClick(0)}>
              <div className="flex gap-[180px] py-[20px] items-center">
                <img src="/src/assets/img/RegPage/reg1.svg" alt="reg" className="w-[35px]" />
                <input
                  type="radio"
                  className="relative bottom-[10px] right-1 w-5 h-5 text-purple-500"
                  checked={selectedCard === 0}
                  onChange={() => {}}
                />
              </div>
              <h2 className="text-[18px] leading-[17px] mr-[30px] mt-[20px] w-[200px] font-extralight">
                Я заказчик, нанимаю для проектов
              </h2>
            </div>
            <div
              className={`w-[260px] h-[160px] rounded-[20px] border-0 border-[#6E4B84] border-solid border-x border-y flex flex-col items-center cursor-pointer ${
                selectedCard === 1 ? 'bg-[#F2DFFF] hover:bg-[#F2DFFF]' : 'hover:bg-[#d3c5dd80]'
              } transition-all duration-300 ease-in-out`}
              onClick={() => handleCardClick(1)}>
              <div className="flex gap-[180px] py-[20px] items-center">
                <img src="/src/assets/img/RegPage/reg2.svg" alt="reg" className="w-[30px] ml-2" />
                <input
                  type="radio"
                  className="relative bottom-[10px] right-1 w-5 h-5 text-purple-500"
                  checked={selectedCard === 1}
                  onChange={() => {}}
                />
              </div>
              <h2 className="text-[18px] font-extralight font-montserrat leading-[17px] mr-[30px] mt-[20px] w-[180px]">
                Я фрилансер, ищу заказы
              </h2>
            </div>
          </div>
        </div>
        {selectedCard !== null ? (
          <Link to={selectedCard===1 ?`/sign-up/executor`:`/sign-up/customer`}>
            <button className={buttonStyle}>Создать аккаунт</button>
          </Link>
        ) : (
          <button className={buttonStyle} disabled>
            Создать аккаунт
          </button>
        )}

        <p className="mt-3 text-base font-montserrat font-light">
          Уже есть аккаунт?
          <Link to="/sign-up" className="text-[#667EFF]">
            {'  '}
            <CustomButton title="Войти" customStyles="text-[#667EFF] font-montserrat font-light transition-all duration-300 ease-in-out " />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegPage;
