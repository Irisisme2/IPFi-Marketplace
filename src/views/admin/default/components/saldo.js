import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  VStack,
  Heading,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { Alchemy, Network } from 'alchemy-sdk';

const App = () => {
  const [address, setAddress] = useState('');
  const [tokenBalances, setTokenBalances] = useState([]);
  const [alert, setAlert] = useState(null);

  // Konfiguracja Alchemy
  const alchemySettings = {
    apiKey: "FK6ms2Ypa80JrRdAXTdr-92hdtdTMud3",
    network: Network.ETH_MAINNET
  };

  // Tworzenie instancji Alchemy
  const alchemy = new Alchemy(alchemySettings);

  // Funkcja do pobrania salda tokenów dla podanego adresu Ethereum
  const getTokenBalances = async () => {
    try {
      const response = await alchemy.getTokenBalances(address);
      setTokenBalances(response.balances);
    } catch (error) {
      console.error('Error fetching token balances:', error);
      setAlert({ status: 'error', message: 'Error fetching token balances' });
    }
  };

  // Obsługa zmiany adresu
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  // Obsługa kliknięcia przycisku "Pobierz saldo"
  const handleGetTokenBalances = () => {
    getTokenBalances();
  };

  // Efekt pobierania salda tokenów po zmianie adresu
  useEffect(() => {
    getTokenBalances();
  }, [address]);

  return (
    <ChakraProvider>
      <Box p={4}>
        <VStack spacing={4}>
          <Heading as="h1">Token Balances</Heading>

          {alert && (
            <Alert status={alert.status}>
              <AlertIcon />
              {alert.message}
            </Alert>
          )}

          <FormControl>
            <FormLabel>Ethereum Address</FormLabel>
            <Input value={address} onChange={handleAddressChange} />
          </FormControl>

          <Button onClick={handleGetTokenBalances}>Get Token Balances</Button>

          {tokenBalances.length > 0 && (
            <Box>
              <Heading as="h2" size="md">Token Balances</Heading>
              <VStack align="stretch">
                {tokenBalances.map((balance, index) => (
                  <Box key={index}>
                    <Text>{balance.token}: {balance.balance}</Text>
                  </Box>
                ))}
              </VStack>
            </Box>
          )}
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default App;
