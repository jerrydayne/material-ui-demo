import React from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material'
import { useState } from 'react'
import { Bookmark, BookmarkBorder } from '@mui/icons-material'

const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    console.log(acceptTnC)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }

    const [skills, setSkills] = useState<string[]>([])
    console.log(skills)
    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if(index === -1){
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skills) => skills !== event.target.value))
        }
    }
    
  return (
    <Box>
      <Box color='secondary'>
        <FormControlLabel 
            label='I own Dayne.io' 
            control={<Checkbox size='small' color='secondary' checked={acceptTnC} onChange={handleChange} />} 
        />
      </Box>
      <Box>
        <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark />}
            checked={acceptTnC}
            onChange={handleChange} 
        />
      </Box>
      <Box>
        <FormControl>
            <FormLabel>SKILLS</FormLabel>
            <FormGroup row>
                <FormControlLabel 
                    label='HTML'
                    control={<Checkbox 
                        value='HTML' checked={skills.includes('html')} onChange={handleSkillsChange} />}
                />
                <FormControlLabel 
                    label='CSS'
                    value='CSS'
                    control={<Checkbox checked={skills.includes('css')} onChange={handleSkillsChange} />}
                />
                <FormControlLabel 
                    label='Javascript'
                    value='Javascript'
                    control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillsChange} />}
                />
            </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiCheckBox
