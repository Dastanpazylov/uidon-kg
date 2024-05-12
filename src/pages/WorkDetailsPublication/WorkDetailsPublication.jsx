import { useNavigate } from 'react-router';
import CustomButton from '../../components/CustomButton/CustomButton';
import Footer from '../../components/Footer/Footer';
import HeaderToReg from '../../components/Header/HeaderToReg';

const WorkDetailsPublication = () => {
  const navigate = useNavigate()
  const replyArr = [
    {
      text: 'Ux/Ui иследования',
    },
    {
      text: 'Ux/Ui иследования',
    },
    { text: 'Ux/Ui иследования' },
    {
      text: 'Ux/Ui иследования',
    },
    { text: 'Ux/Ui иследования' },
  ];
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
      <div className=" container w-[64.375rem] mx-auto font-montserrat mt-[5rem] ">
        <h2 className="text-[1.875rem] font-600 font-[Montserrat] font-semibold  mt-[5rem]">
          Детали работы
        </h2>
        <div className="border border-purple-500 mt-[1.5rem] mb-[16.25rem] rounded-xl">
          <div className="pr-[1,25rem] pl-[1.25rem] pt-[1.3125rem] font-[Montserrat] pb-[1.31rem] border-b border-purple-500">
            <h1 className="pb-[1.8rem] text-[1.125rem] font-normal">
              Требуется опытный UX/UI дизайнер для разработки веб сайтов в Figma
            </h1>
            <h2 className="text-[1.125rem]  ">Зарплата: 20 000</h2>
          </div>
          <div className="  pb-[0.938rem] pr-[1,25rem] pl-[1.25rem] pt-[0.938rem] flex justify-center font-[Montserrat] border-b border-purple-500 ">
            <div className="w-[47.25rem]">
              <p>
                Мы ищем талантливого дизайнера UX/UI, специализирующегося на привлекательности и
                привлекательности веб-сайтов. Ваша задача будет отличаться визуальным интерфейсом,
                созданием визуальных концепций и прототипов, а также работой над улучшением
                пользовательского опыта.
              </p>
              <h2>Требования:</h2>
              <ul className="list-disc pl-6 ">
                <li>Большой опыт работы в области дизайна UX/UI и создания веб-сайтов.</li>
                <li>Уверенное владение Figma и другими инструментами дизайна.</li>
                <li>
                  Глубокое понимание пользовательского опыта, проектирование интерфейсов и
                  современное использование веб-дизайна.
                </li>
                <li>
                  Способность работать самостоятельно и в игре, а также свободно управлять временем
                  и сроками.
                </li>
              </ul>
              <h2>Обязанности:</h2>
              <ul className="list-disc pl-6 ">
                <li className="list-marker-circle-smaller">
                  Разработка острых интерфейсов и создание визуальных концепций для веб-сайтов.
                </li>
                <li>Создание прототипов, проведение тестов и итеративное улучшение вкуса.</li>
                <li>
                  Сотрудничество с участием и заинтересованными сторонами для достижения оптимальных
                  результатов.
                </li>
                <li>
                  Учет требований и предпочтений пользователей, а также анализ данных для
                  эффективного пользовательского опыта.
                </li>
              </ul>
              <p>
                Мы рады приветствовать вас в нашей игре. Пожалуйста, перед уничтожением своего
                портфолио и резюме для проверки. Укажите поставку за час или свои предложения по
                сценарию проекта.
              </p>
            </div>
          </div>
          <div className="font-[Montserrat] border-b border-purple-500   pr-[1,25rem] pl-[1.25rem] text-[rem] pt-[0.938rem]">
            <h1 className="text-[1.125rem]">Навыки и опыт</h1>
            <div className="flex flex-wrap items-start gap-[1rem] mb-[2.563rem] mt-[2.5rem] mr-1 w-[41.688rem] ">
              {replyArr.map((el, index) => (
                <div
                  key={index}
                  className="bg-[#E3E3E3] rounded-[20px] items-center tracking-tight mt-2 text-center py-[0.4rem] px-5 w-[calc(33.33% - 1rem)]">
                  <p className="text-[1rem] text-center font-montserrat font-normal">{el.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-between p-[1.25rem] pb-[2rem]">
            <CustomButton onClickBtn={()=>navigate(-1)}
              title="Назад"
              customStyles="w-[12.5rem] h-[3.063rem] border border-purple-500 rounded-xl text-[1.25rem] font-[Montserrat]"
            />
            <CustomButton onClickBtn={()=>navigate('/client/profile')}
              title="Опубликовать"
              customStyles={
                'h-[3.063rem] bg-[#9747FF] text-white text-[1.4rem] font-[Montserrat] border border-purple-500 pl-[0.438rem] pr-[0.438rem] pb-[0.688rem] pt-[0.61rem] rounded-xl '
              }
            />
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

export default WorkDetailsPublication;
