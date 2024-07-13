import Addtodo from "./components/Addtodo"
import Todos from "./components/Todos"


function App() {
 

  return (
   
     <div className="h-screen bg-gradient-to-t to-slate-700 from-gray-900">
      <Addtodo/>
      <Todos/>
     </div>
  
  )
}

export default App
