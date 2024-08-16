import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import IosShareIcon from '@mui/icons-material/IosShare';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

import { useState } from "react";


const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null);
    console.log({formats})
    const handleFormatChange = (
        _event: React.MouseEvent<HTMLElement>,
        updatedFormats: string | null
    ) => {
        setFormats(updatedFormats)
    }
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='www.google.com'>Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        {/**contained button colors */}
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary</Button>a
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>
        {/**outlined button colors */}
        <Stack spacing={2} direction='row'>
            <Button variant='outlined' color='primary'>Primary</Button>
            <Button variant='outlined' color='secondary'>Secondary</Button>
            <Button variant='outlined' color='error'>Error</Button>
            <Button variant='outlined' color='warning'>Warning</Button>
            <Button variant='outlined' color='info'>Info</Button>
            <Button variant='outlined' color='success'>Success</Button>
        </Stack>
        {/**text button colors */}
        <Stack spacing={2} direction='row'>
            <Button variant='text' color='primary'>Primary</Button>
            <Button variant='text' color='secondary'>Secondary</Button>
            <Button variant='text' color='error'>Error</Button>
            <Button variant='text' color='warning'>Warning</Button>
            <Button variant='text' color='info'>Info</Button>
            <Button variant='text' color='success'>Success</Button>
        </Stack>
        {/*button sizes*/}
        <Stack display='bloc' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>

        {/*icons*/}
        <Stack display='bloc' spacing={2} direction='row'>
            <Button variant='contained' startIcon={<IosShareIcon />} disableElevation onClick={() => alert('Click "OK"')}>Share</Button>
            <Button variant='contained' endIcon={<IosShareIcon />} disableRipple>Share</Button>
            <IconButton  aerial-label='send' color="success"><IosShareIcon /></IconButton>
        </Stack>

        {/*Grouped text Button*/}
        <Stack direction='row'>
            <ButtonGroup variant='text'>
                <Button>left</Button>
                <Button>center</Button>
                <Button>right</Button>
            </ButtonGroup>
        </Stack>

        {/*Grouped Button vertical */}
        <Stack direction='row'>
            <ButtonGroup variant='text' size='small' orientation='vertical'aerial-label='alignment button group'>
                <Button>left</Button>
                <Button>center</Button>
                <Button>right</Button>
            </ButtonGroup>
        </Stack>
        {/*Grouped Button onchange handler */}
        <Stack direction='row'>
            <ToggleButtonGroup 
                arial-label='text formatting'
                value={formats}
                onChange={handleFormatChange}
                size='small'
                color='success'
                orientation='vertical'
            >
                <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
                <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
        {/*Grouped Button exclusive onchange handler */}
        <Stack direction='row'>
            <ToggleButtonGroup 
                arial-label='text formatting'
                value={formats}
                onChange={handleFormatChange}
                size='small'
                orientation='vertical'
                exclusive
            >
                <ToggleButton color='success' value='yes' aria-label='yes'><ThumbUpAltRoundedIcon /></ToggleButton>
                <ToggleButton color='error' value='no' aria-label='no'><ThumbDownAltRoundedIcon /></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MuiButton
