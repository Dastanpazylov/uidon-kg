import React, { useState } from 'react';
import HeaderToReg from '../../components/Header/HeaderToReg';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router';


const ClientInfoPage = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [residence, setResidence] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const exampleSkills = ['Mobile App Design', 'Mockup', 'User Flow'];
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

  const navigate = useNavigate()
  return (
    <>
      <HeaderToReg />
      <div className="w-full flex justify-center">
        <div className="w-[90em]">
          <div className=" ml-[6.25em] pb-[12.5em]">
            <div className=" mt-[5em]">
              <p className="text-[1.875em] font-semibold font-[Montserrat]">Регистрация</p>
            </div>
            <div className="mt-[3.625em]">
              <p className="text-[1.5em] font-semibold font-[Montserrat]">Создание задачи</p>
            </div>
            <div className="flex mt-[1.0625em]  items-center ">
              <p className="text-[1.5em] w-[18.25em] font-[Montserrat]">ФИО</p>
              <input
                type="text"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="mt-1 pl-[1.5625em]  w-[25em] h-[3.125em] ml-[1.25em] border border-purple-500  rounded-2xl "
                style={{
                  border: '1px solid #purple-500',
                  outline: 'none',
                  color: 'purple',
                  fontFamily: 'Montserrat',
                }}
              />
            </div>
            <div className="flex mt-[1.0625em]  items-center ">
              <p className="text-[1.5em] w-[18.25em] font-[Montserrat]">Название задачи</p>
              <input
                type="text"
                value={jobTitle}
                onChange={(event) => setJobTitle(event.target.value)}
                className="mt-1  pl-[1.5625em] w-[25em] h-[3.125em] ml-[1.25em] border border-purple-500  rounded-2xl  "
                style={{
                  border: '1px solid #purple-500',
                  outline: 'none',
                  color: 'purple',
                  fontFamily: 'Montserrat',
                }}
              />
            </div>
            <div className="flex mt-[1.5em] items-center ">
              <p className="text-[1.5em] w-[18.25em] font-[Montserrat]">Зарплата </p>
              <input
                type="text"
                value={salary}
                onChange={(event) => setSalary(event.target.value)}
                className="mt-1  pl-[1.5625em] w-[25em] h-[3.125em] ml-[1.25em] border border-purple-500  rounded-2xl  "
                style={{
                  border: '1px solid #purple-500',
                  outline: 'none',
                  color: 'purple',
                  fontFamily: 'Montserrat',
                }}
              />
            </div>
            <div className="flex mt-[1.5em] items-center ">
              <p className="text-[1.5em] w-[18.25em] font-[Montserrat]">
                Ключевые навыки которые вам требуются
              </p>
              <div className="ml-[1.25em]">
                <div>
                  <input
                    type="text"
                    value={requiredSkills}
                    onChange={(event) => setRequiredSkills(event.target.value)}
                    className="mt-1 p-2 pl-[1.5625em] w-[25em] h-[3.125em]  border border-purple-500  rounded-2xl  "
                    style={{
                      border: '1px solid #purple-500',
                      outline: 'none',
                      color: 'purple',
                      fontFamily: 'Montserrat',
                    }}
                  />
                </div>
                <div className="flex w-[28.125em] mt-[0.625em]  ">
                  <p className="text-[1.5em] mt-[] text-[#6E4B84] font-[Montserrat]">Примеры: </p>
                  <div className=" w-[] ml-[1.25em]  flex ">
                    {exampleSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-[#E3E3E3] ml-[1.25em] rounded-xl p-[0.625em] text-[0.75em]  font-Montserrat mt-[5px]">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-[1.5em]   ">
              <p className="text-[1.5em] w-[18.25em] font-[Montserrat] mt-[1.2em] ">О вакансии</p>
              <div style={{ fontSize: '20px', color: 'purple', fontFamily: 'Montserrat' }}>
                <textarea
                  value={jobDescription}
                  onChange={(event) => setJobDescription(event.target.value)}
                  className="mt-1 p-2 pl-[1.5625em] w-[25.1875em] h-[15.4375em] ml-[1.25em] border border-purple-500 rounded-2xl"
                  style={{
                    border: '1px solid #purple-500',
                    textAlign: 'left',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>
            </div>
            <div className='flex justify-between items-center w-[80%] gap-8 '>
            <button onClick={()=>navigate('/client/workDetails')} className="w-auto h-[3.3125em] bg-[#9747FF] rounded-2xl mt-[2.5em]  pl-[1.5em] pr-[1.5em] ">
              <span className="text-white text-[1.5em] flex items-center font-[Montserrat] justify-center">
                Сохранить и опубликовать
              </span>
            </button>
            <button onClick={()=>navigate('/client/profile')} className="w-[40%] h-[3.3125em] bg-white border border-solid border-[#9747FF] rounded-2xl mt-[2.5em]  pl-[1.5em] pr-[1.5em] ">
              <span className="text-[#9747FF] text-[1.5em] flex items-center font-[Montserrat] justify-center">
                Пропустить
              </span>
            </button>
            </div>
          </div>
        </div>
      </div>
      <Footer
        footerLinks={footerLinks}
        customStyles=" relative flex justify-evenly items-center h-[266px] gap-[100px] bg-[#FFFFFF] border border-[#6E4B84]"
        customArrStyles="h-0 relative bottom-[70px] right-[10px] gap-2"
      />
      ;
    </>
  );
};
export default ClientInfoPage;
