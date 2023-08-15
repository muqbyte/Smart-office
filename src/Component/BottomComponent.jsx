

const BottomComponent=(props)=>{
    const value=props.value;
    const unit=props.unit;
    // const humidity=props.humidity;
    return(
     
<div className="flex flex-row justify-center max-w-sm rounded-lg dark:bg-gray-800 ">
        <div className="flex items-center justify-center flex-1" >
                <p className="font-normal dark:text-gray-400" style={{fontSize:20}}>{value}</p>
        </div>
        <div className="flex items-center justify-center flex-1">
                <p className="font-normal dark:text-gray-400" style={{fontSize:20}}>{unit}</p>
        </div>    
</div>
    )
}

export default BottomComponent;