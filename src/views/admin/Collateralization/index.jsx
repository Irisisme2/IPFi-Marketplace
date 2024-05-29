import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import { LicenseClient } from "@story-protocol/core-sdk"; // Import SDK Story Protocol

const CollateralizationPanel = () => {
  const [assetType, setAssetType] = useState("");
  const [assetValue, setAssetValue] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [collateralizations, setCollateralizations] = useState([]);

  const handleSubmit = async () => {
    try {
      // Utwórz klienta licencji Story Protocol z odpowiednią konfiguracją
      const licenseClient = new LicenseClient({
        chain: "ethereum", // Wybierz łańcuch blockchain
        rpcUrl: "https://eth-mainnet.g.alchemy.com/v2/FK6ms2Ypa80JrRdAXTdr-92hdtdTMud3", // Wstaw adres RPC Ethereum
        licenseContractAddress: "0x4f4b1bf7135C7ff1462826CCA81B048Ed19562ed", // Wstaw adres kontraktu zarządzającego licencjami
      });

      // Wyślij żądanie utworzenia nowej licencji zabezpieczenia
      const response = await licenseClient.create({
        type: assetType,
        value: assetValue,
        loanAmount: loanAmount,
      });
      
      console.log("License created:", response);
      setCollateralizations([...collateralizations, response]); // Dodaj nową zabezpieczoną licencję do stanu
      alert("License created successfully");
    } catch (error) {
      console.error("Error creating license:", error);
      alert("Error creating license");
    }
  };

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  return (
    <Box>
      <Card
        p="100px"
        align="center"
        direction="column"
        w="100%"
        bg={cardColor}
        boxShadow={cardShadow}
        mt={8} // Przesunięcie komponentu w dół strony
      >
        <Flex
          px={{ base: "0px", "2xl": "10px" }}
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          mb="8px"
        >
          <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
            Collateralization Panel
          </Text>
        </Flex>

        <VStack spacing="4" align="start" w="100%">
          <Text color={textColor}>Type of Asset:</Text>
          <Select
            placeholder="Select asset type"
            value={assetType}
            onChange={(e) => setAssetType(e.target.value)}
          >
            <option value="Artwork">Artwork</option>
            <option value="Music">Music</option>
            <option value="Literature">Literature</option>
            {/* Dodaj więcej opcji według potrzeb */}
          </Select>
          <Text color={textColor}>Estimated Value of Asset:</Text>
          <Input
            type="number"
            placeholder="Enter asset value"
            value={assetValue}
            onChange={(e) => setAssetValue(e.target.value)}
          />
          <Text color={textColor}>Loan Amount:</Text>
          <Input
            type="number"
            placeholder="Enter loan amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <Flex justify="flex-end" w="100%">
            <Button colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
          </Flex>
        </VStack>
      </Card>
      
      <Box mt={8}>
        <Heading as="h2" size="md" mb={4}>Collateralization History</Heading>
        <VStack spacing={4} align="start">
          {collateralizations.map((collateralization, index) => (
            <Box key={index} p={4} bg={cardColor} boxShadow={cardShadow}>
              <Text>Type: {collateralization.type}</Text>
              <Text>Value: {collateralization.value}</Text>
              <Text>Loan Amount: {collateralization.loanAmount}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default CollateralizationPanel;
