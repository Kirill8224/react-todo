
import { Card, Typography, Radio, RadioGroup, FormLabel, FormControlLabel, FormControl, Slider, Rating} from "@mui/material"
import type { TrackType } from "./dal"
import { useState } from "react"
export function TrackItem({track}: {track: TrackType}){
    const [quality, setQuality]= useState<string>('')
    const [volume, setVolume]= useState<number>(0)
    const [Grade, SetGrade]= useState<number>(0)
    {console.log(quality, volume, Grade, 's')}
    return(<Card key={track.id} sx={{height: 300, borderStyle: 'solid', m: 1, p: 1}}>
       <Typography variant="h4">{track.title}</Typography>
       <Typography>испольнитель: {track.artist}</Typography>
       <FormControl>
        <FormLabel>качестов звука</FormLabel>
        <RadioGroup onChange={(e)=>{setQuality(e.target.value)}}>
        <FormControlLabel value='no good' label= 'плохое' control={<Radio />}  />
        <FormControlLabel value='good' label='хорошее' control={<Radio />} />
        </RadioGroup>
       </FormControl>
       <Slider onChange={(e, value)=>{setVolume(value)}} valueLabelDisplay="auto" />
        <Rating onChange={(e, value)=>{SetGrade(value)}}></Rating>
    </Card>)
}