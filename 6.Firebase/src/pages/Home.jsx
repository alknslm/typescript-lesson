import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase';
function Home() {

    const [email, setEmail] = useState('');

    useEffect(() => {
        userInfo();
    }, [])

    const userInfo = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email);
            }
        });
    }


    return (
        <div>
            <h3>HOME</h3>
            <p>
                {email}
            </p>
        </div>
    )
}

export default Home