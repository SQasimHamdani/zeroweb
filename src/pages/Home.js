
import { useState, useEffect } from 'react';

import React, { useRef , Fragment} from "react";
import ReactDom from "react-dom";
import '../index.css';

import { ethers } from 'ethers';
import abi from '../PZero.json';
import { getProofs} from '../helpers/merkletree'


const ZERO_ADDRESS = "0x094a44a140ef59b8ebf9e7fa92234649dc44cd2f";
// const ZERO_ADDRESS = "0xfA93a74be60487D81272F370845d5D35F1DC4562";
function Home() {   
    const [error, setError] = useState('');

    
    const [discordInvite, setdiscordInvite] = useState('https://discord.gg/HqhdsZrYC4');
    
    // const [mintPrice, setmintPrice] = useState(0.04);

    const [supply, setSupply] = useState({})
    const [mintNumber, setMintNumber] = useState(1)
    const [WLmintNumber, setWLMintNumber] = useState(1)
    const [networkId, setnetworkId] = useState(-1)


    const [tokenPrice, setTokenPrice] = useState({});
    const [strTokenPrice, setStrTokenPrice] = useState('0.07Ξ');
    const [strTokenPriceExtra, setStrTokenPriceExtra] = useState(' (0.07Ξ after 20%mint progress)');

    const [WLtokenPrice, WLsetTokenPrice] = useState({});
    const [WLstrTokenPrice, WLsetStrTokenPrice] = useState('0.04Ξ');

    
    const [claimingNft, setClaimingNft] = useState(false);
    const { ethereum } = window;
    const [metamaskIsInstalled, setmetamaskIsInstalled] = useState("undefined");

    const [showModal, setShowModal] = useState(false);
    const [showWhitelistButton, setshowWhitelistButton] = useState(false);
    useEffect(() => {
        fetchData();
    }, [])

    const openModal = () => {
    setShowModal(true);
    };

    const Modal = ({ setShowModal }) => {
        // close the modal when clicking outside the modal.
        const modalRef = useRef();
        const closeModal = (e) => {
            if (e.target === modalRef.current) {
            setShowModal(false);
            }
        };
        //render the modal JSX in the portal div.
        return ReactDom.createPortal(
            <div className="container" ref={modalRef} onClick={closeModal}>
                <div className="modal row text-center">
                    <Fragment>
                        <div className='col-sm-12'>
                            <h2>Connect Wallets</h2>
                        </div>
                        <div className='col-sm-12 text-center'>
                            <button className='btn btn-info'>Metamask</button>
                        </div>
                        <div className='col-sm-12'>
                            <button className='btn btn-info'>WalletConnect</button>
                        </div>
                        <div className='col-sm-12'>
                            <button className='btn btn-info'>CoinBase</button>
                        </div>
                    </Fragment>
                    <button className='closemdlbtn' onClick={() => setShowModal(false)}>X</button>
                </div>
            </div>,
            document.getElementById("portal")
        );
    };
    

  async function fetchData() {
    if(typeof window.ethereum !== 'undefined' && window.ethereum !== "") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(ZERO_ADDRESS, abi.abi, provider);
        try {

            let tempPrice = String(await contract.tokenPrice());
            tempPrice = ethers.utils.formatEther(tempPrice)
            if (tempPrice){
                if (tempPrice == 0.04) {
                    setTokenPrice(tempPrice)
                    setStrTokenPrice( tempPrice + 'Ξ');
                }
                else {
                    setTokenPrice(tempPrice)
                    setStrTokenPriceExtra("");
                    setStrTokenPrice( tempPrice + 'Ξ');
                }
            }
            // console.log("tempPrice",tempPrice)

            if (metamaskIsInstalled){
                window.ethereum.on("accountsChanged", () => {
                window.location.reload();
            });

            window.ethereum.on("chainChanged", () => {
                window.location.reload();
            });
        }
        const totalSupply = String(await contract.totalSupply());
        // console.log(totalSupply);
        // console.log(ethers.utils.formatEther(tempPrice))
        const object = {"totalSupply": String(totalSupply), "percent" : String(String((totalSupply / 5555 * 100)).slice(0, 4)+'%')}
        setSupply(object);
      }
      catch(err) {

//          console.log('Fetch problem' + err.message + ' StrTokenprice= ' + strTokenPrice)
        setError(err.message);
      }
    }
  }
  async function decreaseMintNumber() {
    if (mintNumber > 1)
        setMintNumber(mintNumber -1);
  };
  async function increaseMintNumber() {
    if (mintNumber < 20)
        setMintNumber(mintNumber + 1);
    };

  async function WLdecreaseMintNumber() {
    if (WLmintNumber > 1)
        setWLMintNumber(WLmintNumber -1);
  };
  async function WLincreaseMintNumber() {
    if (WLmintNumber < 5)
        setWLMintNumber(WLmintNumber + 1);
    };

    async function mintMethod(id) {
        console.log('tokenPrice',tokenPrice[0])
        let total_price = String(tokenPrice * mintNumber);

        try {
            // console.log('setmetamaskIsInstalled before',metamaskIsInstalled)
            var metamaskIsInstalled = ethereum && ethereum.isMetaMask
            setmetamaskIsInstalled(metamaskIsInstalled);
            if (typeof metamaskIsInstalled === 'undefined') {
                console.log('setmetamaskIsInstalled',metamaskIsInstalled)
                openModal();
                setmetamaskIsInstalled(false);
                return
            }
        } catch (error) {
            // console.log('setmetamaskIsInstalled catch ->',false)
            openModal();
            setmetamaskIsInstalled(false);
            return
        }
        var networkId2 = await ethereum.request({
            method: "net_version",
        });
        setnetworkId(networkId2);

        if (id == 1) {
            mint(total_price,networkId2,"mint")
        }
        else {
            total_price = String('0.04' * WLmintNumber)
            mint(total_price,networkId2,"premint")
        }
    };

  async function mint(total_price,networkId2='undefined',mintType='undefined') {
    if(typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
        const contract = new ethers.Contract(ZERO_ADDRESS, abi.abi, signer);
        
        // const a = await contract.tokenURI(464)
        // console.log("contract", a)

        console.log("total price",total_price)
        
        try {
            let accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            })
            
            setClaimingNft(true);

            var metamaskIsInstalled = ethereum && ethereum.isMetaMask
            setmetamaskIsInstalled(metamaskIsInstalled);

            const networkId = await ethereum.request({
                method: "net_version",
            });
            if (1 == parseInt(networkId) && metamaskIsInstalled === true){
            // if ( metamaskIsInstalled === true){
                if (mintType=='mint'){
                    console.log("minting method")
                    const transaction = await contract.connect(signer)
                        .regularMint(mintNumber, { value: (ethers.utils.parseEther(total_price)) })
                    await transaction.wait();
                    fetchData();
                }
                else if (mintType=='premint'){
                    console.log("premint method")
                    const buyerproof = getProofs([accounts]);
                        // console.log(buyerproof);
                        const transaction = await contract.connect(signer)
                        .preMint(buyerproof,  WLmintNumber, { value: (ethers.utils.parseEther(total_price)) })

                await transaction.wait();
                fetchData();
                }
            }
            setClaimingNft(false);
        }
        catch (err) {
            // console.log("Error", err)

            if ( err?.code === 4001) {
                // console.log("User Declined Payment")
                setError("User Declined Payment");
            }

            if ( err?.error?.code === -32000) {
                // console.log("You have Insufficient Balance")
                setError("You have Insufficient Balance");
            }

            if ( err?.code === -32002) {
                // console.log("Transaction In Process")
                setError("Transaction In Process - Open Metamask");
            }

            if ( err?.error?.code === -32603 ) {
                if (err?.error?.message === "execution reverted: Not on whitelist") {
                    setError("Address Not Whitelisted");
                }
                else{
                    setError("Exceeded Max Token Purchase");
                }
            }

            // setError(err.message);
            setClaimingNft(false);
        }

    }
}
  return (
   <> 
    <div className="cotainer bg-nav" style={{paddingLeft: "10%",paddingRight: "10%"}}>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#"><img className="logo_s" src="images/logo.png"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#zerosection">Zero</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#roadmapsection">Roadmap</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#teamsection">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faqsection">FAQs</a>
                        </li>
                    </ul>
                    <span className="navbar-text" >
                            <a href="https://twitter.com/zerozeronft" target={{target:"_blank"}}>
                            <img className="seicon" src="images/twitter.svg"/>
                            </a>
                            <a href={discordInvite} target={{target:"_blank"}}>
                            <img className="seicon" src="images/discord.svg"/>
                            </a>
                            <a href="https://opensea.io/collection/zero-project" target={{target:"_blank"}}>
                            <img className="seicon" src="images/opensea.svg"/>
                            </a>
                    </span>
                </div>
            </nav>
        </div>
   <>
        <div className="container-fluid heroone">
            <div className="row">
                <div className="col-sm text-center imgset" > 
                    <video playsInline autoPlay muted loop id="backgroundVideo">

                    	<source src="./Videos/video5kren.mp4" type="video/mp4" />

                    </video>    
                </div>
            </div>
                { parseInt(supply.totalSupply) < 5555 ? (
                    <div>
                          <div className="row">
                            <div className="col-sm  text-center ">
                                <p className="mintedcounts" /*in red*/ >{supply.totalSupply} / 5555 </p>
                                <div className="progress mint_bar  ">
                                    <div className="progress-bar active " role="progressbar"
                                        aria-valuenow="00" aria-valuemin="0" aria-valuemax="100"
                                        style={{ width: supply.percent }}
                                    >
                                        {supply.percent}
                                    </div>
                                </div>
                                <div className="buttons_mint_div">
                                    <button className="mintbtn m-2" onClick={decreaseMintNumber}>-</button>
                                    <button className="mintbtn m-2" disabled={claimingNft ? 1 : 0} onClick={() => mintMethod(1)}>{claimingNft ? "BUSY" : "MINT"} {mintNumber}</button>

                                    <button className="mintbtn m-2" onClick={increaseMintNumber}>+</button>
                                      <span className="d-block"><strong>{strTokenPrice}</strong>{strTokenPriceExtra}</span>
                                    <span className="d-block">Max Mint 20</span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm  text-center ">
                                <br></br>
                            </div>
                        </div>

                        {showWhitelistButton ? (
                            <div>
                                <div className="row">
                                    <div className="col-sm  text-center ">
                                        <div className="buttons_mint_div">
                                            <button className="mintbtn m-2" onClick={WLdecreaseMintNumber}>-</button>
                                            <button className="mintbtn m-2" disabled={claimingNft ? 1 : 0} onClick={() => mintMethod(2)}>{claimingNft ? "BUSY" : "WL MINT"} {WLmintNumber}</button>

                                            <button className="mintbtn m-2" onClick={WLincreaseMintNumber}>+</button>
                                            <span className="d-block"><strong>{WLstrTokenPrice}</strong></span>
                                            <span className="d-block">Max Mint 5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ): (
                            <></>
                        )}

                        { error &&
                            <div className='text-center mint_under_button'>
                                <p className="bg-danger text-light">{error}</p>
                            </div>
                        }
                    </div>
                ) : (
                    <div>
                        <div className="row">
                            <div className="col-sm  text-center ">
                                { parseInt(supply.totalSupply) >= 5555 ? (
                                    <button className=" m-2 btn btn-success">Sold Out!</button>
                                    ) : (

                                    <div>
                                        <button className="mintbtn m-2" onClick={decreaseMintNumber}>-</button>
                                        <button className="mintbtn m-2" disabled={claimingNft ? 1 : 0} onClick={() => mintMethod(1)}>{claimingNft ? "BUSY" : "MINT"} {mintNumber}</button>

                                        <button className="mintbtn m-2" onClick={increaseMintNumber}>+</button>
                                        <br />
                                                  <span className="d-block"><strong>0.07Ξ</strong>
                                                      {/* (0.07Ξ after 20%mint progress) */}
                                                  </span>
                                        <span className="d-block">Max Mint 20</span>
                                        <div className="row">
                                            <div className="col-sm  text-center ">
                                                <br></br>
                                            </div>
                                        </div>
                                        {showWhitelistButton ? (
                                            <div>

                                                <div className="row">
                                                    <div className="col-sm  text-center ">
                                                        <div className="buttons_mint_div">
                                                            <button className="mintbtn m-2" onClick={WLdecreaseMintNumber}>-</button>
                                                            <button className="mintbtn m-2" disabled={claimingNft ? 1 : 0} onClick={() => mintMethod(2)}>{claimingNft ? "BUSY" : "WL MINT"} {WLmintNumber}</button>

                                                            <button className="mintbtn m-2" onClick={WLincreaseMintNumber}>+</button>
                                                            <span className="d-block"><strong>0.04Ξ</strong></span>
                                                            <span className="d-block">Max Mint 5</span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            ): (
                                            <></>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col-sm  text-center ">
                        {metamaskIsInstalled === false ? (
                            <button className=" m-2 btn btn-danger">Connect Metamask!</button>
                        ) : (
                                <div>
                                {( -1 == parseInt(networkId) || 1 == parseInt(networkId) ) ? (
                                        <></>
                                ) : (
                                    <button className=" m-2 btn btn-info">Make Sure you are Ether Mainnet</button>
                                )}
                            </div>
                        )}
                    </div>
                  </div>
                  {/* <div id="portal"></div>
                  {showModal ? <Modal setShowModal={setShowModal} /> : null} */}
        </div>
        <div id="zerosection" className="container-fluid herotwo">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 text-center bgimgsectwo"> </div>
                <div className="col-sm-12 col-md-12 col-lg-6 text-center mbcol">
                    <h1 className="headsmain headset"> ZERO PROJECT  </h1>
                    <p className="para paraset"> 
                        Zero is the first Metaverse lottery project in the NFT space. We designed a collection of 5555 unique NFTs— 
                        unique digital collectibles living on the Ethereum blockchain. Your zero gives you access to members-only benefits, 
                        the first of which is access to the DAILY LOTTERIES to win NFTs including bluechips e.g. BAYC,COOL CATS, DOODLES, 
                        VEEFRIENDS and many many more valuable projects. Once mint sells out, we will be transparently using 50% of the mint 
                        revenue to purchase NFTs that will be put into play in our daily lotteries. Every purchase decision will be subject 
                        to a community vote. Last but not least, we will live stream the winner selection process every day.

                        <br /> Fasten your seatbelts, Zero Project is gonna shake this space!
                    </p>
                </div>
            </div>
        </div>
              
        <div id="roadmapsection" className="container-fluid herothree headsets">
            <div className="row">
                <div className="col-sm-12 pb-2">
                    <h1 className="headsmain colorred"> MINT PROGRESS GIVEAWAYS</h1>
                        <img src="images/Roadmap_final.png"  className="mt-2"/> 
                </div>
            </div>
            <div className="row col-fil">
                <div className="col-sm-12 adjust_para">
                    <p className="para left-set"> * We will purchase the Bored Ape in a live video just after mint sells out. The BAYC giveaway will run on our #giveaways channel during x hours. Winner will be picked randomly by our discord bot. Every step of this process will be recorded and live streamed in discord. </p>
                </div>
            </div>
        </div>
            
       
       <div className="container-fluid herofour">
            <div className="row pl-5 col-fil">
                <div className="col-sm-12">
                    <h1 className="headsmain mbd-0 pl-5 col-fil"> LET THE LOTTERY BEGIN</h1>
                </div>
            </div>
           <div className="row bgimgsecfour ">
               <div className="col-sm-12"> <img src="images/wheelimg.png" className="adjimg"/>
                    <h1 className="headsmain mbd-0 cb mtt left-set"> WHAT'S ZERO PROJECT ?</h1>
                        <p className="para left-set"> ZERO PROJECT is the first Metaverse NFT lottery  <br /> with 5555 unique digital collectibles living on the Ethereum blockchain. </p>
                        <p className="para left-set pt-1"> Each Zero NFT is a ticket to participate to our daily lotteries to win NFTs <br />(including bluechip NFTs) and some juicy prizes... </p>

               </div>
           </div>
            <div className="row bgimgsecfour  ">
               <div className="col-sm-12 p-0"> <img src="css/images/sectionfourtwoo.png"  className="rotate"/> 
                    <h1 className="headsmain mbd-0 cb mtt left-set right-set">WHO CAN PLAY ?</h1>
                    <p className="para left-set right-set">Only ZERO NFT holders.</p>
                    <p className="para left-set right-set"> Of course, the more ZERO you own, the more entries you have.<br /> Holding a ZERO is like getting a free lottery ticket every day.</p>

                </div>
            </div>
            <div className="row bgimgsecfour bg_play">
               <div className="col-sm-12">
                    <img src="images/622.png" className="adjimg rotater"/>
                    <h1 className="headsmain mbd-0 cb mtt left-set"> HOW TO PLAY ?</h1>
                            <p className="para left-set pt-2"> Rules are simple: own at least one ZERO NFT</p>    
                            <p className="para left-set pt-2"> For special lotteries, we will add another selection criteria to spice it up a bit : The “Eligible Attributes”.</p>  
                            <p className="para left-set pt-2"> The Eligible Attributes are ZERO traits that have been randomly selected and announced the day prior to each special lottery. These special lotteries increase the probability to win for Zero holders that have one of the ‘eligible attributes’… The more ZERO NFT you hold, the higher the chance to win the lottery (1 NFT WITH AN ELIGIBLE ATTRIBUTE = 1ENTRY)</p>    

                </div>
           </div>
            <div className="row bgimgsecfour  ">
               <div className="col-sm-12 p-0"> <img src="images/wheelimg.png"  className="adjimgs"/> 
               <h1 className="headsmain mbd-0 cb mtt left-set right-set">WHAT CAN I WIN ?</h1>
               <p className="para left-set right-set"> 
                    You have a chance to win a valuable NFT every day.<br />
                    The community will vote and decide which NFT projects we will purchase after<br /> mint sells out in order to start our lottery NFT pool
               </p>
            </div>
           </div>
            <div className="row">
               <div className="col-sm-12 text-center imgset"> <img src="images/backgroundpng_webgroups.png" height="300" className=""/> 
               </div>
           </div>
       </div>

        <div id="regular_lottery" className="container-fluid  reg_lottery">
            <div className="row">
               <div className="col-sm-12 pb-2">
                   <img src="images/regularlottery.png"  className="mt-5 deskpc"/>  
                   <img src="images/zerohead.png"  className="mt-2 tabmob"/> 
                   <img src="images/regularlottery_mobile.png"  className="mt-2 tabmob"/> 
                </div>
           </div>
        </div>

        <div id="special_lottery" className="container-fluid  reg_lottery">
            <div className="row">
               <div className="col-sm-12 pb-2">
                   <img src="images/speciallottery.png"  className="mt-2 deskpc"/> 
                   <img src="images/special-mobile.png"  className="mt-2 tabmob"/> 
                   </div>
           </div>
        </div>
        <div id="exclusive_lottery" className="container-fluid   reg_lottery exclusive_lottery">
            <div className="row">
               <div className="col-sm-12 pb-2">
                   <img src="images/exclusivelottery.png"  className="mt-2 deskpc"/>
                   <img src="images/exclusivelottery_mob.png"  className="mt-2 tabmob"/> 
                   </div>
           </div>
        </div>

        <div id="end_lottery" className="container-fluid reg_lottery">
            <div className="row">
               <div className="col-sm-12 pb-2">
                   <img src="images/lottery_end.png"  className="mt-2"/> 
                </div>
           </div>
        </div>
        <div id="parityection" className="container-fluid  heroparity">
            <div className="row">
               <div className="col-sm-12 pb-2 rarity_col">
                   <h1 className="headsmain pl-5 pt-5 pb-3"> RARITY</h1> 
                   <img src="images/paritysec_01.png"  className="mt-2"/> 
                </div>
           </div>
        </div>
       <div id="teamsection" className="container-fluid herofive">
            <div className="row text-center">
                <div className="col-sm-12 pb-2">
                   <h1 className="headsmain "> THE TEAM</h1> </div>
           </div>
           <div className="row text-center texthero ">
               <div className="col-sm-12">
                   <div className="row ">
                       <div className="col-sm-12 img-adj"> <img src="images/18.png" height="300" className="mt-2"/>
                           <h3 className="headsmain  mbd-0 text-center cb mtt "> CRYPTONIS</h3>
                           <h3 className="headsmain  mbm text-center cb"> Founder</h3>
                           <p className="para text-center"> Early NFT investor and BAYC holder, artist and creator. 
                                Prior to Web3 and NFT, he was  consultant in digital strategy and is a  Startup founder (Ecommerce Marketplace)
                                He’s our Master Zero
                                </p>
                               <a href="https://twitter.com/cryptonis4" target={{target:"_blank"}}>
                            <img className="seicn cbw" src="images/twitter.svg"/>
                            </a>
                       </div>
                   </div>
                   {/* <div className="row">
                       <div className=" col-sm-12"> <img src="images/32.png" height="300" className="mt-5"/>
                           <h3 className="headsmain  mbd-0 text-center cb mtt "> THE NIZZAR</h3>
                           <h3 className="headsmain  mbm text-center cb "> Consigliere</h3>
                           <p className="para text-center"> Nizzar is an OG in the NFT space ! Early investor, early BAYC holder and currently managing a 10M$ Vault called’ UnlimitArt’, 
                                He drew Zero project roadmap with Cr]ytponis</p>
                               <a href="https://twitter.com/Thenizzar" target={{target:"_blank"}}>
                            <img className="seicn cbw" src="images/twitter.svg"/>
                            </a>
                       </div>
                   </div> */}
                </div>
            </div>
            <div className="row text-center texthero mt-2 ">
               <div className="col-sm-6">
                   <div className="row">
                       <div className=" col-sm-12"> 
                            <img src="images/42.png" height="300" />
                            <h3 className="headsmain  mbd-0 text-center cb mtt ">LOUIS</h3>
                            <h3 className="headsmain  mbm text-center cb ">Developer</h3>
    
                            <p className="para text-center"> Master Solidity Developer in France 
                            Louis has worked on several DEFI projects and have been involved in several big Nft projects 
                            He’s the tech guru </p>
                       </div>
                   </div>
               </div>
               <div className="col-sm-6">
                   <div className="row">
                       <div className="col-sm-12"> 
                            <img src="images/44.png" height="300" />
                            <h3 className="headsmain  mbd-0 text-center cb mtt "> SYED</h3>
                            <h3 className="headsmain mbm text-center cb ">Backend Dev</h3>
                            <p className="para text-center"> Syed is The Co-Founder of Galictic NFT Studio 
                               along with Habib and Talal. 
                              Expert in  Design and NFT Token Generation
                               using Dynamic Algorithm.  
                            </p>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       <div id="faqsection" className="container-fluid herosix">
            <div className="row text-right pr-5">
                <div className="col-sm-12 pb-2">
                    <h1 className="headsmain cb pt-3"> FAQ - Frequently Asked Questions</h1> </div>

            </div>
            <div className="row text-left">
                <div className="col-sm-12 set-colend ">
                    <h3 className="headsmain  mbd-0 cb mtt "> What is the total supply ?</h3>

                    <p className="para cb"> A total of 5555 unique ZERO Character </p>
                    <h3 className="headsmain  mbd-0 cb mtt "> When Zero launch?</h3>
                    <p className="para cb"> Presale for Whitelisted people will begins Jan 19th 2022, 6PM EST <br/>
                                            Public sale will start 24hrs after, Jan 20th, 6PM EST </p>
                    <h3 className="headsmain  mbd-0 cb mtt "> What is the mint cost ?</h3>
                    <p className="para cb"> Presale (Whitelisted) : 0,04Ξ <br />
                                            Public sale : 0,07Ξ </p>
                    <h3 className="headsmain  mbd-0 cb mtt "> Still have question ?</h3>
                    <p className="para cb">Head to our Discord to learn more and ask any questions.</p>
                    
                    <h3 className="headsmain  mbd-0 cb mtt ">Where will the revenue be allocated ?</h3>
                    <p className="para cb">50% of mint  will be used to purchase NFTs for the lottery wallet.  <br />
                        20% will be redistributed to the team <br />
                        30% will be used to build and develop the Roadmap v2</p>
                </div>
            </div>
            <div className="row text-right flexxcol">
            <div className="col-sm-6 herolastone">
            <div className=""></div>
            </div>
                <div className="col-sm-6 set-colend ">
                    <h3 className="headsmain  mbd-0 cb mtt pb-3 "> What’s the benefit of <br />
                        holding a Zero NFT ?</h3>
                    <p className="para cb pb-3"> 
                    Zero NFT gives you exclusive access to our daily lotteries to win NFTs including bluechip (s.a Cool cat, doodle, Veefriends and many more…)
                    </p>
                    <h3 className="headsmain  mbd-0 cb mtt pb-3"> 
                    What's the next phase ?
                        </h3>
                    <p className="para cb pb-3"> 
                    Sandbox land, Fully immersive lottery in the Metaverse, Mint pass for our upcoming collections... It's only the beginning and we are here to stay (Announcements will be made later on)
                    </p>      
                </div>
            </div>
       </div>
       <div className="container-fluid herolast">
           <div className="row text-center" id="footer_block" >
               <div className="col-sm-12 pb-2">
                   <div className="main-block"> 
                   <a href="https://twitter.com/zerozeronft" target={{target:"_blank"}}>
                   <img className="seicn cbw" src="images/twitter.svg"/>
                   </a>
                   <a href={discordInvite} target={{target:"_blank"}}>
                   <img className="seicn cbw" src="images/discord.svg"/>
                            </a>
                   <a href="https://opensea.io/collection/zero-project" target={{target:"_blank"}}>
                   <img className="seicn cbw" src="images/opensea.svg"/>
                    </a>
                   </div>
                   <p className="para pt-5 pb-3"> © COPYRIGHT 2022 ZERO PROJECT | ALL RIGHTS RESERVED ® </p>
               </div>
           </div>
       </div>
     
   </>
   
	</>
  );
}

export default Home;
