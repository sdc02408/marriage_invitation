import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import './index.css'
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";
import CarouselPage from './CarouselPage'
import VideoPage from './VideoPage'
import MapsDiv from './Map';
import CardPage from './CardPage'
import firebase from './firebase'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebaseInit from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideBarModal from './SideBarModal'
import PicMain from '../src/images/Z63_056222.jpg'
import Pic1 from '../src/images/Z63_0081_work-websize.jpg'
import Pic2 from '../src/images/Z63_0257_work-websize.jpg'
import Pic4 from '../src/images/Z63_0471_work-1-websize.jpg'
import Pic5 from '../src/images/Z63_0510_work-1-websize.jpg'
import Pic6 from '../src/images/Z63_0562_work-1-websize.jpg'
import Pic7 from '../src/images/Z63_0698_work-1-websize.jpg'
import Pic8 from '../src/images/Z63_1360_work-1-websize.jpg'
import Pic9 from '../src/images/Z63_1777_work-1-websize.jpg'
import Pic10 from '../src/images/Z63_2287_work-websize.jpg'
import Pic11 from '../src/images/Z63_2867_work-1-websize.jpg'
import Pic12 from '../src/images/Z63_2907_work-1-websize.jpg'
import Pic13 from '../src/images/Z63_3168_work-1-websize.jpg'
import Pic14 from '../src/images/Z63_3231_work-websize.jpg'
import Pic15 from '../src/images/Z63_3262_work-1-websize.jpg'
import Pic16 from '../src/images/Z63_3365_work-1-websize.jpg'

