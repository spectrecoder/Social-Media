import React, {useEffect, useState} from 'react'
import Day from './Day'

const today = new Date()
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
const API_KEY = '13e9444bc4740fa0324f06260e880642'

export default function Weather() {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        function getGeo(){
            navigator.geolocation.getCurrentPosition(success=>{
                setLoading(true)
                const {latitude, longitude} = success.coords
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly, minutely&units=metric&appid=${API_KEY}`)
                .then(res=>res.json())
                .then(data=>{
                    setLoading(false)
                    setWeather(data)
                })

            })
        }
        getGeo()
    },[])
    return (
        <div className="weather w-full h-90 relative overflow-hidden mb-8" id="weather">
            <div className="weather__overlay absolute top-0 left-0 w-full h-full bg-indigo-500 opacity-70"></div>

            <img src="images/mountain.jpg" alt="Photo by eberhard grossgasteiger from Pexels" className="w-full h-full object-cover border-none"/>

            <i className="fas fa-temperature-high weather__icon absolute top-32 left-2/4 text-8xl text-white"></i>

            <div className="weather__date absolute top-2/4 right-0 w-24 h-20 bg-red-500 rounded-tl-2xl rounded-bl-2xl text-center text-2xl text-white pt-2">{months[today.getMonth()]} 
                <span className="block font-semibold text-3xl">{today.getDate()}</span>
            </div>

            <div className="weather__info absolute top-2/4 left-14">
                {loading?<h3 className="text-4xl text-white font-semibold">loading...</h3>:
                <>
                    <div className="degree text-5xl text-white inline-block"><span className="relative">{weather?.current.temp}</span></div>
                    <div className="situation text-3xl text-white font-semibold pt-3 pb-2">{weather?.current.weather[0].description}</div>
                    <div className="location  text-xl text-white font-semibold">{weather?.timezone}</div>
                </>}
            </div>

            <div className="weather__days absolute bottom-8 left-0 bg-indigo-400 w-full flex justify-center gap-6 py-4">
                {weather?.daily.slice(1).map((data) => (<Day key={data.dt} dayName={days[new Date(data.dt * 1000).getDay()]} degree={data.temp.night}/>))}
            </div>
        </div>
    )
}
