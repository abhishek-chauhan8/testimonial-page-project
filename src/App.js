import "./App.css";
import Testimonials from "./Components/Testimonials";
import reviews from "./data"

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/2 mx-auto mt-2"></div>
      </div>

      <Testimonials reviews = {reviews}/>
    </div>
  );
}

export default App;
