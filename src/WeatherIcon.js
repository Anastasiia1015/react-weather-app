import React from "react";
import dsun from "./images/01d.png"
import nsun from "./images/01n.png"
import dsuncloud from "./images/02n.png"
import nsuncloud from "./images/02d.png"
import dcloudsun from "./images/03d.png"
import ncloudsun from "./images/03n.png"
import dcloud from "./images/04d.png"
import ncloud from "./images/04n.png"
import drain from "./images/09d.png"
import nrain from "./images/09n.png"
import dshower from "./images/10d.png"
import nshower from "./images/10n.png"
import dsnow from "./images/13d.png"
import nsnow from "./images/13n.png"
import dfog from "./images/50d.png"
import nfog from "./images/50n.png"

export default function WeatherIcon({icon, description}){
    const iconMapping = {
        "01d" : dsun,
        "01n" : nsun,
        "02d" : dsuncloud,
        "02n" : nsuncloud,
        "03d" : dcloudsun,
        "03n" : ncloudsun,
        "04d" : dcloud,
        "04n" : ncloud,
        "09d" : drain,
        "09n" : nrain,
        "10d" : dshower,
        "10n" : nshower,
        "13d" : dsnow,
        "13n" : nsnow,
        "50d" : dfog,
        "50n" : nfog
      }
      return <img src={iconMapping[icon]} alt={description} />
}