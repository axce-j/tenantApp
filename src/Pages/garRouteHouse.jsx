import { tenantDetailsGareRoute,  tenantsNamesGareRoute } from "../components/functions";
import HouseTemplate from "../components/houseTemplate";

const GarRouteHouse = () => {
  const tenantsNames = tenantsNamesGareRoute;
  const tenantDetails = tenantDetailsGareRoute;
 
  return(

    <HouseTemplate tenantDetails={tenantDetails} tenantsNames={tenantsNames}/>
      )
    
  
};

export default GarRouteHouse;
