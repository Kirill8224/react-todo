import { tracks } from './dal'
import { TracksList } from './ProductList'
import './App.css'

function App() {
  {console.log('App')}
  return(<TracksList tracks= {tracks}/>
  )
}

export default App
