import React,{useState,useRef,useEffect} from 'react';
import './index.css'
import CarouselPage from './CarouselPage'
import Button from '@material-ui/core/Button';

function SideBarModal(props) {
    console.log(props)
    const TOTAL_SLIDES = 15;

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    // Next 버튼 클릭 시
    const NextSlide = () => {
        console.log(currentSlide, TOTAL_SLIDES )
      if (currentSlide >= TOTAL_SLIDES) {
          console.log('next')
        // 더 이상 넘어갈 슬라이드가 없으면
        setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
        // return;  // 클릭이 작동하지 않습니다.
      } else {
     
        setCurrentSlide(currentSlide + 1);
      }
    };
    // Prev 버튼 클릭 시
    const PrevSlide = () => {
      if (currentSlide === 0) {
        setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
        // return;  // 클릭이 작동하지 않습니다.
      } else {
    
        setCurrentSlide(currentSlide - 1);
    
      }
    };
    const { current } = slideRef;
    useEffect(() => {
        if(current !== null){
            // current.style.transition = 'all 0.5s ease-in-out';
            current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
   
        }
        }, [currentSlide]);

    return (
        <div>
            
       
            {props.showModal ? 
            <div className='background' onClick={props.closeModal}>
               <div className='modalcontainer' onClick={e => e.stopPropagation()}>
                <div style={{textAlign:'end', color:'white', marginBottom:'5px'}} onClick={props.closeModal}>X</div>
                {/* <img src={props.clickImgs} style={{width:'100%'}}   /> */}
                {/* <CarouselPage props={props.images} /> */}
                <div className='container'>
                <div style={{display:'flex'}} ref={slideRef}>
                    {/* <img src={} />
                    <img src={} />
                    <img src={} /> */}
                   

                    

{/* 
                     {props.images && props.images.map((i, index) => 
                   
                        {
                            if (props.imagesSet1 == index) return (<img src={i.img}  style={{width:'100%'}}    />)
                        }
                        // console.log(i.img)
                    )} */}
                    <img  style={{width:'100%'}} src={props.clickImgs}/>
                    <img style={{width:'100%'}} src={props.images[0].img} />
                    <img style={{width:'100%'}} src={props.images[1].img} />
                    <img style={{width:'100%'}} src={props.images[2].img} />
                    <img style={{width:'100%'}} src={props.images[3].img} />
                    <img style={{width:'100%'}} src={props.images[4].img} />
                    <img style={{width:'100%'}} src={props.images[5].img} />
                    <img style={{width:'100%'}} src={props.images[6].img} />
                    <img style={{width:'100%'}} src={props.images[7].img} />
                    <img style={{width:'100%'}} src={props.images[8].img} />
                    <img style={{width:'100%'}} src={props.images[9].img} />
                    <img style={{width:'100%'}} src={props.images[10].img} />
                    <img style={{width:'100%'}} src={props.images[11].img} />
                    <img style={{width:'100%'}} src={props.images[12].img} />
                    <img style={{width:'100%'}} src={props.images[13].img} />
                    <img style={{width:'100%'}} src={props.images[14].img} />
                </div>
                <div style={{marginTop: '15px'}}>
                    <button className='twobtn'    onClick={PrevSlide}>Prev</button>
                    <button   className='twobtn'   onClick={NextSlide}>Next</button>
                </div>
                </div>
                </div>
            </div>

             : null}
            

        </div>
    )
}

export default SideBarModal

//리스트 클릭 후 해당 이미지 보임
//해당 리스트에 다음 이미지들 가지고 있