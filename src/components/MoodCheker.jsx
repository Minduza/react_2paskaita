import { useState } from "react";
import Button from "./Button";

const MoodCheker = () =>{

    const [message,setMessage] = useState('Kaip jaučiatės?')

    const btnHandler = (title) =>{
        setMessage(title)
    }

    return <div>
        <h2>{message}</h2>
        <Button variant="contained" title="Jaučiuosi prastai :(" onClick= {()=>btnHandler("Nieko tokio, viskas bus gerai")}/>
        <Button variant="contained" title="Jaučiuosi normaliai :|" onClick= {()=>btnHandler("Gerai, nujaučiu, kad greitu metu jausitės puikiai")}/>
        <Button variant="contained" title="Jaučiuosi puikiai :)" onClick= {()=>btnHandler("Smagu girdėti, taip ir toliau")}/>
    </div>
}

export default MoodCheker;