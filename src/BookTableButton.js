import React from 'react';

const BookTableButton = () => {
  const handleButtonClick = () => {
    console.log("Navigate to booking form");
  };

  return (
    <button onClick={handleButtonClick} className="book-table-button">
      Book table
    </button>
  );
};

export default BookTableButton;
