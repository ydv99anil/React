import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected ({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
// doItYourself Make it more easy //

    // if (authStatus === true) {
    //     navigate("/")
    // } else if(authStatus === false) {
    //     navigate("/login")
    // }

        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if(!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, 
    [authStatus, authentication, navigate])



  return loader ? <h1>loading....</h1> : <>{children}</>
}

export default Protected