import React, { useContext } from "react"
import { userContext } from "."
import "./styles.css"
export default function FilterPanel() {
  let {
    selectedOption,
    LocationCategory,
    propertyTypeCategory,
    setSelectedOption,
    SelectedPropertyType,
    handelPropertTypeChange,
    handelLocationChange,
    SeelectedLocation
  } = useContext(userContext)

  // const [selectedOption, setSelectedOption] = useState("") // Declare a state variable...
  // let pricearray = propetydata.map((p) => p.price)
  // let SortedArray = pricearray.sort((a, b) => a - b)
  // let min = SortedArray[0]
  // let max = SortedArray[SortedArray.length - 1]
  // console.log(selectedOption)

  // if (selectedOption === "Highest to Lowest") {
  //   setData((prev) => prev.sort((a, b) => a.price - b.price))
  // }
  return (
    <div className="filtertab" style={{ border: "1px solid black" }}>
      <label aria-label={" Fileter From hIghset to lowest"} htmlFor="">
        <p> Filter From Highest to Lowest</p>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}>
          <option value=""></option>
          <option value={"Highest to Lowest"}>Highest to Lowest</option>
          <option value={"Lowest to Highest"}>Lowest to Highest</option>
        </select>
      </label>
      <label htmlFor="">
        <p>Filter by Category</p>
        <select value={SelectedPropertyType} onChange={handelPropertTypeChange}>
          <option value=""></option>
          {propertyTypeCategory.map((pc) => (
            <option value={pc}>{pc}</option>
          ))}
        </select>
      </label>
      <label htmlFor="">
        <p>Move in</p>
        <input
          onChange={(e) => console.log(e.target.value)}
          type="date"
          name=""
          id=""
        />
      </label>

      <label htmlFor="">
        <p> Location</p>
        <select
          value={SeelectedLocation}
          onChange={(e) => handelLocationChange(e)}
          name=""
          id="">
          <option value={""}></option>
          {LocationCategory.map((l) => (
            <option value={l}>{l}</option>
          ))}
        </select>
      </label>
    </div>
  )
}
