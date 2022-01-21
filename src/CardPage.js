import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const CardPage = () => {
    return(
        <div>
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 18, color: '#1D1D1F', fontWeight: 600 }}  gutterBottom>
              축하하는 방법
            </Typography>
            
            <Typography sx={{ fontSize: 14, color: '#6e6e73', fontWeight: 600 }} variant="body2">
            <span>신랑 : 양찬석</span>
            <span>국민은행 368102-01-199845</span>
            </Typography>
         
            <Typography sx={{ fontSize: 14, color: '#6e6e73', fontWeight: 600 }} variant="body2">
              <span>신부 : 이재희</span>
              <span>우리은행 1002852308092</span>
            </Typography>
          </CardContent>
    
    </Card>
    </div>
    )
}

export default CardPage