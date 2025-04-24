import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        const auth = getAuth();
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        if (user) {
            // toastify ile birşeyler eklenecek 13:35 'te kaldı
        }
    }

    return (
        <div className='auth'>
            <h3 className='auth-header'>Giriş Yap / Kaydol</h3>
            <div className='input-div'>
                <input value={email} onChange={() => setEmail(e.target.value)} type="email" placeholder='Email adres' />
                <input value={password} onChange={() => setPassword(e.target.value)} type="password" placeholder='Şifre' />
            </div>
            <div className='button-div'>
                <button className='google-button'> <FaGoogle style={{ marginTop: '3px' }} /> Google ile Giriş</button>
                <button className='login-button'>Giriş Yap</button>
                <button onClick={register} className='register-button'>Kaydol</button>
            </div>
        </div>
    )
}

export default Auth