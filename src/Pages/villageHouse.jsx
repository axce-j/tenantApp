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
  Editable,
  EditablePreview,
  EditableTextarea,
  Heading,
  Image,
  Input,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const VillageHouse = () => {
  return (
    <div className="text-white w-full flex flex-col gap-12">
      <div className=" pt-8 flex flex-col gap-4 justify-center items-center w-full">
        <Box className="text-5xl text-green-400 font-bold">Village House</Box>
        <Box className="text-xs">
          <span className="text-[rgba(222,235,199,.7)]">Location: </span>
          <span className="italic font-bold tracking-wider">
            {" "}
            New-town Aeroport Douala Elf
          </span>
        </Box>
      </div>
      <div className="w-full grid grid-cols-[auto,1fr] gap-5 ">
        <div className=" flex flex-col justify-center items-center gap-6 p-4">
          <div className="flex gap-4 items-center ">
            <span>Appartments</span>{" "}
            <AddIcon
              className="bg-[rgba(22,221,132,.5)] p-2 font-bold rounded-full"
              boxSize={6}
            />
            {/* <span className=" flex justify-center items-center w-6 h-6 rounded-full bg-white  text-black font-bold text-xl ">
            
            </span> */}
          </div>
          <div className="grid grid-cols-2 gap-5 ">
            <div
              className="w-48 h-48 flex flex-col justify-center items-center relative"
              style={{
                borderRadius: "36% 37% 27% 30% / 45% 33% 48% 52%",
                background: "rgba( 81, 90, 85, 0.8 )",
                boxShadow: "0 8px 42px 0 rgba( 21, 138, 35, 0.37 )",
                backdropFilter: "blur( 7.5px )",
                WebkitBackdropFilter: "blur( 7.5px )",
              }}
            >
              <Box className=" flex justify-center items-center bg-[rgba(22,221,132,.5)] w-12 h-12 rounded-full p-2 text-[10px] font-bold absolute top-5 left-4">
                App 1
              </Box>
              <Box className="pt-2  text-center text-base font-bold">
                Mr GUENEBE LOUIS
              </Box>
            </div>
            <div
              className="w-48 h-48 flex flex-col justify-center items-center relative"
              style={{
                borderRadius: "36% 37% 27% 30% / 45% 33% 48% 52%",
                background: "rgba( 81, 90, 85, 0.8 )",
                boxShadow: "0 8px 42px 0 rgba( 21, 138, 35, 0.37 )",
                backdropFilter: "blur( 7.5px )",
                WebkitBackdropFilter: "blur( 7.5px )",
              }}
            >
              <Box className=" flex justify-center items-center bg-[rgba(22,221,132,.5)] w-12 h-12 rounded-full p-2 text-[10px] font-bold absolute top-5 left-4">
                App 2
              </Box>
              <Box className="pt-2  text-center text-base font-bold">
                Mr HAMADOU
              </Box>
            </div>

            <div
              className="w-48 h-48 flex flex-col justify-center items-center relative"
              style={{
                borderRadius: "36% 37% 27% 30% / 45% 33% 48% 52%",
                background: "rgba( 81, 90, 85, 0.8 )",
                boxShadow: "0 8px 42px 0 rgba( 21, 138, 35, 0.37 )",
                backdropFilter: "blur( 7.5px )",
                WebkitBackdropFilter: "blur( 7.5px )",
              }}
            >
              <Box className=" flex justify-center items-center bg-[rgba(22,221,132,.5)] w-12 h-12 rounded-full p-2 text-[10px] font-bold absolute top-5 left-4">
                App 3
              </Box>
              <Box className="pt-2  text-center text-base font-bold">
                Mr aksodh
              </Box>
            </div>

            <div
              className="w-48 h-48 flex flex-col justify-center items-center relative"
              style={{
                borderRadius: "36% 37% 27% 30% / 45% 33% 48% 52%",
                background: "rgba( 81, 90, 85, 0.8 )",
                boxShadow: "0 8px 42px 0 rgba( 21, 138, 35, 0.37 )",
                backdropFilter: "blur( 7.5px )",
                WebkitBackdropFilter: "blur( 7.5px )",
              }}
            >
              <Box className=" flex justify-center items-center bg-[rgba(22,221,132,.5)] w-12 h-12 rounded-full p-2 text-[10px] font-bold absolute top-5 left-4">
                App 4
              </Box>
              <Box className="pt-2  text-center text-base font-bold">
                Mr XYZAS
              </Box>
            </div>
          </div>
        </div>
        <div className="px-2">
          {/* <div className="bg-white rounded-2xl"> rr</div> */}

          <Tabs size="md" variant="enclosed">
            <TabList>
              <Tab _selected={{ color: "white", bg: "green.500" }}>
                Mr GUENEBE LOUIS
              </Tab>
              <Tab _selected={{ color: "white", bg: "green.500" }}>
                Mr HAMADOU
              </Tab>
              <Tab _selected={{ color: "white", bg: "green.500" }}>
                Mr aksodh
              </Tab>
              <Tab _selected={{ color: "white", bg: "green.500" }}>
                Mr XYZAS
              </Tab>
              <button>
                <SmallAddIcon />
              </button>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  // variant="outline"
                >
                  <Image
                    className=" bg-green-400"
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={tenantImage}
                    alt="Caffe Latte"
                  />

                  <Stack>
                    <CardBody className="flex flex-col text-xl font-medium gap-4">
                      <Heading size="md">
                        Information on tenant in {"Appartment 1"}
                      </Heading>

                      <Box>
                        <span>Name:</span>
                        <span>Mr GUENEBE LOUIS</span>
                      </Box>
                      <Box>
                        <span>Rent:</span>
                        <span> 20000$</span>
                      </Box>
                      <Box>
                        <span>Start Date:</span>
                        <span>23-06-2020</span>
                      </Box>
                      {/* <Box>
                        <Editable defaultValue="Add any valuable information">
                          <EditablePreview />
                          <EditableTextarea />
                        </Editable>
                      </Box> */}
                    </CardBody>

                    <CardFooter className="flex w-full justify-between">
                      {/* <Button variant="solid" colorScheme="blue">
                        Submit
                      </Button> */}
                      <Button variant="solid" className="bg-gary-200">
                        Edit
                      </Button>
                    </CardFooter>
                  </Stack>

                  <Stack>
                    <CardBody className="flex flex-col gap-3">
                      <Heading size="md">
                        Information on Rent in {"Appartment 1"}
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
                        <span>200,000 XAF</span>
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
                          <span> 1year</span> <span>5months</span>{" "}
                          <span> 16days</span>
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
                        <span>600,000 XAF</span>
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
                        <span>3 months unpaid</span>
                      </Box>

                      {/* <Box>
                        <Editable defaultValue="Add any valuable information">
                          <EditablePreview />
                          <EditableTextarea />
                        </Editable>
                      </Box> */}
                    </CardBody>

                    <CardFooter className="flex w-full justify-between">
                      {/* <Button variant="solid" colorScheme="blue">
                        Submit
                      </Button> */}
                      <Button variant="solid" className="bg-gary-200">
                        Edit
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              </TabPanel>

              <TabPanel>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  // variant="outline"
                >
                  <Image
                    className=" bg-green-400"
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={tenantImage2}
                    alt="Caffe Latte"
                  />

                  <Stack>
                    <CardBody className="flex flex-col text-xl font-medium gap-4">
                      <Heading size="md">
                        Information on tenant in {"Appartment 1"}
                      </Heading>

                      <Box>
                        <span>Name:</span>
                        <span>Mr HAMADOU</span>
                      </Box>
                      <Box>
                        <span>Rent:</span>
                        <span> 20000$</span>
                      </Box>
                      <Box>
                        <span>Start Date:</span>
                        <span>23-06-2022</span>
                      </Box>
                      {/* <Box>
                        <Editable defaultValue="Add any valuable information">
                          <EditablePreview />
                          <EditableTextarea />
                        </Editable>
                      </Box> */}
                    </CardBody>

                    <CardFooter className="flex w-full justify-between">
                      {/* <Button variant="solid" colorScheme="blue">
                        Submit
                      </Button> */}
                      <Button variant="solid" className="bg-gary-200">
                        Edit
                      </Button>
                    </CardFooter>
                  </Stack>

                  <Stack>
                    <CardBody className="flex flex-col gap-3">
                      <Heading size="md">
                        Information on Rent in {"Appartment 1"}
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
                        <span>200,000 XAF</span>
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
                          <span> 1year</span> <span>2months</span>{" "}
                          <span> 19days</span>
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
                        <span>200,000 XAF</span>
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
                        <span>1 month unpaid</span>
                      </Box>

                      {/* <Box>
                        <Editable defaultValue="Add any valuable information">
                          <EditablePreview />
                          <EditableTextarea />
                        </Editable>
                      </Box> */}
                    </CardBody>

                    <CardFooter className="flex w-full justify-between">
                      {/* <Button variant="solid" colorScheme="blue">
                        Submit
                      </Button> */}
                      <Button variant="solid" className="bg-gary-200">
                        Edit
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              </TabPanel>

              <TabPanel>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  // variant="outline"
                >
                  <Image
                    className=" bg-green-400"
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={tenantImage3}
                    alt="Caffe Latte"
                  />

                  <Stack>
                    <CardBody className="flex flex-col text-xl font-medium gap-4">
                      <Heading size="md">
                        Information on tenant in {"Appartment 1"}
                      </Heading>

                      <Box>
                        <span>Name:</span>
                        <span>Mr aksodh</span>
                      </Box>
                      <Box>
                        <span>Rent:</span>
                        <span> 20000$</span>
                      </Box>
                      <Box>
                        <span>Start Date:</span>
                        <span>13-12-2018</span>
                      </Box>
                      {/* <Box>
                        <Editable defaultValue="Add any valuable information">
                          <EditablePreview />
                          <EditableTextarea />
                        </Editable>
                      </Box> */}
                    </CardBody>

                    <CardFooter className="flex w-full justify-between">
                      {/* <Button variant="solid" colorScheme="blue">
                        Submit
                      </Button> */}
                      <Button variant="solid" className="bg-gary-200">
                        Edit
                      </Button>
                    </CardFooter>
                  </Stack>

                  <Stack>
                    <CardBody className="flex flex-col gap-3">
                      <Heading size="md">
                        Information on Rent in {"Appartment 1"}
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
                        <span>180,000 XAF</span>
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
                          <span> 3year</span> <span>2months</span>{" "}
                          <span> 29days</span>
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
                        <span>2,160,000 XAF</span>
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
                        <span>12 months unpaid</span>
                      </Box>

                      {/* <Box>
                        <Editable defaultValue="Add any valuable information">
                          <EditablePreview />
                          <EditableTextarea />
                        </Editable>
                      </Box> */}
                    </CardBody>

                    <CardFooter className="flex w-full justify-between">
                      {/* <Button variant="solid" colorScheme="blue">
                        Submit
                      </Button> */}
                      <Button variant="solid" className="bg-gary-200">
                        Edit
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              </TabPanel>

              <TabPanel>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  // variant="outline"
                >
                  <Image
                    className=" bg-green-400"
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src={tenantImage4}
                    alt="Caffe Latte"
                  />

                  <Stack>
                    <CardBody className="flex flex-col text-xl font-medium gap-4">
                      <Heading size="md">
                        Information on tenant in {"Appartment 1"}
                      </Heading>

                      <Box>
                        <span>Name:</span>
                        <span>MrMr XYZAS</span>
                      </Box>
                      <Box>
                        <span>Rent:</span>
                        <span> 20000$</span>
                      </Box>
                      <Box>
                        <span>Start Date:</span>
                        <span>20-08-2023</span>
                      </Box>
                      {/* <Box>
                        <Editable defaultValue="Add any valuable information">
                          <EditablePreview />
                          <EditableTextarea />
                        </Editable>
                      </Box> */}
                    </CardBody>

                    <CardFooter className="flex w-full justify-between">
                      {/* <Button variant="solid" colorScheme="blue">
                        Submit
                      </Button> */}
                      <Button variant="solid" className="bg-gary-200">
                        Edit
                      </Button>
                    </CardFooter>
                  </Stack>

                  <Stack>
                    <CardBody className="flex flex-col gap-3">
                      <Heading size="md">
                        Information on Rent in {"Appartment 1"}
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
                        <span>200,000 XAF</span>
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
                          <span> 2year</span> <span>1month</span>{" "}
                          <span> 16days</span>
                        </div>
                      </Box>

                      <Box
                        style={{
                          backgroundColor: "rgb(15,163,130)",
                          background:
                            "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,163,130,0.8688725490196079) 46%)",
                        }}
                        className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold"
                      >
                        <span>Total rent Not payed</span>
                        <span>0 XAF</span>
                      </Box>
                      <Box
                        style={{
                          backgroundColor: "rgb(15,163,130)",
                          background:
                            "linear-gradient(90deg,rgba(7,10,9,0.780098039215687) 30%, rgba(15,163,130,0.8688725490196079) 46%)",
                        }}
                        className="flex justify-between text-white italic p-1 px-3 rounded-2xl font-bold"
                      >
                        <span>Rent Status</span>
                        <span>0 months unpaid</span>
                      </Box>

                      {/* <Box>
                        <Editable defaultValue="Add any valuable information">
                          <EditablePreview />
                          <EditableTextarea />
                        </Editable>
                      </Box> */}
                    </CardBody>

                    <CardFooter className="flex w-full justify-between">
                      {/* <Button variant="solid" colorScheme="blue">
                        Submit
                      </Button> */}
                      <Button variant="solid" className="bg-gary-200">
                        Edit
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default VillageHouse;
