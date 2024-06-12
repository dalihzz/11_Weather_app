export const getWeather = async (city) => {
    const key = "55d1043ad67f497189c144637240306"
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes&lang=es`
    const response = await fetch(url)
    const weather = await response.json()

    return weather
}