import React,{useContext, useEffect, useState} from "react";
import ShortlistedDataContext from './ShortlistedDataContext'

const useTable = (label, defaultState, data) => {
    const [shortData, setShortData] = useContext(ShortlistedDataContext);
    const [d, setD] = useState([])
    useEffect(()=>{
      setD(data||[])
    },[data])
    

    setShortData(shortData)
    const ShortlistedData=(selected_ind)=>{
      data.map((row, ind)=>(
        ind===selected_ind?shortData.push(row):null
      ))
      setShortData(shortData)
    }
    const onDelete=(selected_ind, type)=>{
      if(type==='all'){
      let temp_data = [...data]
      temp_data.splice(selected_ind,1)
      setD(temp_data)
      }
      else{
        let temp_data = [...shortData]
      temp_data.splice(selected_ind,1)
      setShortData(temp_data)
      }
   
    }
    const id = `use-table-${label.replace(" ", "").toLowerCase()}`;
    const Table = () => (
        <table id={id}>
            <thead>
            <tr>
    <th>City</th>
    <th>State</th>
    <th>District</th>
    {defaultState==='all'|| ''?<th>action</th>:null}
        </tr></thead>
        {defaultState==='all'|| ''?(<tbody>
        {d.map((row, ind) => (  
          <tr id = {ind}>
              <td key={`${ind}- ${row.City}`}>{row.City}</td>
          <td key={`${ind} - ${row.State}`}>{row.State}</td>
          <td key={`${ind} - ${row.District}`}>{row.District}</td>
          <button onClick={()=>ShortlistedData(ind)}>Shortlist</button>
          <button onClick={()=>onDelete(ind, 'all')}>Delete</button>
          </tr>
        ))}
        </tbody>):(
            <tbody>
            {data.map((row,ind) => (  
              <tr id = {ind}>
                  <td key={`${ind}- ${row.City}`}>{row.City}</td>
              <td key={`${ind} - ${row.State}`}>{row.State}</td>
              <td key={`${ind} - ${row.District}`}>{row.District}</td>
              <button onClick={()=>onDelete(ind, 'short')}>Remove Shortlist</button>
              </tr>
            ))}
            </tbody>
        )}
        
      </table>
    );
    return ['', Table];
  };
  
  export default useTable;