import { useContext } from "react"
import { userContext } from "."
import PropertyCard from "./Propert"

export default function PropertList(params) {
  let {
    propetydata,
    SeelectedLocation,
    SelectedPropertyType,
    selectedOption
  } = useContext(userContext)

  let List = propetydata

  if (selectedOption === "") {
    List.sort((a, b) => b.price - a.price)
  }
  if (selectedOption === "Lowest to Highest") {
    List.sort((a, b) => a.price - b.price)
  }
  if (selectedOption === "Highest to Lowest") {
    List.sort((a, b) => b.price - a.price)
  }

  // if (SelectedPropertyType === "" && SeelectedLocation === "") {
  //   List = [...List]
  // }

  if (SelectedPropertyType !== "") {
    List = propetydata.filter((p) => p.propertyType === SelectedPropertyType)
  } else if (SeelectedLocation !== "") {
    List = propetydata.filter((p) => p.location === SeelectedLocation)
  }

  if (SelectedPropertyType && SeelectedLocation) {
    List = propetydata
      .filter((p) => p.propertyType === SelectedPropertyType)
      .filter((p) => p.location === SeelectedLocation)
  }

  if (!List.length) {
    return (
      <>
        not {SelectedPropertyType} found in {SeelectedLocation}
      </>
    )
  }
  // let filterredProperty = propetydata.filter(
  //   (p) => p.propertyType === SelectedPropertyType
  // )
  // List = SelectedPropertyType !== "" ? filterredProperty : propetydata
  // // console.log("filterredProperty ", filterredProperty)
  // let filteredLocation = propetydata.filter(
  //   (p) => p.location === SeelectedLocation
  // )
  // List = SeelectedLocation !== "" ? filteredLocation : propetydata
  // console.log("filterredProperty ", filterredProperty)
  return (
    <div className="propertyListWrapper">
      <ul className="propertyList">
        {List.map((p) => (
          // <li>{p.title}</li>
          <PropertyCard property={p} />
        ))}
      </ul>
    </div>
  )
}
