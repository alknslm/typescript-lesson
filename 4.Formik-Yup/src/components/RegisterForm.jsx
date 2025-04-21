import React from 'react'
import { useFormik } from 'formik';
import { registerFormSchemas } from '../schemas/RegisterFormSchemas';

function RegisterForm() {

    const submit = (values, action) => {
        setTimeout(() => {
            action.resetForm(); //* 3 saniye bekle inputları temizle
        }, 3000)
    }

    //*formik ile gelecek olan hataları yup ile düzenleiyp inputların altında <p> etiketi ile gösterdik
    const { values, errors, handleChange, handleSubmit } = useFormik({ //*Formik içinden gelen değerler object distructing ile alıyoruz
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: ''
        },
        validationSchema: registerFormSchemas, //*Formik için kendi oluşturduğumuz registerFromSchemas yup'unu verdik.
        onSubmit: submit
    });

    //* form onSubmit olunca useFormikten gelen handleSubmit tetikleniyor. Onun içinde onSubmit : submit diyerek kendi methodumuza yönlendiriyoruz.

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='inputDiv'>
                    <label> Email</label>
                    <input type="text" id="email"
                        placeholder='Email giriniz'
                        value={values.email}
                        onChange={handleChange} />
                    {errors.email && <p className='input-error'>{errors.email}</p>}
                </div>
                <div className='inputDiv'>
                    <label> Yaş</label>
                    <input type="number" id="age"
                        placeholder='Yaşınızı giriniz'
                        value={values.age}
                        onChange={handleChange} />
                    {errors.age && <p className='input-error'>{errors.age}</p>}
                </div>
                <div className='inputDiv'>
                    <label> Şifre</label>
                    <input type="password" id="password"
                        placeholder='Şifrenizi giriniz'
                        value={values.password}
                        onChange={handleChange} />
                    {errors.password && <p className='input-error'>{errors.password}</p>}
                </div>
                <div className='inputDiv'>
                    <label> Şifre Tekrarı</label>
                    <input type="password" id="confirmPassword"
                        placeholder='Şifrenizi tekrar giriniz'
                        value={values.confirmPassword}
                        onChange={handleChange} />
                    {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}
                </div>

                <div className='inputDiv'>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                        <input style={{ width: '20px', height: '12px' }} type="checkbox" id="term"
                            value={values.term}
                            onChange={handleChange} />
                        <label> Kullanıcı Sözleşmesini Kabul Ediyorum</label>
                        {errors.term && <p className='input-error'>{errors.term}</p>}
                    </div>

                </div>
                <button type='submit' className='save-button'>KAYDET</button>
            </form>
        </div>
    )
}

export default RegisterForm