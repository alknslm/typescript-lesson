import { TextField, FilledInput } from '@mui/material'
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function MUITextField() {
    return (
        <div>
            <div style={{ marginTop: '30px' }}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />

            </div>

            <div style={{ marginTop: '30px' }}>
                <TextField error id="outlined-error" label="Error" defaultValue="Hello World" helperText='İsminizi Girin' />
                <TextField value='selim' disabled variant='outlined' color='warning' helperText='İsminizi Giriniz' />
            </div>

            <div style={{ marginTop: '30px' }}>
                <TextField
                    label="With normal TextField"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    slotProps={{
                        input: {
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        },
                    }}
                    size='large'
                />
                <TextField label='İsim Giriniz' slotProps={{
                    input: {
                        endAdornment: <InputAdornment position="start"><PersonOutlineIcon /></InputAdornment>,
                        startAdornment: <InputAdornment position="start"><PersonOutlineIcon /></InputAdornment>,
                    },
                }} variant="outlined" size='small' />

            </div>
        </div>
    )
}

export default MUITextField