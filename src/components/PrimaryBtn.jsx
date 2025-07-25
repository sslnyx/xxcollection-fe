const PrimaryBtn = ({ children, className }) => {
  return (
    <div className={`${className} cursor-pointer border-2 border-gold px-3 py-1 rounded-full uppercase flex items-center`}>
      <div>{children}</div>
    </div>
  );
};

export default PrimaryBtn;
