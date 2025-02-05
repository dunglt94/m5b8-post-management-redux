import './App.css';
import Post from "./components/Post";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {HashRouter, Route, Routes} from "react-router-dom";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";

function App() {
    return (
        <>
            <HashRouter basename="m5b8-post-management-redux">
                <Routes>
                    <Route path="/" element={<Post/>}/>
                    <Route path="/add" element={<NewPost/>}/>
                    <Route path="/edit" element={<EditPost/>}/>
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
