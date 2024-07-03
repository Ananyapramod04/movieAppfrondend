import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const Viewmovie = () => {
    const rows=[{mName:'Movie 1',mdesc:'abc',mDirector:'mnbc'},
        {mName:'Movie 2',mdesc:'vdce',mDirector:'kmlv'}
    ]
  return (
    <>
    {rows.map((item)=>(
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
))}
    </>
  )
}

export default Viewmovie
