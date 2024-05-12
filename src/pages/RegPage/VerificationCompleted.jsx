import React, { useEffect } from 'react';
import HeaderToReg from '../../components/Header/HeaderToReg';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const VerificationCompleted = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const selectedRole = useSelector((state) => state.roleSlice);
  console.log(selectedRole);

  const onHandleConfirm = () => {
    if (selectedRole.type === 'executor') {
      navigate('/freelancer');
    } else if (selectedRole.type === 'customer') {
      navigate('/client');
    } else {
      console.log('selectedRole: ', selectedRole);
    } 
  };
  console.log('selectedRole', selectedRole);
  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('id', JSON.stringify(id))
  }, []);
  return (
    <div className="bg-[#F4F4F9] h-[100vh] text-[#232323] font-montserrat">
      <HeaderToReg />
      
      <div>
        <div className="w-[60%] h-[22rem] py-[40px] px-[20px] rounded-[20px] relative top-[175px] left-[268px] bg-[#ffffff] shadow-[4px_4px_10px_0px_#00000040]">
          <div className="w-[90%] relative left-9 flex flex-col items-center gap-[38px]  ">
            <div className="w-[5rem]">
              <img src="/src/assets/img/RegPage/checked.svg" alt="Checked" />
            </div>
            <h1 className="text-[1.5rem] tracking-wide  font-normal ">
              Подтверждение завершено!
            </h1>
            <p className="text-xl tracking-wider relative bottom-4 font-light">
              Поздравляем! Вы были успешно зарегистрированны.
            </p>
            <button onClick={onHandleConfirm} ><span className='text-[#667EFF] text-[1.2rem] font-normal'>Перейти к следующему этапу регистрации</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCompleted;
