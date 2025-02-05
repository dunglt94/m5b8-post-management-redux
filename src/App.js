import './App.css';
import Post from "./components/Post";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Route, Routes} from "react-router-dom";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";

function App() {
    return (
        <>
            <Routes>
                <Route path="/"  element={<Post/>}/>
                <Route path="/m5b8-post-management-redux/"  element={<Post/>}/>
                <Route path="/m5b8-post-management-redux/add"  element={<NewPost/>}/>
                <Route path="/m5b8-post-management-redux/edit"  element={<EditPost/>}/>
            </Routes>
        </>
    );
}

export default App;
