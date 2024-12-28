import React, { FC, useState } from 'react'
import style from './Form.module.css'
import { useAppDispatch } from '../../../app/index'
import { useLogInMutation, useRegistrationUserMutation } from '../userApi'
import { saveAccessToken } from '../userSlice'

type Props = {
    isForLogInPage: boolean
}

const Form: FC<Props> = ({ isForLogInPage }) => {

    const [loginValue, setLoginValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [emailValue, setEmailValue] = useState<string>('')

    const dispatch = useAppDispatch()
    const [checkUser] = useLogInMutation()
    const [registrationUser] = useRegistrationUserMutation()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!loginValue || !passwordValue) {
            alert('Заполните все поля!')
            return
        }

        if (isForLogInPage) {
            const result = await checkUser({
                login: loginValue,
                password: passwordValue,
                email: emailValue
            })
            if (result.data?.success === false) {
                alert(result.data?.message)
            } else {
                alert(result.data?.message)
                dispatch(saveAccessToken(result.data?.accessToken))
            }
        } else {
            registrationUser({ login: loginValue, password: passwordValue, email: emailValue })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={style.container}>
                <input
                    type='email'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)}
                    value={emailValue}
                    placeholder='email' />
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginValue(e.target.value)}
                    value={loginValue}
                    placeholder='login' />
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)}
                    value={passwordValue}
                    placeholder='password' />
                <button>{isForLogInPage ?
                    <p className="text text_type_main-small">Вход</p> : <p className="text text_type_main-small">Регистрация</p>}</button>
            </form>
        </div>
    )
}

export default Form