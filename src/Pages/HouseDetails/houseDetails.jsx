import React from "react";
import { useParams } from "react-router-dom";
import HouseTemplate from "../../components/houseTemplate";

const HouseDetails = () => {
  const { houseId } = useParams(); // Get dynamic houseId from the URL

  return <HouseTemplate houseId={houseId} />;
};

export default HouseDetails;
