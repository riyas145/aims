import React, { useEffect, useState } from 'react'


export const useAuth = () => {
    const [token, setToken] = useState('');
    const [userInfo, setUserInfo] = useState('');
    useEffect(() => {
        const currentUserToken = localStorage.getItem('token') || ''
        const currentUserInfo = localStorage.getItem('userInfo') || ''
        setToken(currentUserToken)
        setUserInfo(currentUserInfo)
    }, [])
    return [token, userInfo]
}
