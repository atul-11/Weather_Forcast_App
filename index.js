const apiKeys =  "6b9256795da67e854454c9866888fd5f"
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

   const SearchInput = document.querySelector(".search input")  ;
   const SearchButton = document.querySelector(".search button") ;
   
   const weatherIcon =document.querySelector(".weather-icon");

async function checkWeather(city){

    const response = await fetch(url + city + `&appid=${apiKeys}`);
      
   
    const data = await response.json();

   
    if(response.status == 404){
        document.querySelector(".errorInPlace").style.display="block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".errorInPlace").style.display = "none";
    }

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
 
    if(data.weather[0].main=="Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main=="Clouds"){
            weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "images/drizzle.png"
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src = "images/mist.png"
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src = "images/rain.png"
}

      document.querySelector(".weather").style.display = "block";
}

SearchButton.addEventListener("click",()=>{
    checkWeather(SearchInput.value);  
})

SearchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && SearchInput.value.trim()) {
        checkWeather(SearchInput.value.trim());
    }})
 