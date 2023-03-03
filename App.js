import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/form/Form";
import Landing_page from "./components/landingPage/Landing_page";
import PostView from "./components/postView/PostView";
function App() {
  return (
    <>
      <BrowserRouter>
      <Landing_page />
        <Routes>
          <Route path="/" element={<PostView/>}> </Route>
          <Route path="/post" element={<Form/>}> </Route>
         </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
