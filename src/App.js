import Web3 from "web3";
import Header from "./components/header";
import Allowances from "./components/allowances";
import React from "react";

//
//import detectEthereumProvider from '@metamask/detect-provider';
//const provider = await detectEthereumProvider();
//if (provider) {
//  console.log("provider" + provider);
//  window.alert("provider" + provider);
//  } else {
//  console.log('Please install MetaMask!');
// window.alert("provider" + provider);
//}
//let web3 = provider;
//

let web3 = new Web3(Web3.givenProvider);

function App() {
    return (
        <div>
            <Header />
            <Allowances web3={web3}/>
            <iframe src="https://widgets.flaremetrics.io/data-provider-metrics/?address=0x010a16c53f33e4d93892f00897965578b55a8cfc&transparent=true" title="stats" width="100%" frameBorder="0"></iframe>
        </div>   
    );
}

export default App;
