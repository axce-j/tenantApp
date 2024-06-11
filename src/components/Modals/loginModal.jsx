import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import FormikExample from "../inputLoginComponent";
function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { houseNames, handleNaviagtiontoHouse } = AllFunctions();
  return (
    <>
      {/* <Button
        bgColor="transparent"
        onClick={onOpen}
        className="w-fit bg-rgba(33,113,3)"
      >
        <i
       className="fa fa-user-plus text-white" aria-hidden="true"></i>
      </Button> */}

      <Box
      onClick={onOpen}
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Box>
          <ModalContent>
            <ModalHeader>Sign-in</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box className="flex flex-col gap-3">
                <FormikExample />
                {/* <Button
                      key={index}
                      colorScheme="green"
                      mr={3}
                      onClick={(onClose, () => handleNaviagtiontoHouse(`home`))}
                    >
                      {items[1][0]
                      }
                    </Button> */}
              </Box>
            </ModalBody>
          </ModalContent>
        </Box>
      </Modal>
    </>
  );
}
export default LoginModal;
