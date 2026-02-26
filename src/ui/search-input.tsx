import logoSrc from "../assets/images/search-icon.png";
const SearchInput = () => {
  return (
    <div className="">
      <div className="flex items-center bg-white rounded-xl px-4 py-3">
        
        <img 
          src={logoSrc} 
          alt="Search Logo"
          className="mr-3"
        />

        <input
          type="text"
          placeholder="What are you craving for today?"
          className="
            w-full
            bg-transparent
            outline-none
            text-gray-800
            placeholder-black
          "
        />
        
      </div>
    </div>
  );
};

export default SearchInput;
