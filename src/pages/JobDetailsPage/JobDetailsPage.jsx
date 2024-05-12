import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchJobDetails } from '../../store/actions.js';
const JobDetailsPage = () => {
  // const dispatch = useDispatch();
  // const jobDetails = useSelector((state) => state.jobDetails);  const loading = useSelector((state) => state.loading);
  // const error = useSelector((state) => state.error);
  const [isApplied, setIsApplied] = useState(false);
  // useEffect(() => {
  //   dispatch(fetchJobDetails());
  // }, [dispatch]);
  const handleApplyClick = () => {
    setIsApplied(true);
  };
  const navigate = useNavigate()
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
  // console.log(jobDetails);
  return (
    <>
      <Header auth={authworker} />
      <div className="container w-[77.875rem] overflow-hidden h-[100vh] mx-auto mt-[1.75rem] ">
        <div className="flex">
          <img onClick={()=>navigate(-1)} className=' cursor-pointer ' src="/src/assets/img/ClientProfilePage/arrowback.svg" alt="Layer" />
          <h1 className="text-[2.25rem] font-[Montserrat] ml-[4.375rem] font-bold ">
            Детали работы
          </h1>
        </div>
        <div className="mt-[2.188rem] mb-[0.313rem]">
          {isApplied && (
            <p className="bg-[#FF3E3ED9] text-white text-center py-2 inline-block pr-[0.75rem] pl-[0.75rem] rounded-2xl ">
              Вакансия не актуальна
            </p>
          )}
        </div>
        <div className="flex">
          <div className="mb-[10.938rem] font-[Montserrat]">
            <div className="mt-[0.938rem] w-[53.688rem] border border-purple-300 rounded-2xl ">
              <div className="pt-[1.313rem] pb-[1.313rem] pl-[1.25rem] pr-[1.25rem]">
                <h1 className="w-[47.063rem] text-[1.5rem]">
                  Требуется опытный Ux/UI дизайнер для разработки веб сайтов в Figma
                </h1>
                {/*<h1>{jobDetails.title}</h1>*/}
              </div>
            </div>
            <div className="w-[53.688rem] pl-[1.25rem] pt-[1.25rem] pb-[1.25rem] mt-[1.25rem] border border-purple-300 rounded-2xl text-[1.25rem]">
              <div className="w-[37.688rem] ">
                <p className=" font-Monserrat">
                  Мы ищем талантливого дизайнера UX/UI, специализирующегося на привлекательности и
                  привлекательности веб-сайтов. Ваша задача будет отличаться визуальным интерфейсом,
                  созданием визуальных концепций и прототипов, а также работой над улучшением
                  пользовательского опыта.
                </p>
                <p>Требования:</p>
                <ul className="list-disc pl-[1.25rem] mt-[0.625rem]">
                  <li> Большой опыт работы в области дизайна UX/UI и создания веб-сайтов.</li>
                  <li> Уверенное владение Figma и другими инструментами дизайна.</li>
                  <li>
                    Глубокое понимание пользовательского опыта, проектирование интерфейсов и
                    современное использование веб-дизайна.
                  </li>
                  <li>
                    Способность работать самостоятельно и в игре, а также свободно управлять
                    временем и сроками.
                  </li>
                </ul>
                <p>Обязанности:</p>
                <ul className="list-disc pl-[1.25rem]">
                  <li>
                    Разработка острых интерфейсов и создание визуальных концепций для веб-сайтов.
                  </li>
                  <li> Создание прототипов, проведение тестов и итеративное улучшение вкуса.</li>
                  <li>
                    Сотрудничество с участием и заинтересованными сторонами для достижения
                    оптимальных результатов..
                  </li>
                  <li>
                    Учет требований и предпочтений пользователей, а также анализ данных для
                    эффективного пользовательского опыта.
                  </li>
                </ul>
                <p>
                  Мы рады приветствовать вас в нашей игре. Пожалуйста, перед уничтожением своего
                  портфолио и резюме для проверки.Укажите поставку за час или свои предложения по
                  сценарию проекта.
                </p>
                {/*<p>{jobDetails.description}</p>*/}
              </div>
            </div>
          </div>
          <div className="ml-[1.25rem] mt-[0.938rem] ">
            <div className="w-[22.563rem] pt-[1.875rem] pl-[1.25rem] pb-[1.875rem] border border-purple-300 rounded-2xl">
              <button
                className={`w-[20.063rem] mt-[1.25rem]  pt-[0.313rem] pb-[0.313rem] pl-[2.063rem] pr-[2.063rem] text-[1.125rem] bg-[#9747FF] text-white border border-purple-400 rounded-xl flex items-center justify-center ${
                  isApplied ? 'bg-[#9DB2BF] text-[#aab7bf]' : ''
                }`}
                onClick={handleApplyClick}
                disabled={isApplied}>
                {isApplied ? 'Откликнуться на вакансию' : 'Откликнуться на вакансию'}
              </button>
              <button className=" font-[Montserrat] w-[20.063rem] mt-[1.25rem] pt-[0.313rem] pb-[0.313rem] pl-[2.063rem] pr-[2.063rem] text-[1.125]  border border-purple-400 rounded-xl  flex items-center justify-center">
                Добавить в избранное
              </button>
              <div className=" mt-[1.25rem] flex ">
                <p className="text-[1.125rem] font-[Montserrat]">Отправленные предложения:</p>
                <p className="text-[1.125rem] pl-[10px] font-[Montserrat">17</p>
              </div>
              <div className=" mt-[0.313rem] flex ">
                <p className="text-[1.125rem] font-[Montserrat]">Рассмотренные:</p>
                <p className=" text-[1.125rem] pl-[0.625rem] font-[Montserrat">8</p>
              </div>
            </div>
            <div className="w-[22.563rem] mt-[1.188rem] mb-[0.938rem] pt-[1.25rem] font-[Montserrat] pl-[1.25rem] pb-[1.25rem] border border-purple-300 rounded-2xl">
              <p className="text-[1.125rem] font-[Montserrat]">О заказчике</p>
              <div className=" mt-[1.875rem] flex">
                <p className=" text-[1.125rem] font-[Montserrat]">Размещенных вакансии:</p>
                <p className=" text-[1.125rem] pl-[0.625rem]"> 21</p>
              </div>
              <p className=" mt-[1.875rem]  text-[0.75rem] text-[#A1A1A1] font-[Montserrat]">
                На сайте с 22 июня 2022 г.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer
        footerLinks={footerLinks}
        customStyles=" relative flex justify-evenly items-center h-[266px] gap-[100px] mt-[23.9em] bg-[#FFFFFF] border border-[#6E4B84]"
        customArrStyles="h-0 relative bottom-[70px] right-[10px] gap-2"
      />
    </>
  );
};
export default JobDetailsPage;
