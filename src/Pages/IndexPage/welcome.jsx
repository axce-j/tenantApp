import { Box, Button } from "@chakra-ui/react";
//  import AllFunctions from "../components/functions";
 import { ReactSVG } from "react-svg";
import DoorLogo from "../../assets/doorLogo.svg";
 import AllFunctions from "../../components/functions";
const Welcome = () => {
  const { handleNaviagtiontoHouse } = AllFunctions();
  return (
    <div className="w-full h-[100vh] ">
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <Box>
          <Box className="absolute top-4 right-6">
          <Button
          bgColor="transparent"
          onClick={()=>handleNaviagtiontoHouse("sign-up")}
          className="w-fit bg-rgba(33,113,3)"
        >
          <i
         className="fa fa-user-plus text-white" aria-hidden="true"></i>
        </Button>          </Box>

          <Box className="flex flex-col gap-24">
            <div className="flex items-center justify-center gap-3">
              <div className="font-bold text-center text-white mobile:text-xl sm:text-5xl">
                Welcome
              </div>

              <ReactSVG
                src={DoorLogo}
                beforeInjection={(svg) => {
                  svg.setAttribute("style", "width: 40px; height: 40px;");
                  svg
                    .querySelector("path")
                    .setAttribute(
                      "style",
                      "stroke-width: 0; fill: rgba(97, 72, 66, 1); stroke:rgba(97, 72, 66, 1)"
                    );
                }}
              />
            </div>
            <Box
      onClick={()=>handleNaviagtiontoHouse("sign-in")}
        className="bg-custom-brown-gradient flex flex-col  mobile:w-48 mobile:h-48  sm:w-72 sm:h-72 flex items-center justify-center  text-white font-bold mobile:text-sm sm:text-xl animate-bounce-effect cursor-pointer relative "
        style={{
          borderRadius: "20% 65% 34% 66% / 59% 64% 36% 41%",
          
          // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 9.5px )",
          WebkitBackdropFilter: "blur( 9.5px )",
        }}
        // onClick={() => handleNaviagtiontoHomePage()}
      >
        <span> MR Chinedu TenantApp</span>{" "}
        <i
          className="fa fa-2x fa-sign-in absolute right-[20%] bottom-[20%]"
          aria-hidden="true"
        ></i>
      </Box>
            {/* <Box>
              <LoginModal />
            </Box> */}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Welcome;
