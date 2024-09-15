import img from "../../assets/home/chef-service.jpg";
const SmallSection = () => {
  return (
    <div>
      <div className="relative">
        <img src={img} alt="" />
      </div>
      <div className="absolute  bg-white  mx-auto -mt-96  p-20 py-32 w-8/12  h-72">
        <h3 className="text-4xl font-semibold pb-4 text-center text-black">
          Bistro Boss
        </h3>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quod
          reiciendis facere nulla nesciunt. Fugit expedita blanditiis delectus
          doloribus voluptatem cumque tempore pariatur voluptate facilis, quae
          alias qui itaque quo quos adipisci dolores veniam et dolorum porro
          sunt repellendus. Doloremque!
        </p>
      </div>
    </div>
  );
};

export default SmallSection;
