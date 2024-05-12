import React from 'react';

const CustomButton = ({ title, customStyles, customSize, onClickBtn}) => {
  return (
    <button className={`${customStyles} ${customSize}`} onClick={onClickBtn} >
      {`${title}`}
    </button>
  );
};

export default CustomButton;
