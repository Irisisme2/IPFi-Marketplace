import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdAttachMoney,
} from "react-icons/md";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

// Admin Imports
import MainDashboard from "views/admin/default";
import AIInsights from "views/admin/AI Insights";
import Collateralization from "views/admin/Collateralization";
import IPTrading from "views/admin/IP Trading";
import RevenueSharing from "views/admin/Revenue Sharing";

// Auth Imports

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "IP Trading",
    layout: "/admin",
    path: "/IPTrading",
    icon: <Icon as={MdAttachMoney} width='20px' height='20px' color='inherit' />,
    component: IPTrading,
  },
  {
    name: "AI Insights",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/AI Insights",
    component: AIInsights,
  },
  {
    name: "Revenue Sharing",
    layout: "/auth",
    path: "/Revenue Sharing",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: RevenueSharing,
  },
  {
    name: "Collateralization",
    layout: "/admin",
    path: "/Collateralization",
    icon: <Icon as={HiMiniArrowTrendingUp } width='20px' height='20px' color='inherit' />,

    component: Collateralization,
    secondary: true,
  },
];

export default routes;
