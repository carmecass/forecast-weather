import React from 'react'
import './index.sass'

function Hours(props) {

    const { hour } = props
    // Le mando un objeto y tengo que desestructurar
    // const { hour: { hour } } = props

    const date = new Date().toISOString().substr(0, 19).replace('T', ' ');
    const hours = date.split(' ').slice(-1)
    const hourAct = parseInt(hours) + 2

    return <ul className="hours">
        {hour && hour.map((items, index) => {
            const { time, temp_c, condition: { icon } } = items

            let hoursUrl = time.split(' ').slice(-1)
            const hourActUrl = parseInt(hoursUrl)
            
            if (hourActUrl >= hourAct) {

                if (hourActUrl %2 !== 0) {
                    return <>
                        <li className="hours__hour" key={index}>
                            <p>{hoursUrl}</p>
                            <img className="hours__hour__image" src={icon} alt="" />
                            <p>{temp_c}°</p>
                        </li>
                    </>
                }
            }
        })
        }
    </ul>
}

export default Hours