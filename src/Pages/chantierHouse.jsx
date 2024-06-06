 
 
import AllFunctions from "../components/functions";
import HouseTemplate from "../components/houseTemplate";

const ChantierHouse = () => {
  const {tenantDetailsChantier,tenantsNamesChantier} = AllFunctions();
  // const tenantsNames=tenantsNamesChantier
  // const tenantDetails=tenantDetailsChantier
  
  return(

    <HouseTemplate tenantDetails={tenantDetailsChantier} tenantsNames={tenantsNamesChantier}/>
      )
    
  
};

export default ChantierHouse;
