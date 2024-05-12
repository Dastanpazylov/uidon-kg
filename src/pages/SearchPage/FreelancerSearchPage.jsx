import { Link } from 'react-router-dom';
import ClientOrderCard from '../../components/ClientOrderCard/ClientOrderCard';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import FilterBlock from '../../components/Search/FilterBlock';
import SearchBlock from '../../components/Search/SearchBlock';

function ClientSearchPage() {
  const authworker = {
    favourite: 'Избранные',
    response: 'Отклики',
  };
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
      <Header auth={authworker} />
      <div className="w-full font-montserrat bg-[#f4f4f9] h-full mx-auto overflow-x-hidden">
        <div className="w-[77%]  bg-main-white ">
          <div className="w-[950px] h-[1288px] flex flex-row mx-auto">
            <FilterBlock title="Сроки выполнения" worker={true} />
            <div className="flex flex-col w-[92%]">
              <SearchBlock title="Найдено 40 работников" />
              <Link to="/job-details">
                <ClientOrderCard
                  img="/src/assets/image/Bookmark.svg"
                  customStyles="border-0 border-solid border-y border-x bg-transparent top-[50px]  border-[#6E4B84] rounded-[5px] p-[8px] mb-4 w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[18px]"
                />
              </Link>
              <Link to="/job-details">
                <ClientOrderCard
                  img="/src/assets/image/Bookmark.svg"
                  customStyles="border-0 border-solid border-y border-x bg-transparent top-[40px]  border-[#6E4B84] rounded-[5px] p-[8px] mb-4 w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[18px]"
                />
              </Link>
              <Link to="/job-details">
                <ClientOrderCard
                  img="/src/assets/image/Bookmark.svg"
                  customStyles="border-0 border-solid border-y border-x bg-transparent top-[40px]  border-[#6E4B84] rounded-[5px] p-[8px] mb-4 w-[866px] h-[300px] relative flex flex-col items-start gap-[10px] bg-white left-[18px]"
                />
              </Link>
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
