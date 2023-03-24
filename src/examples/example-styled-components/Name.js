import { useState } from "react"

export default function Name({className, name}){
    const [visible, setVisible] = useState(false);

    function toggleVisible(){
        setVisible(!visible);
    }
    if(visible){
        return <span className={className} onClick={toggleVisible}> {name} </span>
    }
    else{
        return <span className={className} onClick={toggleVisible}> Click to show! </span>
    }
}
