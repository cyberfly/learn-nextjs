"use client";

import { useState } from "react";

const ToggleComp = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h1>Test Toggle</h1>

      {toggle && <h3>This is toggle content</h3>}

      <button className="border" onClick={() => setToggle(!toggle)}>Toggle Show Hide</button>
    </>
  );
};

export default ToggleComp;
