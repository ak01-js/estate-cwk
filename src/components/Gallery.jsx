import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";

function Gallery() {
  const [properties, setProperties] = useState([]);
  /*[] stays empty as no properties have been loaded into the file yet
  properties = current list of properties on screen
  setProperties = how list gets updated once json file is loaded*/

  useEffect(() => {
    async function loadProperties() {
      const response = await fetch("/properties.json");
      /*reads json file from public folder*/
      const data = await response.json();
      setProperties(data.properties);
      /*sets properties from the properties arrays in json file*/
    }
    loadProperties();
  }, []);

  /*maps the properties and then each property is assigned a key based on its id*/
  return (
    <section>
      <h2>Properties:</h2>
      <div className="property-list">
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;

