 
import AllFunctions from "../components/functions";
import HouseTemplate from "../components/houseTemplate";

const VillageHouse = () => {

// const tenantsNames=tenantsNamesVillage
//   const tenantDetails=tenantDetailsVillage

const {tenantDetailsVillage,tenantsNamesVillage} = AllFunctions();
  return(

<HouseTemplate tenantDetails={tenantDetailsVillage} tenantsNames={tenantsNamesVillage}/>
  )


};

export default VillageHouse;
