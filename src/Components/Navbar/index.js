import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.sass'


function Navbar() {

    return (<>
        <nav className="navbar">
            <div>
                <Link to="/today" className="navbar__info">TODAY</Link>
            </div>
            <div>
                <Link to="/tomorrow" className="navbar__info">TOMORROW</Link>
            </div>
            <div>
                <Link to="/week" className="navbar__info">WEEK</Link>
            </div>
        </nav>
    </>
    )
}

export default withRouter(Navbar)