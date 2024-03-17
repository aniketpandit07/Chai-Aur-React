import { useEffect, useState } from "react";
import { apiUrl, filterData } from "./Data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      //save data in variable
      setCourses(output.data);
      setLoading(false);
    } catch (error) {
      toast.error("something went wrong");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-indigo-800">
      <div>
        {" "}
        <Navbar />
      </div>
      <div className="bg-indigo-800">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex  flex-wrap justify-center items-center min-h-50[vh]">
          {loading ? <Spinner /> : <Cards courses={courses} category={category}/>} 
        </div>
      </div>
    </div>
  );
}

export default App;
