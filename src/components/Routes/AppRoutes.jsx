import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Feed from '../feed/Feed'


 const AppRoutes = () => {

    return (

    <Routes >
        <Route path ='/' element={<Feed />}/>
    </Routes>

    )
}

export default AppRoutes