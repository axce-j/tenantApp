import downButton from "../assets/downChevron.png"
import AllFunctions from "../components/functions";

const Home = () => {
  const {handleNaviagtiontoHouse}= AllFunctions();
  return (
    <div className=" w-full h-[100vh]">
          <div className=" pl-12 text-medium font-medium italic text-[rgba(225,225,225,0.8)] ">  
            Mr chinedu House Collection
          </div>
      <div className=" w-full flex flex-col gap-12 justify-center items-center pt-16">
        

      <div className="flex flex-col gap-12 justify-center items-center">
          <div className="  text-white text-2xl font-bold">
            Choose Which House to view details
          </div>

          <img  className="w-12 h-12 animate-bounce2-effect"    src={downButton} alt="photo" />
        
      </div>


      <div className="w-full flex justify-center">
        <div className="  grid grid-cols-4   gap-9  ">
          <div
            className="bg-white w-72 h-72 flex items-center justify-center  text-[rgba(193,242,217)] font-bold text-xl cursor-pointer"
            style={{
              borderRadius: "20% 65% 34% 66% / 59% 64% 36% 41%",
              backgroundColor: " rgb(27,232,186)",
              background:
                " linear-gradient(  rgba(40,47,47,0.3232143882943803) 24%, rgba(43,127,218,0.4865197104232318) 63%)",
              // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 9.5px )",
              WebkitBackdropFilter: "blur( 9.5px )",
            }}
            onClick={() => handleNaviagtiontoHouse("campYabbassi")}
          >
            CampYabassi House
          </div>

          <div
            className="bg-white w-72 h-72 flex items-center justify-center  text-[rgba(193,242,217)] font-bold text-xl cursor-pointer"
            style={{
              borderRadius: "20% 65% 34% 66% / 59% 64% 36% 41%",
              backgroundColor: " rgb(27,232,186)",
              background:
                " linear-gradient(  rgba(140,47,47,0.3232143882943803) 24%, rgba(43,127,218,0.4865197104232318) 63%)",
              // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 9.5px )",
              WebkitBackdropFilter: "blur( 9.5px )",
            }}
            onClick={() => handleNaviagtiontoHouse("gareRoutier")}
          >
            Gare Routier House
          </div>

          <div
            className="bg-white w-72 h-72 flex items-center justify-center  text-[rgba(193,242,217)] font-bold text-xl  cursor-pointer"
            style={{
              borderRadius: "20% 65% 34% 66% / 59% 64% 36% 41%",
              backgroundColor: " rgb(27,232,186)",
              background:
                " linear-gradient(  rgba(40,147,47,0.3232143882943803) 24%, rgba(43,127,218,0.4865197104232318) 63%)",
              // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 9.5px )",
              WebkitBackdropFilter: "blur( 9.5px )",
            }}
            onClick={() => handleNaviagtiontoHouse("village")}
          >
            Village House
          </div>

          <div
            className="bg-white w-72 h-72 flex items-center justify-center  text-[rgba(193,242,217)] font-bold text-xl  cursor-pointer"
            style={{
              borderRadius: "20% 65% 34% 66% / 59% 64% 36% 41%",
              backgroundColor: " rgb(27,232,186)",
              background:
                " linear-gradient(  rgba(90,47,147,0.3232143882943803) 24%, rgba(43,127,218,0.4865197104232318) 63%)",
              // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 9.5px )",
              WebkitBackdropFilter: "blur( 9.5px )",
            }}
            onClick={() => handleNaviagtiontoHouse("chantier")}
          >
            Chantier House
          </div>
        </div>
      </div>
    </div>
      </div>
  );

  // <div  className="w-full">
  //   <FooterSection />
  // </div>
};

export default Home;
