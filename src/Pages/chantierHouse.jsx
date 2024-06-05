 
import { tenantDetailsChantier,  tenantsNamesChantier } from "../components/functions";
 
import HouseTemplate from "../components/houseTemplate";

const ChantierHouse = () => {
  const tenantsNames=tenantsNamesChantier
  const tenantDetails=tenantDetailsChantier
  
  return(

    <HouseTemplate tenantDetails={tenantDetails} tenantsNames={tenantsNames}/>
      )
    
  
};

export default ChantierHouse;
