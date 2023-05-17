import React, { memo, useEffect, useState } from "react";
import "./toaster.css";
import { AiOutlineClose } from "react-icons/ai";

const Toaster = ({ props }) => {
  const [isToaster, setToaster] = useState(() => true);
  let cls = "";
  if (props.error == null) {
    cls = "message";
  } else {
    cls = "error";
  }

  setTimeout(() => setToaster(false), 4000);

  return (
    <>
      {isToaster ? (
        <div className="toaster" id={cls}>
          <p>{props.message || props.error}</p>
          <AiOutlineClose onClick={() => setToaster(false)} />
        </div>
      ) : null}
    </>
  );
};

export default memo(Toaster);
