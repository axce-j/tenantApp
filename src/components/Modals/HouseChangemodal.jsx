import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import AllFunctions from "../functions";
function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { houseNames, handleNaviagtiontoHouse } = AllFunctions();
  return (
    <>
      <Button
        bgColor="transparent"
        onClick={onOpen}
        className="w-fit bg-rgba(33,113,3)"
      >
        <i className="fa fa-home fa-lg text-white " aria-hidden="true"></i>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Houses</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box className="flex flex-col gap-3">
              {houseNames &&
                houseNames?.map((items, index) => {
                  return (
                    <Button
                      key={index}
                      bg="rgba(111, 72, 66, 1)"
                      color="white"
                      mr={3}
                      onClick={(onClose, () => handleNaviagtiontoHouse(`${items[1][2]}`))}
                    >
                      {items[1][0]
                      }
                    </Button>
                  );
                })}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default BasicUsage;
