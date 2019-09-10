import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.sass'

function Today({ query }) {

    const { location, temp, feelslike, max, min, text, icon } = query
    const date = new Date().toDateString()

    return <>
        <section className="today">
            <div className="today__loc">
                <p>{location}</p>
                <p>{date}</p>
            </div>
            <div className="today__container">
                <div className="today__container__temp">
                    <p className="today__container__temp__act">{temp}°</p>
                </div>
                <div className="today__container__icon">
                    <img src={icon} alt="" />
                </div>
                <div className="today__container__minmax">
                    <p>Max.  {max}°</p>
                    <p>Min.  {min}°</p>
                    <p >(Feels: {feelslike}°)</p>
                </div>

            </div>
            <section />
        </section>
    </>
}
export default withRouter(Today)