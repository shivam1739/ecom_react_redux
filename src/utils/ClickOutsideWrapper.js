import React, { useEffect, useRef } from "react";

const ClickOutsideWrapper = (props) => {
  const ref = useRef(null);
  const { children, clickOutside } = props;

  const handkeClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      clickOutside && clickOutside(false);
    }
  };
  console.log(props);
  useEffect(() => {
    document.addEventListener("click", handkeClickOutside, true);
    return () => {
      document.removeEventListener("click", handkeClickOutside, true);
    };
  }, [handkeClickOutside]);
  return (
    <div className={props.classes} ref={ref}>
      {children}
    </div>
  );
};

export default ClickOutsideWrapper;
