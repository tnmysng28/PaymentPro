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
import Dashboard from "views/Dashboard.js";

import Accounts from "views/Accounts";
import Manage from "views/Manage";
import Icons from "views/Icons.js";

// import Notifications from "views/Notifications.js";
// import Upgrade from "views/Upgrade.js";
import CreatePayroll from "views/CreatePayroll";
import NeedHelp from "views/NeedHelp";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/contact",
    name: "Need Help   ?",
    icon: "nc-icon nc-alien-33",
    component: NeedHelp,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/accounts",
    name: "Accounts",
    icon: "nc-icon nc-circle-09",
    component: Accounts,
    layout: "/admin"
  },
  {
    path: "/createPayroll",
    name: "Create Payroll",
    icon: "nc-icon nc-notes",
    component: CreatePayroll,
    layout: "/admin"
  },
  {
    path: "/manage",
    name: "Manage Payroll",
    icon: "nc-icon nc-paper-2",
    component: Manage,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Approve",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin"
  }
];

export default dashboardRoutes;
