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
import Card from "components/card/Card.js"; // Importowanie komponentu Card

const CollateralizationPanel = () => {
  const [assetType, setAssetType] = useState("");
  const [assetValue, setAssetValue] = useState("");
  const [loanAmount, setLoanAmount] = useState("");

  const handleSubmit = () => {
    // Logika obsługi przesłania formularza
    console.log("Form submitted!");
    console.log("Asset Type:", assetType);
    console.log("Asset Value:", assetValue);
    console.log("Loan Amount:", loanAmount);
  };

  // Ustawienia kolorów w zależności od trybu kolorów
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  return (
    <Card p='20px' align='center' direction='column' w='100%' bg={cardColor} boxShadow={cardShadow}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text color={textColor} fontSize='md' fontWeight='600' mt='4px'>
          Collateralization Panel
        </Text>
        <Select
          fontSize='sm'
          variant='subtle'
          defaultValue='monthly'
          width='unset'
          fontWeight='700'>
          <option value='daily'>Daily</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </Select>
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
  );
};

export default CollateralizationPanel;
