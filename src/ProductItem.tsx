
import { Card, Typography, Chip, Avatar, Badge, List, ListItem, ListItemText } from "@mui/material"
import type { TrackType } from "./dal"
export function TrackItem({track}: {track: TrackType}){
    {console.log('ProductItem')}
    return(<Card key={track.id} sx={{height: 170, borderStyle: 'solid', m: 1, p: 1}}>
        <Badge badgeContent= {3}><Chip label= <Avatar src={track.image} />/></Badge>
        <Typography variant="h4">{track.title}</Typography>
        <Typography >{track.artist}</Typography>
        <List>
            <ListItem>
                <ListItemText sx={{textAlign: 'center'}} primary= {track.genre} secondary= {track.duration} />
            </ListItem>
        </List>
    </Card>)
}