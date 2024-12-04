import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase"; // Import Firestore instance
import { useNavigate } from "react-router-dom"; // For navigation
import downButton from "../../assets/chevron-double-down.png";
import ChangeHouseModal from "../../components/Modals/changeHouseModal";

const Home = () => {
  const [houseNames, setHouseNames] = useState([]); // State to store house names
  const navigate = useNavigate(); // For programmatic navigation

  useEffect(() => {
    // Function to fetch house data from Firestore
    const fetchHouseData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "houses")); // Query Firestore's "houses" collection
        const houses = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Firestore document ID
          ...doc.data(), // Spread other document fields
        }));
        setHouseNames(houses); // Set the state to the fetched data
      } catch (error) {
        console.error("Error fetching house data:", error);
      }
    };

    fetchHouseData(); // Fetch data when the component mounts
  }, []); // Empty dependency array means this runs once on mount

  // Function to navigate to the house details page
  const handleNavigationToHouse = (houseId) => {
    navigate(`/houseDetails/${houseId}`); // Navigate to the house details route
  };

  return (
    <div className="w-full h-[100vh]">
      <Box className="flex justify-between items-center mobile:pt-3 sm:pt-2">
        <Box
          className="text-white pl-4 cursor-pointer"
          onClick={() => navigate("/home")} // Navigate back home
        >
          <i className="fa fa-solid fa-chevron-left" aria-hidden="true"></i>
        </Box>
        <div className="pr-4 sm:pr-6 mobile:text-[10px] lgMobile:text-[10px] text-medium text-end font-medium italic text-[rgba(225,225,225,0.8)]">
          Mr. Chinedu House Collection
        </div>
      </Box>
      <div className="w-full flex flex-col gap-12 justify-center items-center pt-16">
        <div className="flex flex-col gap-12 justify-center items-center">
          <div className="text-white sm:text-2xl mobile:text-[12px] lgMobile:text-base font-bold">
            Choose Which House to view details
          </div>
          <div>
            <ChangeHouseModal tenantsNames={houseNames} />
          </div>

          <img
            className="mobile:w-6 mobile:h-6 sm:w-10 sm:h-10 animate-bounce2-effect"
            src={downButton}
            alt="photo"
          />
        </div>

        <div className="w-full flex justify-center">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-9">
            {houseNames && houseNames.length > 0 ? (
              houseNames.map((items) => {
                return (
                  <div
                    key={items.id}
                    className="bg-custom-brown-gradient mobile:w-24 mobile:h-24 lgMobile:w-32 lgMobile:h-32 sm:w-48 sm:h-48 xl:w-64 xl:h-64 flex items-center justify-center text-white font-bold mobile:text-[8px] sm:text-xs xl:text-xl cursor-pointer"
                    style={{
                      borderRadius: "20% 65% 34% 66% / 59% 64% 36% 41%",
                      backdropFilter: "blur(9.5px)",
                      WebkitBackdropFilter: "blur(9.5px)",
                      transition: "width 0.5s ease-in, height 0.5s ease-in",
                    }}
                    onClick={() => handleNavigationToHouse(items.id)} // Navigate using Firestore ID
                  >
                    {items.name} {/* Assuming 'name' is the field with the house name */}
                  </div>
                );
              })
            ) : (
              <div className="text-white">No houses available.</div> // Message when no houses are available
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
