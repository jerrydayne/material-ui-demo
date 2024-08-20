import { Stack, Rating } from "@mui/material"
import { useState } from "react"
import { Favorite, FavoriteBorder } from "@mui/icons-material"


const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null)
    console.log(value)

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }

  return (
    <Stack spacing={2}>
      <Rating 
        value={value} 
        onChange={handleChange} 
        precision={0.5} 
        size='small'
        icon={<Favorite fontSize='inherit' color='secondary' />}
        emptyIcon={<FavoriteBorder fontSize='inherit' color='secondary' />}
    />
    </Stack>
  )
}


export default MuiRating
