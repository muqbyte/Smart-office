import { useState } from 'react'
// import ComponentB from './Component/ComponentB'
import ComponentC from './Component/ComponentC'
// import CardDetail from './Component/CardDetail'
import MyEChart from './Component/MyEchart'
import BottomComponent from './Component/BottomComponent'
import seaic from './assets/pattern.png'
import DataComponent from './Component/DataComponent'
import SecondMain from './Component/SecondMain'
import BottomLogo from './Component/BottomLogo'
import MalaysiaDateTime from './Component/Navigation'
import ComponentGet from './Component/ComponentGet'


function App() {

  return (
    <div style={{backgroundColor:"#E6e6fa" , backgroundPosition:"center"}}>
      <div style={{padding:20, marginBottom:20, borderBottom:"black 2px solid", backgroundColor:"#273136"}}>
      <MalaysiaDateTime/>
      </div>
      
    <div  >
      {/* <ComponentC/> */}
      <SecondMain/>
      {/* <ComponentGet/> */}
      <div>
      <BottomLogo/>
      </div>
      
    </div>
  
    </div>
  )
}

export default App
