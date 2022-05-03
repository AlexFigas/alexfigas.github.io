import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img_test from '../images/welcome-img.png'

// images
import AAV_projeto_final from '../images/cards/AAV_projeto_inacabado.png'
import CSM_tp2 from '../images/cards/CSM_tp2.png'
import IASA_agente_react from '../images/cards/IASA_agente_react.png'
import MCG_projeto_final from '../images/cards/MCG_projeto_final.png'
import MOP_projeto_final from '../images/cards/MOP_projeto_final.png'
import MSSN_projeto_final from '../images/cards/MSSN_projeto_final.png'
import PCM_projeto_final from '../images/cards/PCM_projeto_final.png'
import PDS_tp2 from '../images/cards/PDS_tp2.png'

function Cards() {
    return (
        <div className='cards'>
            <h1>These are my projects</h1>
            <div className="cards--container">
                <div className="cards--wrapper">
                    <ul className="cards--items">
                        {/* To put more cards just copy and change properties 
                        If you need a new line just copy the ul*/}
                        <CardItem src={AAV_projeto_final} text="massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant" label="AAV" path="/" />
                        <CardItem src={CSM_tp2} text="massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant" label="CSM" path="/" />
                    </ul>
                    <ul className="cards--items">
                        {/* To put more cards just copy and change properties 
                        If you need a new line just copy the ul*/}
                        <CardItem src={IASA_agente_react} text="massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant" label="IASA" path="/" />
                        <CardItem src={MCG_projeto_final} text="massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant" label="MCG" path="/" />
                    </ul>
                    <ul className="cards--items">
                        {/* To put more cards just copy and change properties 
                        If you need a new line just copy the ul*/}
                        <CardItem src={MOP_projeto_final} text="massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant" label="MOP" path="/" />
                        <CardItem src={MSSN_projeto_final} text="massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant" label="MSSN" path="/" />
                    </ul>
                    <ul className="cards--items">
                        {/* To put more cards just copy and change properties 
                        If you need a new line just copy the ul*/}
                        <CardItem src={PCM_projeto_final} text="massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant" label="PCM" path="/" />
                        <CardItem src={PDS_tp2} text="massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant" label="PDS" path="/" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards