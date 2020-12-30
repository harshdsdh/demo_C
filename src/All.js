import React, {useState, useEffect, useContext} from "react";
import useDropdown from './useDropdown'
import Results from './Results'
import Shortlisted from "./Shortlisted";

const All = ()=>{
    const [location, setLocation] = useState('')
    const [data, setData] = useState([])
    const dropdown_param = ['City', 'State', 'District']
    const [para, ParamDropdown] = useDropdown("selectDropdown", "", dropdown_param);
    const fetch_api = 'https://next.json-generator.com/api/json/get/EJT-LmOrY'
    useEffect(()=>{
        fetch(fetch_api).then(response=>response.json())
                        .then(data => fetch_orig_data(data))
    },[])
   function fetch_orig_data(data){
        let arr=[]
        arr.push(data)
        setData(arr|| [])
    }
    const SearchParams=()=>{
        if(location.length && para.length){
            let d=[]
            data[0].map((prop,ind)=>(
                prop[para].toLowerCase()===location.toLowerCase()?d.push(prop):null
            ))
            let arr=[]
            arr.push(d)
            setData(arr|| [])
            
            }
    }
    return(
        <div className='AllDetail'>
            <div className='searchParam'>
            <label htmlFor="location">
            Location
            <input id="location" value={location} placeholder="Location" 
            onChange = {e=>setLocation(e.target.value)}/>
          </label>
          <ParamDropdown/>
          <button onClick={()=>SearchParams()}>submit</button>
          </div>
          {location===''||location.length>0 ?(<Results props={data[0]} orig_btn={'all'}></Results>):null}
        </div>
    )

}
export default All