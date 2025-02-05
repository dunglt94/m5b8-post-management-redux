import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addPosts} from "../redux/action";
import {useNavigate} from "react-router-dom";

const NewPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newPost, setNewPost] = useState({});

    const handleChange = (e) => {
        setNewPost({
            ...newPost, [e.target.name]: e.target.value
        })
    }

    const handleAdd = () => {
        dispatch(addPosts(newPost));
        navigate("/");
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>New Post</h3>
            </div>
            <div>
                <div className="card mb-3 shadow-sm">
                    <div className="row g-0 align-items-center">
                        <div className="col-9">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Title</h5>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="title"
                                    onChange={handleChange}
                                />
                                <h5 className="card-title fw-bold mt-3">Content</h5>
                                <textarea
                                    className="form-control"
                                    name="body"
                                    cols="30"
                                    rows="3"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-success px-5" onClick={handleAdd}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default NewPost;