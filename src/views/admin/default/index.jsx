/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import AiInsights from "views/admin/default/components/AiInsights";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import Users from "views/admin/default/components/Users";
import Tasks from "views/admin/default/components/Tasks";
import Trading from "views/admin/default/components/Trading";
import saldo from   "views/admin/default/components/saldo";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
<Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
  <SimpleGrid
    columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
    gap='20px'
    mb='20px'>
  </SimpleGrid>

  <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
    <Trading />
    <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
  </SimpleGrid>

  <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
    <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
      <DailyTraffic />
      <Users />
    </SimpleGrid>
    <AiInsights
      columnsData={columnsDataComplex}
      tableData={tableDataComplex}
    />
  </SimpleGrid>

</Box>

  );
}
