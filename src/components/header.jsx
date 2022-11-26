import React, { Component } from 'react';
import '../App.css';
import '../helpers/helpers.js';

//async function onInit() {
//  if (window.ethereum) {
//     await window.ethereum.request({ method: "eth_requestAccounts" });
//     window.web3 = new Web3(window.ethereum);
//     const account = web3.eth.accounts;
//     //Get the current MetaMask selected/active wallet
//     const walletAddress = account.givenProvider.selectedAddress;
//     document.getElementById("addy").innerText = "connected address: " + account
//     console.log(`Wallet: ${walletAddress}`);
//  } else {
//   console.log("No wallet");
//  }

async function onInit() {
        await window.ethereum.enable();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        var accountstart = account.substring(0,5);
	var accountend = account.substring(account.length - 5);
        document.getElementById("addy").innerText = "connected address: " + accountstart + "....." + accountend;
        window.ethereum.on('accountsChanged', function (accounts) {
            window.location.reload() 		
            // Time to reload your interface with accounts[0]!
           });
    }


    onInit();
class header extends Component {

    revokeAll = () => {
        let buttons = document.getElementsByName('revoke');
        for(let button of buttons) {
            button.click();
        }
    }

    render() {
        return (
            <div>
		<div id="bar">
		    <i>Please beware this is a <strong><a href="https://en.wikipedia.org/wiki/Software_release_life_cycle">BETA</a></strong> tool in test / canary nets, use it at your own risk. Also, pay attention to <a href="https://en.wikipedia.org/wiki/Typosquatting" target="_blank">typosquatting</a> before signing transactions!</i>
                </div>
                <div className="jumbotron">
                    <div id="titles">
		    <h1><strong>&Xi;VMALLOWANC&Xi;</strong></h1>    
                    <h5>Show & Revoke allowances on: Flare, Songbird, Coston1, Coston2, Polygon, Binance Smart Chain, Arbitrum, Optimistic, Ethereum, Ropsten, Rinkeby, Kovan, Fantom.</h5>
		<img src="../images/allowance.png"></img>    
		<h4 id="addy"></h4>
		    <h5 id="totcounts"></h5>
		    <h5 id="counts"></h5>
		</div>
		</div>
                <i><h4 id="loading" hidden>Loading, please wait...</h4></i>

                <div className="revokeAll">
                 <br></br>
                 <div id="revokeAll">
                    <div className="container">
                        <div className="centered"><strong>contract</strong></div>
                    </div>
                    <div className="container">
                       <div className="centered"><strong>spender</strong></div>
                    </div>
                    <div className="container">
                        <div className="centered"><strong>allowance</strong></div>
                    </div>
                    <div className="container" onClick={this.revokeAll}>
                        <div className="centered-white"><a id="revokeLink" onClick={this.revokeAll}><strong>revoke all</strong></a></div>
                    </div>
                   <center><hr height="0.2em" border-width="0" color="gray" background-color="gray" width="96%"></hr></center>
                 </div>
                </div>
            </div>
        )
    }
}
export default header;
