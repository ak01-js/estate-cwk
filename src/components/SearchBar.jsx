import { useState } from "react";

/*this is where searchbar input field code is and how it updates*/
function SearchBar({searchText, setSearchText}){
    
    return(
        <section className="searchBar">
            <h2>Search Properties:</h2>
            <input type="text"
            placeholder="Search a property by location or postcode:"
            value={searchText}
            onChange={(e)=>{setSearchText(e.target.value);}
            } />
        </section>
    )
}

export default SearchBar;