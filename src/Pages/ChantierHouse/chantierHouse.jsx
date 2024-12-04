 
 
import AllFunctions from "../../components/functions";
import HouseTemplate from "../../components/houseTemplate";
import HousingTemplate from "../../components/housingTemplate";

const ChantierHouse = () => {
  const {tenantDetailsChantier,tenantsNamesChantier} = AllFunctions();
  // console.log(tenantsNamesChantier[1]);
  // const tenantsNames=tenantsNamesChantier
  // const tenantDetails=tenantDetailsChantier
  
  return(

    <HousingTemplate tenantDetails={tenantDetailsChantier} tenantsNames={tenantsNamesChantier}  />
      )
    
  
};

export default ChantierHouse;
