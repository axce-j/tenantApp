 
import AllFunctions from "../../components/functions";
import HouseTemplate from "../../components/houseTemplate";
import HousingTemplate from "../../components/housingTemplate";

const VillageHouse = () => {

// const tenantsNames=tenantsNamesVillage
//   const tenantDetails=tenantDetailsVillage

const {tenantDetailsVillage,tenantsNamesVillage} = AllFunctions();
  return(

<HousingTemplate tenantDetails={tenantDetailsVillage} tenantsNames={tenantsNamesVillage}/>
  )


};

export default VillageHouse;
