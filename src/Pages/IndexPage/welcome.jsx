import { Box } from "@chakra-ui/react";
//  import AllFunctions from "../components/functions";
import LoginModal from "../../components/Modals/loginModal";
import { ReactSVG } from "react-svg";
import DoorLogo from "../../assets/doorLogo.svg";
import SignUpModal from "../../components/Modals/signUpModal";
const Welcome = () => {
  // const { handleNaviagtiontoHomePage } = AllFunctions();
  return (
    <div className="w-full h-[100vh] ">
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <Box>
          <Box className="absolute top-4 right-6">
            <SignUpModal />
          </Box>

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
            <Box>
              <LoginModal />
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Welcome;
