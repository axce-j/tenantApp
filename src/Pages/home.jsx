import { Box } from "@chakra-ui/react";
import downButton from "../assets/chevron-double-down.png";
import AllFunctions from "../components/functions";

const Home = () => {
  const { handleNaviagtiontoHouse, houseNames,handleNaviagtiontoHomePage } = AllFunctions();
  return (
    <div className="  w-full h-[100vh]">
      <Box className="flex justify-between items-center mobile:pt-3 sm:pt-2 ">
        <Box className="text-white pl-4 cursor-pointer"  onClick={() => handleNaviagtiontoHouse('')} ><i className="fa fa-solid fa-chevron-left" aria-hidden="true"></i>
        </Box>
        <div className=" pr-4 sm:pr-6 mobile:text-[10px] lgMobile:text-[10px] text-medium text-end font-medium italic text-[rgba(225,225,225,0.8)] ">
          Mr chinedu House Collection
        </div>
      </Box>
      <div className=" w-full flex flex-col gap-12 justify-center items-center pt-16">
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="  text-white sm:text-2xl mobile:text-[12px] lgMobile:text-base font-bold">
            Choose Which House to view details
          </div>

          <img
            className="mobile:w-6 mobile:h-6 sm:w-10 sm:h-10 animate-bounce2-effect"
            src={downButton}
            alt="photo"
          />
        </div>

        <div className="w-full flex justify-center">
          <div className="  grid lg:grid-cols-4 grid-cols-2  gap-9  ">
            {houseNames &&
              houseNames?.map((items, index) => {
                return (
                  <div
                    key={index}
                    className="bg-custom-brown-gradient mobile:w-24 mobile:h-24  lgMobile:w-32 lgMobile:h-32 sm:w-48 sm:h-48 xl:w-64 xl:h-64 flex items-center justify-center  text-white font-bold mobile:text-[8px] sm:text-xs xl:text-xl     cursor-pointer"
                    style={{
                      borderRadius: "20% 65% 34% 66% / 59% 64% 36% 41%",

                      backdropFilter: "blur( 9.5px )",
                      WebkitBackdropFilter: "blur( 9.5px )",
                      transition: "width 0.5s ease-in, height 0.5s ease-in",
                    }}
                    onClick={() => handleNaviagtiontoHouse(items[1][2])}
                  >
                    {items[1][0]}
                  </div>
                );
              })}

            {/* <div
          
            className="bg-white mobile:w-24 mobile:h-24 lgMobile:w-32 lgMobile:h-32 sm:w-48 sm:h-48 xl:w-64 xl:h-64 flex items-center justify-center  text-[rgba(193,242,217)] font-bold mobile:text-[8px]   sm:text-xs xl:text-xl    cursor-pointer"
            style={{
              borderRadius: "20% 65% 34% 66% / 59% 64% 36% 41%",
              backgroundColor: " rgb(27,232,186)",
              background:
                " linear-gradient(  rgba(140,47,47,0.3232143882943803) 24%, rgba(43,127,218,0.4865197104232318) 63%)",
              // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 9.5px )",
              WebkitBackdropFilter: "blur( 9.5px )",
              transition:"width 0.5s ease-in, height 0.5s ease-in"
            }}
            onClick={() => handleNaviagtiontoHouse("gareRoutier")}
          >
            Gare Routier House
          </div>

          <div
          
            className="bg-white mobile:w-24 mobile:h-24 lgMobile:w-32 lgMobile:h-32 sm:w-48 sm:h-48 xl:w-64 xl:h-64 flex items-center justify-center  text-[rgba(193,242,217)] font-bold mobile:text-[8px] sm:text-xs xl:text-xl   cursor-pointer"
            style={{
              borderRadius: "20% 65% 34% 66% / 59% 64% 36% 41%",
              backgroundColor: " rgb(27,232,186)",
              background:
                " linear-gradient(  rgba(40,147,47,0.3232143882943803) 24%, rgba(43,127,218,0.4865197104232318) 63%)",
              // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 9.5px )",
              WebkitBackdropFilter: "blur( 9.5px )",
              transition:"width 0.5s ease-in, height 0.5s ease-in"
            }}
            onClick={() => handleNaviagtiontoHouse("village")}
          >
            Village House
          </div>

          <div
          
            className="bg-white mobile:w-24 mobile:h-24 lgMobile:w-32 lgMobile:h-32 sm:w-48 sm:h-48 xl:w-64 xl:h-64 flex items-center justify-center  text-[rgba(193,242,217)] font-bold mobile:text-[8px] sm:text-xs xl:text-xl    cursor-pointer"
            style={{
              borderRadius: "20% 65% 34% 66% / 59% 64% 36% 41%",
              backgroundColor: " rgb(27,232,186)",
              background:
                " linear-gradient(  rgba(90,47,147,0.3232143882943803) 24%, rgba(43,127,218,0.4865197104232318) 63%)",
              // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 9.5px )",
              WebkitBackdropFilter: "blur( 9.5px )",
              transition:"width 0.5s ease-in, height 0.5s ease-in"
            }}
            onClick={() => handleNaviagtiontoHouse("chantier")}
          >
            Chantier House
          </div> */}
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
