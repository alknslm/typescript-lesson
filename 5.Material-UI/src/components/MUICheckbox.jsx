import React, { useState } from 'react'
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

function MUICheckbox() {

    const [isConfirm, setIsconfirm] = useState(false);

    const printConsole = () => {
        if (!isConfirm) {
            alert('sözleşmeyi onaylayınız');
        } else {
            alert('başarıyla gönderildi')
        }
    }

    return (
        // <FormControl component="fieldset">
        //     <FormLabel >Eğitim Durumu</FormLabel>
        //     <FormGroup >
        //         <FormControlLabel
        //             control={<Checkbox />}
        //             label="İlkokul"
        //             labelPlacement="end"
        //         />
        //         <FormControlLabel
        //             control={<Checkbox defaultChecked />}
        //             label="Lise"
        //             labelPlacement="end"
        //         />
        //         <FormControlLabel
        //             control={<Checkbox />}
        //             label="Üniversite"
        //             labelPlacement="end"
        //         />
        //         <FormControlLabel
        //             control={<Checkbox />}
        //             label="Yükseklisans"
        //             labelPlacement="end"
        //         />
        //     </FormGroup>
        // </FormControl>


        <FormControl component="fieldset">
            <FormGroup >
                <FormControlLabel
                    control={<Checkbox checked={isConfirm} onChange={(e) => setIsconfirm(e.target.checked)} />}
                    label="Kullanım koşullarını kabul ediyourm"
                    labelPlacement="end"
                />

                <Button onClick={printConsole} variant='contained'>Formu Gönder</Button>
            </FormGroup>
        </FormControl>

    )
}

export default MUICheckbox