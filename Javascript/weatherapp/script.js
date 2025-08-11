// access all the Dom ELements 
let userInputEle=document.querySelector(".search-city")
let tempEle=document.querySelector(".temp")
let ImgEle=document.querySelector(".weather-img")
let HumidityEle=document.querySelector(".Humidity")
let WindEle=document.querySelector(".wind_speed")
let cityName=document.querySelector(".location")

let apiKey='e6f66a2ddce88d19294d524bf79e677f'



function displayWeather(){
   let city=userInputEle.value
   console.log(city)
  if(city!==""){
    console.log(city)
     let weatherinfo=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
       weatherinfo.then(async(data)=>{
         let res=await data.json()
         console.log(res)
         const {temp,feels_like,humidity}=res.main
         const {icon}=res.weather[0]

         tempEle.innerHTML=`<h3 class="temp">${temp} <span>&deg;</span>c</h3>`
         HumidityEle.innerHTML=` <p class="Humidity"> Humidity : <span>${humidity}%</span></p>`
         ImgEle.src=`https://openweathermap.org/img/wn/${icon}@2x.png`

       }).catch((err)=>{
        console.log(err)
       })
  }else{
    alert("enter proper city")
  }
}
