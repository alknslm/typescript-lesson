import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Menu, TextField } from '@mui/material';

function MUISelect() {
    //*sx ile style özelliklkeri verebiliyoruz

    // const [currency, setCurrency] = useState('');
    const [currencies, setCurrencies] = useState([]);
    console.log(currencies)
    return (
        <div>
            {/* <FormControl style={{ marginTop: '30px' }} sx={{ minWidth: 120 }}>
                <InputLabel >Para Birimi</InputLabel>
                <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value="TRY">Türk Lirası</MenuItem>
                    <MenuItem value="USD">Dolar</MenuItem>
                    <MenuItem value="EUR">Euro</MenuItem>
                </Select>
            </FormControl>

            <TextField
                onChange={(e) => setCurrency(e.target.value)} sx={{ width: '150px' }} label='Para Birimi' select>
                <MenuItem value="TRY">Türk Lirası</MenuItem>
                <MenuItem value="USD">Dolar</MenuItem>
                <MenuItem value="EUR">Euro</MenuItem>
            </TextField> */}

            <TextField
                SelectProps={{ multiple: true }} value={currencies}
                onChange={(e) => setCurrencies(e.target.value)} sx={{ width: '200px' }} label='Para Birimi' select>
                <MenuItem value="TRY">Türk Lirası</MenuItem>
                <MenuItem value="USD">Dolar</MenuItem>
                <MenuItem value="EUR">Euro</MenuItem>
            </TextField>

        </div>
    )
}

export default MUISelect