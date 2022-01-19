
function Home() {
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
                    <button  className="mintbtn m-4" 
// onClick={() => { window.location.href = "https://mint.zeroproject.io"}}
				    >
                            Mint Soon
                    </button>
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
               <p className="para left-set"> We will purchase the Bored Ape along in a live video just after mint sells out. The BAYC giveaway will run on our #giveaways channel during x hours. Winner will be picked randomly by our discord bot. Every steps of this process will be recorded and live streamed in discord. </p>

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
               <h1 className="headsmain mbd-0 cb mtt left-set"> HOW TO PLAY</h1>
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
               <h1 className="headsmain mbd-0 cb mtt left-set"> HOW TO PLAY</h1>
                   <p className="para left-set pt-2"> Rules are simple: own at least one #Zero NFT </p>    
<p className="para left-set pt-2"> For special lotteries we will add another selection criteria to spice it up a bit : The “Eligible Attributes”. </p>  
<p className="para left-set pt-2"> The Eligible attributes are Zero attributes that have been randomly selected and announced the day prior each special lottery. By doing so, we want to increase the probability to win for Zero holders that have ‘eligible attributes’… The more Zero NFT the higher the chance to win the lottery (1 NTF WITH ELIGIBLE ATTRIBUTE = 1ENTRY) </p>    

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
                   <h1 className="headsmain "> RARITY</h1> 
                   <img src="images/paritysec_1.png"  className="mt-2"/> 

                   </div>
           </div>
</div>


       <div id="teamsection" className="container-fluid herofive">
           <div className="row text-center">
               <div className="col-sm-12 pb-2">
                   <h1 className="headsmain "> THE TEAM</h1> </div>
           </div>
           <div className="row text-center ">
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
                    <p className="para cb"> Presale (Whitelisted) : 0,04E <br />
                                            Public sale : 0,07 </p>
                    <h3 className="headsmain  mbd-0 cb mtt "> Still have question ?</h3>
                    <p className="para cb">Head to our Discord to learn more and ask any questions.</p>
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
