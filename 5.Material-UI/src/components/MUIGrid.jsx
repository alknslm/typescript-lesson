import React from 'react'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

function MUIGrid() {
    return (
        <div>
            {/* Gridi container olarak işaretlersek satır oluşturmuş oluruz 
                Responsive tasarım için gerekli
            */}
            <Grid container>
                <Grid size={{ xs: 12, sm: 4, md: 6, lg: 8 }} sx={{ backgroundColor: 'lightblue' }}>
                    <Button size='small' variant='contained' color='warning'>Geri Dön</Button>
                    <p> Lorem ipsum dolor sit.</p>
                </Grid>
                <Grid size={{ xs: 12, sm: 4, md: 4, lg: 2 }} sx={{ backgroundColor: 'red' }}>2.Grid</Grid>
                <Grid size={{ xs: 12, sm: 4, md: 2, lg: 2 }} sx={{ backgroundColor: 'lightgrey' }}>3.Grid</Grid>
            </Grid>
        </div>
    )
}

export default MUIGrid