import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { blue } from '@mui/material/colors';

function MUIAvatar() {
    return (
        <Stack spacing={2} sx={{ margin: '20px' }}>
            <Avatar src='https://randomuser.me/api/portraits/men/60.jpg' sx={{ width: '100px', height: '100px' }} />
            <Avatar sx={{ bgcolor: 'red' }} >S</Avatar>
            <Avatar sx={{ bgcolor: 'primary.main' }}>E</Avatar>
            <Avatar sx={{ bgcolor: 'purple', width: 60, height: 60 }}>E</Avatar>
        </Stack>
    )
}

export default MUIAvatar