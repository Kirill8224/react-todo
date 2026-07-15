import type { TrackType } from "./dal"
import { TrackItem } from "./ProductItem"
export function TracksList({tracks}: {tracks: TrackType[]}){
    {console.log('ProducList')}
    return(tracks.map((track) => {
        return(<TrackItem key={track.id} track= {track}/>)
    }))
}