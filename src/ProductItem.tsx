import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PauseIcon from '@mui/icons-material/Pause';
import ForwardIcon from '@mui/icons-material/Forward';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { 
    Card, Typography, 
    Badge, 
    FormControlLabel, FormControl, Slider, Rating, Switch, Chip, Avatar, Button, Select, MenuItem
  } from "@mui/material"
  import VolumeUp from '@mui/icons-material/VolumeUp' // Потребуется пакет @mui/icons-material
  import type { TrackType } from "./dal"
  import { useState } from "react"
  export function TrackItem({ track }: { track: TrackType }) {
    // Состояния для интерактива
    const [rati, setrati] = useState<number>(4)
    const [play, setplay] = useState<boolean>(false)
    const [quality, setquality]= useState<string>('')
    return (<Card sx={{gap: 5, m: 1, borderRadius: 7, boxShadow: 7, '&:hover':{boxShadow: 14, m: 2}}}>
      <Badge badgeContent={5}> <Chip label={<FavoriteBorderIcon />} /> </Badge>
        <Chip sx={{m: 1}} label={<Avatar src={track.image} />}></Chip>
        <Typography variant="h3">{track.title}</Typography>
        <Typography variant="body2">{track.artist}</Typography>
        <div>
        <Button sx= {{m: 1}} variant= 'contained'>Play</Button>
        </div>
        <Rating onChange={(e, value)=>{setrati(value)}} value={rati} />
          <div>
            <Button><ArrowCircleLeftIcon/></Button>
            {play && <Button onClick={()=> setplay(false)} ><PlayArrowIcon /></Button>}
            {!play && <Button onClick={()=> setplay(true)}><PauseIcon /></Button>}
            <Button><ForwardIcon /></Button>
          </div>
          <Card sx={{display: 'flex', gap: 1}}>
          <Typography sx={{mt: 5}}><VolumeOffIcon /></Typography>
          <Slider sx={{mt: 5}} valueLabelDisplay='auto'></Slider>
          <Typography sx={{mt: 5}}><VolumeUp /></Typography>
          <FormControlLabel label= 'ON/OFF' control={<Switch />}></FormControlLabel>
          <div>
          <FormControl>
            <Select value={quality} onChange={(e)=>{setquality(e.target.value)}}>
              <MenuItem value={'Low'}>Low</MenuItem>
              <MenuItem value={'Medium'}>Medium</MenuItem>
              <MenuItem value={'High'}>High</MenuItem>
              <MenuItem value={'Lossless'}>Lossless</MenuItem>
            </Select>
          </FormControl>
          </div>
          </Card>
      </Card>
    )
  }
  