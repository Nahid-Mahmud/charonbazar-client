import Cover from "../../assets/images/cover.jpeg";

const Banner = () => {
  return (
    <div className="mt-5 rounded-md overflow-hidden">
      <img src={Cover} className="bg-cover w-full bg-no-repeat h-[50rem]" alt="" />
    </div>
  );
};

export default Banner;
