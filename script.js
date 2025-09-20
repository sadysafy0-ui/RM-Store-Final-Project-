/* Real Madrid Fan Store - script.js */

const DEMO_EMAIL = "user@example.com";
const DEMO_PASS = "password123";
const PLACEHOLDER = "https://via.placeholder.com/1000x700.png?text=Product+Image";

/* Products Array */
let products = [
  // Player shirts
  { id: 1,  name: "Mbappé Shirt - Home", price: 99,  image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0902-Mens-Home-Authentic-Long-Sleeve-Shirt-25-26-White-mbappe-10.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0900-Mens-Away-Shirt-25-26-Navy-mbappe-10.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Official-style Mbappé replica jersey.", isPlayerShirt: true },
  { id: 2,  name: "Vinícius Jr. Shirt - Home", price: 95, image: "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0902-Mens-Home-Authentic-Long-Sleeve-Shirt-25-26-White-vini-jr-7.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0920-Mens-Away-Authentic-Shirt-25-26-Navy-vini-jr-7.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Vinícius Jr. fan jersey.", isPlayerShirt: true },
  { id: 3,  name: "Rodrygo Shirt - Home", price: 92, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0903-Womens-Home-Authentic-Shirt-25-26-White-rodrygo-11.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0900-Mens-Away-Shirt-25-26-Navy-rodrygo-11.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Rodrygo Real Madrid shirt.", isPlayerShirt: true },
  { id: 4,  name: "Bellingham Shirt - Home", price: 110,image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0899-Mens-Home-Shirt-25-26-White-bellingham-5.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0920-Mens-Away-Authentic-Shirt-25-26-Navy-bellingham-5.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Jude Bellingham official replica.", isPlayerShirt: true },
  { id: 5,  name: "Valverde Shirt - Home", price: 88, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0919-Mens-Home-Authentic-Shirt-25-26-White-valverde-8.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFLZ0071-Womens-Away-Authentic-Shirt-25-26-Navy-valverde-8.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Federico Valverde fan tee.", isPlayerShirt: true },
  { id: 6,  name: "Camavinga Shirt - Home", price: 85, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0905-Mens-Home-Long-Sleeve-Shirt-25-26-White-camavinga-6.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0920-Mens-Away-Authentic-Shirt-25-26-Navy-camavinga-6.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Camavinga training jersey.", isPlayerShirt: true },
  { id: 7,  name: "Huijsen Shirt - Home", price: 90, image: "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0899-Mens-Home-Shirt-25-26-White-huijsen-24.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0920-Mens-Away-Authentic-Shirt-25-26-Navy-huijsen-24.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Huijsen replica shirt.", isPlayerShirt: true },
  { id: 8,  name: "Arnold Shirt - Home", price: 87, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0919-Mens-Home-Authentic-Shirt-25-26-White-trent-12.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0920-Mens-Away-Authentic-Shirt-25-26-Navy-trent-12.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Player name shirt (Arnold).", isPlayerShirt: true },
  { id: 9,  name: "Courtois Goalkeeper Shirt", price: 95, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0916-Mens-Goalkeeper-Shirt-25-26-Blue-courtois-1.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FJP4173_1_APPAREL_Photography_Front%2520Center%2520View_white.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Courtois goalkeeper jersey.", isPlayerShirt: true },
  { id:10,  name: "Mendy Shirt - Home", price: 89, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0899-Mens-Home-Shirt-25-26-White-f-mendy-23.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0920-Mens-Away-Authentic-Shirt-25-26-Navy-f-mendy-23.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Mendy Real Madrid shirt.", isPlayerShirt: true },
  { id:11,  name: "Tchouaméni Shirt - Home", price: 86, image: "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0919-Mens-Home-Authentic-Shirt-25-26-White-tchouameni-14.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0908-Mens-Away-Long-Sleeve-Authentic-Shirt-25-26-Navy-tchouameni-14.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Tchouaméni midfield replica.", isPlayerShirt: true },
  { id:12,  name: "Alaba Shirt - Home", price: 85, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0899-Mens-Home-Shirt-25-26-White-alaba-4.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0920-Mens-Away-Authentic-Shirt-25-26-Navy-alaba-4.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Alaba fan jersey.", isPlayerShirt: true },
  { id:13,  name: "Carvajal Shirt - Home", price: 78, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0899-Mens-Home-Shirt-25-26-White-carvajal-2.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0920-Mens-Away-Authentic-Shirt-25-26-Navy-carvajal-2.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Carvajal defensive replica.", isPlayerShirt: true },
  { id:14,  name: "Rudiger Shirt - Home", price: 80, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0919-Mens-Home-Authentic-Shirt-25-26-White-rudiger-22.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FSBP26%2FRMCFMZ0900-Mens-Away-Shirt-25-26-Navy-rudiger-22.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Rudiger defensive shirt.", isPlayerShirt: true },
  { id:15,  name: "Asensio Shirt - Home", price: 82, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0919-Mens-Home-Authentic-Shirt-25-26-White-asencio-17.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", altImage: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0920-Mens%2520Away%2520Authentic%2520Shirt%252025_26%2520Navy-asencio-17.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Asensio fan tee.", isPlayerShirt: true },
  // Merchandise items
  { id:16, name: "Real Madrid Scarf", price: 25, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F9807%2F7603%2Fproducts%2Frmcfmk0014-02.jpg%3Fv%3D1675259052&w=1200&q=100", desc: "Cozy fan scarf - premium knit.", isPlayerShirt: false },
  { id:17, name: "Real Madrid Cap", price: 22, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4WNo7MUuJBJLzoG6PkBVmJytsoL1iFRIzg&s", desc: "Stylish embroidered cap.", isPlayerShirt: false },
  { id:18, name: "Team Hoodie", price: 60, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMS0376-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=50", desc: "Warm team hoodie with logo.", isPlayerShirt: false },
  { id:19, name: "Fan Bag", price: 40, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFBG0084-04.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=75", desc: "Durable fan backpack.", isPlayerShirt: false },
  { id:20, name: "RM Keychain", price: 8,  image: "https://cdn.shopify.com/s/files/1/0405/9807/7603/products/RMCFNV0778_02.jpg?v=1704799177", desc: "Metal keychain with crest.", isPlayerShirt: false },
  { id:21, name: "Phone Case", price: 18, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFEL0038-01.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=100", desc: "Protective RM phone case.", isPlayerShirt: false },
  { id:23, name: "Water Bottle", price: 12, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FJX0015_1_HARDWARE_Photography_Front%2520Center%2520View_white.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=100", desc: "Insulated water bottle.", isPlayerShirt: false },
  { id:24, name: "Training Shorts", price: 28, image: "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMP0264fff.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Comfortable training shorts.", isPlayerShirt: false },
  { id:25, name: "RM Socks (2-pack)", price: 10, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMF0178-_02.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=75", desc: "Comfortable fan socks duo pack.", isPlayerShirt: false },
  { id:26, name: "RM Ball", price: 55, image: "https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FJD0188_1_HARDWARE_Photography_Front%2520Center%2520View_white.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Limited edition signed-style ball (replica).", isPlayerShirt: false },
  { id:28, name: "Training Jacket", price: 75, image: "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMJ0157-1.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=3840&q=50", desc: "Lightweight waterproof jacket.", isPlayerShirt: false },
  { id:29, name: "RM Flag", price: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOVtocK0_rpC0IrsDLJsKnmG_2jTohWvJ5Q&s", desc: "Official flag for fans.", isPlayerShirt: false },
];

let lastId = products.length;
let favorites = JSON.parse(localStorage.getItem("rm_favorites") || "[]");
let cart = JSON.parse(localStorage.getItem("rm_cart") || "[]");
let isLoggedIn = false;

/* DOM References */
const loginSection = document.getElementById("loginSection");
const homeSection = document.getElementById("homeSection");
const productsSection = document.getElementById("productsSection");
const productDetailSection = document.getElementById("productDetailSection");
const addProductSection = document.getElementById("addProductSection");
const cartSection = document.getElementById("cartSection");
const aboutSection = document.getElementById("aboutSection");
const mainNav = document.getElementById("mainNav");
const mainFooter = document.getElementById("mainFooter");
const cartCount = document.getElementById("cartCount");
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

/* Utility Functions */
function saveCart(){ localStorage.setItem("rm_cart", JSON.stringify(cart)); }
function saveFavorites(){ localStorage.setItem("rm_favorites", JSON.stringify(favorites)); }
function saveAuth(){ localStorage.setItem("rm_logged", JSON.stringify(isLoggedIn)); }
function imageOrPlaceholder(url){
  if(!url || url.trim()==="" || url.includes("IMAGE_URL_HERE")) return PLACEHOLDER;
  return url;
}
function formatPrice(p){ return p.toFixed(2); }

function renderNavAndFooter(){
  if(isLoggedIn){
    mainNav.classList.remove("hidden");
    mainFooter.classList.remove("hidden");
  } else {
    mainNav.classList.add("hidden");
    mainFooter.classList.add("hidden");
  }
}

function showSection(sectionId){
  const protectedSections = ["homeSection","productsSection","favoritesSection","addProductSection","cartSection","aboutSection","productDetailSection"];
  if(protectedSections.includes(sectionId) && !isLoggedIn){
    Swal.fire({ icon:"warning", title:"Please login", text:"You must login first to access the store." });
    return showSection("loginSection");
  }

  [loginSection, homeSection, productsSection, productDetailSection, addProductSection, cartSection, aboutSection, document.getElementById("favoritesSection")].forEach(s => s.classList.add("hidden"));
  const map = { loginSection, homeSection, productsSection, productDetailSection, addProductSection, cartSection, aboutSection, favoritesSection: document.getElementById("favoritesSection") };
  if(map[sectionId]) map[sectionId].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderNavAndFooter();
  renderCartCount();
  
  if(sectionId === "favoritesSection") renderFavorites();
}

/* Enhanced Scroll Animation System */
function initScrollAnimations(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting && !entry.target.classList.contains('animated')){
        // Get all cards that are visible but not yet animated
        const visibleCards = Array.from(entry.target.parentElement.querySelectorAll('.product-card:not(.animated)'));
        const currentIndex = visibleCards.indexOf(entry.target);
        
        // Add staggered delay based on position
        setTimeout(() => {
          entry.target.classList.add('active', 'animated');
        }, currentIndex * 150); // 150ms delay between each card
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
  
  // Observe all product cards
  document.querySelectorAll('.product-card').forEach((card, index) => {
    card.classList.add('scroll-reveal');
    observer.observe(card);
  });
}

function renderRandomGallery(){
  const grid = document.getElementById("randomGrid");
  grid.innerHTML = "";
  const picks = products.slice().sort(()=>0.5 - Math.random()).slice(0,6);
  picks.forEach((p, idx) => {
    const col = document.createElement("div");
    col.className = (idx===0) ? "col-lg-6 col-md-12" : "col-lg-3 col-md-6";
    col.innerHTML = `
      <div class="card h-100 highlight-card" data-id="${p.id}" role="button">
        <img src="${imageOrPlaceholder(p.image)}" class="card-img-top highlight-img" alt="${p.name}">
        <div class="card-body">
          <h6 class="mb-0">${p.name}</h6>
          <small class="text-muted">${formatPrice(p.price)}</small>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });

  grid.querySelectorAll(".highlight-card").forEach(card => {
    card.addEventListener("click", (e) => {
      const id = parseInt(card.getAttribute("data-id"), 10);
      openProductDetail(id);
    });
  });
}

function productCardElement(product){
  const wrapper = document.createElement("div");
  wrapper.className = "col-lg-4 col-md-6";
  const card = document.createElement("div");
  card.className = "product-card card h-100";
  const isFav = favorites.includes(product.id);
  
  card.innerHTML = `
    <img src="${imageOrPlaceholder(product.image)}" class="product-image card-img-top" alt="${product.name}">
    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between align-items-start">
        <h5 class="product-name mb-2">${product.name}</h5>
        <div class="text-end"><strong>${formatPrice(product.price)}</strong></div>
      </div>
      <p class="product-desc mb-3">${product.desc || ""}</p>
      <div class="mt-auto d-flex gap-2">
        <button class="btn btn-primary btn-sm add-btn">Add to cart</button>
        <button class="btn btn-outline-danger btn-sm remove-store-btn">Remove</button>
        <button class="btn btn-link btn-sm fav-btn ${isFav ? 'active' : ''}">${isFav ? '♥' : '♡'}</button>
        <button class="btn view-btn btn-sm">View</button>
      </div>
    </div>
  `;
  
  // Add to cart
  card.querySelector(".add-btn").addEventListener("click", (e)=>{
    e.stopPropagation();
    const selectedSize = product.isPlayerShirt ? 'M' : null;
    const selectedColor = 'white';
    
    const cartItem = {...product};
    if(selectedSize) cartItem.selectedSize = selectedSize;
    if(selectedColor) cartItem.selectedColor = selectedColor;
    
    cart.push(cartItem);
    saveCart();
    renderCartCount();
    
    Swal.fire({ 
      icon:"success", 
      title:"Added to cart", 
      text: `${product.name} added${selectedSize ? ` (Size: ${selectedSize})` : ''}.`,
      timer: 1500,
      showConfirmButton: false
    });
    renderCart();
  });
  
  // Remove from cart
  card.querySelector(".remove-store-btn").addEventListener("click", (e)=>{
    e.stopPropagation();
    
    const cartIndex = cart.findIndex(item => item.id === product.id);
    
    if(cartIndex === -1) {
      Swal.fire({
        icon: "info",
        title: "Not in Cart",
        text: `${product.name} is not in your cart.`
      });
    } else {
      Swal.fire({
        title: `Remove from Cart?`,
        text: `Remove ${product.name} from your cart?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, remove",
        cancelButtonText: "Cancel"
      }).then(res=>{
        if(res.isConfirmed){
          cart.splice(cartIndex, 1);
          saveCart();
          renderCartCount();
          renderCart();
          Swal.fire("Removed!", `${product.name} removed from cart.`, "success");
        }
      });
    }
  });
  
  // Favorite toggle
  card.querySelector(".fav-btn").addEventListener("click", (e)=>{
    e.stopPropagation();
    const btn = e.target;
    if(favorites.includes(product.id)){
      favorites = favorites.filter(id => id !== product.id);
      btn.textContent = '♡';
      btn.classList.remove('active');
    } else {
      favorites.push(product.id);
      btn.textContent = '♥';
      btn.classList.add('active');
    }
    saveFavorites();
  });
  
  // View product
  card.querySelector(".view-btn").addEventListener("click", (e)=>{
    e.stopPropagation();
    openProductDetail(product.id);
  });
  
  card.querySelector(".product-image").addEventListener("click", ()=> openProductDetail(product.id));
  card.querySelector(".product-name").addEventListener("click", ()=> openProductDetail(product.id));

  wrapper.appendChild(card);
  return wrapper;
}

function renderFavorites(){
  const grid = document.getElementById("favoritesGrid");
  grid.innerHTML = "";
  
  if(favorites.length === 0){
    grid.innerHTML = `<div class="col-12 text-center py-5">
      <h5 class="text-muted">No favorites yet</h5>
      <p class="text-muted">Add products to your favorites to see them here</p>
      <button class="btn btn-primary" data-nav="products">Browse Products</button>
    </div>`;
    return;
  }
  
  const favoriteProducts = products.filter(p => favorites.includes(p.id));
  favoriteProducts.forEach(p => {
    grid.appendChild(productCardElement(p));
  });
  setTimeout(initScrollAnimations, 100);
}

function renderProductsPreview(){
  const preview = document.getElementById("productsGridPreview");
  preview.innerHTML = "";
  const toShow = products.slice(0,15);
  toShow.forEach(p => preview.appendChild(productCardElement(p)));
  setTimeout(initScrollAnimations, 100);
}

function renderProducts(filterText, sortBy){
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";
  let list = products.slice();

  if(filterText){
    const q = filterText.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || (p.desc && p.desc.toLowerCase().includes(q)));
  }

  if(sortBy){
    if(sortBy === "price-asc") list.sort((a,b)=>a.price-b.price);
    if(sortBy === "price-desc") list.sort((a,b)=>b.price-a.price);
    if(sortBy === "name-asc") list.sort((a,b)=>a.name.localeCompare(b.name));
  }

  list.forEach(p => {
    const col = productCardElement(p);
    grid.appendChild(col);
  });
  setTimeout(initScrollAnimations, 100);
}

let currentDetailId = null;
let currentColor = 'white';

function openProductDetail(id){
  const p = products.find(x => x.id === id);
  if(!p) return Swal.fire({ icon:"error", title:"Not found", text:"Product not available." });
  
  currentDetailId = id;
  currentColor = 'white';
  
  document.getElementById("detailImage").src = imageOrPlaceholder(p.image);
  document.getElementById("detailName").textContent = p.name;
  document.getElementById("detailDesc").textContent = p.desc || "No description provided.";
  document.getElementById("detailPrice").textContent = formatPrice(p.price);
  
  // Size section for player shirts only
  const sizeSection = document.getElementById("sizeSection");
  if(p.isPlayerShirt){
    sizeSection.classList.remove("hidden");
  } else {
    sizeSection.classList.add("hidden");
  }
  
  // Color section for player shirts only
  const colorSection = document.getElementById("colorSection");
  if(p.isPlayerShirt){
    colorSection.classList.remove("hidden");
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.color-btn[data-color="white"]').classList.add('active');
  } else {
    colorSection.classList.add("hidden");
  }
  
  // Update favorite button
  const isFav = favorites.includes(id);
  const favBtn = document.getElementById("detailFavBtn");
  favBtn.textContent = isFav ? '♥' : '♡';
  favBtn.className = isFav ? 'btn btn-warning' : 'btn btn-outline-warning';
  
  showSection("productDetailSection");
}

function renderCart(){
  const list = document.getElementById("cartItems");
  list.innerHTML = "";
  if(cart.length === 0){
    list.innerHTML = `<div class="text-muted p-3">Your cart is empty.</div>`;
    document.getElementById("cartTotal").textContent = "0.00";
    return;
  }
  cart.forEach((c, idx) => {
    const item = document.createElement("div");
    item.className = "list-group-item d-flex justify-content-between align-items-center";
    
    let details = '';
    if(c.selectedSize) {
      details += `Size: ${c.selectedSize}`;
    }
    if(c.selectedColor && c.selectedColor !== 'white') {
      details += details ? ` | Color: Away` : `Color: Away`;
    }
    if(details) {
      details = `<div class="small text-dark">${details}</div>`;
    }
    
    item.innerHTML = `
      <div class="d-flex gap-3 align-items-center">
        <img src="${imageOrPlaceholder(c.image)}" style="width:80px;height:56px;object-fit:cover;border-radius:8px;">
        <div>
          <div><strong>${c.name}</strong></div>
          <div class="small text-muted">${formatPrice(c.price)}</div>
          ${details}
        </div>
      </div>
      <div>
        <button class="btn btn-sm btn-outline-danger remove-cart">Remove</button>
      </div>
    `;
    item.querySelector(".remove-cart").addEventListener("click", ()=> {
      cart.splice(idx,1); saveCart(); renderCart(); renderCartCount();
    });
    list.appendChild(item);
  });
  const total = cart.reduce((s,a)=>s+a.price,0);
  document.getElementById("cartTotal").textContent = formatPrice(total);
}

function renderCartCount(){
  const count = cart ? cart.length : 0;
  cartCount.textContent = count;
}

/* Login Form */
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();
  
  if(email === "" || !email){
    Swal.fire({ icon:"error", title:"Missing Email", text:"Please enter your email address." });
    return false;
  }
  
  if(pass === "" || !pass){
    Swal.fire({ icon:"error", title:"Missing Password", text:"Please enter your password." });
    return false;
  }
  
  if(email === DEMO_EMAIL && pass === DEMO_PASS){
    isLoggedIn = true;
    saveAuth();
    Swal.fire({ 
      icon: "success", 
      title: "Welcome!", 
      text: "Login successful."
    }).then(()=> {
      initAfterLogin();
      showSection("homeSection");
    });
  } else {
    Swal.fire({ icon:"error", title:"Invalid Credentials", text:"Email or password is incorrect. Try: user@example.com / password123" });
  }
  
  return false;
});

document.getElementById("demoFill").addEventListener("click", ()=>{
  document.getElementById("email").value = DEMO_EMAIL;
  document.getElementById("password").value = DEMO_PASS;
});

/* Navigation */
document.addEventListener("click", function(e){
  const el = e.target.closest("[data-nav]");
  if(!el) return;
  e.preventDefault();
  const target = el.getAttribute("data-nav");
  if(target) showSection(target + "Section");
});

/* Logout */
document.getElementById("logoutBtn").addEventListener("click", (e)=>{
  e.preventDefault();
  isLoggedIn = false; 
  saveAuth();
  Swal.fire({ icon:"info", title:"Logged out" }).then(()=> showSection("loginSection"));
});

/* Search & Sort */
document.getElementById("searchInput").addEventListener("input", (e)=>{
  const q = e.target.value;
  const sort = document.getElementById("sortSelect").value;
  renderProducts(q, sort);
});

document.getElementById("sortSelect").addEventListener("change", (e)=>{
  const q = document.getElementById("searchInput").value;
  renderProducts(q, e.target.value);
});

/* Enhanced Add Product Form - Complete Validation */
document.getElementById("addProductForm").addEventListener("submit", function(e){
  e.preventDefault();
  
  const name = document.getElementById("newName").value.trim();
  const price = parseFloat(document.getElementById("newPrice").value);
  const image = document.getElementById("newImage").value.trim();
  const desc = document.getElementById("newDesc").value.trim();
  
  // Enhanced validation - ALL fields required
  if(!name || name === ""){
    return Swal.fire({ 
      icon:"error", 
      title:"Product Name Required", 
      text: "Please enter the product name."
    });
  }
  
  if(isNaN(price) || price <= 0){
    return Swal.fire({ 
      icon:"error", 
      title:"Invalid Price", 
      text: "Please enter a valid price greater than 0."
    });
  }
  
  if(!image || image === ""){
    return Swal.fire({ 
      icon:"error", 
      title:"Image URL Required", 
      text: "Please enter the product image URL."
    });
  }
  
  if(!desc || desc === ""){
    return Swal.fire({ 
      icon:"error", 
      title:"Description Required", 
      text: "Please enter the product description."
    });
  }
  
  // All validation passed - add the product
  lastId += 1;
  const newProduct = { 
    id: lastId, 
    name, 
    price, 
    image: image || PLACEHOLDER, 
    desc, 
    isPlayerShirt: false 
  };
  
  products.push(newProduct);
  
  Swal.fire({ 
    icon:"success", 
    title:"Product Added Successfully", 
    text: `${name} has been added to the store.`,
    timer: 2000,
    showConfirmButton: false
  });
  
  // Reset form
  document.getElementById("addProductForm").reset();
  
  // Re-render all product displays
  renderProducts();
  renderProductsPreview();
  renderRandomGallery();
});

/* Product Detail Actions */
document.getElementById("detailRemoveBtn").addEventListener("click", ()=>{
  if(currentDetailId == null) return;
  const p = products.find(x=>x.id===currentDetailId);
  Swal.fire({
    title: `Remove ${p.name}?`,
    text: "This will delete the product from the store (demo).",
    icon: "warning",
    showCancelButton: true
  }).then(res=>{
    if(res.isConfirmed){
      products = products.filter(x => x.id !== currentDetailId);
      Swal.fire("Removed","Product removed from store.","success");
      currentDetailId = null;
      renderProducts();
      renderProductsPreview();
      renderRandomGallery();
      showSection("productsSection");
    }
  });
});

document.getElementById("detailAddBtn").addEventListener("click", ()=>{
  if(currentDetailId == null) return;
  const p = products.find(x=>x.id===currentDetailId);
  const size = p.isPlayerShirt ? document.getElementById("detailSize").value : null;
  const color = p.isPlayerShirt ? currentColor : null;
  
  const cartItem = {...p};
  if(size) cartItem.selectedSize = size;
  if(color) {
    cartItem.selectedColor = color;
    cartItem.image = document.getElementById("detailImage").src;
  }
  
  cart.push(cartItem);
  saveCart();
  renderCartCount();
  renderCart();
  Swal.fire({ icon:"success", title:"Added to cart", text: `${p.name} added${size ? ` (Size: ${size})` : ''}${color && color !== 'white' ? ` (Color: Away)` : ''}.`});
});

document.getElementById("detailFavBtn").addEventListener("click", ()=>{
  if(currentDetailId == null) return;
  const btn = document.getElementById("detailFavBtn");
  
  if(favorites.includes(currentDetailId)){
    favorites = favorites.filter(id => id !== currentDetailId);
    btn.textContent = '♡';
    btn.className = 'btn btn-outline-warning';
    Swal.fire({ icon:"info", title:"Removed from favorites" });
  } else {
    favorites.push(currentDetailId);
    btn.textContent = '♥';
    btn.className = 'btn btn-warning';
    Swal.fire({ icon:"success", title:"Added to favorites" });
  }
  saveFavorites();
});

/* Color Selection */
document.addEventListener('click', function(e){
  if(e.target.classList.contains('color-btn')){
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    const color = e.target.getAttribute('data-color');
    currentColor = color;
    
    const p = products.find(x => x.id === currentDetailId);
    if(p && p.isPlayerShirt){
      const img = document.getElementById("detailImage");
      if(color === 'away' && p.altImage && p.altImage.trim() !== ''){
        img.src = imageOrPlaceholder(p.altImage);
      } else {
        img.src = imageOrPlaceholder(p.image);
      }
    }
  }
});

/* Cart Actions */
document.getElementById("clearCartBtn").addEventListener("click", ()=>{
  if(cart.length === 0) return;
  Swal.fire({
    title: "Clear cart?",
    text: "All items will be removed from your cart.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, clear"
  }).then(res=>{
    if(res.isConfirmed){ 
      cart = []; 
      saveCart(); 
      renderCart(); 
      renderCartCount(); 
    }
  });
});

document.getElementById("checkoutBtn").addEventListener("click", ()=>{
  if(cart.length === 0) return Swal.fire({ icon:"info", title:"Cart empty", text:"Add items before checkout."});
  const total = cart.reduce((s,a)=>s+a.price,0);
  Swal.fire({ icon:"success", title:"Checked out", text:`Thank you! Total: ${formatPrice(total)}`}).then(()=>{ 
    cart = []; 
    saveCart(); 
    renderCart(); 
    renderCartCount(); 
  });
});

/* Hero Swiper */
let heroSwiper = null;
function initHeroSwiper(){
  if(heroSwiper) heroSwiper.destroy(true,true);
  heroSwiper = new Swiper(".hero-swiper", {
    loop: true,
    autoplay: { delay: 3800, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    speed: 900,
  });
}

function initAfterLogin(){
  renderNavAndFooter();
  renderRandomGallery();
  renderProducts();
  renderProductsPreview();
  renderCart();
  renderCartCount();
  initHeroSwiper();
}

/* Set Login Background */
function setLoginBackground(imageUrl) {
  const loginSection = document.getElementById("loginSection");
  if(imageUrl && imageUrl.trim() !== '') {
    loginSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('${imageUrl}')`;
  }
}

/* Initialize */
(function(){
  setLoginBackground('https://us.shop.realmadrid.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7nqb12anqb19%2F43GOVUzbmoXa1snM8cOzTX%2F5072f7e21d6af8ab7b624deabedeaf14%2FCOLLECTIO-BANNER-HOME-KIT-25-26-MENS.jpg&w=1920&q=75');
  showSection("loginSection");
  renderCart();
})();