

function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <img src={property.picture} alt="Property Image" />

      <h3>{property.type}</h3>

      <p>
        £{property.price} - {property.bedrooms} Bedrooms
      </p>

      <p>{property.location}</p>
    </article>
  );
}

export default PropertyCard;
