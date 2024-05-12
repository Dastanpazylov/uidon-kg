import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDateBirth,
  setFullName,
  setGender,
  setLocation,
  setPhone,
  setProfession,
  setSalary,
  setSalaryMethod,
  setSkills,
} from '../../redux/slices/freelancerInfoSlice';
import { createSkill, deleteSkill } from '../../api';
import HeaderToReg from '../../components/Header/HeaderToReg';
import Footer from '../../components/Footer/Footer';

const FreelancerInfoForm = () => {
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const dispatch = useDispatch();
  const {
    skills,
    gender,
    fullName,
    phone,
    location,
    professionn,
    dateBirth,
    salaryMethod,
    portfolioLink,
    educationLevel,
    user,
    salary,
  } = useSelector((state) => state.freelancerInfoSLice);

  // localStorage.getItem((id), JSON.parse(id))

  const [newSkill, setNewSkill] = useState('');
  const [showingSkill, setShowingSkill] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [date, setDate] = useState({
    year: '',
    month: '',
    day: '',
  });
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear()

  const handleFullNameChange = (newFullName) => {
    dispatch(setFullName(newFullName));
  };

  const handlePhoneChange = (newPhone) => {
    dispatch(setPhone(newPhone));
  };

  const handleGenderChange = (newGender) => {
    dispatch(setGender(newGender));
  };

  const handleLocation = (newLocation) => {
    dispatch(setLocation(newLocation));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDate({ ...date, [name]: value });
  };

  const handleDateBirthSave = (e) => {
    e.preventDefault();
    const formattedDate = `${date.year}-${date.month}-${date.day}`;
    dispatch(setDateBirth(formattedDate));
  };

  const handleProfessionChange = (newProfession) => {
    dispatch(setProfession(newProfession)); 
  };

  const handleSalaryMethodChange = (newSalaryMethod) => {
    dispatch(setSalaryMethod(newSalaryMethod)); 
  };

  const handleSalaryChange = (newSalary) => {
    dispatch(setSalary(newSalary))
  }

  const handleSkillChange = (e) => {
    setNewSkill(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter' && newSkill.trim() !== '') {
      const createdSkill = await createSkill(newSkill);
      if (createdSkill) {
        dispatch(setSkills([...skills, createdSkill]));
        setNewSkill('');
        setShowingSkill(newSkill);
        setIsShow(false);
      }
    }
  };

  const footerLinks = [
    {
      title: 'Главная',
      links: ['О нас', 'Поиск'],
    },
    {
      title: 'Регистрация',
      links: ['Работнику', 'Заказчику', 'Вход'],
    },
  ];

  return (
    <>
      <HeaderToReg />
      <div className="font-montserrat ">
        <div className="mt-[5em] ml-[6.3em]">
          <h1 className="font-semibold text-3xl text-[#232323]">Регистрация</h1>
        </div>
        <div className="mt-[1em] ml-[6.3em]">
          <h1 className="font-semibold text-2xl text-[#232323]">Контактные данные</h1>
        </div>
        <div className="mt-[1em] ml-[6.3em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.1em]">ФИО</h5>
            <input
              type="text"
              className="w-[25em] h-[3em] border border-[#6E4B84] rounded-xl mt-[0.5em]  font-medium text-xl text-[#6E4B84] pl-[1em] ml-[13.6em] mb-[7em]"
              value={fullName}
              onChange={(e) => handleFullNameChange(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-[-7.4em] ml-[6.3em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.1em]">Номер телефона</h5>
            <input
              type="number"
              value={phone}
              onChange={(e) => {
                const newPhone = e.target.value.slice(0, 13);
                handlePhoneChange(newPhone);
              }}
              className="w-[25em] h-[3em] border border-[#6E4B84] rounded-xl mt-[0.5em]  font-medium text-xl text-[#6E4B84] pl-[1em] ml-[7.3em] mb-[7em]"
            />
          </div>
        </div>
        <div className="mt-[-7.4em] ml-[6.3em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.1em]">Пол</h5>
            <div className="ml-[17.5em] mt-[0.5em]">
              <form className="flex">
                <input
                  type="radio"
                  name="gender"
                  className="accent-[#232323] w-[1.25rem] h-[1.25em]"
                  id="male"
                  checked={gender === 'male'}
                  onChange={() => handleGenderChange('male')}
                />
                <div className="mt-[-3px] ml-[20px]">
                  <h1 className="font-normal text-lg text-[#232323]">Мужской</h1>
                </div>
              </form>
              <div className="flex pt-[1em]">
                <input
                  type="radio"
                  name="gender"
                  className="accent-[#232323] w-[1.25rem] h-[1.25em]"
                  id="female"
                  checked={gender === 'female'}
                  onChange={() => handleGenderChange('female')}
                />
                <div className="mt-[-3px] ml-[20px]">
                  <h1 className="font-normal text-lg text-[#232323]">Женский</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[0.75em] ml-[6.3em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.1em]">Место проживания</h5>
            <input
              type="text"
              className="w-[25em] h-[3em] border border-[#6E4B84] rounded-xl mt-[0.5em]  font-medium text-xl text-[#6E4B84] pl-[1em] ml-[5.8em] mb-[7em]"
              value={location}
              onChange={(e) => handleLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-[-7.6em] ml-[6.3em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.5em]">Дата рождения</h5>
            <div className="ml-[10em] mt-[1em]">
              <form onSubmit={handleDateBirthSave}>
                <input
                  type="number"
                  name="day"
                  placeholder="День"
                  className="border border-[#9DB2BF] w-[7em] h-[3.1em] rounded-l-xl pl-[1em] font-normal text-lg text-[#9DB2BF] bg-[#F4F4F9]"
                  value={date.day}
                  min={1}
                  max={31}
                  onChange={handleInputChange}
                />
                <select
                  name="month"
                  placeholder="Месяц"
                  className="border border-[#9DB2BF] w-[7em] h-[3.1em] pl-[1em] font-normal text-lg text-[#9DB2BF] bg-[#F4F4F9]"
                  value={date.month}
                  onChange={handleInputChange}>
                  {months.map((month, index) => (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  name="year"
                  placeholder="Год"
                  className="border border-[#9DB2BF] w-[7em] h-[3.1em] rounded-r-xl pl-[1em] font-normal text-lg text-[#9DB2BF] bg-[#F4F4F9]"
                  value={date.year}
                  onChange={handleInputChange}
                  min={1900}
                  max={currentYear}
                />
                <button type="submit" className="hidden" />
              </form>
            </div>
          </div>
        </div>

        <div className="mt-[5em] ml-[6.2em]">
          <h1 className="font-semibold text-2xl text-[#232323]">Специальность</h1>
        </div>
        <div className="mt-[2.4em] ml-[6.1em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.1em]">Ваша профессия</h5>
            <input
              type="text"
              className="w-[25em] h-[3em] border border-[#6E4B84] rounded-xl mt-[0.5em]  font-medium text-xl text-[#6E4B84] pl-[1em] ml-[7em] mb-[7em]"
              value={professionn}
              onChange={(e) => handleProfessionChange(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-[-7.4em] ml-[6.1em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.1em]">Тип оплаты</h5>
            <select
            value={salaryMethod}
            onChange={(e)=> handleSalaryMethodChange(e.target.value)}
              className="w-[25em] h-[3em] border border-[#6E4B84] rounded-xl mt-[0.5em] font-medium text-xl text-[#6E4B84] pl-[1em] ml-[10em] mb-[7em]">
              <option value="Почасовая">Почасовая</option>
              <option value="Фикс.плата">Фикс. плата</option>
            </select>
          </div>
        </div>
        <div className="mt-[-7.4em] ml-[6.1em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.1em]">Желаемая зарплата </h5>
            <input
              type="text"
              className="w-[25em] h-[3em] border border-[#6E4B84] rounded-xl mt-[0.5em]  font-medium text-xl text-[#6E4B84] pl-[1em] ml-[5.5em] mb-[7em]"
              value={salary}
              onChange={(e)=>handleSalaryChange(e.target.value)}
            />
          </div>
        </div>

        <div id="skills" className="mt-[-7.4em] ml-[6.1em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.1em]">Ключевые навыки</h5>
            <input
              type="text"
              className="w-[25em] h-[3em] border border-[#6E4B84] rounded-xl mt-[0.5em]  font-medium text-xl text-[#6E4B84] pl-[1em] ml-[6.4em] mb-[7em]"
              value={newSkill}
              onChange={handleSkillChange}
              onKeyPress={handleKeyPress}
            />
            {isShow ? (
              <div id="changing" className="mt-[5.5em] ml-[-31.3em]">
                <h5 className="font-normal text-xl text-[#9DB2BF]">Примеры: </h5>
                <div className="mt-[-1.9em] ml-[8em] flex gap-[1.25em]">
                  <div className="w-[135px] h-[35px] bg-[#CCCCCC] rounded-[10px]">
                    <h1 className="font-normal text-xs text-center pt-[0.75em]">
                      Mobile App Design
                    </h1>
                  </div>
                  <div className="w-[69px] h-[35px] bg-[#CCCCCC] rounded-[10px]">
                    <h1 className="font-normal text-xs text-center pt-[0.75em]">Mockup</h1>
                  </div>
                  <div className="w-[80px] h-[35px] bg-[#CCCCCC] rounded-[10px]">
                    <h1 className="font-normal text-xs text-center pt-[0.75em]">User Flow</h1>
                  </div>
                </div>
              </div>
            ) : (
              <div
                id="showing"
                className="mt-[5.5em] w-[40%] flex justify-between  ml-[-31.3em] flex-wrap gap-1 ">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    onClick={() => removeSkill(skill.id)}
                    className="w-[135px] h-[35px] hover:opacity-[0.7] after:bg-[#ccc3] bg-[#CCCCCC] rounded-[10px]">
                    <h1 className="font-normal uppercase text-xs text-center pt-[0.75em]">
                      {skill.name}
                    </h1>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mt-[-1.8em] ml-[6.1em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.1em]">
              Портфолио (в виде ссылки)
            </h5>
            <input
              type="text"
              className="w-[25em] h-[3em] border border-[#6E4B84] rounded-xl mt-[0.5em]  font-medium text-xl text-[#6E4B84] pl-[1em] ml-[1.5em] mb-[7em]"
              value={portfolioLink}
            />
            <div className="mt-[5.1em] ml-[-31em]">
              <h5 className="font-normal text-xl text-[#667EFF]">Добавить ссылку</h5>
            </div>
          </div>
        </div>
        <div className="mt-[-3.8em] ml-[6.1em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.1em]">Контакты (в виде ссылки)</h5>
            <input
              type="text"
              className="w-[25em] h-[3em] border border-[#6E4B84] rounded-xl mt-[0.5em]  font-medium text-xl text-[#6E4B84] pl-[1em] ml-[2.5em] mb-[7em]"
            />
            <div className="mt-[5.1em] ml-[-31em]">
              <h5 className="font-normal text-xl text-[#667EFF]">Добавить контакт</h5>
            </div>
          </div>
        </div>
        <div className="mt-[-3.8em] ml-[6.1em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.1em]">О себе</h5>
            <textarea
              type="text"
              className="w-[643px] h-[343px] border border-[#6E4B84] rounded-xl mt-[0.5em]  font-medium text-xl text-[#6E4B84] p-[1em] ml-[12.3em] mb-[7em]"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="mt-[-6em] ml-[6.2em]">
          <h1 className="font-semibold text-2xl text-[#232323]">Образование</h1>
        </div>

        <div className="mt-[2.4em] ml-[6.1em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.1em]">Уровень образования</h5>
            <form>
              <select
                name="образования"
                placeholder="образования"
                className="ml-[4.8em] mt-[0.5em] border border-[#6E4B84] w-[400px] h-[50px] rounded-xl bg-[#F4F4F9] font-normal text-lg pl-[1em]">
                <option value="с">Среднее</option>
                <option value="в">Высшее</option>
              </select>
            </form>
          </div>
        </div>

        <div className="mt-[5em] ml-[6.2em]">
          <h1 className="font-semibold text-2xl text-[#232323]">Языки</h1>
        </div>

        <div className="mt-[1.3em] ml-[6.1em]">
          <div className="flex">
            <h5 className="font-normal text-xl text-[#232323] mt-[1.1em]">Языки</h5>
            <form>
              <select
                name="образования"
                placeholder="образования"
                className="ml-[14.1em] mt-[0.5em] border border-[#6E4B84] w-[400px] h-[50px] rounded-xl bg-[#F4F4F9] font-normal text-lg pl-[1em]">
                <option value="к">Кыргызский</option>
                <option value="р">Русский</option>
                <option value="а">Английский</option>
              </select>
            </form>
            <div className="mt-[5.1em] ml-[-25em]">
              <h5 className="font-normal text-xl text-[#667EFF]">Добавить язык</h5>
            </div>
          </div>
        </div>
        <div className="mt-[6.1em] ml-[6em] mb-[8em]">
          <button
            onClick={() => navigate('/freelancer/freelancerDetails')}
            className="w-[513px] h-[53px] bg-[#9747FF] rounded-[20px] font-normal text-2xl text-[#E8E8E8]">
            Сохранить и опубликовать
          </button>
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

export default FreelancerInfoForm;
