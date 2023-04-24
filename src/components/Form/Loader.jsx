import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#BBE38F"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
