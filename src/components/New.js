import React, { useState } from "react";

const New = () => {
  const [menu, setMenu] = useState(false);

  const menuToggle = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <h1 className="p-4"> I aam here</h1>
      <button
        onClick={menuToggle}
        className="text-white  my-5 bg-slate-600 p-4 "
      >
        Togggle menu
      </button>

     {
          menu &&
          <div className="bg-danger p-5">Conditional redaring here</div>
     }
    </div>
  );
};

export default New;
