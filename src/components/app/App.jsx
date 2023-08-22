import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import AppRoutes from '../Routes/AppRoutes'
import Header from '../header/Header'

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            staleTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false
        }
    }
})


 const App = () => {

    return (

        <QueryClientProvider client={queryClient}>
            <div>
            <Header />
            <div>
            <AppRoutes />
            </div>
         
            </div>
           


            <ReactQueryDevtools />
        </QueryClientProvider>

    )
}

export default App