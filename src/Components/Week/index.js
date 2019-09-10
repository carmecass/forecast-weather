import React from 'react'
import './index.sass'

function Week({ query }) {
    const { forecastday } = query

    return (<ul className="week">

        {forecastday &&
            forecastday.map(({ date, day: { maxtemp_c, mintemp_c, condition: { icon } } }, index) => {
                const weekDate = date.slice(-2) + '/' + date.slice(6, 7)

                if (index >= 1)
                    return (
                        <li className="week__container" key={index}>
                            <p className="week__container__date">{weekDate}</p>
                            <img className="week__container__icon" src={icon} alt="" />
                            <p>{maxtemp_c}°</p>
                            <p>{mintemp_c}°</p>
                        </li>
                    )
            })
        }
    </ul>)
}

export default Week