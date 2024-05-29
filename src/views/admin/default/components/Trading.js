import React from "react";
import { Box, Flex, Heading, VStack, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js"; // Importowanie komponentu Card
import {
  Button,

} from "@chakra-ui/react";
const IPTile = ({ title, description, price, onBuy, onExchange, onSell }) => {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      boxShadow={cardShadow}
      bg={cardColor}
    >
      <Flex px="25px" justify="space-between" align="center">
        <Heading as="h3" size="md" color={textColor}>
          {title}
        </Heading>
      </Flex>

      <VStack align="start" spacing="4" p="15px">
        <Box fontSize="sm" color={textColor}>
          {description}
        </Box>
        <Box fontWeight="bold" color="green.500">
          Price: ${price}
        </Box>
        <Flex justify="space-between" w="100%">
          <Box>
            <Button colorScheme="blue" size="sm" onClick={onBuy}>
              Buy
            </Button>
          </Box>
          <Box>
            <Button colorScheme="green" size="sm" onClick={onExchange}>
              Exchange
            </Button>
          </Box>
          <Box>
            <Button colorScheme="red" size="sm" onClick={onSell}>
              Sell
            </Button>
          </Box>
        </Flex>
      </VStack>
    </Card>
  );
};

const IPTradingInterface = () => {
  // Przykładowe dane
  const items = [
    {
      id: 1,
      title: "Artwork License",
      description: "License to use digital artwork for commercial purposes.",
      price: 50,
    },
    {
      id: 2,
      title: "Music Royalty Token",
      description: "Token representing ownership of music royalties.",
      price: 100,
    },
    // Dodaj więcej elementów w zależności od potrzeb
  ];

  const handleBuy = (id) => {
    // Obsługa zdarzenia kliknięcia przycisku "Buy"
    console.log(`Buying item with ID: ${id}`);
  };

  const handleExchange = (id) => {
    // Obsługa zdarzenia kliknięcia przycisku "Exchange"
    console.log(`Exchanging item with ID: ${id}`);
  };

  const handleSell = (id) => {
    // Obsługa zdarzenia kliknięcia przycisku "Sell"
    console.log(`Selling item with ID: ${id}`);
  };

  return (
    <Flex justify="center" align="center" bg="gray.100" p="6">
      <VStack spacing="8">
        <Heading as="h1" size="lg" textAlign="center" color="gray.700">
          IP Trading Interface
        </Heading>
        <Flex justify="center" align="center" flexWrap="wrap">
          {items.map((item) => (
            <IPTile
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              onBuy={() => handleBuy(item.id)}
              onExchange={() => handleExchange(item.id)}
              onSell={() => handleSell(item.id)}
            />
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
};

export default IPTradingInterface;
