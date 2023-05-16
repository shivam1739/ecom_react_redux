import React, { useState } from "react";
import "./toaster.css";
import { AiOutlineClose } from "react-icons/ai";

const Toaster = ({ props }) => {
  const [isToaster, setToaster] = useState(() => true);
  let clas = Object.keys(props);
  console.log(clas[0], "==========");
  return (
    <>
      {isToaster ? (
        <div className="toaster">
          <AiOutlineClose onClick={() => setToaster(false)} />
          <h3>{props.message || props.error}</h3>
          <hr id={clas[0]} />
        </div>
      ) : null}
    </>
  );
};

export default Toaster;
