import React from 'react';

const getAllStars = (value, MdStar, MdStarBorder) => {
  return (
    <>
      {[...Array(value)].map(() => {
        return <MdStar key={Math.random(1000)} />;
      })}
      {[...Array(5 - value)].map(() => {
        return <MdStarBorder key={Math.random(1000)} />;
      })}
    </>
  );
};
export default getAllStars;
