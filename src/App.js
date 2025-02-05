import './App.css';
import Post from "./components/Post";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";

function App() {
    return (
        <>
            <BrowserRouter basename="/m5b8-post-management-redux">
                <Routes>
                    <Route path="/" element={<Post/>}/>
                    <Route path="/add" element={<NewPost/>}/>
                    <Route path="/edit" element={<EditPost/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
