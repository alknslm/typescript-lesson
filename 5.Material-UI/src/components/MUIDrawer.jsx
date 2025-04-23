import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState } from 'react';

function MUIDrawer() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Drawer Aç</Button>

            <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor='left'>
                {/* component dışında bir yere tıklayınca kapanır */}
                <Box sx={{ width: '350px', textAlign: 'center' }} >
                    <h1>DRAWER</h1>
                    <p>asdasda</p>
                </Box>
            </Drawer>
        </div>
    )
}

export default MUIDrawer