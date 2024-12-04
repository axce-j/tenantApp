  
 
import AllFunctions from "../../components/functions";
import HouseTemplate from "../../components/houseTemplate";
import HousingTemplate from "../../components/housingTemplate";

const CampYabbHouse = () => {
  // const tenantsNames=tenantsNamesCampYabb
  // const tenantDetails=tenantDetailsCampYabb
  const {tenantsNamesCampYabb,tenantDetailsCampYabb} = AllFunctions();
  
    
  return(

    <HousingTemplate tenantDetails={tenantDetailsCampYabb} tenantsNames={tenantsNamesCampYabb}/>
      )
    
};

export default CampYabbHouse;
