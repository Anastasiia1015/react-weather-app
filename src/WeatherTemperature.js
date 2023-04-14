import React, {useState} from "react";

export default function WeatherTemperature({celsius}){
    const [unit, setUnit] = useState('celsius');
    
    function convert(event){
        event.preventDefault();
        if(unit === 'celsius'){
            setUnit('fahrenheit')
        }else{
            setUnit('celsius')
        }
    }
    if (unit === 'celsius'){
        return(
            <div>
            <p className="temperature">
            <span id="degrees">{Math.round(celsius)}</span>
            <span>°C</span>
            </p>
            <a href="/" id="convert" onClick={convert}>
            Fahrenheit
            </a>
          </div>
        )
    }else{
        return(
            <div>
            <p className="temperature">
            <span id="degrees">{Math.round(celsius*9/5 + 32)}</span>
            <span>°F</span>
            </p>
            <a href="/" id="convert" onClick={convert}>
            Celsius
            </a>
          </div>
        )
    }
    
}