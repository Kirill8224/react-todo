import { useState } from "react"
import { tracks, type TrackType } from "./dal"
import { Card, FormControl, Select, InputLabel, MenuItem, Chip,  Badge, Avatar, List} from "@mui/material"
import { TrackItem } from "./ProductItem"
export function Menu(){
    const [SelectedId, SetSelectedId] = useState<number>(1)
    const SelectedTrack= tracks.find((track)=>{return(track.id === SelectedId)})
    return(<Card>
        <Badge sx={{m: 1}} badgeContent= {tracks.length}>
        <Select value={SelectedId} onChange={(e)=>{SetSelectedId(Number(e.target.value))}}>
            {tracks.map((track)=>{return(<MenuItem value={track.id} key={track.id}>{track.title}</MenuItem>)})}
        </Select>
        </Badge>
        <TrackItem track={SelectedTrack} />
    </Card>)
}