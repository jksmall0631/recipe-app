import React from 'react';

const Button = ({title, className, onClick}) => {
  return (
    <button
      onClick={() => onClick(title)}
      className={className}>
      {title}
    </button>
  )
}

export default Button;
