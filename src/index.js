import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import './index.css'
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";
import Firstpic from './images/1pic.jpg'
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
         img: Pic4,
         title: 'Image',
         author: 'author',
         cols: 1,
       },
       {
        img: Pic5,
        title: 'Image',
        author: 'author',
        cols: 1,
       },       {
        img: Pic6,
        title: 'Image',
        author: 'author',
        cols: 1,
       },       {
        img: Pic7,
        title: 'Image',
        author: 'author',
        cols: 1,
      },
      {
       img: Pic8,
       title: 'Image',
       author: 'author',
       cols: 1,
      },       {
       img: Pic9,
       title: 'Image',
       author: 'author',
       cols: 1,
      },     {
        img: Pic10,
        title: 'Image',
        author: 'author',
        cols: 1,
       },       {
        img: Pic11,
        title: 'Image',
        author: 'author',
        cols: 1,
       },       {
        img: Pic12,
        title: 'Image',
        author: 'author',
        cols: 1,
      },
      {
       img: Pic13,
       title: 'Image',
       author: 'author',
       cols: 1,
      },       
      {
       img: Pic14,
       title: 'Image',
       author: 'author',
       cols: 1,
      },
      {
        img: Pic15,
        title: 'Image',
        author: 'author',
        cols: 1,
       },
       {
        img: Pic16,
        title: 'Image',
        author: 'author',
        cols: 1,
       },
     ];
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
  
  return (
    <div className="App">

      {/* <div style={{width:"100%"}}>
        <VideoPage />
      </div> */}

      <Controller>
        <Scene duration="100%" triggerHook="onLeave" pin>
          {progress => (
            <div style={{ height: "100vh", position: "relative" }}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
      
      <div className="marrigeText"> 결혼합니다 </div>      

      <hr className="alignCenter"></hr>

      <div className="mainTextContainer alignCenter">
            {/* <div className="maintextTtiel">7년간의 </div> */}
            <div className="mainText">두 사람이 7년의 아름다운 만남 가운데</div>
            <div className="mainText">하나님 안에서 행복한 가정을 이루고자 합니다.</div>
            <div className="mainText">서로를 귀히 여기고 사랑하며 살겠습니다.</div>
            <div className="mainText">시작하는 자리에 오셔서 축복해주시면</div>
            <div className="mainText">더없는 기쁨으로 간직하겠습니다.</div>
            <div className="mainText">"믿음, 소망, 사랑 이 세가지는 항상 있을 것인데,</div>
            <div className="mainText">그 중의 제일은 사랑이라" </div>
            <div className="mainText">(고린도전서 13:13)</div>
      </div>

      <hr className="alignCenter"></hr>

      <div className="alignCenter locationDiv">
          <div>2022년 03월 01일 오후 5시 30분</div>
          <div>더채플앳논현 라포레홀 6F</div>  

          <br></br>

          <div>
          <span className="parents">양재명 | 이지연</span>  <span className="parentsAmong">의 장남</span>  <span className="parents">양찬석</span>
          </div>
          <div>
          
          <span className="parents">이종진 | 엄상민</span>  <span className="parentsAmong">의 장녀</span>  <span className="parents">이재희</span>
          </div>
      
      </div>      

      <hr className="alignCenter"></hr>

      <div className="alignCenter">
        <div className="maptitle">
          오시는 길
        </div>
        <MapsDiv/>

        <div className="alignCenter locaDiv" >
          <div>
          <div>서울특별시 강남구 논현로 549</div>
          </div>
          <br></br>
          <div>
          <span>지하철 | 언주역 (9호선) 7번 출구로 나와 도보 150m</span> 

          <br></br> 
          <span>주차  &nbsp;&nbsp;   |  발렛 서비스(2시간 30분 무료)</span> 
          </div>
        </div>
      </div>

   
      
      
      <div >
            {/* <CarouselPage /> */}
          <div className={classes.root}>
          <ImageList rowHeight={160} className={classes.imageList} cols={3}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1}>
                <img src={item.img} alt={item.title} />
              </ImageListItem>
            ))}
          </ImageList>
          </div>
      </div>

      

      <div style={{width:"90%", margin:"0 auto"}}>
        <div className="sendMind">신랑 & 신부에게 마음 전하기</div> 
            <div>
              <div className="sendMindName">신랑혼주 계좌 </div>
              <div className="sendMindNum">신한은행 (예금주 : 양재명)</div>
              <div className="sendMindNum">110-401-086718</div>
            </div>
            <br></br>
            <div>
              <div className="sendMindName">신랑 계좌</div>
              <div className="sendMindNum">국민은행 (예금주 : 양찬석) </div>
              <div className="sendMindNum">368102-01-199845</div>
            </div>
            <br></br>

            <div>
            <div className="sendMindName">신부혼주 계좌</div>
            <div className="sendMindNum">하나은행 (예금주 : : 이종진) </div>
            <div className="sendMindNum">413-890062-86907</div>
            </div>
            <br></br>

            <div style={{marginBottom: '30px'}}>
              <div className="sendMindName">신부  계좌</div>
              <div className="sendMindNum"> 우리은행(예금주 : 이재희) </div>
              <div className="sendMindNum">100-285-2308092</div>
            </div>


      </div>

      <hr className="alignCenter"></hr>


      <div style={{width:"90%", margin:"30px auto"}}>

        <div>
        <span style={{verticalAlign:'center'}} className="writerMsg">작성자</span>
        <input className="inputBox"  type='text'  onChange={(e) => setWriter(e.target.value)}></input >
        </div>
        <hr style={{width:'100%',margin:'15px 0px 30px'}}></hr>

        <div>
        <textarea className="inputBox msgInputbox"  placeholder="메세지를 입력해주세요"  type='text' onChange={(e) => setMessage(e.target.value)}></textarea >
        </div>
        <hr style={{width:'100%'}}></hr>
        
        <Button color="primary" style={{padding: '0px', float:'right'}}  onClick={submitMsg} type='submit'>메세지 남기기</Button >  
      </div>  

      <div style={{width:"90%", margin:"0 auto"}}>
    
              <div >
                {resMsg && resMsg.map((i) => 
                  (
                    <div style={{marginBottom: '15px'}}>
                      <div className="writerComment">{i.writer}</div>
                      <div className="writerContent">{i.msg}</div>
                    </div>
                ))}
              </div>
     
      </div>

  
     
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
