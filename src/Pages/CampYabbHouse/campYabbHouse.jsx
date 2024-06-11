  
 
import AllFunctions from "../../components/functions";
import HouseTemplate from "../../components/houseTemplate";

const CampYabbHouse = () => {
  // const tenantsNames=tenantsNamesCampYabb
  // const tenantDetails=tenantDetailsCampYabb
  const {tenantsNamesCampYabb,tenantDetailsCampYabb} = AllFunctions();
  
    
  return(

    <HouseTemplate tenantDetails={tenantDetailsCampYabb} tenantsNames={tenantsNamesCampYabb}/>
      )
    
};

export default CampYabbHouse;
