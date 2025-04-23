import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '@mui/material';

function MUIBadge() {
    return (
        <div>
            <Badge sx={{ margin: '30px' }}
                badgeContent={15}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                color="error" max={9}>
                <Button variant='contained' color='primary'>MERHABA DÜNYA</Button>
            </Badge>

            <Badge sx={{ margin: '30px' }}
                badgeContent={15}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                color="success" max={9}>
                <MailIcon color='secondary'>MERHABA DÜNYA</MailIcon>
            </Badge>
        </div>
    )
}

export default MUIBadge