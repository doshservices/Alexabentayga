import React from "react";
import { IoIosSend } from "react-icons/io";

const Button = ({ type, title, onClick }) => {
  return (
    <>
      <button onClick={onClick} type={type || "button"} className="btn">
        {title}
        {type && (
          <div className="ml-2">
            <IoIosSend />
          </div>
        )}
      </button>
    </>
  );
};

export default Button;
