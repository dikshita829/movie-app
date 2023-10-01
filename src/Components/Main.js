import React from 'react'
import Search from './Search'
import ReadMore from './ReadMore'






const Main = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row"style={{marginTop:"75px"}}>
          <Search/>
          <div className="row">
           <ReadMore/>
          

          </div>
          
          
        </div>
    </div>

    </>
  )
}

export default Main