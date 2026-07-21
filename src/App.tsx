import { Card } from '@mui/material'
import { Menu } from './Menu'
import { tracks } from './dal'
import { TracksList } from './ProductList'
import './App.css'

function App() {
  {console.log('App')}
  return(<Card sx={{gap: 2}}>
  <Card sx={{borderColor: 'blue', borderStyle: 'solid'}}>
  <Menu />
  </Card>
  <hr />
  <TracksList tracks= {tracks}/></Card>
  )
}

export default App
