/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import UserManagement from "views/UserManagement.jsx";


const dashboardRoutes = [

  // User management route
  {
    path: "/userManagement",
    name: "User Management",
    icon: "nc-icon nc-paper-2",
    component: UserManagement,
    layout: "/admin",
  },
  // {
  //   path: "/configurationManagement",
  //   name: "Configuration M...",
  //   icon: "nc-icon nc-paper-2",
  //   component: ConfigurationManagement,
  //   layout: "/admin",
  // },
  // {
  //   path: "/ledetailsnew",
  //   name: "Le Details",
  //   icon: "nc-icon nc-paper-2",
  //   component: LeDetailsNew,
  //   layout: "/LE_Details",
  // },

  // // LE details route
  // {
  //   path: "/LE-details",
  //   name: "LE Details",
  //   icon: "nc-icon nc-atom",
  //   component: LE_main,
  //   Id_children:['Jurisdictional KYC Status','Customer Details','GM KYC Attributes','Buisness Details','KYC Conditions','Source of Wealth Details','Aditional CSR Risk Factors','CS Identities and Codes'],
  //   layout: "/LE_Details"
  // },

  // // new request route
  // {
  //   path: "/new-request",
  //   name: "New Request",
  //   icon: "nc-icon nc-paper-2",
  //   component: New_Request_main,
  //   Link_children:['Enter-entity-details','Search-for-duplicates','Complete'],
  //   layout: "/new_request"
  // },

];

export default dashboardRoutes;
