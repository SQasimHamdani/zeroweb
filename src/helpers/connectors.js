import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

const RPC_URLS = {
	1: "https://eth-mainnet.alchemyapi.io/v2/bnFH_YGYBQGQB6lAMCRFY8ck5_Jh34QU",
};

//metamask
export const injected = new InjectedConnector({
	supportedChainIds: [ 1]
});

//walletconnect
export const walletconnect = new WalletConnectConnector({
	rpc: {
		1: RPC_URLS[1],
	},
	qrcode: true,
	pollingInterval: 15000
});


export function resetWalletConnector(connector) {
	if (connector && connector instanceof WalletConnectConnector) {
		connector.walletConnectProvider = undefined;
	}
}

//coinbase
export const walletlink = new WalletLinkConnector({
	url: RPC_URLS[1],
	appName: 'ZERO PROJECT',
	qrcode: true,
	supportedChainIds: [ 1]
});
