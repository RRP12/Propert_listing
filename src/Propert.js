export default function PropertyCard({ property }) {
  return (
    <div style={{ border: "1px solid black", height: "300px", width: "200px" }}>
      <img style={{ height: "100px" }} src={property.image} alt="" />
      <p>
        <span>
          <span>$</span>
          <i>{property.price}</i>
        </span>
      </p>
      <span>
        {property.propertyType}- {<span>{property.location}</span>}
      </span>
      <p>{property.title}</p>
    </div>
  )
}
