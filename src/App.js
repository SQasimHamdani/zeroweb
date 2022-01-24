import Home from "./pages/Home";
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

window.onload = function() {
	localStorage.clear();
};

function App() {

	const getLibrary = (provider) => {
		const library = new Web3Provider(provider, 'any');
		library.pollingInterval = 15000;
		return library;
	};
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
				<Home />
		</Web3ReactProvider>
  );
}

export default App;
