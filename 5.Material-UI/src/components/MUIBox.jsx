import React from 'react'
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

function MUIBox() {
    return (
        <div>
            <Box sx={{
                width: '200px', height: '200px',
                backgroundColor: 'red',
                borderRadius: 2,
                '&:hover': {
                    bgcolor: 'secondary.dark',
                },
            }}>

            </Box>
            {/* Div etiketiyle aynı çokta bi esprisi yok */}
        </div>
    )
}

export default MUIBox