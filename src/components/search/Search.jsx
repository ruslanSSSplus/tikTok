import React from 'react'

import SearchIcon from '@mui/icons-material/Search';

 const Search = () => {

    return (

       <form className="search">
            <div className="search-input">
               <SearchIcon />  
               <input type='text' name='search' value='' placeholder='Search'/>
               <button type='submit'>
                  Search
               </button>
            </div>

       </form>
    )
}

export default Search