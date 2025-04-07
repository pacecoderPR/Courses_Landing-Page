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
  const [category, setCategory]=useState(filterData[0].title)
  console.log(category)
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
  return (<div className="min-h-screen flex flex-col">
    <div><Navbar/></div>
    <div className="bg-bgDark2">
    <div><Filter filterData={filterData} category ={category} setCategory={setCategory} /></div>
    
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        loading ? (<Spinner/>):( <Cards  courses={courses} category={category} />)
      }
    </div>
    </div>
</div>);
};

export default App;
