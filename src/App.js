import "./styles.css"

import React from "react"
import FilterPanel from "./FilterlPanel"
import PropertList from "./PropertList"
import Header from "./Header"
function Panel(params) {
  return <PropertList />
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <FilterPanel />
      <Panel />
    </div>
  )
}
