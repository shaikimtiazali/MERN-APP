import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Create from "./components/create";
import Edit from "./components/edit";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
