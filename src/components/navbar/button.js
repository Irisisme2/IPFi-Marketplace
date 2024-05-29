import React from 'react';
import { ChakraProvider, Button } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const injectedConnector = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });

const ConnectWalletButton = () => {
  const { activate } = useWeb3React();

  const connectWallet = async () => {
    try {
      await activate(injectedConnector);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <Button colorScheme="teal" onClick={connectWallet}>
      Connect Wallet
    </Button>
  );
};

const App = () => {
  return (
    <ChakraProvider>
      <ConnectWalletButton />
    </ChakraProvider>
  );
};

export default App;
