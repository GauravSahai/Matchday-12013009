import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Temp from "./Temp"




function Match(props) {
    return (
        <>


            
                <div className="matches">
                    <div className="match">


                        
                            <a href='https://www.youtube.com/watch?v=HucIqi8Lw3E' target="_blank">
                            <div className='card_front'>
                                <h5 className='card_heading'>All India Senior Ranking Badminton Tournament</h5>
                                <p className='round'>{props.round}</p>
                                <h6 className='vs'>v/s</h6>
                                <div className='allgrids'>
                                    <div className='grid1'>
                                        <img src={props.crown} alt="crownimage" className='crown' />
                                        <img src={props.img1} alt="img1" className='img1' />
                                        <h6 className='name1'>{props.name1}</h6>
                                    </div>
                                    <div className='grid2'>
                                        <h6 className='result'>{props.result}</h6>
                                        <img src={props.trophy} alt="trophyimage" className='trophy' />
                                    </div>
                                    <div className='grid3'>
                                        <img src={props.crown} alt="crownimage" className='crown' />
                                        <img src={props.img2} alt="img2" className='img2' />
                                        <h6 className='name2'>{props.name2}</h6>
                                    </div>
                                </div>
                            </div>
                            </a>
                            
                            

                    </div>

                </div>
            
        </>
    )
}

export default Match;