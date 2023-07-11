import logo from './logo.svg';
import './App.css';

import ReactPlayer from 'react-player'
import React from 'react';
import { useState, useLayoutEffect } from 'react';
import Slider from 'react-slick';
import { findDOMNode } from 'react-dom'

import d3Certification from './d3Certification.jpeg'
import frontEndCertificate from './frontEndCertificate.jpeg'
import javascriptCertification from './javascriptCertificate.jpeg'
import ResponsinveWebCertificate from './ResponsiveWebCertificate.jpeg'
import Profile from './myFace.jpg'
import Signature from './SignatureCropped.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FiPlay, FiCode} from  "react-icons/fi";
import { AiFillAndroid } from "react-icons/ai";
import { FaAppStoreIos, FaGooglePlay, FaVolumeMute, FaVolumeUp, FaCodepen, FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import { useEffect } from 'react';

import screenfull from 'screenfull';



import ClickText from './ClickText';

import pressSound from './keyboardPress.wav'

function App() {



  const [size, setSize] = useState([0, 0]);


  let player = null;
  const ref = (p) => {player = p;}
  const [controls,setControls] = useState(false);


  useLayoutEffect(() => {


    document.addEventListener("fullscreenchange", (event) => {
      if (!document.fullscreenElement) {
        setControls(false);
      } 
    });



    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);


  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const fullDesription = "<h1>🎮</h1> \n <p style='opacity : 1'>· C# · Unity · Playfab · Hlsl ·</p> \n <h2> ✯¸.•´*¨`*•✿•*`¨*`•.¸✯</h2> \n <h1>🕸️</h1> \n <p style='opacity : 1'>· HTML · CSS · Javascript · React · React Native · NodeJS · d3.js · Firebase · </p> \n ✯¸.•´*¨`*•✿•*`¨*`•.¸✯ ✯¸.•´*¨`*•✿•*`¨*`•.¸✯ ✯¸.•´*¨`*•✿•*`¨*`•.¸✯";
  
  
  







  const [displayDescription, setDisplayDescription] = useState("");
  const [displayDescriptionHtml, setDisplayDescriptionHtml] = useState("");

  

  let audio = new Audio(pressSound);


  const [emailTextTrigger, setEmailTextTrigger] = useState(false);
  const [iOSTextTrigger, setiOSTextTrigger] = useState(false);
  const [googlePlayTextTrigger, setGooglePlayTextTrigger] = useState(false);
  


  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        
        if(seconds > fullDesription.length){
          
          setIsActive(false);
          return;
        }
        
        setDisplayDescriptionHtml(displayDescriptionHtml + fullDesription.charAt(seconds))
        setSeconds(seconds => seconds + 1);
      }, 30);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  
  

  const [videoClass, setVideoClass] = useState("Video");
  
  const [videoHover, setVideoHover] = useState(false);
  const [videoWidth,setVideoWidth] = useState(window.innerWidth > 770 ? 30 : 50);
  const [muted, setMuted] = useState(true);


  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3500,
    className: "center",
    dots : true,
    centerMode: true,
    centerPadding : "0px",
    infinite: true,
    focusOnSelect: true,
    slidesToShow: window.innerWidth > 770 ? 3 : 1,
    speed: 900,
    beforeChange : (current, next) => setCurrentSlide( next ),
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div>
        <div
          style={{
            color : currentSlide == i ? "#B0D2D6" : "darkslategrey" ,
            fontSize : currentSlide == i ? "70px" : "50px",
            transition : "width .3s, height .3s, top .3s",
            position : "relative",
            top : currentSlide == i ? "-5px" : "0px",
            border : "1px solid #B0D2D6",
            width : currentSlide == i ? "15px" : "10px",
            height :  currentSlide == i ? "15px" : "10px",
            borderRadius : "100%",
            boxShadow : currentSlide == i ? "7px 7px 5px 1px rgb(102, 168, 168)" : "7px 7px 5px 1px darkslategrey",
            overflow : 'hidden'
          }}
        >
          <div
            style={{
              width : "15px",
              height : currentSlide == i ? "100%" : "0px",
              backgroundColor : currentSlide == i ? "#B0D2D6" : "rgba(0,0,0,0)",
              transition : "height 4.4s",
              transitionTimingFunction: "linear",
              position : "absolute",
              bottom : "0px",
              
            }}
          >
          </div>
        </div>
      </div>
    )
  };

  

  

  
  
    

  
  return (
    <div className="App">
        <ReactPlayer 
              url='videos/backgroundImage.mp4' 


              
              height={window.innerWidth/window.innerHeight > 16/9 ?  window.innerWidth * (9/16)  + "px" : window.innerHeight + "px"}

              
              width={window.innerWidth/window.innerHeight > 16/9 ?  window.innerWidth   + "px" : window.innerHeight * (16/9) + "px"}

              playing={true}
              loop={true}
              muted={true}
              style={{position : "fixed", transform: "translate(-50%, 0)", left: "50%", top : "0%", zIndex : 0}}
              
              
              
              
      />
      <header className="App-header" id="Top">
      
      <div
          
        className='Card'
      >


              <div
                
                className='CardHeader'
              >

                <ReactPlayer 
                  url='videos/water.mp4' 
                  
                  playbackRate = {0.5}
                  playing={true}
                  loop={true}
                  muted={true}
                  style={{position : "absolute", height : "110%", top : "0%"}}
                
                
                
                
                />
                <div
                  style={{
                    position : "absolute",
                    width : "100%",
                    height : "100%",
                    top : "0%",
                    display : "flex",
                    alignItems : "center",
                    justifyContent : "center",

                  }}
                >
                  <div
                    style={{
                      width : "50%",
                      aspectRatio : 1/1,
                      overflow : 'hidden',
                      borderRadius : "100%",
                      position : "absolute",
                                          
                    }}
                  >
                    <img
                      
                      src = {Profile}
                      
                      
                        
                      style={{
                        height : "100%"
                        
                      }}
                      
                      
                    >
                    </img>
                  </div>
                </div>
                <svg
                  height="100px"
                  viewBox='0 0 100% 100%'

                  style={{
                    position  : 'absolute',
                    bottom : "10px",
                    left  : 0,
                    width : "100%",
                  }}
                >
                  
                  <path d={`M 0 80 C 40 100, ${size[0] > 770 ? window.innerWidth * 0.10 : window.innerWidth * 0.20} 50, ${size[0] > 770 ? window.innerWidth * 0.15 : window.innerWidth * 0.3} 60 C ${size[0] > 770 ? window.innerWidth * 0.2 : window.innerWidth * 0.4} 70, ${ size[0] > 770 ? window.innerWidth * 0.28 : window.innerWidth * 0.56} 90, ${size[0] > 770 ? window.innerWidth * 0.3 : window.innerWidth * 0.7} 40 L${size[0] > 770 ? window.innerWidth * 0.3 : window.innerWidth * 0.7} 100 L0 100 Z`} width={"100%"}  fill="#B0D2D6"/>
                  
                  
                
                  
                </svg>
                <div
                  style={{
                    backgroundColor : "#B0D2D6",
                    width : "100%",
                    position : "absolute",
                    bottom : "0px",
                    height : "2vw"
                  }}
                >

                </div>
              </div>
              

              <h2
                style={{marginTop : 0, marginBottom : 0, paddingBottom : 0}}
              >
                Emil Huzell
              </h2>
              <h6 style={{marginTop : 0, paddingTop : 0, fontStyle : "italic", marginBottom  : "5%", color : "white"}}>Developer</h6>
              <div
                style={{
                  width : "90%",
                  textAlign : "left"
                  
                  
                }}
              >
                
                <div
                  style={{
                    marginTop : 0,
                    display : 'flex',
                    position : "relative",
                    flexDirection : "row",
                    alignItems : "center",
                    justifyContent : "space-around",
                    paddingBottom : "5%",
                    width : "80%",
                    marginLeft : "10%"
                    
                  }}
                >
                  <div
                    
                  >
                    <a href='' 
                      onClick={(e)=>{
                        e.preventDefault();
                        setEmailTextTrigger(true);
                        navigator.clipboard.writeText("emiljhuzell@gmail.com");
                        audio.play();
                      }}
                    >
                      <FaEnvelope color='white'/>
                      <ClickText text={"copied to clipboard!"} trigger={emailTextTrigger} setTrigger={setEmailTextTrigger}></ClickText>
                  </a> 
                  </div>
                  <a href='https://codepen.io/emil-johansson-huzell' ><FaCodepen color='black'/></a> 
                  <a href='https://github.com/EmilHuzell'><FaGithub color='black' /></a> 
                  <a href='https://www.linkedin.com/in/emil-huzell-219603128/' ><FaLinkedin color='#0077B5'/></a>
                </div>
              </div>

              
              
      </div>
        <div
          className='TextContainer'
        >
          <div
            
            dangerouslySetInnerHTML={{__html : displayDescriptionHtml}}
            style={{color : "white", fontWeight : "bold", fontSize : ".8em", paddingBottom : "10vh", width : "100%"}}
          >
            
            
            
          </div>
          
          
        </div>
      </header>

      <main
        id='Body'
      >
        <div
            style={{ width : "100%", display : 'flex', alignItems : 'left'}}
          >
          <h3>Work</h3>
        </div>


        <div
          className='Videos'
        >
          <div
            className='Video'
            style={{
              width : videoWidth + "%", 
              height : videoWidth * 0.5625 + "%", 
              position : "relative",
              borderRadius : "2%",
              overflow : "hidden"
            }}
            onMouseEnter={()=>{
              console.log("hejj")
              setVideoHover(true);

              window.innerWidth > 770 ? setVideoWidth(40) : setVideoWidth(90)
              
            }}
            onMouseLeave={()=>{
              setVideoHover(false);
              setVideoWidth(30);
              window.innerWidth > 770 ? setVideoWidth(30) : setVideoWidth(50)
            }}
          >
          
            {
              videoHover ? 
              muted ?
                <h3
                  style={{
                    position : "absolute",
                    backgroundColor : "#B0D2D6",
                    right : "10px",
                    top : "0px",
                    width : "20px",
                    height : "20px",
                    display : "flex",
                    alignItems : "center",
                    justifyContent : "center",
                    zIndex : 2,
                    padding : "2%",
                    borderRadius : "100%"
                  }}
                >
                  <a 
                    href=''
                    onClick={(e)=>{
                      e.preventDefault();
                      setMuted(false);
                    }}
                  >
                    <FaVolumeMute  color="white"/>
                  </a>
                </h3>
                :
                <h3
                  style={{
                    position : "absolute",
                    backgroundColor : "#B0D2D6",
                    right : "10px",
                    top : "0px",
                    width : "20px",
                    height : "20px",
                    display : "flex",
                    alignItems : "center",
                    justifyContent : "center",
                    zIndex : 2,
                    padding : "2%",
                    borderRadius : "100%"
                  }}
                >
                  <a 
                    href=''
                    onClick={(e)=>{
                      e.preventDefault();
                      setMuted(true);
                    }}
                  >
                    <FaVolumeUp color='white' />
                  </a>
                </h3>
                :
                null
            }
            
            <ReactPlayer 
              url='videos/Supply&DemandPromoVideo720.mp4' 
              width={"100%"}
              height={"100%"}
              playing={videoHover}
              muted={muted}
              ref={ref}
              controls={controls}
              //style={{backgroundColor : "red", width : videoWidth + "%", height : videoWidth * 0.5625 + "%"}}
              
              
              /*
              onMouseEnter = {()=>{
                
              }
              onMouseLeave = {()=>{
                setWidth("16vw")
                
                setHeight("9vw")
              }}


              style={{ width: '100%',  }}}
              */
              
            />
            {
            videoHover  ?
                <>
                  
                
                  <div
                    style={{
                      marginLeft : "10px",
                      marginRight : "10px"
                    }}
                  >
                    <h3
                      style={{
                        marginLeft : 0
                      }}
                    >
                      <a 
                        href=''
                        onClick={(e)=>{
                          e.preventDefault();
                          findDOMNode(player).requestFullscreen().catch(
                            (err) => 
                            {console.log("couldnt play fullscreen")}
                          );
                          setControls(true);
                        }}
                      >
                        <FiPlay  color='white'/>
                      </a>
                    </h3>
                    <h3>
                      Supply&Demand
                    </h3>
                    <p
                      style={{
                        color : "white"
                      }}
                    >
                      A map-based marketplace app for iOS and android
                    </p>
                    <div
                      style={{
                        display : "flex",
                        flexDirection : "row",
                        position : "relative",
                        marginBottom : "10px",
                      }}
                    >
                      
                         
                          <a 
                            href=''
                            onClick={(e)=>{
                              e.preventDefault();
                              setiOSTextTrigger(true);
                              audio.play();
                            }}
                          >
                            <FaAppStoreIos color='white' size={"25px"}/>
                            <ClickText text={"Coming soon!"} trigger={iOSTextTrigger} setTrigger={setiOSTextTrigger}></ClickText>
                          </a>
                          <a 
                            href=''
                            onClick={(e)=>{
                              e.preventDefault();
                              setGooglePlayTextTrigger(true);
                              audio.play();
                            }}
                          >
                            <FaGooglePlay  color='white' size={"25px"}/>
                            <ClickText text={"Coming soon!"} trigger={googlePlayTextTrigger} setTrigger={setGooglePlayTextTrigger}></ClickText>
                          </a>
                        
                        
                    </div>
                  </div>
                </>
                :
                null
              
            }
            
            
          </div>

        </div>
        
            
        
            
        <div
            style={{ width : "100%", display : 'flex', alignItems : 'left'}}
          >
          <h3>Certificates</h3>
        </div>

        <div
          style={{ width : "90%"}}
        >
          <Slider
            {...sliderSettings}
            className='Slider'
            beforeChange = {(current, next)=>{

              setCurrentSlide(next);
              console.log("current")
              console.log(current);
              console.log("next");
              console.log(next)
            }}
            
            
          >
           
            
            
            
              
              <img
                className={['Slide', 3 == currentSlide? ' PrevSlide' : 0 < currentSlide ? ' NextSlide' : ''].join(" ")}
                src = {ResponsinveWebCertificate}
                
                
                
                width = {currentSlide == 0 ? 310 * 1.3 : 250 * 1.3}
                
                aspectRatio = {1/1.3}
                style={{
                  margin : "0 auto",
                  
                }}
                
                
              >
              </img>
              
            
              <img
                  className={['Slide', 1 > currentSlide? ' PrevSlide' : 1 < currentSlide ? ' NextSlide' : ''].join(" ")}
                  src = {javascriptCertification}
                  aspectRatio = {1/1.3}
                  width = {currentSlide == 1 ? 310 * 1.3 : 250 * 1.3}
                  style={{
                    margin : "auto auto",
                    perspective : "80px"
                  }}
                  display = { currentSlide > 1 && currentSlide <= 3 ? "block" : "none"}
                >
                </img>
            
              
            
                <img
                  className={['Slide', 2 > currentSlide? ' PrevSlide' : 2 < currentSlide ? ' NextSlide' : ''].join(" ")}
                  src = {frontEndCertificate}
                  aspectRatio = {1/1.3}
                    width = {currentSlide == 2 ? 310 * 1.3 : 250 * 1.3}
                  style={{
                    margin : "auto auto"
                  }}
                  display = { currentSlide > 1 && currentSlide <= 3 ? "block" : "none"}
              >

              </img>
            
           
            
            
            
              
            
              <img
                className={['Slide', 0 == currentSlide? ' NextSlide' : 3 > currentSlide ? ' PrevSlide' : ''].join(" ")}
                src =  {d3Certification}
                aspectRatio = {1/1.3}
                  width = {currentSlide == 3 ? 310 * 1.3 : 250 * 1.3}
                
              >
              </img>

            
          </Slider>
        
        </div>    
        <div
          style = {{
            marginBottom : "2%"
          }}
        >
          <img
            src =  {Signature}
            className= 'Signature'
            
          >
          </img>
          <a 
            href='#Top'
            style={{
              textDecoration: "none"
            }}
          >
            <h3
            style={{
              position : "relative",
              top : "50px",
              color : "#946E48",
              textDecoration: "none"
            }}
            >
              Back to top 🡹
            </h3>
          </a>
        </div>
        
        
      </main>
    </div>
  );
}

export default App;
