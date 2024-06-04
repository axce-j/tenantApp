import { AddIcon, SmallAddIcon } from "@chakra-ui/icons";
import tenantImage from "../assets/tenantImage.png";
import tenantImage2 from "../assets/tenantImage2.png";
import tenantImage3 from "../assets/tenantImage3.png";
import tenantImage4 from "../assets/tenantImage4.png";
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

const VillageHouse = () => {
  // to be deleted later

  const tenantsNames = [
    ["App1", "Mr Guenebe Louis"],
    ["App2", "Mr Hamadou"],
    ["App3", "Mr aksodh"],
    ["App4", "MrXYZAS"],
  ];

  const tenantDetails = [
    [
      [tenantImage],
      [
        ["1", "Mr Guenebe Louis", "200000xaf", "23-06-2020"],
        ["1", "200,000XAF", "1Y  5M  16D", "600,000XAF", "3 months unpaid"],
      ],
    ],
    [
      [tenantImage2],
      [
        ["2", "Mr Hamadou", "200000xaf", "23-06-2022"],
        ["2", "200,000XAF", "1Y  2M  19D", "200,000XAF", "1 month unpaid"],
      ],
    ],
    [
      [tenantImage3],
      [
        ["3", "Mr aksodh", "200000xaf", "13-12-2018"],
        ["3", "180,000XAF", "3Y  2M  29D", "2,160,000XAF", "12 months unpaid"],
      ],
    ],
    [
      [tenantImage4],
      [
        ["4", "Mr Xyzas", "200000xaf", "20-08-2022"],
        ["1", "200,000XAF", "2Y  1M  16D", "0XAF", "0 months unpaid"],
      ],
    ]
  ];

  return (
    <div className="text-white w-full flex flex-col gap-8">
      <div className=" pt-4 flex flex-col gap-4 justify-center items-center w-full">
        <Box className="text-5xl text-green-400 font-bold">Village House</Box>
        <Box className="text-xs">
          <span className="text-[rgba(222,235,199,.7)]">Location: </span>
          <span className="italic font-bold tracking-wider">
            {" "}
            New-town Aeroport Douala Elf
          </span>
        </Box>
      </div>
      <div className="w-full grid mobile:grid-cols-[auto] lg:grid-cols-[20%,1fr] gap-3 ">
        <div className=" flex flex-col sm:justify-center  mobile:justify-center mobile:items-start sm:items-center gap-6 p-1 mobile:overflow-x-scroll lgMobile:overflow-visible">
          <div className="flex gap-4 mobile:pl-4 items-center ">
            <span>Appartments</span>{" "}
            <AddIcon
              className="bg-[rgba(22,221,132,.5)] p-2 font-bold rounded-full"
              boxSize={6}
            />
            {/* <span className=" flex justify-center items-center w-6 h-6 rounded-full bg-white  text-black font-bold text-xl ">
            
            </span> */}
          </div>
          <div className=" flex mobile:gap-5 lg:flex-col sm:gap-4  ">
          {/* mobile:flex mobile:gap-2  sm:grid grid-cols-4 sm:gap-5 */}
            {tenantsNames &&
              tenantsNames?.map((items, index) => {
                return (
                  <div
                    key={index}
                    className="lg:w-48  lg:h-24 mobile:w-24 mobile:h-24 sm:w-32 sm:h-32 flex flex-col justify-center items-center relative"
                    style={{
                      borderRadius: "36% 37% 27% 30% / 45% 33% 48% 52%",
                      background: "rgba( 81, 90, 85, 0.8 )",
                      boxShadow: "0 5px 17px 0 rgba( 21, 138, 35, 0.37 )",
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
        </div>
        <div className="px-6">
          <Tabs size="md" variant="enclosed">
            <TabList>
              {tenantsNames &&
                tenantsNames?.map((items, index) => {
                  return (
                    <Tab
                     fontSize={{sm:"x-small", lg:"large", base:"xx-small" }}                     key={index}
                      _selected={{ color: "white", bg: "green.500" }}
                    >
                      {items[1]}
                    </Tab>
                  );
                })}

              <button>
                <SmallAddIcon />
              </button>
            </TabList>
            <TabPanels>
              {/* maping tenant details here */}
              {
                tenantDetails&&tenantDetails.map((items,index)=>{
                  return(
                    <TabPanel key={index}>
                    <Card
                      direction={{ base: "column", sm: "column", lg: "row" }}
                      // overflow="scroll"
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
                        direction={{ base: "column", sm: "column", lg: "row" }}
                        gap={0}
                      >
                        <Stack padding={0} className="flex flex-col gap-1">
                          <CardBody
                            className="flex flex-col text-xs font-medium gap-3 "
                            paddingLeft="4"
                            paddingBottom="1"
                          >
                            <Heading size="md">
                              Information on tenant in {`Appartement ${items[1][0][0]}`}
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
                            {/* <Box>
                            <Editable defaultValue="Add any valuable information">
                              <EditablePreview />
                              <EditableTextarea />
                            </Editable>
                          </Box> */}
                          </CardBody>
    
                          <CardFooter
                            paddingLeft={6}
                            paddingTop={0}
                            paddingBottom={2}
                          >
                            {/* <Button variant="solid" colorScheme="blue">
                            Submit
                          </Button> */}
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
                              Information on Rent in {`Appartment  ${items[1][1][0]}`}
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
                              <div>
                              {items[1][1][2]}
                              </div>
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
    
                            {/* <Box>
                            <Editable defaultValue="Add any valuable information">
                              <EditablePreview />
                              <EditableTextarea />
                            </Editable>
                          </Box> */}
                          </CardBody>
    
                          <CardFooter paddingLeft={6} paddingTop={0}>
                            {/* <Button variant="solid" colorScheme="blue">
                            Submit
                          </Button> */}
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
                  )
                })
              }
           {/* end mapping tenant details here */}
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default VillageHouse;
