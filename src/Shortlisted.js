import React, {useState, useEffect, useContext} from "react";
import ShortlistedDataContext from "./ShortlistedDataContext";
import Results from './Results'
const Shortlisted = ()=>{
    const [shortData, setShortData] = useContext(ShortlistedDataContext);
    return(
        <div className='shortlisted-detail'>
            {shortData.length>0?(<Results props={shortData} orig_btn={'shortlisted'}></Results>):<h2>No shortlisted results</h2>}
        </div>
       
    )

}
export default Shortlisted