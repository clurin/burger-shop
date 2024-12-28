import React, { useState } from 'react'
import style from './Form.module.css'
import { useResetPasswordMutation } from '../features/Profile/userApi'

const ResetPasswordForm = () => {
    const [step, setStep] = useState<'email' | 'password'>('email')
    const [email, setEmail] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')

    const [resetPassword] = useResetPasswordMutation()

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email) {
            alert('Введите email!')
            return
        }

        alert(`Сообщение отправлено на ${email}. Проверьте вашу почту.`)
        setStep('password')
    }

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!newPassword) {
            alert('Введите новый пароль!')
            return
        }

        const result = await resetPassword({
            login: email, password: newPassword,
            email: ''
        })
        if (result.data) {
            alert('Пароль успешно изменён!')
        } else {
            alert('Произошла ошибка при изменении пароля')
        }
    }

    return (
        <div>
            {step === 'email' && (
                <form onSubmit={handleEmailSubmit} className={style.container}>
                    <input
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='Введите email' />
                    <button type="submit">
                        <p className="text text_type_main-small">Отправить сообщение на email</p>
                    </button>
                </form>
            )}

            {step === 'password' && (
                <form onSubmit={handlePasswordSubmit} className={style.container}>
                    <input
                        type='password'
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                        placeholder='Введите новый пароль' />
                    <button type="submit">
                        <p className="text text_type_main-small">Сохранить новый пароль</p>
                    </button>
                </form>
            )}
        </div>
    )
}

export default ResetPasswordForm
