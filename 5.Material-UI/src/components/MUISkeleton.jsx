import React, { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import Honda from '../image/honda.jpg'

function MUISkeleton() {
    // Uygulama YÜkleniyormuş Hissiyatı Vermek için Kullanılır
    //  2.5 saniye sonra skeleton componenti yerine resim gösterilir.
    // loading true ise skeleton, false ise resim gösterilsin.

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500)
    }, [])

    return (
        <div>

            {
                loading ? <Skeleton variant='rounded' width={250} height={150} animation='wave' />
                    : <img src={Honda} width={250} height={150} />
            }
        </div>
    )
}

export default MUISkeleton