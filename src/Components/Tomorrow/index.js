import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.sass'

function Tomorrow({ query }) {
    const { forecastday } = query

    return (<ul className="tomorrow">

        {forecastday &&

            forecastday.map(({ date, day: { maxtemp_c, mintemp_c, condition: { text, icon } } }, index) => {
                const dateTomorrow = date.split('-').reverse().join('-')
                if (index === 1) {
                    return (
                        <li className="tomorrow__info" key={index}>
                            <p className="tomorrow__info__name">{dateTomorrow}</p>
                            <div className="tomorrow__info__container">
                                <div>
                                    <p>Max.  {maxtemp_c}°</p>
                                    <p>Min.  {mintemp_c}°</p>
                                </div>
                                <div>
                                    <p>{text}</p>
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                        </li>
                    )
                }
            })
        }
    </ul>)

}

export default withRouter(Tomorrow)