import { useState } from "react"
import { tracks, type TrackType } from "./dal"
import { Card, FormControl, Select, InputLabel, MenuItem } from "@mui/material"
import { TrackItem } from "./ProductItem"
export function Menu(){
    const [selectedTitle, SetSelectedTitle]= useState('')
    console.log(selectedTitle)
    const selectTrack = tracks.find((track)=> track.title == selectedTitle)
    return(<>
    <Card>
        <FormControl fullWidth>
        <InputLabel>треки</InputLabel>
        <Select value={selectedTitle} onChange={(e)=>{SetSelectedTitle(e.target.value)}}>
        {tracks.map((track: TrackType)=>{return(
            <MenuItem value={track.title}>{track.title}</MenuItem>)})}
        </Select>
        </FormControl>
    </Card>
    {selectTrack && <TrackItem track={selectTrack}/>}
    </>)
}