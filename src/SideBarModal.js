import React from 'react';
import './index.css'
import CarouselPage from './CarouselPage'
function SideBarModal(props) {

    return (
        <div>
            
       
            {props.showModal ? 
            <div className='background' onClick={props.closeModal}>
               <div className='modalcontainer' onClick={e => e.stopPropagation()}>
                <div style={{textAlign:'end', color:'white', marginBottom:'5px'}} onClick={props.closeModal}>X</div>
                <CarouselPage />

                </div>
            </div>

             : null}
            

        </div>
    )
}

export default SideBarModal