import React from 'react'
import './index.sass'


function Search({ onSearch }) {
    function searchCity(e) {
        e.preventDefault()
        const query = e.target.query.value
        onSearch(query)
    }
    return (<>
        <section >
            <form className="search" onSubmit={searchCity}>
                <input type="text" className="search__input" name="query" placeholder="city" />
            </form>
        </section>
    </>)
}
export default Search