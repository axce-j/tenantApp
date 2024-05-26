import nextButton from "../assets/nextButton.png";
import AllFunctions from "../components/functions";
const Welcome = () => {
  const {handleNaviagtiontoHomePage}= AllFunctions()
  return (
    <div className="w-full h-[100vh] ">
      <div className="flex flex-col w-full h-full justify-center items-center gap-8">


        <div className="flex items-center gap-3">
          <div className="text-white font-bold text-5xl text-center">
            Welcome
          </div>
          <img  className="w-24 h-24 cursor-pointer" onClick={()=>handleNaviagtiontoHomePage()}  src={nextButton} alt="photo" />
        </div>

        <div
          className="bg-white w-72 h-72 flex items-center justify-center  text-[rgba(193,242,217)] font-bold text-xl animate-bounce-effect cursor-pointer"
          style={{
            borderRadius: "20% 65% 34% 66% / 59% 64% 36% 41%",
            backgroundColor: " rgb(27,232,186)",
            background:
              " linear-gradient(90deg, rgba(27,232,186,0.51919793307948) 13%, rgba(40,47,47,0.3232143882943803) 24%, rgba(43,127,218,0.4865197104232318) 63%)",
            // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 9.5px )",
            WebkitBackdropFilter: "blur( 9.5px )",
          }}
          onClick={()=>handleNaviagtiontoHomePage()}
        >
          MR Chinedu TenantApp
        </div>
      </div>
    </div>
  );
};

export default Welcome;
