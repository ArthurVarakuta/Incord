import Sidebar  from "./Components/Sidebar.jsx";
import Channelbar from "./Components/Channelbar.jsx";
import Mainarea from "./Components/Mainarea.jsx";
import Memberbar from "./Components/Memberbar.jsx";

function App() {
  return (
    <div className={"flex flex-row "}>
    <Sidebar />
     <Channelbar />
        <Mainarea />
        <Memberbar />
    </div>
  )
}

export default App
