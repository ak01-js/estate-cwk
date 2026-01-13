import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Property Search</h1>
      <SearchBar />
      <Gallery />
    </div>
  )
}

export default App
