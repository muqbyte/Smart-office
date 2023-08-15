import UiTM from '../assets/UITM.png'
import EAGLE from '../assets/EAGLE.png'
import SEAIC from '../assets/SEAIC.png'

const BottomLogo = ()=>{
    return (
        <div className="flex flex-row items-center justify-around"  >
            <div>
                <img src={UiTM} style={{width:300 }}  />  
            </div>
            <div>
                <img src={EAGLE} style={{width:300 }} />
            </div>
            <div>
                <img src={SEAIC} style={{width:300 }} />
            </div>
        </div>
    )
}

export default BottomLogo;