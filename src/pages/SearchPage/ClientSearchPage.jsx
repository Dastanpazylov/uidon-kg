import ClientOrderCard from '../../components/ClientOrderCard/ClientOrderCard';
import Footer from '../../components/Footer/Footer';
import HeaderToClient from '../../components/Header/HeaderToClient';
import FilterBlock from '../../components/Search/FilterBlock';
import FreelancerBlock from '../../components/Search/FreelancerBlock';
import SearchBlock from '../../components/Search/SearchBlock';

function ClientSearchPage() {
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
      <HeaderToClient />
      <div className="w-full font-montserrat bg-[#f4f4f9] h-full mx-auto overflow-x-hidden">
        <div className="w-[77%]  bg-main-white ">
          <div className="w-[950px] h-[1288px] flex flex-row mx-auto">
            <FilterBlock title='Сроки выполнения' />
            <div className="flex flex-col w-[92%]">
              <SearchBlock title='Найдено 40 работников' />
              <FreelancerBlock />
              <FreelancerBlock />
              <FreelancerBlock />
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
}
export default ClientSearchPage;
