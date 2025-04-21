import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    email: yup.string().email("Geçerli bir email adresi giriniz").required("Email adresi zorunlu"),

    age: yup.number().positive("Poizitif bir değer giriniz").integer("Tam sayı giriniz").required("Yaş alanı zorunulu"),

    password: yup.string().required("Şifre alanı zorunlu"),

    confirmPassword: yup.string().required("Şifre tekrarı zorunlu").oneOf([yup.ref('password', yup.password)], "Şifreler eşleşmiyor"),

    term: yup.boolean().required("Lütfen sözleşmeyi onaylayınız")
})

//* yup'un object fonksiyonu içindeki shapelerin objelerini alacaz

