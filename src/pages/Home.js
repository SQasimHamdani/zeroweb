
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from '../PZero.json';
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import '../index.css';
import { merkleData } from '../merkle_data';
const nl = require("../merkle_data");
// const hex = require("hexify");

const ZERO_ADDRESS = "0xfA93a74be60487D81272F370845d5D35F1DC4562";
function Home() {
    const [error, setError] = useState('');
  const [supply, setSupply] = useState({})
  const [mintNumber, setMintNumber] = useState(0)
  const [root, setRoot] = useState()
  const salestate = 0;


  useEffect(() => {
    fetchData();
  }, [])
  async function fetchData() {
    if(typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(ZERO_ADDRESS, abi.abi, provider);
      try {
        const totalSupply = await contract.totalSupply();
        const object = {"totalSupply": String(totalSupply), "percent" : String(String((totalSupply / 555 * 2)).slice(0, 4)) + '%'}
        setSupply(object);
      }
      catch(err) {
        setError(err.message);
      }
    }
  }
  function decreaseMintNumber() {
    if (mintNumber > 0)
        setMintNumber(mintNumber -1);
  };
  function increaseMintNumber() {
    if (mintNumber < 5)
        setMintNumber(mintNumber + 1);
  };
  async function mint() {
    if(salestate && typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(ZERO_ADDRESS, abi.abi, signer);
    //   if (String(await contract.balanceOf(signer.address)) + mintNumber > 5) {
    //       setError("Balance too high");
    //       return;
    //   }
      try {
        const transaction = await contract.connect(signer).regularMint(mintNumber, {value : (ethers.utils.parseEther("0.07") * mintNumber)});
        await transaction.wait();
        fetchData();
      }
      catch(err) {
        setError(err.message);
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
                            <a href="https://discord.gg/dDjBp8YF" target={{target:"_blank"}}>
                            <img className="seicon" src="images/discord.svg"/>
                            </a>
                            <a href="">
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
            <div className="row">
               <div className="col-sm  text-center ">
               <p className="count" /*in red*/ >{supply.totalSupply} / 5555 {supply.percent}</p>
               <p>{error && <p>{error}</p>}</p>
               <button className="mintbtn m-2"onClick={increaseMintNumber}>+</button>
                    <button className="mintbtn m-2"onClick={mint}>Mint {mintNumber}</button>
                    <button className="mintbtn m-2"onClick={decreaseMintNumber}>-</button>
               <p className="count" /*in red*/ >{error}</p>
               </div>
           </div>
           <div className="row countdown">
           <div className="col-12">
    <ul> 
      <li><span id="days"></span>days</li> 
      <li><span id="hours"></span>Hours</li>
      <li><span id="minutes"></span>Minutes</li>
      <li><span id="seconds"></span>Seconds</li>
    </ul>
  </div>
  <div id="content" class="emoji">
    <span> LIVE NOW </span>
  </div>
  </div>
       </div>

        <div id="zerosection" className="container-fluid herotwo">
            <div className="row">
                    
                <div className="col-sm-12 col-md-12 col-lg-6 text-center bgimgsectwo"> </div>
                <div className="col-sm-12 col-md-12 col-lg-6 text-center mbcol">
                    <h1 className="headsmain headset"> ZERO PROJECT  </h1>
                    <p className="para paraset"> 
                    Zero is the first Metaverse lottery project in the NFT space. We designed a collection of 5555 unique NFTs— unique digital collectibles living on the Ethereum blockchain. Your zero gives you access to members-only benefits, the first of which is access to the DAILY LOTTERIES to win NFTs including bluechip s.a BAYC,COOL CATS, DOODLES, VEEFRIENDS and many many more cool projects. Once mint sells out, we will be transparently using 50% of the mint revenue to purchase NFTs that will be put into play in our daily lotteries. Every purchase decision will be  subject to a community vote. Last but not least, we will live stream everyday the winner selection process
 
<br /> Fasten your damn f*** seatbelts, Zero is gonna shake this space
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
               <p className="para left-set"> * We will purchase the Bored Ape in a live video just after mint sells out. The BAYC giveaway will run on our #giveaways channel during x hours. Winner will be picked randomly by our discord bot. Every steps of this process will be recorded and live streamed in discord. </p>

                </div>
               </div>

              </div>
            
       
       <div className="container-fluid herofour">
           <div className="row pl-5 col-fil">
                   <div className="col-sm-12">
               <h1 className="headsmain mbd-0 pl-5 col-fil"> LET THE LOTTERY BEGINS</h1> </div>
               </div>
           <div className="row bgimgsecfour ">
               <div className="col-sm-12"> <img src="images/wheelimg.png" className="adjimg"/>
               <h1 className="headsmain mbd-0 cb mtt left-set"> WHAT'S ZERO PROJECT ?</h1>
                   <p className="para left-set"> ZERO PROJECT is the first Metaverse #NFT lottery  <br /> with 5555 unique digital collectibles living on the Ethereum blockchain </p>
                   <p className="para left-set pt-1"> Each Zero NFT is a ticket to participate to our daily lotteries to win #NFTs <br /> including bluechip NFTs, and some juicy prizes... </p>

               </div>
           </div>
           <div className="row bgimgsecfour  ">
               <div className="col-sm-12 p-0"> <img src="css/images/sectionfourtwoo.png"  className="rotate"/> 
               <h1 className="headsmain mbd-0 cb mtt left-set right-set">WHO CAN PLAY ?</h1>
               <p className="para left-set right-set"> Only #Zero NFT holders.</p>
               <p className="para left-set right-set"> Of course, the more #Zero you own, the more entries you have.<br /> See it like Lottery tickets…</p>

  </div>
           </div>
           <div className="row bgimgsecfour bg_play">
               <div className="col-sm-12">
               <img src="images/622.png" className="adjimg rotater"/>
               <h1 className="headsmain mbd-0 cb mtt left-set"> HOW TO PLAY ?</h1>
                   <p className="para left-set pt-2"> Rules are simple: own at least one #Zero NFT </p>    
<p className="para left-set pt-2"> For special lotteries we will add another selection criteria to spice it up a bit : The “Eligible Attributes”. </p>  
<p className="para left-set pt-2"> The Eligible attributes are Zero attributes that have been randomly selected and announced the day prior each special lottery. By doing so, we want to increase the probability to win for Zero holders that have ‘eligible attributes’… The more Zero NFT the higher the chance to win the lottery (1 NFT WITH ELIGIBLE ATTRIBUTE = 1ENTRY) </p>    

            </div>
           </div>
           <div className="row bgimgsecfour  ">
               <div className="col-sm-12 p-0"> <img src="images/wheelimg.png"  className="adjimgs"/> 
               <h1 className="headsmain mbd-0 cb mtt left-set right-set">WHAT CAN I WIN ?</h1>
               <p className="para left-set right-set"> 
               Valuable NFT every day including bluechip NFTs such as coolcat, doodle, veefriends… <br />
The community will vote and decide which NFT projects we will purchase after<br /> mint sells out in order to start our lottery NFT pool 

               </p>
  </div>
           </div>
                   <div className="row">
               <div className="col-sm-12 text-center imgset"> <img src="images/backgroundpng_webgroups.png" height="300" className=""/> </div>
           </div>
       </div>

 <div id="parityection" className="container-fluid  heroparity">
 <div className="row">
               <div className="col-sm-12 pb-2">
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
               <div className="col-sm-6 pb-2">
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
                   <div className="row">
                       <div className=" col-sm-12"> <img src="images/32.png" height="300" className="mt-5"/>
                           <h3 className="headsmain  mbd-0 text-center cb mtt "> THE NIZZAR</h3>
                           <h3 className="headsmain  mbm text-center cb "> Expert</h3>
                           <p className="para text-center"> Nizzar is an OG in the NFT space ! Early investor, early BAYC holder and currently managing a 10M$ Vault called’ UnlimitArt’, 
He drew Zero project roadmap with Crytponis</p>
                               <a href="https://twitter.com/Thenizzar" target={{target:"_blank"}}>
                   <img className="seicn cbw" src="images/twitter.svg"/>
                   </a>
                       </div>
                   </div>
               </div>
               <div className="col-sm-6">
                   <div className="row">
                       <div className=" col-sm-12"> <img src="images/42.png" height="300" className="mt-2"/>
                           <h3 className="headsmain  mbd-0 text-center cb mtt ">LOUIS</h3>
                           <h3 className="headsmain  mbm text-center cb ">Developer</h3>
   
                           <p className="para text-center"> Master Solidity Developer in France <br />
Louis has worked on several DEFI projects <br /> and have been involved in several big Nft projects <br />
He’s the tech guru </p>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-sm-12 setpading"> <img src="images/44.png" height="300" className="mt-5"/>
                           <h3 className="headsmain  mbd-0 text-center cb mtt "> SYED</h3>
                           <h3 className="headsmain mbm text-center cb ">Artists Group</h3>
                           <p className="para text-center"> Syed is The Co-Founder of Galictic NFT Studio 
                               <br /> along with Habib and Talal. Expert in 
                               <br /> Design and NFT Token Generation.  </p>
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
                    
                    <h3 className="headsmain  mbd-0 cb mtt "> What is the mint revenues allocation ?</h3>
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
                   <a href="https://discord.gg/dDjBp8YF" target={{target:"_blank"}}>
                   <img className="seicn cbw" src="images/discord.svg"/>
                            </a>
                   <a href="">
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

const whitelist = [
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
    "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
    "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
    "0x1EC75BaBD4CDe5Fe58D7268bb3F2C34B534F8d81",
    "0x0bD045002056031154153cafF31336DFA3EBD844",
    "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
    "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f",
    "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
    "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
    "0x71bE63f3384f5fb98995898A86B02Fb2426c5788",
    "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a",
    "0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec",
    "0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097",
    "0xcd3B766CCDd6AE721141F452C550Ca635964ce71",
    "0x2546BcD3c84621e976D8185a91A922aE77ECEc30",
    "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E",
    "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
    "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    "0xfdFA064aD2A299f11681F23e0545D39E0dabDb7b"]