import SigninImage from "../../assets/signup.png";

import {
  // AbsoluteCenter,
  Box,
  Card,
  CardBody,
  CardHeader,
  // Divider,
  Grid,
  Stack,
} from "@chakra-ui/react";
 // import AllFunctions from "../../components/functions";
import SignUpComponent from "../../components/inputSignupComponent";

const SignUp = () => {
  // const { handleNaviagtiontoHouse } = AllFunctions();
  return (
    <Box
      h="100vh"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid templateColumns={{ base:"none" , sm:"1.9fr 1fr"}} w="100%" px="60px" justifyContent="center" alignItems="center">
        <Box display={{base:"none", sm:"flex"}} justifyContent="center">
          <img src={SigninImage} alt="" width="600px" />
        </Box>


        <Box>

        <Card className="p-2"   >
          <CardHeader className="text-center font-bold text-2xl">
            Sign Up
          </CardHeader>
          <CardBody>
<Stack>
            <Box >
              <SignUpComponent/>
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

export default SignUp;
