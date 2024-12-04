import AllFunctions from "../../components/functions";
import HouseTemplate from "../../components/houseTemplate";
import HousingTemplate from "../../components/housingTemplate";

const GarRouteHouse = () => {
  const {tenantDetailsGareRoute,tenantsNamesGareRoute} = AllFunctions();
  
  return(

    <HousingTemplate tenantDetails={tenantDetailsGareRoute} tenantsNames={tenantsNamesGareRoute}/>
      )
    
  
};

export default GarRouteHouse;
