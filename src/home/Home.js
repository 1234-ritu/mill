import React from "react";
import { useRef } from "react";

import { Typography ,Button, Grid} from "@material-ui/core";
import {Dialog, DialogContent,DialogContentText,DialogTitle, Slide} from "@material-ui/core";

import { homeStyles } from "./style/main";
import "./style/aminate.css";
import logo from "../img/header.png";
import back from "../img/Group_11.png";
import Coin from "../img/Coin.png";
import whatsapp from "../img/Whatsapp.png";
import background2 from "../img/background2.png";
import tennis from "../img/tennis-girl-professional-tennis-court.png";
import ReactWhatsapp from "react-whatsapp";
import img from "../img/18+.png"; 


import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Home(){
    const classes = homeStyles();
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    
    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      };

    const [open, setOpen] = React.useState(false);
      
    const handleClickOpen = () => {    setOpen(true);};
        
    const handleClose = () => {    setOpen(false);};
    
    return(
        <>
        <div className={classes.HeaderBackground}>
        <div className={classes.HeaderAlignment}>
            <img src={logo} alt="logo"/>
            <div className={classes.HeaderMenu}>
            <p className={classes.HeaderOptions} >Home</p>
            <p className={classes.HeaderOptions} onClick={() => scrollToSection(section2)}>Why us</p>
            <p className={classes.HeaderOptions} onClick={() => scrollToSection(section3)}>Betting Deals</p>
            </div>
        </div>
        </div>

        <div style={{whiteSpace:"normal",paddingTop:"3rem"}}>
        <div className={classes.bg1_segment1} id="segment1" ref={section1} >
            <div className={classes.bg2_segment1}>
                <div className={classes.bg3_segment1} data-aos="zoom-in fade " data-aos-duration="5000" ></div>
            <Typography align="center"  className={classes.experience} data-aos="slide-up" data-aos-duration="5000">Experience the best platforms for Online Betting with <br/>
            your Millionaire book Betting ID. With faster betting ID<br/> 
            creation and the fastest withdrawal support.<br/>
            <span className='color_text'>Games like <span style={{color:"red"}} >cricket,tennis,casino and teen Patti.</span></span></Typography>
            <Typography align="center" className={classes.Creating} data-aos="slide-up" data-aos-duration="5000">Creating your betting ID is easier now.</Typography>
            <div className={classes.buttonCenter} data-aos="slide-up" data-aos-duration="5000">
                <div className="pulse">
                <ReactWhatsapp style={{textDecoration:"none",backgroundColor:"#3DBB29", border:"none"}} number="+91 9958223495" message="Hi! I am intrested to get my own online gaing ID">
                    <div className={classes.buttonStyles}><img src={whatsapp} alt="icon"/> &nbsp;<span className={classes.buttonText}>Get your online gaming ID now!</span></div>
                </ReactWhatsapp>
                </div>
                </div>
            </div>
        </div>

        <div ref={section2} className="section2"><div className={classes.bg1_segment2} id="segment2"  >
            <div className="font_apply" >
            <Typography align="right" className={classes.whyMill} data-aos="slide-up" data-aos-duration="5000">Why Millionaire book Is The Best Platform <br/>For Getting Online ID</Typography>
            <Typography align="right" className={classes.sec2Simple} data-aos="slide-up" data-aos-duration="5000">Simple Registration. Seamless Process. Safer transactions</Typography>
            <Typography align="right" className={classes.sec2Simple} data-aos="slide-up" data-aos-duration="5000">24x7 Deposit, Withdrawal & Refill</Typography>
            <Typography align="right" className={classes.sec2Simple} data-aos="slide-up" data-aos-duration="5000">All modes of payment available</Typography>
            <Typography align="right" className={classes.sec2Simple} data-aos="slide-up" data-aos-duration="5000">No additional commission charges.</Typography>
            <Typography align="right" className={classes.sec2Simple} data-aos="slide-up" data-aos-duration="5000">24x7 Customer support & guidance</Typography>
            <Typography align="right" className={classes.getId} data-aos="slide-up" data-aos-duration="5000">Get your online betting ID. Online Betting ID available is now!</Typography>
            <div style={{display:"flex",justifyContent:"flex-end"}} >
                <div className="pulse">
                    <ReactWhatsapp style={{textDecoration:"none",backgroundColor:"#3DBB29",border:"none", }} number="+91 9958223495" message="Hi! I am intrested to get my own online gaing ID">
                        <div className={classes.buttonStyles}><img src={whatsapp} alt="icon"/> &nbsp;<span className={classes.buttonText}>Get your online gaming ID now!</span></div>
                    </ReactWhatsapp>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/*Coin boxes come here */}
        <div className={classes.segment3} style={{whiteSpace:"normal", minHeight:"700"}} ref={section3}>
        <div className={classes.bg1_segment3}>
                <div className={classes.bg2_segment3}>
            <Typography align="center" className={classes.title3} data-aos="slide-up" data-aos-duration="5000">Online Betting Deals</Typography>
            <div className={classes.borderStyles} data-aos="slide-up" data-aos-duration="5000"></div>
            
            <Grid container style={{justifyContent:"center", marginTop:"2rem"}}>
                <Grid item xs={8} md={4} style={{border:"1px solid #747474", padding:"2rem", margin:"2rem"}}>
                    <img src={Coin} alt="" style={{display:"flex",marginLeft:"auto",marginRight:"auto"}} className="flip"/>
                    <Typography align="center" className={classes.coinTextStyles} data-aos="slide-up" data-aos-duration="5000">Min Deposit: Rs 100</Typography>
                </Grid>
                
                <Grid item xs={8} md={4} style={{border:"1px solid #747474", padding:"2rem", margin:"2rem"}}>
                    <img src={Coin} alt="" style={{display:"flex",marginLeft:"auto",marginRight:"auto"}} className="flip"/>
                    <Typography align="center" className={classes.coinTextStyles} data-aos="slide-up" data-aos-duration="5000">Min Bet : Rs 100</Typography>
                </Grid>
            
            
            <Grid item xs={8} md={4} style={{border:"1px solid #747474", padding:"2rem",  margin:"2rem"}}>
                <img src={Coin} alt="" style={{display:"flex",marginLeft:"auto",marginRight:"auto"}} className="flip"/>
                <Typography align="center" className={classes.coinTextStyles} data-aos="slide-up" data-aos-duration="5000">Min Refill: Rs 100</Typography>
            </Grid>
            
            <Grid item xs={8} md={4} style={{border:"1px solid #747474", padding:"2rem", margin:"2rem"}}>
                <img src={Coin} alt="" style={{display:"flex",marginLeft:"auto",marginRight:"auto"}} className="flip"/>
                <Typography align="center" className={classes.coinTextStyles} data-aos="slide-up" data-aos-duration="5000">Max Process Time: 10 Minutes</Typography>
            </Grid>
            
            </Grid>
            
            <Typography align="center" className={classes.title3} data-aos="slide-up" data-aos-duration="5000">How Does Online Betting Work?</Typography>
            <div className={classes.borderStyles} data-aos="slide-up" data-aos-duration="5000"></div>
            </div>
            </div>
        </div>
        
        
        <div style={{backgroundImage:`url(${tennis})`, backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",whiteSpace:"normal",minHeight:"700"}}>
        <div style={{height:"70rem"}}>
            <div style={{marginLeft:"2rem"}}>
                <Typography align="left" className={classes.stepStyles} data-aos="slide-up" data-aos-duration="5000">STEP 1</Typography>
                <Typography align="left"  className={classes.stepContentStyles} data-aos="slide-up" data-aos-duration="5000">Message Us On <span style={{color:"green"}}>Whatsapp</span></Typography>
                <Typography align="left"  className={classes.stepContentStyles1} data-aos="slide-up" data-aos-duration="5000">All you need to do is to go the<br/> WhatsApp link mentioned on<br/> the website and drop a<br/> message. We will respond you<br/> quickly.</Typography>
            
                    <ReactWhatsapp style={{textDecoration:"none",backgroundColor:"#3DBB29",border:"none",  marginLeft:"1rem", padding:"0.5rem"}} number="+91 9958223495" message="Hi! I am intrested to get my own online gaing ID" className="pulse">
                        <div className={classes.buttonStyles}><img src={whatsapp} alt="icon"/> &nbsp;<span className={classes.buttonText}>Get your online gaming ID now!</span></div>
                    </ReactWhatsapp>
                
            </div>
            <div style={{marginRight:"2rem", }}>
                <Typography align="right" className={classes.stepStyles} data-aos="slide-up" data-aos-duration="5000">STEP 2</Typography>
                <Typography align="right" className={classes.stepContentStyles} data-aos="slide-up" data-aos-duration="5000">Satisfy Your doubts &<br/> Collect All The Information</Typography>
                <Typography align="right" className={classes.stepContentStyles1} data-aos="slide-up" data-aos-duration="5000">Having dropped a message on<br/> whatsapp, talk to our expert<br/> to get in-depth details of<br/> work.</Typography>
                <div style={{display:"flex",justifyContent:"flex-end"}} >
                <div className="pulse">
                    <ReactWhatsapp style={{textDecoration:"none",backgroundColor:"#3DBB29",border:"none",padding:"0.5rem"}} number="+91 9958223495" message="Hi! I am intrested to get my own online gaing ID">
                        <div className={classes.buttonStyles}><img src={whatsapp} alt="icon"/> &nbsp;<span className={classes.buttonText}>Get your online gaming ID now!</span></div>
                    </ReactWhatsapp>
                </div>
                </div>
            </div>
        </div>
        </div>

        
        
        <div style={{backgroundImage:`url(${background2})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center", minHeight:"700"}}>
        <div style={{height:"70rem",}}>

            <div style={{marginLeft:"2rem", paddingTop:"3rem",}}>
                <Typography align="left" className={classes.stepStyles}  data-aos="slide-up" data-aos-duration="5000">STEP 3</Typography>
                <Typography align="left" className={classes.stepContentStyles}  data-aos="slide-up" data-aos-duration="5000">Start Depositing & Withdrawal</Typography>
                <Typography align="left" className={classes.stepContentStyles1} data-aos="slide-up" data-aos-duration="5000">Having been convinced, you<br/> can start depositing the<br/> money without worrying and<br/> even withdraw as per the<br/> policies.</Typography>
                <ReactWhatsapp style={{textDecoration:"none",backgroundColor:"#3DBB29",border:"none",  marginLeft:"1rem", padding:"0.5rem"}} number="+91 9958223495" message="Hi! I am intrested to get my own online gaing ID" className="pulse">
                        <div className={classes.buttonStyles}><img src={whatsapp} alt="icon"/> &nbsp;<span className={classes.buttonText}>Get your online gaming ID now!</span></div>
                </ReactWhatsapp>
            </div>

            <div style={{marginLeft:"2rem", paddingTop:"3rem",}}>
                <Typography align="left"  className={classes.stepStyles} data-aos="slide-up" data-aos-duration="5000">STEP 4</Typography>
                <Typography align="left"  className={classes.stepContentStyles} data-aos="slide-up" data-aos-duration="5000">Earn From Your Skills</Typography>
                <Typography align="left"  className={classes.stepContentStyles1} data-aos="slide-up" data-aos-duration="5000">Now, the time comes to<br/>exhibit to your skills & convert<br/> them to money in a short span<br/> of time.</Typography>
                <ReactWhatsapp style={{textDecoration:"none",backgroundColor:"#3DBB29",border:"none",  marginLeft:"1rem", padding:"0.3rem"}} number="+91 9958223495" message="Hi! I am intrested to get my own online gaing ID" className="pulse">
                        <div className={classes.buttonStyles}><img src={whatsapp} alt="icon"/> &nbsp;<span className={classes.buttonText}>Get your online gaming ID now!</span></div>
                </ReactWhatsapp>
            </div>
            
        </div>
        </div>

        <div style={{backgroundImage:`url(${back})`, backgroundSize:"cover",minHeight:"700"}}>
            <div style={{height:900,minHeight:400}}>
            <Typography align="center" className={classes.title3} data-aos="slide-up" data-aos-duration="5000">Frequently Asked Questions</Typography>
            <div className={classes.borderStyles}  data-aos="slide-up" data-aos-duration="5000"></div>
            
            <div style={{marginLeft:"3rem", marginTop:"2rem"}}>
                <ul className={classes.faqQuestionStyle} data-aos="slide-up" data-aos-duration="5000"><li>Can under 18 play?</li>
                </ul>
                <p className={classes.faqAnswerStyle} data-aos="slide-up" data-aos-duration="5000">It is illegal for anybody under the age of 18 to gamble.<br/>
                <br/>Our site has strict policies and verification measures to prevent access to minors.<br/> We encourage parents consider the use of internet use protection tools. You may find the following links useful.<br/>
                </p>
            </div>
            
            </div>
        </div>
        
        </div>

        <div style={{background: "#030306",paddingLeft:"2.5rem",paddingTop:"2rem", paddingRight:"2rem", paddingBottom:"2rem"}}>
            <Grid container>
                <Grid item xs={8} md={4}>
                    <Typography className={classes.footerText}>Get In Touch With Millionare Book<br/>Customer Care</Typography>
                    
                    <ReactWhatsapp style={{textDecoration:"none",backgroundColor:"#3DBB29",border:"none",marginTop:"1rem"}} number="+91 9958223495" message="Hi! I am intrested to get my own online gaing ID" >
                        <div className={classes.buttonStyles}><img src={whatsapp} alt="icon"/> &nbsp;<span className={classes.buttonText}>Leave a message</span></div>
                    </ReactWhatsapp>
                    <Typography className={classes.footerAge}><img src={img} alt="18+"/>&nbsp;&nbsp;Underage gambling is an offence</Typography>
                </Grid>
                <Grid item xs={8} md={8} >
                    <Typography  className={classes.footerRightText} onClick={() => scrollToSection(section1)}>About Us</Typography>
                    <Typography  className={classes.footerRightText} onClick={() => scrollToSection(section2)}>Why Us</Typography>
                    <Typography  onClick={handleClickOpen} className={classes.footerRightText} >Restricted Area</Typography>
                </Grid>
              <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
                <div style={{display:"flex", justifyContent:"flex-end"}}><Button onClick={handleClose} >
                    X
                </Button></div>
        <DialogTitle style={{color:"#F62424",alignSelf:"center"}}>Restricted Area</DialogTitle>
        <DialogContent>
          <DialogContentText style={{color:"black",paddingInline:"2rem", textAlign:"justify",}}>
            Listed territories are prohibited from accessing the site and its services.<br/>
            <br/>
            The restricted territories are:<br/>
            Afghanistan, Algeria, Australia, Bosnia and Herzegovina, Bulgaria, Canada, China (People's Republic of), Cuba, Cyprus, Denmark, Ethiopia, France (and French territories), Germany, Gibraltar, Iran (Islamic Republic of), Iraq, Ireland, Italy, Korea (Democratic People's Republic of), Lao (People's Democratic Republic of), Macau, Malta, Myanmar, Netherlands, New Zealand, Poland, Portugal, Puerto Rico, Qatar, Romania, Singapore, Slovakia, South Africa, Spain, Sudan, Syrian Arab Republic, Taiwan, Turkey, Uganda, United Kingdom, United States (and U.S. Territories), Yemen.
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </Grid>
            </div>

        
        </>
    );
};