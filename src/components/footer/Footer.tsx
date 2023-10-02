const Footer = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col justify-start items-start mx-auto pt-10 w-[80rem]">
        <div className="flex flex-row justify-start items-start">
          <div className="flex flex-col p-5 mx-10 items-start justify-start ">
            <div className="flex flex-col justify-center items-start p-2 m-2">
              <h1 className="text-start ml-1 text-2xl font-normal text-blue-700 font-serif">
                Corporate information
              </h1>
              <a className="text-start ml-1  text-sm font-serif font-thin text-gray-600 cursor-pointer">
                Cinnamon Hotels & Resorts
              </a>
              <a className="text-start ml-1  text-sm font-serif font-thin text-gray-600 cursor-pointer">
                John Keells Group
              </a>
            </div>
            <div className="flex flex-col justify-center items-start p-2 m-2">
              <h1 className="text-start ml-1 text-2xl font-normal text-blue-700 font-serif">
                Blogs
              </h1>
              <a className="text-start ml-1  text-sm font-serif font-thin text-gray-600 cursor-pointer">
                Cinnamon Ublog
              </a>
            </div>
            <div className="flex flex-col justify-center items-start p-2 m-2">
              <h1 className="text-start ml-1 text-2xl font-normal text-blue-700 font-serif">
                Careers
              </h1>
              <a className="text-start ml-1  text-sm font-serif font-thin text-gray-600 cursor-pointer">
                Careers
              </a>
            </div>
          </div>
          <div className="flex flex-col p-5 mx-10 items-start justify-start ">
            <div className="flex flex-col justify-center items-start p-2 m-2">
              <h1 className="text-start ml-1 text-2xl font-normal text-blue-700 font-serif">
                News and Awards
              </h1>
              <a className="text-start ml-1  text-sm font-serif font-thin text-gray-600 cursor-pointer">
                News
              </a>
              <a className="text-start ml-1  text-sm font-serif font-thin text-gray-600 cursor-pointer">
                Awards
              </a>
            </div>
            <div className="flex flex-col justify-center items-start p-2 m-2">
              <h1 className="text-start ml-1 text-2xl font-normal text-blue-700 font-serif">
                Corporate Governance
              </h1>
              <a className="text-start ml-1  text-sm font-serif font-thin text-gray-600 cursor-pointer">
                CSR
              </a>
            </div>
          </div>
          <div className="flex flex-col p-5 mx-10 items-start justify-start ">
            <div className="flex flex-col justify-center items-start p-2 m-2">
              <h1 className="text-start ml-1 text-2xl font-normal text-blue-700 font-serif">
                Data Privacy & Security Policy
              </h1>
              <a className="text-start ml-1  text-sm font-serif font-thin text-gray-600 cursor-pointer">
                Terms & Conditions
              </a>
              <a className="text-start ml-1  text-sm font-serif font-thin text-gray-600 cursor-pointer">
                Privacy Statement
              </a>
            </div>
            <div className="flex flex-col justify-center items-start p-2 m-2">
              <h1 className="text-start ml-1 text-2xl font-normal text-blue-700 font-serif">
                Get In Touch
              </h1>
              <a className="text-start ml-1  text-sm font-serif font-thin text-gray-600 cursor-pointer">
                Corporate Contact Information
              </a>
              <a className="text-start ml-1  text-sm font-serif font-thin text-gray-600 cursor-pointer">
                Hotel Contact Information
              </a>
            </div>
            <div className="flex flex-col justify-center items-start p-2 m-2">
              <h1 className="text-start ml-1 text-2xl font-normal text-blue-700 font-serif">
                Follow Us
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5 mx-10 items-start justify-start ">
          <div className="flex flex-col justify-center items-start p-2 m-2">
            <h1 className="text-start ml-1 text-2xl font-normal text-blue-700 font-serif">
              Get Cinnamon in your inbox
            </h1>
            <form className="flex flex-row items-center justify-center h-fit bg-white outline outline-1 outline-gray-400 ml-1 rounded-sm">
              <input placeholder="Enter Your Email" type="email" className="pl-2 text-sm font-thin font-serif focus:outline-none"/>
              <button className="w-20 h-full p-1 bg-blue-500 text-sm text-white font-thin font-serif ">Submit</button>
            </form>
            <a></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
