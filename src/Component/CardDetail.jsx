import ComponentC from "./ComponentC";


const CardDetail=(props)=>{
    const title=props.title;
    const value=props.value;
    // const humidity=props.humidity;
    return(
     
<div className="flex flex-col" style={{border:"black 2px solid"}}>
            <div className='details' style={{border:"blue 2px solid"}}>
                <div>
                    <p>Temperature</p>
                </div>
                <div className="flex flex-row">
                    <div className="flex-1">
                        <p>Value</p>
                    </div>
                    <div className="flex-1">
                        <p>Unit</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardDetail;