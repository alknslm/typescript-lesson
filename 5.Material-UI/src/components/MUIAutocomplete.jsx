import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './Top100Film';
import { Button, TextareaAutosize } from '@mui/material';

function MUIAutocomplete() {
    return (
        <div>
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 400, backgroundColor: 'lightblue' }}
                renderInput={(params) => <TextField {...params} label="Filmler" />}
            />
            {/* Option bütün seçeneklerin bağlandığı yer
            renderInput seçeneklerin ne içinde gösterileceğinin yazıldığı yer */}
        </div>
    )
}

export default MUIAutocomplete