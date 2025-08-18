const ConditonalRendering = (props) => {
  const { isLoggedIn, showMessage } = props;

  return (
    <>
      <p>Conditional rendering ternary</p>

      {isLoggedIn ? "anda telah login" : "and belum login"}

      <p>Conditional rendering using AND</p>

      {showMessage && <p>Ini adalah mesej</p>}
    </>
  );
};

export default ConditonalRendering;
