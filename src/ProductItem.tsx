import { 
    Card, 
    Typography, 
    Radio, 
    RadioGroup, 
    FormControlLabel, 
    FormControl, 
    Slider, 
    Rating, 
    Box, 
    Stack 
  } from "@mui/material"
  import VolumeUp from '@mui/icons-material/VolumeUp' // Потребуется пакет @mui/icons-material
  import type { TrackType } from "./dal"
  import { useState } from "react"
  
  export function TrackItem({ track }: { track: TrackType }) {
    // Состояния для интерактива
    return (
      <Card sx={{ m: 1, p: 2, maxWidth: 400, mx: 'auto' , mt: 2,borderRadius: 3 }}>
        <Rating value={2} />
        <Typography variant="body2">громкость</Typography>
        <Slider valueLabelDisplay="auto"/>
        <Typography variant="body2">качество звука</Typography>
        <FormControl>
            <RadioGroup>
                <FormControlLabel value={'first'} label= 'первое' control={<Radio />} />
                <FormControlLabel value={'second'} label= 'второе' control= {<Radio />} />
            </RadioGroup>
        </FormControl>
      </Card>
    )
  }
  