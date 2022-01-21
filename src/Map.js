import React, { useRef, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(37.5048601, 127.0344868), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};
let markerPosition = new window.kakao.maps.LatLng(
  37.5048601,
   127.0344868
)

let marker = new window.kakao.maps.Marker({
  position: markerPosition,
})

function MapsDiv() {
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  useEffect(() => {
   const map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
   marker.setMap(map);
    return () => {};
  }, []);

  return (
    <>
    <div
      className="map"
      style={{ height: "250px", margin : ' 0 auto' }}
      ref={container}
    ></div>

    <div style={{width: "90%", margin: "0 auto"}}>
        {/* <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 18, color: '#1D1D1F', fontWeight: 600 }}  gutterBottom>
              오시는 길 
            </Typography>
            
            <Typography sx={{ fontSize: 14, color: '#6e6e73', fontWeight: 600 }} variant="body2">
            <span>서울 강남구 논현로 549</span>
            </Typography>
         
            <Typography sx={{ fontSize: 14, color: '#6e6e73', fontWeight: 600 }} variant="body2">
              <span>신부 : 이재희</span>
              <span>우리은행 1002852308092</span>
            </Typography>
          </CardContent>
    
         </Card> */}
    </div>
    </>
  );
}

export default MapsDiv;