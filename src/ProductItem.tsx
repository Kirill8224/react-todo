import { 
    Card, Typography, 
    Radio, RadioGroup, 
    FormControlLabel, FormControl, Slider, Rating, Switch
  } from "@mui/material"
  import VolumeUp from '@mui/icons-material/VolumeUp' // Потребуется пакет @mui/icons-material
  import type { TrackType } from "./dal"
  import { useState } from "react"
  export function TrackItem({ track }: { track: TrackType }) {
    // Состояния для интерактива
    const [rati, setrati] = useState<number>(4)
    const [volume, setvolume] = useState<number>(50)
    const [swit, setswit] = useState<boolean>(false)
    return (
      <Card sx={{ m: 1, p: 2, maxWidth: 400, mx: 'auto' , mt: 2,borderRadius: 3 }}>
        <Typography variant="h4">{track.title}</Typography>
        <Typography variant="body2">{track.artist}</Typography>
        <Rating onChange={(e, value)=>{setrati(Number(value))}} value={rati} />
          <Slider value={volume} onChange={(e, value) =>{setvolume(Number(value))}} />
        <FormControl>
          <RadioGroup>
            <FormControlLabel value={'first'} label= 'первое' control={<Radio />}></FormControlLabel>
            <FormControlLabel value={'second'} label= 'второе' control={<Radio />}></FormControlLabel>
          </RadioGroup>
        </FormControl>
        <div>
          <Typography variant="body2">автоповтор</Typography>
        <Switch value={swit} onChange={(e, value)=> {setswit(value)}}/>
        </div>
      </Card>
    )
  }
  