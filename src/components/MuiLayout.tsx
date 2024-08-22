import { Box, Divider, Grid, Paper, Stack } from "@mui/material"

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '32px' }} elevation={4}>
    <Stack
        spacing={2}
        direction='row'
        sx={{ border: '1px solid' }}
        divider={<Divider orientation='vertical' flexItem />}
    >
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
    </Stack>
    <Grid container rowSpacing={2} columnSpacing={1} my={4}>
        <Grid item xs={12} sm={6} lg='auto'>
            <Box bgcolor='blue' p={2}>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg='auto'>
            <Box bgcolor='blue' p={2}>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg='auto'>
            <Box bgcolor='blue' p={2}>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg='auto'>
            <Box bgcolor='blue' p={2}>Box 1</Box>
        </Grid>
    </Grid>
    </Paper>
  )
}

export default MuiLayout
