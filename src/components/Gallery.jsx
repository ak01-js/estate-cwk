import { useEffect, useState } from "react";

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

            <div>
                {properties.map((p) => (
                    <article key={p.id}>
                        <h3>{p.type}</h3>
                        <p>
                            £{p.price} — {p.bedrooms} bedrooms
                        </p>
                        <p>{p.location}</p>
                    </article>
                ))}
            </div>

        </section>
    );
}

export default Gallery;
