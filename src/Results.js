import React from "react";
import useTable from "./useTable";
const Results = ({props, orig_btn})=>{
    const [table, TableHook] = useTable("table", orig_btn, props);
    return(
        <div className = 'result'>{!props?(<h1>No results found</h1>):(
            <TableHook/>)
        }
        </div>
    )
}
export default Results