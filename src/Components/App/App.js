import React, { useState } from 'react'
import { withRouter, Route } from 'react-router-dom'
import Search from '../Search'
import Navbar from '../Navbar'
import Today from '../Today'
import Tomorrow from '../Tomorrow'
import Week from '../Week'
import Hours from '../Hours'
import logic from '../../logic'
import './index.sass'

function App({ history }) {

  const [query, setQuery] = useState(false)
  const [hour, setHour] = useState()

  const handleSearch = async (query) => {
    try {

      const res = await logic.searchItem(query)
      setQuery(res)
      const response = await logic.searchByHours(query)
      setHour(response)
      history.push('/today')

    }
    catch ({ message }) {
      console.log({ message })
    }

  }

  return <>
  <div className="home">
    <Search onSearch={handleSearch} />
    <Navbar />
    {query && <Today query={query} />}
    <Route exact path="/tomorrow" render={() => query && <Tomorrow query={query} />} />
    <Route exact path="/week" render={() => query && <Week query={query} />} />
    {/* {hour && <Hours hour={hour} />} */}
    <Route exact path="/today" render={() => hour && <Hours hour={hour} />} />
    </div>
  </>
}

export default withRouter(App)