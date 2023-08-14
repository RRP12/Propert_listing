import React, { createContext, StrictMode, useState } from "react"
import { createRoot } from "react-dom/client"

import App from "./App"
import { PropertListing } from "./data"
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
export let userContext = createContext()
let newdata = PropertListing.map((p) => ({
  ...p,
  price: parseInt(
    p.price
      .split("")
      .filter((i) => i !== ",")
      .join(""),
    0
  )
}))
let LocationCategory = Array.from(new Set(newdata.map((p) => p.location)))
// let propertyTypeCategory = new Set(newdata.map((p) => p.propertyType))
// console.log(propertyTypeCategory)
let propertyTypeCategory = Array.from(
  new Set(newdata.map((p) => p.propertyType))
)
console.log("LocationCategory", LocationCategory)

export function UserProvider({ children }) {
  const [Data, setData] = React.useState(newdata || [])
  const [selectedOption, setSelectedOption] = useState("")
  const [SelectedPropertyType, setSelectedPropertyType] = React.useState("")
  const [SeelectedLocation, setSeelectedLocation] = React.useState("")
  function getSelectOption(e) {
    setSelectedOption(e.target.value)
  }
  let handelPropertTypeChange = (e) => {
    setSelectedPropertyType(e.target.value)
  }
  let handelLocationChange = (e) => {
    setSeelectedLocation(e.target.value)
  }

  return (
    <userContext.Provider
      value={{
        propetydata: Data,
        setData: setData,
        selectedOption: selectedOption,
        setSelectedOption: setSelectedOption,
        getSelectOption: getSelectOption,
        propertyTypeCategory: propertyTypeCategory,
        handelPropertTypeChange: handelPropertTypeChange,
        SelectedPropertyType: SelectedPropertyType,
        LocationCategory: LocationCategory,
        handelLocationChange: handelLocationChange,
        SeelectedLocation: SeelectedLocation
      }}>
      {children}
    </userContext.Provider>
  )
}

root.render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
)
