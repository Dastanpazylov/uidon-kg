import React from 'react';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';import CustomButton from '../../components/CustomButton/CustomButton';
;


const WelcomePage = () => {

  const cardsArray = [
    {
      counts: '300',
      title: 'довольных клиентов',
    },
    {
      counts: '500',
      title: 'завершенных проектов',
    },
    {
      counts: '97',
      title: 'постоянных клиентов',
    },
  ];

  
  const footerLinks = [
    {
      title: 'Главная',
      links: ['О нас', 'Поиск',  ],
    },
    {
      title: 'Регистрация',
      links: ['Работнику', 'Заказчику', 'Вход'],
    },
  ];
  
  const reportsArray = [
    {
      img: 'src/assets/img/WelcomePage/report1.png',
      name: 'Исмаилов Камчы',
      report:
        'Я смог оптимизировать свой рабочий процесс и сэкономить время благодаря удобному фрилансу.Их платформа просто невероятна.',
    },
    {
      img: 'src/assets/img/WelcomePage/report2.png',
      name: 'Некрасов Артур',
      report:
        'Я не могу поверить, насколько проста и удобна навигация по этой платформе! Я никогда не испытывал такой приятный опыт работы фрилансером.',
    },
  ];

  return (
    <div className="bg-[#F4F4F9] w-auto">
      <Header />

      <div className="bg-[#F4F4F9] h-screen flex items-center ">
        <div className="flex flex-col items-start gap-[2.5rem]  ml-[90px] mb-[-0.625rem]">
          <h1 className="text-[2.688rem] leading-[3.5rem] font-roboto tracking-[0.040rem] font-semibold mb-[1.875]">
            UIDON - самая удобная фриланс биржа
            <br />в Кыргызстане
          </h1>
          <Link to='/sign-up'>
          <CustomButton
            title="Начать работу"
            customStyles="w-[17.5rem] font-montserrat text-center h-[3.313rem]  mt-[2.75rem] px-[1.5rem] text-2xl tracking-wider text-white bg-[#9747FF] rounded-[1.25rem] "
          />
          </Link>
        </div>
      </div>

      <div className="mt-[15px] flex flex-col gap-16">
        <div className="flex justify-center gap-[130px] items-center relative right-[50px]  ">
          <h1 className="text-3xl tracking-wider font-semibold font-montserrat w-[337px] text-[#6E4B84] ">
            УПРОЩЁННЫЙ ФРИЛАНС СТАЛ ПРОЩЕ
          </h1>
          <p className="text-xl tracking-[0.040em]  w-[540px] mb-3 font-normal font-montserrat leading-6 text-[#6E4B84]">
            Навигация в мире фриланса еще никогда не была такой простой. Следите за своими проектами
            и клиентами в одном удобном центре!
          </p>
        </div>
        <div className="flex justify-around relative left-[150px] items-center w-[980px] h-[180px] mt-[55px]">
          {cardsArray.map((card, index) => (
            <div
              className="flex items-center flex-col w-[225px] h-[180px] gap-7 rounded-[11px] border border-[#6E4B84] p-7 text-center"
              key={index}>
              <h2 className="text-5xl mt-4 font-roboto font-semibold text-[#A1A1A1]">{card.counts}</h2>
              <p className="text-[#A1A1A1] font-roboto text-[15px] tracking-tight font-normal">{card.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-around relative text-center  my-[173px]">
        <img
          src="src/assets/img/WelcomePage/wpage.png"
          className="h-[670px] relative bottom-[1.25rem] object-cover"
          alt="welcome-page"
        />
        <h1 className="text-[45px] font-roboto leading-[2.9rem] w-[825px] absolute top-[17.5rem] h-[80px] text-[#E8E8E8]  font-semibold ">
          Избавление от лишних хлопот при работе на фрилансе.
        </h1>
      </div>

      <div className="flex justify-center items-center relative bottom-[35px] mb-[100px] gap-7">
        {reportsArray.map((report, index) => (
          <div
            className="flex items-center flex-col relative left-1 bottom-[50px] w-[535px] h-[27.25rem] rounded-[12px]  border border-[#6E4B84] text-center"
            key={index}>
            <img
              src={report.img}
              className="h-[70px] mt-[45px] ml-[-1.25rem] w-[70px] rounded object-cover"
              alt="welcome-page"
            />
            <h2 className="text-base my-[10px] tracking-wide mr-4 font-semibold font-roboto  text-[#6E4B84]">{report.name}</h2>
            <p className="text-[#6E4B84] w-[470px] relative top-3 font-montserrat h-[170px] tracking-wide text-[27px] leading-[35px] font-light">
              {report.report}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[100px] w-[87%] h-[100px] relative left-[90px] bottom-[77px] ">
        <h1 className='font-semibold text-3xl text-[#6E4B84] mb-[40px] font-montserrat tracking-wider '>КТО МЫ ТАКИЕ?</h1>
        <div className='flex items-center justify-center gap-[120px]'>
          <p className='text-[#232323] text-xl font-normal tracking-wide font-montserrat  relative bottom-2 '>Мы - молодая и динамично развивающаяся компания, стремящаяся стать вашим надежным партнером в мире креативных и технических решений. </p>
          <p className='text-[#232323] text-xl font-normal font-montserrat relative bottom-1 '>Наша цель - создать уникальное и
          удобное пространство, где талантливые профессионалы и предприимчивые заказчики смогут
          встретиться и осуществить свои проекты вместе.</p>
        </div>
      </div>

      <div className="flex flex-col relative top-[125px] mb-[150px] items-center gap-[40px] ">
        <div className='flex flex-col w-[895px] font-montserrat  h-[174px]'>
          <h1 className="font-medium  text-[34px] text-center mb-[1.875rem]">Готовы?</h1>
          <p className="font-light mr-3 text-center tracking-[0.04em] font-montserrat leading-8 text-xl">
            Присоединяйтесь к революции фриланса и испытайте бесперебойное управление проектами,
            исключительную поддержку клиентов и истинное удобство.
          </p>
        </div>
        <Link to='/sign-up'>
        <CustomButton
          title="Начать"
          customStyles="w-[17.5rem] font-montserrat h-[54px] relative bottom-[1.25rem] px-[1.5rem] text-3xl font-normal text-[#E8E8E8] bg-[#9747FF] rounded-[1.25rem]"
        />
        </Link>
      </div>

      <Footer customStyles="relative flex justify-around items-center h-[263px] bg-[#FFFFFF] border border-[#6E4B84]" footerLinks={footerLinks} customArrStyles='h-0 relative bottom-[70px] right-3 gap-2 '/>
    </div>
  );
};

export default WelcomePage;
