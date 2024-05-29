import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import {
  LicenseClient,
  DisputeClient,
  PermissionClient
} from '@story-protocol/core-sdk';

const App = () => {
  const [licenseDetails, setLicenseDetails] = useState({});
  const [royaltyDetails, setRoyaltyDetails] = useState({});
  const [disputeDetails, setDisputeDetails] = useState({});
  const [feedback, setFeedback] = useState('');
  const [alert, setAlert] = useState(null);

  // Konfiguracja łańcucha blockchain Sepolia (Ethereum Testnet)
  const config = {
    chain: 'ethereum',
    rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/FK6ms2Ypa80JrRdAXTdr-92hdtdTMud3',
    licenseContractAddress: '0x4f4b1bf7135C7ff1462826CCA81B048Ed19562ed', // Adres kontraktu zarządzającego licencjami
    disputeContractAddress: '0xEB7B1dd43B81A7be1fA427515a2b173B454A9832', // Adres kontraktu zarządzającego sporami
    permissionContractAddress: '0x2E0a668289D5C4Da6a2264aC8DF03cd600c7aAB8', // Adres kontraktu zarządzającego uprawnieniami
  };

  // Inicjalizacja klientów Story Protocol z konfiguracją
  const licenseClient = new LicenseClient(config);
  const disputeClient = new DisputeClient(config);
  const permissionClient = new PermissionClient(config);

  const handleInputChange = (e, setDetails) => {
    const { name, value } = e.target;
    setDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleCreateLicense = async () => {
    try {
      const response = await licenseClient.create(licenseDetails);
      console.log('License created:', response);
      setAlert({ status: 'success', message: 'License created successfully' });
    } catch (error) {
      console.error('Error creating license:', error);
      setAlert({ status: 'error', message: 'Error creating license' });
    }
  };

  const handleCreateRoyaltyToken = async () => {
    try {
      const response = await permissionClient.create(royaltyDetails.assetId, royaltyDetails);
      console.log('Royalty token created:', response);
      setAlert({ status: 'success', message: 'Royalty token created successfully' });
    } catch (error) {
      console.error('Error creating royalty token:', error);
      setAlert({ status: 'error', message: 'Error creating royalty token' });
    }
  };

  const handleDistributeRoyalties = async () => {
    try {
      const response = await permissionClient.distribute(royaltyDetails.royaltyId);
      console.log('Royalties distributed:', response);
      setAlert({ status: 'success', message: 'Royalties distributed successfully' });
    } catch (error) {
      console.error('Error distributing royalties:', error);
      setAlert({ status: 'error', message: 'Error distributing royalties' });
    }
  };

  const handleCreateDispute = async () => {
    try {
      const response = await disputeClient.create(disputeDetails);
      console.log('Dispute created:', response);
      setAlert({ status: 'success', message: 'Dispute created successfully' });
    } catch (error) {
      console.error('Error creating dispute:', error);
      setAlert({ status: 'error', message: 'Error creating dispute' });
    }
  };

  const handleGetDisputeStatus = async () => {
    try {
      const response = await disputeClient.getStatus(disputeDetails.disputeId);
      console.log('Dispute status:', response);
      setAlert({ status: 'success', message: `Dispute status: ${response.status}` });
    } catch (error) {
      console.error('Error fetching dispute status:', error);
      setAlert({ status: 'error', message: 'Error fetching dispute status' });
    }
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <VStack spacing={4}>
          <Heading as="h1">IPFi Marketplace Dashboard</Heading>

          {alert && (
            <Alert status={alert.status}>
              <AlertIcon />
              {alert.message}
            </Alert>
          )}

          <FormControl>
            <FormLabel>License Details</FormLabel>
            <Input name="title" placeholder="Title" onChange={(e) => handleInputChange(e, setLicenseDetails)} />
            <Textarea name="description" placeholder="Description" onChange={(e) => handleInputChange(e, setLicenseDetails)} />
            <Button mt={2} onClick={handleCreateLicense}>Create License</Button>
          </FormControl>

          <FormControl>
            <FormLabel>Royalty Details</FormLabel>
            <Input name="assetId" placeholder="Asset ID" onChange={(e) => handleInputChange(e, setRoyaltyDetails)} />
            <Input name="royaltyPercentage" placeholder="Royalty Percentage" onChange={(e) => handleInputChange(e, setRoyaltyDetails)} />
            <Button mt={2} onClick={handleCreateRoyaltyToken}>Create Royalty Token</Button>
            <Button mt={2} onClick={handleDistributeRoyalties}>Distribute Royalties</Button>
          </FormControl>

          <FormControl>
            <FormLabel>Dispute Details</FormLabel>
            <Input name="disputeId" placeholder="Dispute ID" onChange={(e) => handleInputChange(e, setDisputeDetails)} />
            <Textarea name="description" placeholder="Description" onChange={(e) => handleInputChange(e, setDisputeDetails)} />
            <Button mt={2} onClick={handleCreateDispute}>Create Dispute</Button>
            <Button mt={2} onClick={handleGetDisputeStatus}>Check Dispute Status</Button>
          </FormControl>

          <FormControl>
            <FormLabel>Feedback</FormLabel>
            <Textarea name="feedback" placeholder="Your feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
          </FormControl>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default App;

