import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Honda from '../image/honda.jpg'

function MUICard() {
    return (
        <div>
            <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={Honda}
                    title="Honda Civic"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Honda Civic
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea tempore mollitia sit,
                        sequi omnis id vitae nemo enim ipsum natus aliquid doloribus autem voluptatibus
                        quos aliquam unde at impedit, maxime cumque velit. Sint delectus animi recusandae, cum minima placeat obcaecati!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default MUICard