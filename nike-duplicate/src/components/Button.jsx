const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 bg-coral-red rounded-full gap-2 text-white font-montserrat text-lg border-coral-red">
        {label}
        <img
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
        />
    </button>
  )
}

export default Button;
