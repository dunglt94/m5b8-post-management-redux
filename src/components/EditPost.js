import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editPosts, fetchPost} from "../redux/action";
import {useLocation, useNavigate} from "react-router-dom";

const NewPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [post, setPost] = useState({ title: "", body: "" });

    const postFromStore = useSelector((state) => state.post);

    const postId = location.state.postId;

    useEffect(() => {
        dispatch(fetchPost(postId));
    }, [dispatch,postId])

    useEffect(() => {
        if (postFromStore) {
            setPost(postFromStore);
        }
    }, [postFromStore]);


    const handleChange = (e) => {
        setPost({
            ...post, [e.target.name]: e.target.value
        })
    }

    const handleSave = () => {
        dispatch(editPosts(post));
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
                                    value={post.title}
                                    onChange={handleChange}
                                />
                                <h5 className="card-title fw-bold mt-3">Content</h5>
                                <textarea
                                    className="form-control"
                                    name="body"
                                    rows="3"
                                    value={post.body}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-success px-5" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default NewPost;