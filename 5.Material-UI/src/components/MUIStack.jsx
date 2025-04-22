import React from 'react'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


function MUIStack() {
    return (
        <div>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={10}
                divider={<Divider orientation="vertical" flexItem />}
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </Stack>
            {/* defult displey:flex flex-direction:column gelir */}
            {/* Compnenetlerin ekranda nasıl görüneceğini gösteren bir component */}
        </div>
    )
}

export default MUIStack