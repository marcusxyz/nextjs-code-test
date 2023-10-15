const CardButton = ({ title = '' }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="w-2/3 translate-y-0 transform border-4 border-orange-500 py-6 transition-all duration-200 ease-in lg:relative lg:border-transparent lg:group-hover:border-orange-500">
        <h2 className="duration-400 flex translate-y-0 transform items-center justify-center text-2xl uppercase text-orange-500 transition-transform ease-in-out group-hover:text-orange-500 lg:absolute lg:inset-[56px] lg:text-white lg:group-hover:-translate-y-8">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CardButton;
