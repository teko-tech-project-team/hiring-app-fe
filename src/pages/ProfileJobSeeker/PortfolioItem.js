const PortofolioItem = ({ name, image }) => {
  return (
    <div className="col-span-4 group hover:ring-2 hover:ring-slate-200 hover:text-primary cursor-pointer">
      <div className="w-full h-40 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full group-hover:scale-125 duration-500 ease-in-out"
        />
      </div>
      <p className="text-base mt-3 text-center">{name}</p>
    </div>
  );
};

export default PortofolioItem;
