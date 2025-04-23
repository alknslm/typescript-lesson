import React from 'react'
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';

function MUIAlert() {
    return (
        <div style={{ margin: '50px' }}>
            <Alert sx={{ width: '200px', marginTop: '10px' }} severity='error' >
                <AlertTitle>HATA</AlertTitle>
                Bu bir HATA mesajıdır
            </Alert>


            <Alert sx={{ width: '200px', marginTop: '10px' }} severity='info' variant='outlined'>Bu bir BİLGİLENDiRME mesajıdır
            </Alert>


            <Alert sx={{ width: '200px', marginTop: '10px' }} severity='success' variant='filled'>
                <AlertTitle>BAŞARILI</AlertTitle>
                Bu bir ONAY mesajıdır
            </Alert>
        </div>
    )
}

export default MUIAlert