import { AddIcon, SmallAddIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

// import AllFunctions from "../components/functions";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const HouseTemplate = (props) => {
  const tenantsNames = props.tenantsNames;
  const tenantDetails = props.tenantDetails;

  return (
    <div className="text-white w-full flex flex-col gap-8  ">
      <div className=" pt-4 flex flex-col gap-4 justify-center items-center w-full">
        <Box className="mobile:text-2xl bread-words sm:text-5xl text-green-400 font-bold">
          Village House
        </Box>
        <Box className="sm:text-xs mobile:text-[12px]">
          <span className="text-[rgba(222,235,199,.7)]">Location: </span>
          <span className="italic font-bold tracking-wider">
            {" "}
            New-town Aeroport Douala Elf
          </span>
        </Box>
      </div>
      <div className="w-full grid mobile:grid-cols-[auto] lg:grid-cols-[25%,1fr] mobile:gap-8 lg:gap-0 mobile:max-w-screen-sm ">
        {/* <div
          className=" flex flex-col  mobile:justify-center mobile:items-start
         lgMobile:justify-center lgMobile:items-center 
         sm:justify-center sm:items-center  gap-6 p-1 "
        >
          <div className="flex gap-4 mobile:pl-4  items-center  ">
            <span>Appartments</span>{" "}
            <AddIcon
              className="bg-[rgba(22,221,132,.5)] p-2 font-bold rounded-full"
              boxSize={6}
            />
          </div>
          <div className=" flex mobile:gap-5 lg:flex-col sm:gap-4  mobile:overflow-x-scroll sm:overflow-hidden mobile:max-w-screen-sm   ">
            {tenantsNames &&
              tenantsNames?.map((items, index) => {
                return (
                  <div
                    key={index}
                    className="lg:w-48  lg:h-24 mobile:w-24 mobile:h-24 sm:w-32 sm:h-32 flex flex-col justify-center items-center relative"
                    style={{
                      borderRadius: "36% 37% 27% 30% / 45% 33% 48% 52%",
                      background: "rgba( 81, 90, 85, 0.8 )",
                      // boxShadow: "0 5px 17px 0 rgba( 21, 138, 35, 0.37 )",
                      backdropFilter: "blur( 7.5px )",
                      WebkitBackdropFilter: "blur( 7.5px )",
                    }}
                  >
                    <Box className=" flex justify-center items-center bg-[rgba(22,221,132,.5)] sm:w-10 sm:h-10 mobile:w-6  mobile:h-6 rounded-full p-2 lg:text-[10px] mobile:text-[6px] sm:text-xs font-bold absolute lg:top-4 mobile:top-2 mobile:left-4 lg:left-3">
                      {items[0]}
                    </Box>
                    <Box className="pt-2 mobile:text-[8px] sm:text-[12px] lg:absolute lg:bottom-5 lg:right-6 lg:text-base text-center  font-bold">
                      {items[1]}
                    </Box>
                  </div>
                );
              })}
          </div>
        </div> */}
<div>e</div>
        <div className=" w-full px-6 flex justify-center">
          <Tabs
            size="md"
            variant="enclosed"
            className="lmobile:w-[80vw] xl:w-[60vw] lg:w-[65vw]"
          >
            <TabList width="90%" marginLeft="22px" justifyContent="start">
              <Box
                width="100%"
                display="flex"
                flexDirection="row"
                overflowX="scroll"
                overflowY="hidden"
                paddingX="30px"
                marginBottom="5px"
                borderLeft="2px solid rgba(255,213,203,.2)"
                borderRight="2px solid rgba(255,213,203,.2)"
                borderRadius="10px"
                sx={{
                  "&::-webkit-scrollbar": {
                    height: "6px", // Change the height of the scrollbar
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: " transparent", // Change the color of the scrollbar thumb
                    borderRadius: "4px", // Change the border radius of the scrollbar thumb
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "transparent", // Change the color of the scrollbar track
                  },
                }}
              >
                {tenantsNames &&
                  tenantsNames?.map((items, index) => {
                    return (
                      <Tab
                        className="w-full min-w-[220px] "
                        fontSize={{
                          sm: "x-small",
                          lg: "large",
                          base: "xx-small",
                        }}
                        key={index}
                        _selected={{ color: "white", bg: "green.500" }}
                      >
                        {items[1]}
                      </Tab>
                    );
                  })}
              </Box>

              <button>
                <SmallAddIcon />
              </button>
            </TabList>
            <TabPanels>
              {/* maping tenant details here */}
              {tenantDetails &&
                tenantDetails.map((items, index) => {
                  return (
                    <TabPanel key={index}>
                      <Card
                        direction={{ base: "column", sm: "column", lg: "row" }}
                        overflow="hidden"
                        // variant="outline"
                      >
                        <Image
                          className=" w-full bg-green-400"
                          objectFit="cover"
                          maxW={{ base: "100%", sm: "100%", lg: "50%" }}
                          src={items[0]}
                          alt="tenant Identification"
                        />
                        <Box
                          direction={{
                            base: "column",
                            sm: "column",
                            lg: "row",
                          }}
                          gap={0}
                        >
                          <Stack padding={0} className="flex flex-col gap-1">
                            <CardBody
                              className="flex flex-col text-xs font-medium gap-3 "
                              paddingLeft="4"
                              paddingBottom="1"
                            >
                              <Heading size="md">
                                Information on tenant in{" "}
                                {`Appartement ${items[1][0][0]}`}
                              </Heading>

                              <Box
                                style={{
                                  backgroundColor: "rgb(15,163,130)",
                                  background:
                                    "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,63,130,0.8688725490196079) 46%)",
                                }}
                                className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold"
                              >
                                <span>Name:</span>
                                <span>{items[1][0][1]}</span>
                              </Box>
                              <Box
                                style={{
                                  backgroundColor: "rgb(15,163,130)",
                                  background:
                                    "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,63,130,0.8688725490196079) 46%)",
                                }}
                                className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold"
                              >
                                <span>Rent:</span>
                                <span> {items[1][0][2]}</span>
                              </Box>
                              <Box
                                style={{
                                  backgroundColor: "rgb(15,163,130)",
                                  background:
                                    "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,63,130,0.8688725490196079) 46%)",
                                }}
                                className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold"
                              >
                                {" "}
                                <span>Start Date:</span>
                                <span>{items[1][0][3]}</span>
                              </Box>
                            </CardBody>

                            <CardFooter
                              paddingLeft={6}
                              paddingTop={0}
                              paddingBottom={2}
                            >
                              <Button
                                variant="solid"
                                padding={4}
                                className="bg-gary-200"
                              >
                                Edit
                              </Button>
                            </CardFooter>
                          </Stack>

                          <Stack padding={0} className="flex flex-col gap-1">
                            <CardBody
                              className="flex flex-col text-xs font-medium gap-3 "
                              paddingLeft="4"
                              paddingBottom="1"
                            >
                              <Heading size="md">
                                Information on Rent in{" "}
                                {`Appartment  ${items[1][1][0]}`}
                              </Heading>
                              <Box
                                style={{
                                  backgroundColor: "rgb(15,163,130)",
                                  background:
                                    "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,163,130,0.8688725490196079) 46%)",
                                }}
                                className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold"
                              >
                                <span>Rent/month</span>
                                <span>{items[1][1][1]}</span>
                              </Box>

                              <Box
                                style={{
                                  backgroundColor: "rgb(15,163,130)",
                                  background:
                                    "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,163,130,0.8688725490196079) 46%)",
                                }}
                                className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold"
                              >
                                <span>Rent/month</span>
                                <div>{items[1][1][2]}</div>
                              </Box>

                              <Box
                                style={{
                                  backgroundColor: "rgb(7,10,9)",
                                  background:
                                    " linear-gradient(90deg, rgba(7,10,9,0.780098039215687) 30%, rgba(163,15,50,0.8688725490196079) 46%)",
                                }}
                                className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold"
                              >
                                <span>Total rent Not payed</span>
                                <span>{items[1][1][3]}</span>
                              </Box>
                              <Box
                                style={{
                                  backgroundColor: "rgb(7,10,9)",
                                  background:
                                    " linear-gradient(90deg, rgba(7,10,9,0.780098039215687) 30%, rgba(163,15,50,0.8688725490196079) 46%",
                                }}
                                className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold"
                              >
                                <span>Rent Status</span>
                                <span>{items[1][1][4]}</span>
                              </Box>
                            </CardBody>

                            <CardFooter paddingLeft={6} paddingTop={0}>
                              <Button
                                variant="solid"
                                padding={4}
                                className="bg-gary-200"
                              >
                                Edit
                              </Button>
                            </CardFooter>
                          </Stack>
                        </Box>
                      </Card>
                    </TabPanel>
                  );
                })}
              {/* end mapping tenant details here */}
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
HouseTemplate.propTypes = {
  tenantsNames: PropTypes.arrayOf(PropTypes.array),
  tenantDetails: PropTypes.arrayOf(PropTypes.array),
};

export default HouseTemplate;
