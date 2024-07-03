import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Addmovie = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Moviename"
        //   defaultValue="Hello World"
        />
        </div>
        <div>
        <TextField
          
          id="outlined-disabled"
          label="Movie description"
        //   defaultValue="Hello World"
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Movie image"
        //   type="password"
          autoComplete="current-password"
        />
        </div>
        <div>
        <TextField
         required
         id="outlined-required"
         label="Director"
        />
         </div>
         <div>
         <Button variant="contained" >
      Add Movie
    </Button>
         </div>
         </Box>
  )
}

export default Addmovie
