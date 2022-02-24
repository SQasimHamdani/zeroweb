import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

const RPC_URLS = {
	1: 'https://mainnet.infura.io/v3/68c1d5701b71424999d3f11264af6b14',
	2: "https://eth-goerli.alchemyapi.io/v2/rn4UXbjwp3vFHrRH6-w-sbM96jDnf5VI",
};

//metamask
export const injected = new InjectedConnector({
	supportedChainIds: [ 1]
});


export const walletconnect = new WalletConnectConnector({
	rpc: {
		1: RPC_URLS[1]
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
	supportedChainIds: [ 1],
});