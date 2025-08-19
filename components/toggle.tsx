"use client";

import { useState } from "react";
import clsx from "clsx";

const ToggleComp = () => {
  const [toggle, setToggle] = useState(false);

  const [status, setStatus] = useState("pending");

  return (
    <>
      <h1>Test Toggle</h1>
      {toggle && <h3>This is toggle content</h3>}
      <button className="border" onClick={() => setToggle(!toggle)}>
        Toggle Show Hide
      </button>

      <br/>
      ====
      <br/>

      <span
        className={clsx(
          "inline-flex items-center rounded-full px-2 py-1 text-xs",
          {
            "bg-gray-100 text-gray-500": status === "pending",
            "bg-green-500 text-white": status === "paid",
          }
        )}
      >
        {status === "pending" ? (
          <>
            Pending
          </>
        ) : null}
        {status === "paid" ? (
          <>
            Paid
          </>
        ) : null}
      </span>

      <br/>

      <button className="border" onClick={() => setStatus('pending')} >Set Pending</button>
      <button className="border" onClick={() => setStatus('paid')} >Set Paid</button>
    </>
  );
};

export default ToggleComp;
