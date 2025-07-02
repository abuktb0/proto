const slider = ({ image, text, active }) => {
  return (
    <div
      className={`${
        active
          ? "bg-lavender/10 border-lavender/50 border-1"
          : "bg-lavender/5 cursor-pointer border-0"
      } hover:bg-lavender/10 rounded-lg`}
    >
      <div
        className={`group flex w-60 flex-col items-center justify-center gap-2 py-11 lg:w-80`}
      >
        <img
          src={image}
          alt="mobile"
          className={`size-36 lg:size-48 ${active ? "opacity-100" : "opacity-50 blur-[2px] duration-200 group-hover:opacity-100 group-hover:blur-none"}`}
        />
        <p
          className={`text-base lg:text-xl ${active ? "text-lavender" : "text-lavender/50 group-hover:text-lavender blur-[1px] duration-200 group-hover:blur-none"}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default slider;