const App = () => {

  const itemData = [
      {
        img: Pic1,
        title: '0',
        author: 'author',
        cols: 1,
      },{
        img: Pic2,
        title: '1',
        author: 'author',
        cols: 1,
      },
       {
         img: Pic4,
         title: '2',
         author: 'author',
         cols: 1,
       },
       {
        img: Pic5,
        title: '3',
        author: 'author',
        cols: 1,
       },       {
        img: Pic6,
        title: '4',
        author: 'author',
        cols: 1,
       },       {
        img: Pic7,
        title: '5',
        author: 'author',
        cols: 1,
      },
      {
       img: Pic8,
       title: '6',
       author: 'author',
       cols: 1,
      },       {
       img: Pic9,
       title: '7',
       author: 'author',
       cols: 1,
      },     {
        img: Pic10,
        title: '8',
        author: 'author',
        cols: 1,
       },       {
        img: Pic11,
        title: '9',
        author: 'author',
        cols: 1,
       },       {
        img: Pic12,
        title: '10',
        author: 'author',
        cols: 1,
      },
      {
       img: Pic13,
       title: '11',
       author: 'author',
       cols: 1,
      },       
      {
       img: Pic14,
       title: '12',
       author: 'author',
       cols: 1,
      },
      {
        img: Pic15,
        title: '13',
        author: 'author',
        cols: 1,
       },
       {
        img: Pic16,
        title: '1',
        author: 'author',
        cols: 1,
       },
     ];

     const doCopy = text => {
      // 흐름 1.
      if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
      }
  
      // 흐름 2.
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.top = 0;
      textarea.style.left = 0;
      textarea.style.position = "fixed";
  
      // 흐름 3.
      document.body.appendChild(textarea);
      // focus() -> 사파리 브라우저 서포팅
      textarea.focus();
      // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
      textarea.select();
      // 흐름 4.
      document.execCommand("copy");
      // 흐름 5.
      document.body.removeChild(textarea);
      alert("클립보드에 복사되었습니다.");
    };

    


  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 500,
    },
  }));
  const classes = useStyles();
  const [writer,setWriter] = useState('')
  const [message,setMessage] = useState('')

  const [resMsg,setResMsg] = useState([])
  const db = firebase.firestore();
  var users = db.collection("message");

  
  const submitMsg = (e) => {
    e.preventDefault();
    db.collection("message").add({
      msg:writer,
      writer: message
      
    })
    .then((docRef) => {
      console.log(docRef.id);
      alert('감사합니다 ')
    })
    .catch((error) => {
      console.log('error',error)
    })
    
  }


  useEffect(() => {
    db.collection("message").orderBy('writer','desc').onSnapshot(snap => {
      const data = snap.docs.map(doc => doc.data())
    console.log(data)

      setResMsg(data)
    });
  },[])



  const ref = useRef();
  const [showModal, setShowModal] = useState(false);
  const [clickImg, setClickImg] = useState('')
  const [setImg,setSetImg] = useState('')
    const openModal = (e) => {
      setSetImg(e.target.title)
      setClickImg(e.target.currentSrc)
      setShowModal(true);
    }
    const closeModal = () => {
      setShowModal(false);
    }
  return (
    <div className="App">
    <SideBarModal showModal={showModal} imagesSet1={setImg} images={itemData} clickImgs={clickImg}  closeModal={closeModal}></SideBarModal>
    {/* closeModal={closeModal} */}
      {/* <div style={{width:"100%"}}>
        <VideoPage />
      </div> */}

      {/* <Controller>
        <Scene duration="100%" triggerHook="onLeave" pin>
          {progress => (
            <div style={{ height: "100vh", position: "relative" }}>
              <Sequence ref={ref} progress={progress} />
            </div> 
          )}
        </Scene>
      </Controller> */}
      <img src={Pic6} className="maingImage" />

      {/* <div style={{backgroundColor:'rgba(254, 251, 245, 0.8)', padding:'30px'}}> */}
      <div style={{ padding:'30px'}}>
     
     
      <div className="marrigeText"> 초대합니다 </div>      
       
      <div style={{marginBottom:'0px'}} className="alignCenter locationDiv">
       
          <div>2022년 03월 01일 오후 5시 30분</div>
          <div>더채플앳논현 라포레홀 6F</div>  
      </div>

      </div>
      <hr className="alignCenter"></hr>

      <div className="mainTextContainer alignCenter">
      <div className="marrigeText">
            인사말
        </div>
            {/* <div className="maintextTtiel">7년간의 </div> */}
            <div className="mainText">두 사람이 7년의 아름다운 만남 가운데</div>
            <div className="mainText">하나님 안에서 행복한 가정을 이루고자 합니다.</div>
            <div className="mainText">서로를 귀히 여기고 사랑하며 살겠습니다.</div>
            <div className="mainText">시작하는 자리에 오셔서 축복해주시면</div>
            <div className="mainText">더없는 기쁨으로 간직하겠습니다.</div>
           <br></br>
        
            <div className="mainText smallMainText">"믿음, 소망, 사랑 이 세가지는 항상 있을 것인데,</div>
            <div className="mainText smallMainText">그 중의 제일은 사랑이라" </div>
            <div className="mainText smallRMainText">(고린도전서 13:13)</div>
      </div>

      {/* <hr className="alignCenter"></hr> */}

      <div className="alignCenter locationDiv">
          {/* <div>2022년 03월 01일 오후 5시 30분</div>
          <div>더채플앳논현 라포레홀 6F</div>  

          <br></br> */}

          <div>
          <span className="parents">양재명 · 이지연</span>  <span className="parentsAmong">의 장남</span>  <span className="parentsChild">찬석</span>
          </div>
          <div>
          
          <span className="parents">이종진 · 엄상민</span>  <span className="parentsAmong">의 장녀</span>  <span className="parentsChild">재희</span>
          </div>
      
      </div>      

      <hr className="alignCenter"></hr>

      <div className="alignCenter">
        {/* <div className="maptitle"> */}
        <div className="marrigeText">
          오시는 길
        </div>
        <MapsDiv/>

        <div className="alignCenter locaDiv" >
          <div>
          <div><span style={{fontSize:'17px', fontWeight:'600'}}>더채플앳논현</span> <span style={{fontWeight:'500'}}>TEL 02.562.1121</span></div>
          <div>서울특별시 강남구 논현로 549</div>
          </div>
          <br></br>
          <div>
          <div style={{fontWeight:'600'}}>지하철</div>
          <div style={{fontSize:'14px'}}>언주역 (9호선) 7번 출구로 나와 정면 방향으로 150m </div> 
          <div style={{fontSize:'14px'}}>역삼역 (2호선) 6번 출구로 나와 좌측 방향으로 450m </div> 

          <br></br> 
          <div style={{fontWeight:'600'}}>자가용</div>
          <div  style={{fontSize:'14px'}}>내비게이션 이용 시 '더채플앳논현' 검색  </div>
          <div  style={{fontSize:'14px'}}>발렛 서비스(2시간 30분 무료)</div> 
          </div>
        </div>
      </div>

      <hr className="alignCenter"></hr>
   
      
      
      <div >
            {/* <CarouselPage /> */}
          <div className={classes.root}>

          <div className="marrigeText">
          Wedding Photo
        </div>
          <ImageList rowHeight={160} className={classes.imageList} cols={3}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1}>
                <img src={item.img} alt={item.title} onClick={openModal} title={item.title}/>
              </ImageListItem>
            ))}
          </ImageList>
          </div>
      </div>

      <hr style={{marginTop:'30px'}} className="alignCenter"></hr>
      

      <div style={{width:"90%", margin:"0 auto", textAlign:'center', lineHeight:'1.6'}}>
        <div className="marrigeText">마음 전하실 곳</div> 
            <div >
              <div className="sendMindName">신랑 측 </div>
              <div className="sendMindNum">신한은행 (예금주 : 양재명)</div>
              <span className="sendMindNum">110-401-086718</span>
              {/* <input  value="110-401-086718" ref={textInput} readOnly className="sendMindNumBtn"></input> */}
              
              {/* <Button onClick={copy} variant="outlined" >복사하기</Button> */}
              <Button onClick={() => doCopy("110-401-086718")} variant="outlined" >복사하기</Button>
               
              {/* <Button variant="outlined">복사하기</Button> */}
            </div>
            <br></br>
         

            <div>
            <div className="sendMindName">신부 측</div>
            <div className="sendMindNum">하나은행 (예금주 : 이종진) </div>
            <span className="sendMindNum">413-890062-86907</span>
            {/* <Button variant="outlined">복사하기</Button> */}
            <Button onClick={() => doCopy("413-890062-86907")} variant="outlined" >복사하기</Button>
            
            </div>
            <br></br>




      </div>

      <hr className="alignCenter"></hr>


      <div style={{width:"90%", margin:"30px auto"}}>

      <div className="marrigeText">
          축하메세지 남기기
        </div>
        <div>
        <span style={{verticalAlign:'center'}} className="writerMsg">작성자 : </span>
        <input className="inputBox"  type='text'  onChange={(e) => setWriter(e.target.value)}></input >
        </div>
        <hr style={{width:'100%',margin:'15px 0px 30px'}}></hr>

        <div>
        <textarea className="inputBox msgInputbox"  placeholder="메세지를 입력해주세요"  type='text' onChange={(e) => setMessage(e.target.value)}></textarea >
        </div>
        <hr style={{width:'100%'}}></hr>
              
        <Button className="bnt2"  style={{ float:'right'}} variant="outlined" onClick={submitMsg} type='submit'>확인</Button >  
      </div>  

      <div style={{width:"90%", margin:"0 auto"}}>
    
              <div  style={{marginTop: '80px'}}>
                {resMsg && resMsg.map((i) => 
                  (
                    <div className="msgDivBox" style={{marginBottom: '25px'}}>
                      <div className="writerComment">{i.msg}</div>
                      <div className="writerContent">{i.writer}</div>
                    </div>
                ))}
              </div>
     
      </div>

  
     
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
