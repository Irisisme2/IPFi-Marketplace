import React from "react";
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Progress,
} from "@chakra-ui/react";

export default function AIInsightsSection(props) {
  const { ...rest } = props;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  // Przykładowe dane
  const insightsData = [
    {
      name: "Content Trends",
      status: "Approved",
      date: "2024-05-20",
      progress: 75,
    },
    {
      name: "Creator Recommendations",
      status: "Disable",
      date: "2024-05-18",
      progress: 50,
    },
    {
      name: "IP Utilization Reports",
      status: "Error",
      date: "2024-05-15",
      progress: 90,
    },
  ];

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
      {...rest}
    >
      <Flex px="25px" justify="space-between" mb="10px" align="center">
        <Text color={textColor} fontSize="22px" fontWeight="700" lineHeight="100%">
          AI Insights Section
        </Text>
        <Menu />
      </Flex>
      {/* Tabela z danymi dotyczącymi analizy AI */}
      <Table variant="simple" color="gray.500" mb="24px">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Status</Th>
            <Th>Date</Th>
            <Th>Progress</Th>
          </Tr>
        </Thead>
        <Tbody>
          {insightsData.map((data, index) => (
            <Tr key={index}>
              <Td>
                <Text color={textColor} fontSize="sm" fontWeight="700">
                  {data.name}
                </Text>
              </Td>
              <Td>
                <Flex align="center">
                  <Icon
                    w="24px"
                    h="24px"
                    me="5px"
                    color={
                      data.status === "Approved"
                        ? "green.500"
                        : data.status === "Disable"
                        ? "red.500"
                        : data.status === "Error"
                        ? "orange.500"
                        : null
                    }
                    as={
                      data.status === "Approved"
                        ? MdCheckCircle
                        : data.status === "Disable"
                        ? MdCancel
                        : data.status === "Error"
                        ? MdOutlineError
                        : null
                    }
                  />
                  <Text color={textColor} fontSize="sm" fontWeight="700">
                    {data.status}
                  </Text>
                </Flex>
              </Td>
              <Td>
                <Text color={textColor} fontSize="sm" fontWeight="700">
                  {data.date}
                </Text>
              </Td>
              <Td>
                <Flex align="center">
                  <Progress
                    variant="table"
                    colorScheme="brandScheme"
                    h="8px"
                    w="108px"
                    value={data.progress}
                  />
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
}
