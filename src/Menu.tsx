import { useState } from "react"
import { tracks, type TrackType } from "./dal"
import { Card, TextField} from "@mui/material"
import { TrackItem } from "./ProductItem"
export function Menu(){
    const [Selected, SetSelected] = useState<string>('')
    const SelectedTracks: TrackType[]= tracks.filter((track)=>{return(track.title.includes(Selected))})
    return(<Card>
        <TextField value={Selected} onChange={(e)=>{SetSelected(e.target.value)}} sx={{m: 2}} label='поиск' placeholder='печатайте'></TextField>
        {SelectedTracks.map((track)=>{return( <TrackItem track= {track} />)})}
    </Card>)
}