import React from 'react'
import { useAppSelector } from '../../../app/index'
import { accessTokenSelector } from '../../Profile/userSlice'
import { Navigate } from 'react-router-dom'

type Props = {
    children: React.ReactNode
}

const PrivateOverlay = (props: Props) => {
    const accessToken = useAppSelector(accessTokenSelector)
    return (
        <div>
            {accessToken === 'empty' ? props.children : <Navigate to='/login' />}
        </div>
    )
}

export default PrivateOverlay