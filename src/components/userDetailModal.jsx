import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  
  useDisclosure,
} from "@chakra-ui/react";
import eyeIcon from "../assets/eye-icon.png";
// import { AddIcon, TriangleDownIcon } from "@chakra-ui/icons";
// import AllFunctions from "./functions";
import PropTypes from "prop-types";

import noUsers from "../assets/No-users-3.png";
import AllFunctions from "./functions";

function UserDetailModal(props) {
  
  const itemId=props.itemId;
  const {seeUser,handleChangeofUserviewing}=AllFunctions()
  const houseuserName= props.houseuserName
  const tenant= seeUser[houseuserName]&& seeUser[houseuserName]
  console.log(tenant[2]);
  //  console.log(itemId);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box className="w-6 h-6" onClick={() => { onOpen(); handleChangeofUserviewing(itemId); }}>
  <img src={eyeIcon} alt="eye icon" />
</Box>


      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Box>
          <ModalContent>
            <ModalHeader>Sign-in</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box className="flex flex-col gap-3">
              {tenant&&tenant[1][0][1] !== "Empty" ? (
        <Box  minHeight={{ mobile: "auto", sm: "100%" }}>
          <Card direction={{ base: "column", sm: "row" }} overflow="hidden" height={{ base: "auto", sm: "32rem" }}>
            <Image
              bgColor="rgba(36,54,88,.5)"
              objectFit="cover"
              maxW={{ base: "100%", sm: "40%" }}
              src={tenant[0]}
              alt="Caffe Latte"
            />
            <Box className="w-full mobile:flex-col mobile:text-xs md:text-xs lg:text-base sm:flex-col justify-between">
              <Stack width="100%">
                <CardBody display="flex" flexDirection="column" gap="12px">
                  <Heading size="md">Information on tenant in {`Appartement ${tenant[1][0][0]}`}</Heading>
                  <Box display="flex" flexDirection="column" gap="12px">
                    <Box
                      style={{
                        backgroundColor: "rgb(15,163,130)",
                        background: "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,63,130,0.8688725490196079) 46%)",
                      }}
                      className="flex justify-between text-white italic p-1 px-3 rounded font-bold"
                    >
                      <span>Name:</span>
                      <span>{tenant[1][0][1]}</span>
                    </Box>
                    <Box
                      style={{
                        backgroundColor: "rgb(15,163,130)",
                        background: "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,63,130,0.8688725490196079) 46%)",
                      }}
                      className="flex justify-between text-white italic p-1 px-3 rounded font-bold"
                    >
                      <span>Rent:</span>
                      <span>{tenant[1][0][2]}</span>
                    </Box>
                    <Box
                      style={{
                        backgroundColor: "rgb(15,163,130)",
                        background: "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,63,130,0.8688725490196079) 46%)",
                      }}
                      className="flex justify-between text-white italic p-1 px-3 rounded font-bold"
                    >
                      <span>Start Date:</span>
                      <span>{tenant[1][0][3]}</span>
                    </Box>
                  </Box>
                </CardBody>
                <CardFooter paddingTop="0">
                  <Button variant="solid" padding={4} className="bg-gray-200">
                    Edit
                  </Button>
                </CardFooter>
              </Stack>
              <Stack width="100%">
                <CardBody display="flex" flexDirection="column" gap="12px">
                  <Heading size="md">Information on Rent in {`Appartment ${tenant[1][1][0]}`}</Heading>
                  <Box
                    style={{
                      backgroundColor: "rgb(15,163,130)",
                      background: "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,163,130,0.8688725490196079) 46%)",
                    }}
                    className="flex justify-between text-white italic p-1 px-3 rounded font-bold mobile:gap-3"
                  >
                    <span>Rent/month</span>
                    <span>{tenant[1][1][1]}</span>
                  </Box>
                  <Box
                    style={{
                      backgroundColor: "rgb(15,163,130)",
                      background: "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,163,130,0.8688725490196079) 46%)",
                    }}
                    className="flex justify-between text-white italic p-1 px-3 rounded font-bold mobile:gap-3"
                  >
                    <span>Rent/month</span>
                    <div>{tenant[1][1][2]}</div>
                  </Box>
                  <Box
                    style={{
                      backgroundColor: "rgb(7,10,9)",
                      background: "linear-gradient(90deg, rgba(7,10,9,0.780098039215687) 30%, rgba(163,15,50,0.8688725490196079) 46%)",
                    }}
                    className="flex justify-between text-white italic p-1 px-3 rounded font-bold mobile:gap-3"
                  >
                    <span>Total rent Not payed</span>
                    <span>{tenant[1][1][3]}</span>
                  </Box>
                  <Box
                    style={{
                      backgroundColor: "rgb(7,10,9)",
                      background: "linear-gradient(90deg, rgba(7,10,9,0.780098039215687) 30%, rgba(163,15,50,0.8688725490196079) 46%)",
                    }}
                    className="flex justify-between text-white italic p-1 px-3 rounded font-bold mobile:gap-3"
                  >
                    <span>Rent Status</span>
                    <span>{tenant[1][1][4]}</span>
                  </Box>
                </CardBody>
                <CardFooter paddingTop="0">
                  <Button variant="solid" padding={4} className="bg-gray-200">
                    Edit
                  </Button>
                </CardFooter>
              </Stack>
            </Box>
          </Card>
        </Box>
      ) : (
        <Box minHeight="100%">
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            backgroundColor="blue.900"
            height={{ base: "auto", sm: "32rem" }}
            minHeight={{ base: "32rem", sm: "auto" }}
            className="flex items-center justify-center"
          >
            <Box className="w-full flex-col mobile:text-xs md:text-xs lg:text-base justify-center items-center">
              <Image
                bgColor="rgba(36,54,88,.5)"
                objectFit="cover"
                maxW={{ base: "50%", sm: "30%" }}
                src={noUsers}
                alt="Caffe Latte"
              />
              <Box className="text-white font-bold sm:text-4xl mobile:text-2xl">Residence Un-used</Box>
              <Box>
                <i className="fa fa-frown-o" aria-hidden="true"></i>
              </Box>
            </Box>
          </Card>
        </Box>
      )}
              </Box>
            </ModalBody>
          </ModalContent>
        </Box>
      </Modal>
    </>
  );
}
UserDetailModal.propTypes = {
  itemId: PropTypes.number,
  houseuserName: PropTypes.string,
};
export default UserDetailModal;
