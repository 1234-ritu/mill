import { makeStyles } from "@material-ui/core";
import back from "../../img/qq-03_1.png";
import Homeimg1 from "../../img/homeback1.png";
import Homeimg2 from "../../img/casino.png";
import Homeimg3 from "../../img/image_1.png";
import bl from "../../img/betting_left.png";
import br from "../../img/betting_right.png";

export const homeStyles = makeStyles((theme) => ({
HeaderBackground:{
    position:"absolute",
    top:0,
    width:"100%",
    color:"white",
    backgroundColor:"black",
},
HeaderAlignment:{
    display:"flex", 
    justifyContent:"space-between",
    alignItems:"end", 
    paddingLeft:"1rem", 
    paddingRight:"2rem",
},
HeaderMenu:{
    alignSelf:"right",
    paddingBottom:"1rem", 
    display:"flex",
    gap:"2.5rem", 
    justifyContent:"center", 
    alignItems:"center",
},
HeaderOptions:{
    textDecoration:"none",
    color:"white",
},



    bg1_segment1:{
        backgroundImage:`url(${back})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        paddingBottom:"2rem",
        paddingTop:"2rem",
        height:"55rem",   
    },
    bg2_segment1:{
        backgroundImage:`url(${Homeimg1})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        height:"25rem", 
    },
    bg3_segment1:{
        backgroundImage:`url(${Homeimg2})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        height:"25rem", 
    },
    experience: {
        fontStyle: "normal", 
        fontWeight: 400, 
        fontSize: "2rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem"
        },
        color: "white",
    },
    Creating:{
        marginTop:"2rem", 
        color:"white",
        fontStyle: "normal", 
        fontWeight: 400, 
        fontSize: "2rem", 
        marginBottom:"2rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem"
        },
    },
    buttonCenter:{
        display:"flex",
        justifyContent:"center",
    },
    buttonStyles:{
        color: 'white',
        paddingTop: '0.5rem',
        borderRadius: '0rem',
        backgroundColor: '#3DBB29',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize:"1.3rem",
    },
    bg1_segment2:{
        paddingRight:"2rem", 
        height:"55rem",
        backgroundImage:`url(${Homeimg3})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
    },
    segment3:{
        backgroundColor:"black",
    },
    bg1_segment3:{
        backgroundImage:`url(${bl})`,
        backgroundPosition:"left",
        backgroundRepeat:"no-repeat",
    },
    bg2_segment3:{
        backgroundImage:`url(${br})`,
        backgroundPosition:"right",
        backgroundRepeat:"no-repeat",
    },
    borderStyles:{
        border:"0.3rem solid white",
        display:"flex",
        marginRight:"35%", 
        marginLeft:"35%",
    },
    whyMill:{
        color:"#FC9D45", 
        fontStyle: "normal", 
        fontWeight: 700, 
        fontSize: "2.5rem", 
        paddingTop:"2rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem"
        },
    },
    sec2Simple:{
        color:"white", 
        fontStyle: "normal", 
        fontWeight: 400, 
        fontSize: "2rem", 
        paddingTop:"2rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem"
        },
    },
    getId:{
        color:"#FC9D45",
        marginTop:"1rem",
        fontStyle: "normal", 
        fontWeight: 400, 
        fontSize: "2rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem"
        },
    },

    
    title3:{
        color:"#FC9D45", 
        fontStyle: "normal", 
        fontWeight: 700, 
        fontSize: "3rem",
        [theme.breakpoints.down("sm")]: {
            fontSize:"2rem",
        },
    },
    coinTextStyles:{
        color:"#FC9D45", 
        fontStyle: "normal", 
        fontWeight: 700, 
        fontSize: "2rem",
        [theme.breakpoints.down("sm")]: {
            fontSize:"1.5rem",
        },
    },
    stepStyles:{
        color:"#FC9D45", 
        fontStyle: "normal", 
        fontWeight: 700, 
        fontSize: "3rem", 
        paddingBottom: "3rem",
        [theme.breakpoints.down("sm")]: {
            fontSize:"2rem",
        },
    },
    stepContentStyles:{
        color:"white",
        fontStyle: "normal",
        fontWeight: 700, 
        fontSize: "2rem", 
        paddingBottom: "1.8rem",
        [theme.breakpoints.down("sm")]: {
            fontSize:"1.5rem",
        },
    },
    stepContentStyles1:{
        color:"#B8B8B8",
        fontStyle: "normal",
        fontWeight: 400, 
        fontSize: "2rem", 
        paddingBottom: "1.8rem",
        [theme.breakpoints.down("sm")]: {
            fontSize:"1.5rem",
        },
    },
    faqQuestionStyle:{
        listStyleType:"square", 
        color:"orange",
        fontStyle: "normal", 
        fontWeight: 600, 
        fontSize: "2rem",
        [theme.breakpoints.down("sm")]: {
            fontSize:"1.5rem",
        },
    },
    faqAnswerStyle:{
        color:"white",
        fontStyle: "normal", 
        fontWeight: 400, 
        fontSize: "1.5rem", 
        paddingLeft:"2rem",
        paddingRight:"2rem",
        [theme.breakpoints.down("sm")]: {
            fontSize:"1.2rem",
        },
    },
    footerText:{
        fontStyle:"normal",
        fontWeight:"400",
        fontSize:"1.5rem",
        color:"#ffffff", 
        marginTop:"1rem",
        [theme.breakpoints.down("sm")]: {
            fontSize:"1.2rem",
            
        },
    },
    footerAge:{
        color:"#F13535",
        fontStyle: "normal", 
        fontWeight: 400, 
        fontSize: "1.2rem", 
        display:"flex", 
        justifyContent:"left", 
        alignItems:"left", 
        paddding:"0.2rem",
        marginTop:"1rem",
        
    },
    footerRightText:{
        fontStyle:"normal",
        fontWeight:"400",
        fontSize:"1.2rem", 
        color:"white",
        display:"flex",
        justifyContent:"flex-end",
        marginTop:"0.5rem",
        [theme.breakpoints.down("sm")]: {
            justifyContent:"left",
            alignItems:"left",
        },
    },
}))
