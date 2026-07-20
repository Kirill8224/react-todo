import { useState } from "react"
import { tracks, type TrackType } from "./dal"
import { Card, FormControl, Select, InputLabel, MenuItem, Chip,  Badge, Avatar, List} from "@mui/material"
import { TrackItem } from "./ProductItem"
export function Menu(){
    const [count, setCount] = useState<number>(0)
    return(<Card>
        <Badge sx={{m: 1}} badgeContent= {count}><Chip onClick={()=>{setCount(count + 1)}} label= {<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrM4KktKXsI3bQwea6nC9ppHt60JXRlVEXzO0GoxNxUA&s=50" />} /></Badge>
        <List>
            {tracks.map((Track)=>{return(<TrackItem track= {Track} />)})}
        </List>
    </Card>)
}