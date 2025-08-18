"use client";

const BasicEvent = () => {
  const handleClick = () => {
    alert("button clicked!");
  };

  return (
    <>
      <p>Event handling</p>

      <button type="button" onClick={handleClick}>
        Test Button
      </button>
    </>
  );
};

export default BasicEvent;
