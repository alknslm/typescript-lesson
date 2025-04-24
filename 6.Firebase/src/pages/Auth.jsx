import React from 'react'

function Auth() {
    return (
        <div className='auth'>
            <h3 className='auth-header'>Giriş Yap / Kaydol</h3>
            <div className='input-div'>
                <input type="email" placeholder='Email adres' />
                <input type="password" placeholder='Şifre' />
            </div>
            <div className='button-div'>
                <button className='login-button'>Giriş Yap</button>
                <button className='register-button'>Kaydol</button>
            </div>
        </div>
    )
}

export default Auth