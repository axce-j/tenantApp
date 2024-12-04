import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { doc, getDoc, collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Firestore configuration
import {
  Box,
  Button,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import BasicUsage from "./Modals/HouseChangemodal";
import ChangeTenantModal from "./Modals/changeTenantModal";
import QuickUserChange from "./quickUserChange";
import { AddIcon } from "@chakra-ui/icons";

const HouseTemplate = ({ houseId }) => {
  const [houseData, setHouseData] = useState(null); // To store house details
  const [tenants, setTenants] = useState([]); // To store tenant data
  const [apartments, setApartments] = useState([]); // To store apartment data
  const [loading, setLoading] = useState(true);

  const fetchHouseData = async () => {
    try {
      setLoading(true);
      // Fetch house details
      const houseDoc = doc(db, "houses", houseId);
      const houseSnap = await getDoc(houseDoc);

      if (houseSnap.exists()) {
        const house = houseSnap.data();
        setHouseData(house);

        // Fetch tenants associated with this house
        const tenantsRef = collection(db, `houses/${houseId}/tenants`);
        const tenantsSnap = await getDocs(tenantsRef);

        const tenantList = tenantsSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTenants(tenantList);

        // Fetch apartments
        const apartmentsRef = collection(db, `houses/${houseId}/apartments`);
        const apartmentsSnap = await getDocs(apartmentsRef);

        const apartmentList = apartmentsSnap.docs.map((doc) => {
          const apartment = doc.data();
          return {
            id: doc.id,
            name: apartment.name || "Empty", // Default to "Empty" if not assigned
            tenant: tenantList.find((t) => t.apartmentId === doc.id) || null, // Check if a tenant is assigned
          };
        });
        setApartments(apartmentList);
      } else {
        console.error("No such house found!");
      }
    } catch (error) {
      console.error("Error fetching house or tenants:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHouseData();
  }, [houseId]);

  const createApartment = async (newTenant) => {
    try {
      // Add tenant to Firestore
      const tenantRef = collection(db, `houses/${houseId}/tenants`);
      const addedTenant = await addDoc(tenantRef, newTenant);

      // Update apartment assignment
      const apartmentDoc = doc(db, `houses/${houseId}/apartments/${newTenant.apartmentId}`);
      await addDoc(apartmentDoc, { tenantId: addedTenant.id });

      // Re-fetch data
      fetchHouseData();
    } catch (error) {
      console.error("Error creating tenant or updating apartment:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!houseData) {
    return <div>No data available for this house.</div>;
  }

  return (
    <Box className="flex flex-col justify-center px-6 sm:pb-32 ">
      <Box className="ml-[-14px] pt-2">
        <BasicUsage />
      </Box>

      <Box className="flex flex-col items-center justify-center w-full gap-4 mobile:mb-12">
        <Box className="mobile:text-2xl bread-words sm:text-5xl text-[rgba(220,239,214,.95)] font-bold">
          {houseData.name}
        </Box>
        <Box className="sm:text-xs mobile:text-[12px]">
          <span className="text-[rgba(288,232,32,0.8)]">Location: </span>
          <span className="italic font-medium tracking-wider text-[rgba(222,235,199,.9)]">
            {houseData.location}
          </span>
        </Box>
        <Box>
          <ChangeTenantModal
            tenantsNames={tenants}
            createApartment={createApartment}
          />
        </Box>
      </Box>

      <Box className="gap-8 mobile:hidden sm:flex mobile:flex-col sm:flex-col-reverse">
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Box className="flex items-center gap-4 mobile:pl-4">
              <span>Tenants & Apartments</span>
              <Button
                leftIcon={<AddIcon />}
                className="bg-[rgba(109,75,62,1)] p-2 font-bold rounded-full"
              >
                Add Tenant
              </Button>
            </Box>
          </TabList>

          <Box className="flex flex-col items-start w-full mt-4">
            {apartments.map((apartment) => (
              <Box key={apartment.id} className="p-4 border-b">
                <strong>{apartment.name}</strong>
                <p>
                  Tenant:{" "}
                  {apartment.tenant
                    ? `${apartment.tenant.firstName} ${apartment.tenant.lastName}`
                    : "No tenant assigned"} {/* Default empty tag */}
                </p>
              </Box>
            ))}
          </Box>
        </Tabs>
      </Box>
    </Box>
  );
};

HouseTemplate.propTypes = {
  houseId: PropTypes.string.isRequired,
};

export default HouseTemplate;
