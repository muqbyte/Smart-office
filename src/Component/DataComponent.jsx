import TemperatureLogo from '../assets/temperature.png'
import CardDetail from './CardDetail';


const DataComponent =(props)=>{
const valueLevel=props.valueLevel;
const unit=props.unit;
const iconLogo=props.iconLogo;
const parameter=props.parameter;
    return(
        <div className="flex flex-row justify-center flex-1" style={{ width:"fit-content"}}>
            <div className='image'>
                <img src={iconLogo} style={{width:70 }}/>
            </div>
            <div className='flex flex-col justify-start' >
                <div>
                    <p style={{fontSize:20}}>{parameter}</p>
                </div>
                <div className="flex items-center justify-start ">
                    <div className="flex items-center justify-center flex-1 " >
                        <p style={{fontSize:20}}>{valueLevel}</p>
                    </div>
                    <div className="flex items-center justify-center flex-1 " style={{fontSize:20}} >
                        <p>{unit}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataComponent;