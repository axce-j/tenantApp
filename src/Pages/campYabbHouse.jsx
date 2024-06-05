  
import { tenantDetailsCampYabb,  tenantsNamesCampYabb } from "../components/functions";
 
import HouseTemplate from "../components/houseTemplate";

const CampYabbHouse = () => {
  const tenantsNames=tenantsNamesCampYabb
  const tenantDetails=tenantDetailsCampYabb
    
  return(

    <HouseTemplate tenantDetails={tenantDetails} tenantsNames={tenantsNames}/>
      )
    
};

export default CampYabbHouse;
