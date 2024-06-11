import { AddIcon,  TriangleDownIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";
import AllFunctions from "./functions";
import houseImage from "../assets/home-page-brown-2.png";
import eyeIcon from "../assets/eye-icon.png";
import noUsers from "../assets/No-users-3.png";
import userImage from "../assets/tenantImage5.png";
import ChangeUserModal from "./Modals/changeUserModal";
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
import BasicUsage from "./Modals/HouseChangemodal";
import UserDetailModal from "./Modals/userDetailModal";

const HouseTemplate = (props) => {
  const tenantsNames = props.tenantsNames;
  const tenantDetails = props.tenantDetails;
   const { houseNames } = AllFunctions();
  const houseId = tenantsNames[1][0] - 1;
  const houseuserName= houseNames[houseId][1][2]
  console.log(tenantsNames);
    

  return (
    <Box className="flex flex-col  justify-center px-6  sm:pb-32  ">
      <Box className="ml-[-14px] pt-2">
        {" "}
        <BasicUsage />{" "}
      </Box>

      <Box className="  flex flex-col gap-4 justify-center items-center w-full mobile:mb-12">
        <Box className="mobile:text-2xl bread-words sm:text-5xl text-[rgba(220,239,214,.95)] font-bold">
          {houseNames[houseId][1][0]}
        </Box>
        <Box className="sm:text-xs mobile:text-[12px]">
          <span className=" text-[rgba(288,232,32,0.8)]">Location: </span>
          <span className="italic font-medium tracking-wider text-[rgba(222,235,199,.9)]">
            {houseNames[houseId][1][1]}
          </span>
        </Box>
      </Box>
{/* Desktop version begin  */}
      <Box className=" mobile:hidden sm:flex mobile:flex-col sm:flex-col-reverse gap-8">
        

        <Tabs
          isFitted
          variant="enclosed"
          display="flex"
          alignItems="center"
          height={{ base: "auto", sm: "auto" }}
          minHeight={{ base: "auto", sm: "80vh" }}
          gap="8px"
          flexDirection={{ base: "column", sm: "row" }}
        >
          <TabList
            w={{ base: "auto", sm: "50%" }}
            height="50vh"
            display="flex"
            flexDirection="column"
            gap="6"
            className="text-white"
          >
            {/* <Box className="flex gap-4 sm:hidden mobile:pl-4  items-center justify-center ">
              <span> View Tenants</span>{" "}
              <TriangleDownIcon
                className="bg-[rgba(109,75,62,1)] p-2 font-bold rounded-full"
                boxSize={6}
              />
            </Box> */}

            <Box className="flex  gap-4 mobile:pl-4  items-center  ">
              <span>Tenants</span>{" "}
              <AddIcon
                className="bg-[rgba(109,75,62,1)] p-2 font-bold rounded-full"
                boxSize={6}
              />
            </Box>
            <Box
              mb="1em"
              display="flex"
              flexDirection="column"
              overflow="scroll"
              w="100%"
              overflowY="scroll"
              overflowX="hidden"
              justifyContent="start"
              textDecorationLine=""
              sx={{
                "&::-webkit-scrollbar": {
                  width: "4px", // Change the height of the scrollbar
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: " rgba(113,82,121,.2)", // Change the color of the scrollbar thumb
                  borderRadius: "4px", // Change the border radius of the scrollbar thumb
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "transparent", // Change the color of the scrollbar track
                },
              }}
            >
              <Box className="flex flex-col w-full items-start justify-start">
                {tenantsNames[0] &&
                  tenantsNames[0]?.map((items, index) => {
                    return (
                      <Tab
                        key={index}
                        width="100%"
                        color="rgba(250,239,244,.8)"
                        padding="3"
                        className="grid text-white font mobile:min-w-[150px] mobile:text-xs sm:text-base  sm:min-w-[200px] "
                        _selected={{
                          color: "white",
                          bg: "rgba(250,239,244,.25)",
                        }}
                      >
                        <Box className="w-full flex  items-center justify-between">
                          <Box className="flex w-[66%] items-center justify-start gap-12">
                            <div
                              style={{
                                backgroundImage: `url(${houseImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "40px", // Adjust the width as necessary
                                height: "40px", // Adjust the height as necessary
                              }}
                              className="flex  items-end font-bold py-1 justify-center"
                            >
                              <span>{index + 1}</span>
                            </div>
                            <div> {items[1]}</div>
                          </Box>
                          <div className="w-6 h-6 ">
                            <img src={eyeIcon} alt="eye icon" />
                          </div>
                        </Box>
                      </Tab>
                    );
                  })}
              </Box>
            </Box>
          </TabList>

          <TabPanels
            minHeight="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {tenantDetails &&
              tenantDetails?.map((items, index) => {
                if (items[1][0][1] !== "Empty") {
                  return (
                    <TabPanel
                      key={index}
                      minHeight={{ mobile: "auto", sm: "100%" }}
                    >
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        // variant="outline"
                        height={{ base: "auto", sm: "36rem" }}
                      >
                        <Image
                          bgColor="rgba(36,54,88,.5)"
                          objectFit="cover"
                          maxW={{ base: "100%", sm: "40%" }}
                          src={items[0]}
                          // src={noUsers}
                          alt="Caffe Latte"
                        />
                        <Box
                          display="flex"
                          className="w-full mobile:flex-col mobile:text-xs md:text-xs lg:text-base sm:flex-col justify-between"
                        >
                          <Stack width="100%">
                            <CardBody
                              display="flex"
                              flexDirection="column"
                              gap="12px"
                            >
                              <Heading size="md">
                                Information on tenant in{" "}
                                {`Appartement ${items[1][0][0]}`}
                              </Heading>
                              <Box
                                display="flex"
                                flexDirection="column"
                                gap="12px"
                              >
                                <Box
                                  style={{
                                    backgroundColor: "rgb(15,163,130)",
                                    background:
                                      "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,63,130,0.8688725490196079) 46%)",
                                  }}
                                  className="flex justify-between text-white italic p-1 px-3 rounded font-bold"
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
                                  className="flex justify-between text-white italic p-1 px-3 rounded font-bold"
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
                                  className="flex justify-between text-white italic p-1 px-3 rounded font-bold"
                                >
                                  {" "}
                                  <span>Start Date:</span>
                                  <span>{items[1][0][3]}</span>
                                </Box>
                              </Box>
                            </CardBody>

                            <CardFooter paddingTop="0">
                              <Button
                                variant="solid"
                                padding={4}
                                className="bg-gary-200"
                              >
                                Edit
                              </Button>
                            </CardFooter>
                          </Stack>

                          <Stack width="100%">
                            <CardBody
                              display="flex"
                              flexDirection="column"
                              gap="12px"
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
                                className="flex justify-between text-white italic p-1 px-3 rounded font-bold mobile:gap-3"
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
                                className="flex justify-between text-white italic p-1 px-3 rounded font-bold mobile:gap-3"
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
                                className="flex justify-between text-white italic p-1 px-3 rounded font-bold mobile:gap-3"
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
                                className="flex justify-between text-white italic p-1 px-3 rounded font-bold mobile:gap-3"
                              >
                                <span>Rent Status</span>
                                <span>{items[1][1][4]}</span>
                              </Box>
                            </CardBody>

                            <CardFooter paddingTop="0">
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
                } else {
                  return (
                    <TabPanel key={index} minHeight="100%">
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        // variant="outline"
                        backgroundColor="blue.900"
                        height={{ base: "auto", sm: "32rem" }}
                        minHeight={{ base: "32rem", sm: "auto" }}
                        className="flex items-center justify-center"
                      >
                        <Box
                          display="flex"
                          className="w-full  flex-col mobile:text-xs md:text-xs lg:text-base   justify-center items-center"
                        >
                          <Image
                            bgColor="rgba(36,54,88,.5)"
                            objectFit="cover"
                            maxW={{ base: "50%", sm: "30%" }}
                            src={noUsers}
                            // src={noUsers}
                            alt="Caffe Latte"
                          />

                          <Box className="text-white font-bold sm:text-4xl mobile:text-2xl">
                            Residence Un-used
                          </Box>
                          <Box>
                            <i className="fa fa-frown-o" aria-hidden="true"></i>
                          </Box>
                        </Box>
                      </Card>
                    </TabPanel>
                  );
                }
              })}
          </TabPanels>
        </Tabs>
      </Box>
{/* Desktop version end */}

{/* mobile version begin */}
      <Box className=" mobile:flex sm:hidden mobile:flex-col sm:flex-col-reverse gap-5">
           {" "}

          <Box className="flex justify-between">
          <Box className="flex gap-4 sm:hidden mobile:pl-4  items-center justify-center text-white">
            <span> View Tenants</span>{" "}
            <TriangleDownIcon
              className="bg-[rgba(109,75,62,1)] p-2 font-bold rounded-full"
              boxSize={6}
            />
          </Box>
           <ChangeUserModal tenantsNames={tenantsNames}/>

          </Box>
         



          <Box
            mb="1em"
            display="flex"
            flexDirection="column"
            overflow="scroll"
            w="100%"
            overflowY="scroll"
            overflowX="hidden"
            justifyContent="start"
            textDecorationLine=""
            sx={{
              "&::-webkit-scrollbar": {
                width: "4px", // Change the height of the scrollbar
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: " rgba(113,82,121,.2)", // Change the color of the scrollbar thumb
                borderRadius: "4px", // Change the border radius of the scrollbar thumb
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent", // Change the color of the scrollbar track
              },
            }}
          >
            <Box className="flex flex-col w-full items-start justify-start text-white">
              {tenantsNames[0] &&
                tenantsNames[0]?.map((items, index) => {
                  return (
                    <Box
                      key={index}
                      width="100%"
                      color="rgba(250,239,244,.8)"
                      padding="3"
                      className="grid text-white font mobile:min-w-[150px] mobile:text-xs sm:text-base  sm:min-w-[200px] "
                      _selected={{
                        color: "white",
                        bg: "rgba(250,239,244,.25)",
                      }}
                    >
                      <Box className="w-full flex  items-center justify-between">
                        <Box className="flex w-[66%] items-center justify-start gap-12">
                          <div
                            style={{
                              backgroundImage: `url(${userImage})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              width: "60px", // Adjust the width as necessary
                              height: "60px", // Adjust the height as necessary
                            }}
                            className="flex  items-end font-bold py-1 justify-center rounded-full"
                          >
                            {/* <span>{index + 1}</span> */}
                          </div>
                          <div> {items[1]}</div>
                        </Box>
                        <Box>
                          <UserDetailModal
                            tenantDetails={tenantDetails}
                            tenantsNames={tenantsNames}
                            itemId={Number(index)}
                            houseuserName={houseuserName}
                          />
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
          </Box>
        </Box>
 
      {/* mobile version end */}
    </Box>
  );
};
HouseTemplate.propTypes = {
  tenantsNames: PropTypes.arrayOf(PropTypes.array),
  tenantDetails: PropTypes.arrayOf(PropTypes.array),
};

export default HouseTemplate;
