import { Box } from "@mui/material"

const MuiLayout = () => {
  return (
    <>
      <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        height: '100px',
        width: '100px',
        padding: '16px',
        '&:hover': {
            backgroundColor: 'secondary.light'
        }
      }}
      >
        Dayne.io
      </Box>
      <Box
      color='salmon'
      display='flex'
      height='100px'
      width='100px'
      bgcolor='seagreen'
      p={2}
      >
        @jerrydayne
      </Box>
    </>
  )
}

export default MuiLayout
