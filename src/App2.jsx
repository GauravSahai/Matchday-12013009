import React from 'react'
import ReactDOM from 'react-dom'
import Match from "./Matches"
import Data from "./Data"
import "./index.css"
import Head from "./Header"
import Search from "./SearchBar"



function nmatches(val) {
    return (
        <>

            <Match
                round={val.round}
                crown={val.crown}
                img1={val.img1}
                result={val.result}
                img2={val.img2}
                name1={val.name1}
                trophy={val.trophy}
                name2={val.name2}

            />
        </>
    )
}
function App() {
    return (
        <>


            <Head
                head="International Matches" />

            <div className='mainsearch'>
                <Search
                />
            </div>



            <div className='inline'>
                {Data.map(nmatches)}
            </div>
        </>
    )
}

export default App;