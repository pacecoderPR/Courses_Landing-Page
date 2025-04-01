import React, { useEffect, useState } from "react";
import {apiUrl, filterData} from "./data"
import Navbar from "./components/Navbar";
import Cards from "./components/Cards"
import Filter from './components/Filter'
import Spinner from "./components/Spinner";
import {toast} from "react-toastify"
const App = () => {
  const [courses, setCourses]=useState([])
  const [loading, setLoading]=useState(true)
  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const response = await fetch(apiUrl); 
        const data = await response.json();
        setCourses(data.data)

      }
      catch(error){
        toast.error("something went wrong")
        
      }
      setLoading(false)
    }
    fetchData();
  },[])
  return (<div>
    <Navbar/>
    <Filter filterData={filterData}/>
    <div>
      {
        loading ? (<Spinner/>):( <Cards courses={courses}/>)
      }
    </div>
</div>);
};

export default App;
