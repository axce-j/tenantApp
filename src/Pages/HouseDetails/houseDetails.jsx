import { Icon,  SearchIcon,   ViewIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  GenericAvatarIcon,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";

const HouseDetails = () => {
  const years = Array.from({ length: 2024 - 2000 + 1 }, (_, i) => 2024 - i);
  const dummyData = [
    {
      Name: "Alex Mironde",
      Month: "December",
      Status: "Not Payed",
      HouseId: "2",
      HouseName: "FirstHouse   ",
      HouseLocation: "Bridge Rideaux",
    },
    {
      Name: "Saiid Aido",
      Month: "November",
      Status: "Not Payed",
      HouseId: "2",
      HouseName: "FirstHouse   ",
      HouseLocation: "Bridge Rideaux",
    },
    {
      Name: "Reise Ipla",
      Month: "October",
      Status: "Not Payed",
      HouseId: "2",
      HouseName: "FirstHouse  ",
      HouseLocation: "Bridge Rideaux",
    },
    {
      Name: "Cona plooter",
      Month: "September",
      Status: "Not Payed",
      HouseId: "2",
      HouseName: "FirstHouse  ",
      HouseLocation: "Bridge Rideaux",
    },
    {
      Name: "Maxim Loit",
      Month: "August",
      Status: "Not Payed",
      HouseId: "2",
      HouseName: "FirstHouse   ",
      HouseLocation: "Bridge Rideaux",
    },
    {
      Name: "Fede Larus O. P.",
      Month: "July",
      Status: "Not Payed",
      HouseId: "2",
      HouseName: "FirstHouse   ",
      HouseLocation: "Bridge Rideaux",
    },
    {
      Name: "Ebode Rem",
      Month: "June",
      Status: "Pending",
      HouseId: "2",
      HouseName: "FirstHouse  ",
      HouseLocation: "Bridge Rideaux",
    },
    {
      Name: "Chrin Loot",
      Month: "May",
      Status: "Payed",
      HouseId: "2",
      HouseName: "FirstHouse  ",
      HouseLocation: "Bridge Rideaux",
    },
    {
      Name: "Allet Fisayo",
      Month: "April",
      Status: "Payed",
      HouseId: "2",
      HouseName: "FirstHouse  ",
      HouseLocation: "Bridge Rideaux",
    },
    {
      Name: "Zack Niom",
      Month: "March",
      Status: "Payed",
      HouseId: "2",
      HouseName: "FirstHouse   ",
      HouseLocation: "Bridge Rideaux",
    },
    {
      Name: "Tora Pole",
      Month: "Febuary",
      Status: "Payed",
      HouseId: "2",
      HouseName: "FirstHouse   ",
      HouseLocation: "Bridge Rideaux",
    },
    {
      Name: "Christian Tfoot",
      Month: "January",
      Status: "Payed",
      HouseId: "2",
      HouseName: "FirstHouse   ",
      HouseLocation: "Bridge Rideaux",
    },
  ];
  return (
    <Box className="flex flex-col gap-6 mt-8">
      <Box className="text-xl font-bold text-center text-white">
        {" "}
        Appartment History
      </Box>
      <InputGroup className="flex justify-end pr-4">
        <InputLeftAddon bg="blue.900">
          <SearchIcon color="white" />
        </InputLeftAddon>
        <Input
          fontSize="12px"
          w="6rem"
          placeholder="Filter"
          className="text-white focus:outline-none"
        />
      </InputGroup>
      {/* View House History
        </Input> */}
      <Box className="flex justify-center">
        <Card bg="gray.100" w="100vw" rounded="3px">
          {/* <Box p="2" pl="6" className="text-2xl font-semibold ">
  2024
</Box> */}
          <Box>
            <Accordion allowToggle>
              {years &&
                years?.map((items, index) => {
                  return (
                    <AccordionItem key={index}>
                      <h2>
                        <AccordionButton>
                          <Box className="w-full text-start">{items}</Box>
                          <ViewIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        display="grid"
                        gridTemplateColumns={{base:"none", sm:"1fr 1fr"}}
                        gap="6px"
                      >
                        {/* <Grid
            templateColumns="1fr 1fr 1fr"
            justifyContent="center"
            alignItems="start"
            textAlign="center"
            className="text-xl font-extrabold font-serif bg-[rgba(41,26,41,0.3)]"
          >
            <Box>Occupant</Box>
            <Box>Date</Box>
            <Box>Payment Status</Box>
          </Grid> */}
                        {dummyData &&
                          dummyData?.map((items, index) => {
                            return (
                              <Grid
                                bg="rgba(2, 2, 9, .9)"
                                p={2}
                                rounded="lg"
                                color="white"
                                // templateColumns="1fr 1fr .5fr .3fr"
                                key={index}
                                px={0}
                              >
                                <Box className="pb-2 pl-2 font-bold text-white">
                                  {items.Month}{" "}
                                </Box>
                                <Grid templateColumns="1fr 1fr" justifyContent="space-between">
                                  <Stack>
                                    {" "}
                                    <Box className="flex items-baseline gap-3 pl-2">
                                      {" "}
                                      <Icon>
                                        {" "}
                                        <GenericAvatarIcon w="18px" h="18px" />
                                      </Icon>
                                      <Box>{items.Name}</Box>{" "}
                                    </Box>
                                    <Box className="flex items-center gap-3 pl-2 ">
                                    <i className="fa fa-credit-card-alt" aria-hidden="true"  style={{
    color: items.Status === "Not Payed" 
      ? "rgba(225,0,0,1)" 
      : items.Status === "Pending" 
      ? "rgba(249,249,7,1)" 
      : "rgba(0,225,112,1)"
  }}></i>
                                      
 
                                       
                                   
                                       <Box>{items.Status}</Box>
                                    </Box>
                                  </Stack>
                                  <Stack className="flex "> 
                                  <Box className="flex items-baseline gap-3 pl-2">
                                      {" "}
                                         {" "}
                                        <i className="fa fa-home" aria-hidden="true"></i>
                                       <Box>{items.HouseName}</Box>{" "}
                                    </Box>
                                    <Box className="flex items-center gap-3 pl-2 ">
                                    <i className="fa fa-thumb-tack" aria-hidden="true"></i>

                                        {/* <UnlockIcon 
                                          color={
                                            items.Status === "Not Payed"
                                              ? "Red"
                                              : items.Status === "Pending"
                                              ? "yellow"
                                              : "green.300"
                                          }
                                        /> */}
                                      <Box>{items.HouseLocation}</Box>
                                    </Box>
                                  </Stack>
                                </Grid>
                              </Grid>
                            );
                          })}
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
            </Accordion>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
export default HouseDetails;
