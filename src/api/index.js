import validate from '../validate'
require('dotenv').config()

const { REACT_APP_URL, REACT_APP_API_KEY } = process.env


const api = {
    __url__: REACT_APP_URL,
    __apikey__: REACT_APP_API_KEY,

    searchItem(query) {
        validate.arguments([
            { name: 'query', value: query, type: 'string' }
        ])

            return (async () => {
                try {
                    
                    const response = await fetch(`${this.__url__}forecast.json?key=${this.__apikey__}&q=${query}&days=7`)
                    const results = await response.json()
                    
                    const { location: { name: location }, current: { temp_c: temp, feelslike_c: feelslike, condition: { text, icon } }, forecast: { forecastday: [{ day: { maxtemp_c: max, mintemp_c: min } }] }, forecast: { forecastday } } = results

                    return { location, temp, feelslike, text, icon, max, min, forecastday }
                }
                catch (error) { throw error }

            })()
        // return fetch(`${this.__url__}forecast.json?key=${this.__apikey__}&q=${query}&days=7`)
        //     .then(results => results.json())
        //     .then(results => {

        //         const { location: { name: location }, current: { temp_c: temp, feelslike_c: feelslike, condition: { text, icon } }, forecast: { forecastday: [{ day: { maxtemp_c: max, mintemp_c: min } }] }, forecast: { forecastday } } = results

        //         return { location, temp, feelslike, text, icon, max, min, forecastday }
        //     })
    },

    searchByHours(query) {
        validate.arguments([
            { name: 'query', value: query, type: 'string' }
        ])

        const date = new Date().toISOString().substr(0, 19).replace('T', ' ')
        const dt = date.split(' ').slice(0, 1)

        return fetch(`${this.__url__}history.json?key=${this.__apikey__}&q=${query}&dt=${dt}`)
            .then(results => results.json())
            .then(results => {
                const { forecast: { forecastday: [{ hour }] } } = results
                
                return hour

                // retorno objeto
                // return { hour }
            })
        }
    
}
export default api