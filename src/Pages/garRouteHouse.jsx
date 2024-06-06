import AllFunctions from "../components/functions";
import HouseTemplate from "../components/houseTemplate";

const GarRouteHouse = () => {
  const {tenantDetailsGareRoute,tenantsNamesGareRoute} = AllFunctions();
  
  return(

    <HouseTemplate tenantDetails={tenantDetailsGareRoute} tenantsNames={tenantsNamesGareRoute}/>
      )
    
  
};

export default GarRouteHouse;
