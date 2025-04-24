import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function MUIProgress() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }

                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            })
        }, 500)

        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <div style={{ margin: '50px' }}>
            <CircularProgress />
            <CircularProgress color='success' />
            <LinearProgress color='inherit' />
            <br />
            <br />
            <LinearProgress variant="determinate" value={progress} />
        </div>
    )
}

export default MUIProgress