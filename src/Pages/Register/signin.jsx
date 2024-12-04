import LoginImage from "../../assets/login.png";

import {
   Box,
  Card,
  CardBody,
  CardHeader,
   Grid,
  Stack,
} from "@chakra-ui/react";
import InputLoginComponent from "../../components/inputLoginComponent";
import AllFunctions from "../../components/functions";
const SignIn = () => {
  const { handleNaviagtiontoHouse } = AllFunctions();
  return (
    <Box
      h="100vh"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid templateColumns={{ base:"none" , sm:"1.9fr 1fr"}} w="100%" px="60px" justifyContent="center" alignItems="center">
        <Box display={{ base:"none" , sm:"flex"}} justifyContent="center">
          <img src={LoginImage} alt="" width="600px" />
        </Box>
        
        <Box>

        <Card className="p-2"   >
          <CardHeader className="text-center font-bold text-2xl">
            Login
          </CardHeader>
          <CardBody>
<Stack>
            <Box >
              <InputLoginComponent />
            </Box>
            <Box pt="6" className="text-[14px] text-center">
              Forgot{" "}
              <button className="text-teal-700 " onClick={() => handleNaviagtiontoHouse("sign-up")}>
                {" "}
                Username/ Password ?
              </button>
            </Box>
            <Box className="text-center">
              Do not have an Account ?{" "}
              <button className="text-teal-700 font-medium" onClick={() => handleNaviagtiontoHouse("sign-up")}>
                {" "}
                Signup
              </button>
            </Box>

</Stack>
            
            
            {/* <Box position="relative" padding="10">
                <Divider />
                <AbsoluteCenter bg="white" px="4">
                  <span className="text-xl text-gray-600"> Or</span>{" "}
                </AbsoluteCenter>
              </Box>{" "} */}
          </CardBody>
        </Card>
        </Box>
      </Grid>
    </Box>
  );
};

export default SignIn;
