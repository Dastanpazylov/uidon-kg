import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import profileImg from '../../assets/icons/profileImage.svg';
import { useNavigate } from 'react-router';

const ModalWindow = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [isRatingGiven, setIsRatingGiven] = useState(false);
const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Комментарий:', text);
  };

  const handleCloseOrder = () => {
    if (isRatingGiven) {
      navigate(-1)
    } else {
      console.log('Выставьте оценку перед закрытием заказа');
    }
  };

  return (
    <div className="w-[26.875rem] bg-[#FFFFFF] gap-[0.938rem] flex flex-col m-[auto] mt-[5rem] rounded-[10px] p-[0.938rem] ">
      <div className="flex flex-col rounded-[0.625rem] border-[0.063rem] border-[#6E4B84] m-[auto] pl-[0.625rem] pr-[0.625rem] pt-[1.25rem] pb-[1.25rem]  ">
        <img src={profileImg} className="m-[auto]" alt="profile image" />
        <h1 className="text-[1.5rem]">Сыймык Н. у</h1>
        <p className="font-[400] text-[1rem] leaning-[1.25rem] text-[#A1A1A1] m-[auto] ">
          Ux/Ui designer
        </p>
      </div>
      <h3 className="text-center">Оцените работу</h3>
      <div className="flex gap-[0.625rem] pl-[8.125rem] w-[10.375rem]">
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => {
                  setRating(currentRating);
                  setIsRatingGiven(true); // Обновление состояния при выставлении оценки
                }}
                style={{
                  display: 'none',
                }}
              />
              <FaStar
                className="star "
                size={20}
                color={currentRating <= (hover || rating) ? '#6E4B84' : '#e4e5e9'}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
                style={{
                  cursor: 'pointer',
                }}
              />
            </label>
          );
        })}
      </div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <textarea
          onChange={(e) => setText(e.target.value)}
          className=" outline-[0] color-[#00000080] rounded-[0.625rem] border-[0.063rem] w-[25rem] h-[9.375rem] resize-none p-[0.625rem] "
          name=""
          id=""
          cols="10"
          rows="12"
          placeholder="Оставьте коментарии..(Не обязательно)"></textarea>
        <div className="flex justify-around mt-[0.938rem]">
          <>
            <button className="bg-[#9747FF] w-[12.188rem] h-[2.25rem] pt-[auto] pl-[1.5rem] pr-[1.5rem] rounded-[0.625rem] leaning-[1.524rem] font-[400] text-[#E8E8E8] text-[1.25rem]">
              Отклонить
            </button>
            <button
              onClick={handleCloseOrder}
              className={`rounded-[0.625rem] pt-[auto] pl-[1.5rem] pr-[1.5rem] h-[2.25rem] leaning-[1.524rem] font-[400] text-[#E8E8E8] text-[1.25rem] ${
                isRatingGiven
                  ? 'bg-[#9747FF] cursor-pointer'
                  : 'bg-[#9DB2BF] opacity-50 cursor-not-allowed'
              }`}
              disabled={!isRatingGiven}>
              Закрыть заказ
            </button>
          </>
        </div>
      </form>
    </div>
  );
};

export default ModalWindow;
