import { useNavigate } from "react-router-dom";
import tenantImage from "../assets/tenantImage.png";
import tenantImage2 from "../assets/tenantImage2.png";
import tenantImage3 from "../assets/tenantImage3.png";
import tenantImage4 from "../assets/tenantImage4.png";








const AllFunctions = () => {
  
  const tenantsNamesChantier = [
   [ ["App1", "Mr Guenebe Louis"],
    ["App2", "Mr Hamadou"],
    ["App3", "Mr aksodh"],
    ["App4", "MrXYZAS"],
    ["App5", "Ms Jane Doe"],
  ["App6", "Mr John Smith"],
  ["App7", "Ms Alice Johnson"],
  ["App8", "Mr Robert Brown"],
  ["App9", "Ms Emily Davis"],
  ["App10", "Mr Michael Wilson"],
  ["App11", "Ms Sarah Martinez"],
  ["App12", "Mr James Garcia"]],["4"]
  ];
  
  const tenantDetailsChantier = [
    [
      [tenantImage],
      [
        ["1", "Mr Guenebe Louis", "200000xaf", "23-06-2020"],
        ["1", "200,000XAF", "1Y  5M  16D", "600,000XAF", "3 months unpaid"],
      ],
    ],
    [
      [tenantImage2],
      [
        ["2", "Mr Hamadou", "200000xaf", "23-06-2022"],
        ["2", "200,000XAF", "1Y  2M  19D", "200,000XAF", "1 month unpaid"],
      ],
    ],
    [
      [tenantImage3],
      [
        ["3", "Mr aksodh", "200000xaf", "13-12-2018"],
        ["3", "180,000XAF", "3Y  2M  29D", "2,160,000XAF", "12 months unpaid"],
      ],
    ],
    [
      [tenantImage4],
      [
        ["4", "Mr Xyzas", "200000xaf", "20-08-2022"],
        ["4", "200,000XAF", "2Y  1M  16D", "0XAF", "0 months unpaid"],
      ],
    ],
    [
      [tenantImage],
      [
        ["5", "Ms Jane Doe", "250000xaf", "15-07-2021"],
        ["5", "250,000XAF", "2Y  4M  20D", "750,000XAF", "3 months unpaid"],
      ],
    ],
    [
      [tenantImage2],
      [
        ["6", "Mr John Smith", "180000xaf", "09-03-2020"],
        ["6", "180,000XAF", "4Y  2M  25D", "360,000XAF", "2 months unpaid"],
      ],
    ],
    [
      [tenantImage3],
      [
        ["7", "Ms Alice Johnson", "220000xaf", "28-11-2019"],
        ["7", "220,000XAF", "3Y  6M  7D", "440,000XAF", "2 months unpaid"],
      ],
    ],
    [
      [tenantImage4],
      [
        ["8", "Mr Robert Brown", "210000xaf", "11-01-2021"],
        ["8", "210,000XAF", "2Y  10M  23D", "630,000XAF", "3 months unpaid"],
      ],
    ],
    [
      [tenantImage],
      [
        ["9", "Ms Emily Davis", "190000xaf", "17-05-2022"],
        ["9", "190,000XAF", "1Y  7M  18D", "380,000XAF", "2 months unpaid"],
      ],
    ],
    [
      [tenantImage2],
      [
        ["10", "Mr Michael Wilson", "230000xaf", "05-09-2020"],
        ["10", "230,000XAF", "3Y  1M  29D", "460,000XAF", "2 months unpaid"],
      ],
    ],
    [
      [tenantImage3],
      [
        ["11", "Ms Sarah Martinez", "240000xaf", "22-02-2019"],
        ["11", "240,000XAF", "4Y  3M  13D", "720,000XAF", "3 months unpaid"],
      ],
    ],
    [
      [tenantImage4],
      [
        ["12", "Mr James Garcia", "200000xaf", "10-10-2021"],
        ["12", "200,000XAF", "2Y  7M  25D", "200,000XAF", "1 month unpaid"],
      ],
    ],
  ];


  
const tenantsNamesCampYabb = [
 [ ["App1", "Mr Guenebe Louis"],
  ["App2", "Mr Hamadou"],
  ["App3", "Mr aksodh"]],[1]
   
];

const tenantDetailsCampYabb = [
  [
    [tenantImage],
    [
      ["1", "Mr Guenebe Louis", "200000xaf", "23-06-2020"],
      ["1", "200,000XAF", "1Y  5M  16D", "600,000XAF", "3 months unpaid"],
    ],
  ],
  [
    [tenantImage2],
    [
      ["2", "Mr Hamadou", "200000xaf", "23-06-2022"],
      ["2", "200,000XAF", "1Y  2M  19D", "200,000XAF", "1 month unpaid"],
    ],
  ],
  [
    [tenantImage3],
    [
      ["3", "Mr aksodh", "200000xaf", "13-12-2018"],
      ["3", "180,000XAF", "3Y  2M  29D", "2,160,000XAF", "12 months unpaid"],
    ],
  ],
   
];



const tenantsNamesGareRoute= [
 [ ["App1", "Mr Guenebe Louis"],
  ["App2", "Mr Hamadou"],
  ["App3", "Mr aksodh"],
  ["App4", "MrXYZAS"],
  ["App5", "Mr gdye"],
  ["App6", " Xyzhsdjas"]],[2]
];

const tenantDetailsGareRoute = [
  [
    [tenantImage],
    [
      ["1", "Mr Guenebe Louis", "200000xaf", "23-06-2020"],
      ["1", "200,000XAF", "1Y  5M  16D", "600,000XAF", "3 months unpaid"],
    ],
  ],
  [
    [tenantImage2],
    [
      ["2", "Mr Hamadou", "200000xaf", "23-06-2022"],
      ["2", "200,000XAF", "1Y  2M  19D", "200,000XAF", "1 month unpaid"],
    ],
  ],
  [
    [tenantImage3],
    [
      ["3", "Mr aksodh", "200000xaf", "13-12-2018"],
      ["3", "180,000XAF", "3Y  2M  29D", "2,160,000XAF", "12 months unpaid"],
    ],
  ],
  [
    [tenantImage4],
    [
      ["4", "Mr Xyzas", "200000xaf", "20-08-2022"],
      ["4", "200,000XAF", "2Y  1M  16D", "0XAF", "0 months unpaid"],
    ],
  ],
  [
    [tenantImage3],
    [
      ["5", "Mr gdye", "200000xaf", "13-12-2018"],
      ["5", "180,000XAF", "3Y  2M  29D", "2,160,000XAF", "12 months unpaid"],
    ],
  ],
  [
    [tenantImage4],
    [
      ["6", "Mr Xyzhsdjas", "200000xaf", "20-08-2022"],
      ["6", "200,000XAF", "2Y  1M  16D", "0XAF", "0 months unpaid"],
    ],
  ],
];




const tenantsNamesVillage = [
  [["App1", "Mr Guenebe Louis"],
  ["App2", "Mr Hamadou"],
  ["App3", "Mr aksodh"],
  ["App4", "MrXYZAS"]],[3]
];

  const tenantDetailsVillage = [
  [
    [tenantImage],
    [
      ["1", "Mr Guenebe Louis", "200000xaf", "23-06-2020"],
      ["1", "200,000XAF", "1Y  5M  16D", "600,000XAF", "3 months unpaid"],
    ],
  ],
  [
    [tenantImage2],
    [
      ["2", "Mr Hamadou", "200000xaf", "23-06-2022"],
      ["2", "200,000XAF", "1Y  2M  19D", "200,000XAF", "1 month unpaid"],
    ],
  ],
  [
    [tenantImage3],
    [
      ["3", "Mr aksodh", "200000xaf", "13-12-2018"],
      ["3", "180,000XAF", "3Y  2M  29D", "2,160,000XAF", "12 months unpaid"],
    ],
  ],
  [
    [tenantImage4],
    [
      ["4", "Mr Xyzas", "200000xaf", "20-08-2022"],
      ["4", "200,000XAF", "2Y  1M  16D", "0XAF", "0 months unpaid"],
    ],
  ],
];

  const navigate = useNavigate();

  const handleNaviagtiontoHomePage = () => {
    navigate("/home") }
    const handleNaviagtiontoHouse = (name) => {
      const houseName= `/${name}`
      navigate(houseName) }
      const houseNames=[
      [[0],["CampYabb House","CampYabassi ancient Depot de planche","campYabbassi"]],
       [[1],[ "GareRoute House","CampYabassi ancient depot de planche","gareRoutier"]],
        [[2],["Village House","New-town Aeroport Douala Elf","village"]],
        [[3],["Chantier House","New-town Aeroport Douala Elf","chantier"]]
      ]
    return{ 
        handleNaviagtiontoHomePage,
        handleNaviagtiontoHouse,
        houseNames,
        tenantDetailsCampYabb,tenantsNamesCampYabb,tenantDetailsGareRoute,tenantsNamesGareRoute,tenantDetailsVillage,tenantsNamesVillage,tenantDetailsChantier,tenantsNamesChantier
    }
    
    
  };
export default AllFunctions;


 