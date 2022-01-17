
function Home() {
  return (
   <> 
    <div className="cotainer bg-nav" style={{paddingLeft: "10%",paddingRight: "10%"}}>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#"><img src="images/logo.svg"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#zerosection">Zero <span className="sr-only">(current)</span></a>
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
                            <a href="asda">
                            <img className="seicon" src="images/stwitter.svg"/>
                            </a>
                            <a href="asda">
                            <img className="seicon" src="images/discord.svg"/>
                            </a>
                            <a href="asda">
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
                    <source src="./Videos/video.mp4" type="video/mp4" />
                          </video> 
                         {/* background-video */}
    
                </div>
            </div>
            <div className="row">
               <div className="col-sm  text-center ">
                    <button  className="mintbtn m-2 " onClick={() => {
                        window.location.href = "https://mint.zeroproject.com"
                            }}>
                        <div class="left"></div>
                            Mint Now
                        <div class="right"></div>
                    </button>
               </div>
           </div>
       </div>

        <div id="zerosection" className="container-fluid herotwo">
            <div className="row">
                    
                <div className="col-sm-12 col-md-12 col-lg-6 text-center bgimgsectwo"> </div>
                <div className="col-sm-12 col-md-12 col-lg-6 text-center mbcol">
                    <h1 className="headsmain headset"> ZERO PROJECT  </h1>
                    <p className="para paraset"> Zero is the first Metaverse project built like a transparent lottery. We designed a collection of 5555 unique NFTs— unique digital collectibles living on the Ethereum blockchain. Your zero doubles as your Club membership card, and grants access to members-only benefits, the first of which is access to EVERY GAMES to win EVERYDAY a Bluechip NFT s.a BAYC, PUNKS, COOL CATS, VEEFRIENDS and more. Mind blowing perks can be unlocked by the community through roadmap activation. We will be transparently give back 50% of the mint in assets and eth, then we will start building the most exciting roadmap of this space. Fasten your damn f*** seatbelts. Visit www.zeronft.com for more details ! </p>
                </div>
            </div>
        </div>
              
       <div id="roadmapsection" className="container-fluid herothree headsets">
           <div className="row">
           <div className="col-sm-12">
           <h1 className="headsmain colorred text-center"> MAIN PROCESS</h1>
    <div className="main-timeline">
                                <div className="timeline">
                                <div className="icon"></div>
                                <div className="date-content">
                                    <div className="date-outer">
                                        <span className="date">
                                        <span className="year">20%</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <h5 className="title">Pay back zero</h5>
                                </div>
                            </div>
    
                            <div className="timeline">
                                <div className="icon"></div>
                                <div className="date-content">
                                    <div className="date-outer">
                                        <span className="date">
                                        <span className="year">50%</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <h5 className="title">Multiple Cool cats raffle</h5>
                                  
                                </div>
                            </div>
                           
                            <div className="timeline">
                                <div className="icon"></div>
                                <div className="date-content">
                                    <div className="date-outer">
                                        <span className="date">
                                        <span className="year">70%</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <h5 className="title">Cool cats, clone X, World of women
                                    </h5>
                                </div>
                            </div>
                         
                            <div className="timeline">
                                <div className="icon"></div>
                                <div className="date-content">
                                    <div className="date-outer">
                                        <span className="date">
                                        <span className="year">100%</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <h5 className="title">BORED APE raffle
                                    </h5>
                                    
                                </div>
                            </div>
                     
    
                        </div>
                        <div className="row pl-5 col-fil">
               <div className="col-sm-12">
               <h1 className="headsmain colorred pl-5 col-fil pb-3"> SO WHAT ABOUT AFTER MINT SOLD OUT ??? </h1> </div>
               </div>

              </div>
              </div>
       </div>
       <div className="container-fluid herofour">
           <div className="row pl-5 col-fil">
                   <div className="col-sm-12">
               <h1 className="headsmain mbd-0 pl-5 col-fil"> LET THE LOTTERY BEGINS</h1> </div>
               </div>
           <div className="row bgimgsecfour ">
               <div className="col-sm-12"> <img src="css/images/sectionfourimg.png" className="rotate"/>
                   <h1 className="headsmain pl-5 mbd-0 text-center cb  sec-ad"> What ?</h1>
                   <p className="para text-center  "> ZERO is a the first metaverse lottery. Everyday, a lottery will be held for
                       <br /> holder to win hell of lot of NFTs bluechip NFTs & (mainly - 1E) , Eth and
                       <br /> some juicy prizes (shhh.. surprise) </p>
               </div>
           </div>
           <div className="row bgimgsecfour  ">
               <div className="col-sm-12 p-0"> <img src="css/images/sectionfourtwo.png"  className="rotater"/> </div>
           </div>
           <div className="row">
               <div className="col-sm-12">
                   <h1 className="headsmain pl-5 mbd-0 text-center cb sec-ad"> What ?</h1>
                   <p className="para text-center  "> ZERO is a the first metaverse lottery. Everyday, a lottery will be held for
                       <br /> holder to win hell of lot of NFTs bluechip NFTs & (mainly - 1E) , Eth and
                       <br /> some juicy prizes (shhh.. surprise) </p>
               </div>
           </div>
           <div className="row">
               <div className="col-sm-12">
                   <h1 className="headsmain pl-5 mbd-0 text-center cb mtt "> HOW TO PLAY</h1>
                   <p className="para text-center  "> It’s simple as f… only by holding a #zero NFT grant you access. Though we want the lottery to be fun,
                       <br /> attractive and most of all gratifying, this is our P2E, you play to earn big!
                       <br /> Each daily lottery will be held on one or several #zero attributes… Meaning that we will announced
                       <br /> everyday in a stealth announcement in discord or twitter the attributes that will be eligible for the raffle
                       <br /> of the day. After the stealth announcement we will give 1 hour to snapshot the holders that have this
                       <br /> attibutes or combination of attribute. The main purpose of this new concept is to allow everyone to
                       <br /> have a chance to be selected for the lottery.
                       <br /> Make wise moves, hold, sel, buy the NFT with the announced attributes ? it’s up to you
                       <br /> </p>
               </div>
           </div>
           <div className="row">
               <div className="col-sm-12">
                   <h1 className="headsmain pl-5 mbd-0 text-center cb mtt "> WHAT TO EARN </h1>
                   <p className="para text-center"> Here’s the list of NFT that will be put in the community pool and thus be the prizes of the daily
                       <br /> lotteries </p>
               </div>
           </div>
           <div className="row">
               <div className="col-sm-12 text-center imgset"> <img src="images/backgroundpng.png" height="200" className=""/> </div>
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
                           <p className="para text-center"> NFT investor, artist and creator. Early in
                               <br /> the NFT space. Former consultant in
                               <br /> digital strategy and founder of ecommerce
                               <br /> Marketplace </p>
                       </div>
                   </div>
                   <div className="row">
                       <div className=" col-sm-12"> <img src="images/32.png" height="300" className="mt-5"/>
                           <h3 className="headsmain  mbd-0 text-center cb mtt "> THE NIZZAR</h3>
                           <h3 className="headsmain  mbm text-center cb "> Expert</h3>
                           <p className="para text-center"> NFT investor, artist and creator. Early in
                               <br /> the NFT space. Former consultant in
                               <br /> digital strategy and founder of ecommerce
                               <br /> Marketplace </p>
                       </div>
                   </div>
               </div>
               <div className="col-sm-6">
                   <div className="row">
                       <div className=" col-sm-12"> <img src="images/42.png" height="300" className="mt-2"/>
                           <h3 className="headsmain  mbd-0 text-center cb mtt ">LOUIS</h3>
                           <h3 className="headsmain  mbm text-center cb ">Developer</h3>
   
                           <p className="para text-center"> NFT investor, artist and creator. Early in
                               <br /> the NFT space. Former consultant in
                               <br /> digital strategy and founder of ecommerce
                               <br /> Marketplace </p>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-sm-12"> <img src="images/44.png" height="300" className="mt-5"/>
                           <h3 className="headsmain  mbd-0 text-center cb mtt "> SYED</h3>
                           <h3 className="headsmain mbm text-center cb ">Artist</h3>
                           <p className="para text-center"> NFT investor, artist and creator. Early in
                               <br /> the NFT space. Former consultant in
                               <br /> digital strategy and founder of ecommerce
                               <br /> Marketplace </p>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       <div id="faqsection" className="container-fluid herosix">
            <div className="row text-center">
                <div className="col-sm-12 pb-2">
                    <h1 className="headsmain cb "> FAQ</h1> </div>
            </div>
            <div className="row text-right">
                <div className="col-sm-12 ">
                    <h3 className="headsmain  mbd-0 cb mtt "> What is the total supply ?</h3>
                    <p className="para cb"> A total of 4444 unique Superlative Apes NFTs will be created </p>
                    <h3 className="headsmain  mbd-0 cb mtt "> What is an NFT ?</h3>
                    <p className="para cb"> A total of 4444 unique Superlative Apes NFTs will be created </p>
                    <h3 className="headsmain  mbd-0 cb mtt "> What is an NFT ?</h3>
                    <p className="para cb"> A total of 4444 unique Superlative Apes NFTs will be created </p>
                    <h3 className="headsmain  mbd-0 cb mtt "> What is an NFT ?</h3>
                    <p className="para cb"> A total of 4444 unique Superlative Apes NFTs will be created </p>
                    <div class="herolastone"></div>
                </div>
            </div>
       </div>
       <div className="container-fluid herolast">
           <div className="row text-center" id="footer_block" >
               <div className="col-sm-12 pb-2">
                   <div className="main-block"> 
                   <a href="asda">
                    <i className="bi bi-twitter cbw"></i>
                   </a>
                   <a href="asda">
                    <i className="bi bi-instagram cbw"></i>
                   </a>
                   <a href="asda">
                    <i className="bi bi-twitter cbw"></i> 
                   </a>
                   <a href="asda">
                    <i className="bi bi-facebook cbw"></i> 
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
