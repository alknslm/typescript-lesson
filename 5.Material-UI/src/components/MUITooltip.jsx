import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@mui/material';

function MUITooltip() {
    return (
        <div style={{ margin: '40px' }}>
            <Tooltip title="Delete" placement='bottom-end'>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Tooltip deneme">
                <Button variant='contained' color='warning'>TIKLA!</Button>
            </Tooltip>
        </div>
    )
}

export default MUITooltip