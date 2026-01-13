import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';


function App() {
  const [searchText,setSearchText] = useState("");

  return (
    <div>
      <h1>Estate Agent</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Gallery searchText={searchText}/>
    </div>
  )
}

export default App
