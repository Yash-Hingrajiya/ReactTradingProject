import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Optionbox from "./Components/OptionBox/Optionbox";
import Log from "./Components/Log/Log";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Sidebar */}
        <SideBar />
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" class="d-flex flex-column">
          {/* Main Content  */}
          <div id="content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/optionbox" element={<Optionbox />} />
            </Routes>
            <Log />
          </div>
          {/* End of Main Content */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
    </Provider>
  );
}

export default App;
