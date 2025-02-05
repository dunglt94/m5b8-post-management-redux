import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../redux/action';
import {useNavigate} from "react-router-dom";

const Post = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = useSelector((state) => state.posts) || [];

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleAddNewPost = () => {
        navigate('/add')
    }

    const handleEdit = (postId) => {
        navigate('/edit', {state: {postId}});
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Post</h3>
                <button className="btn btn-success me-3" onClick={handleAddNewPost}>Add new Post</button>
            </div>
            <div>
                {posts.map((post) => (
                    <div key={post.id} className="card mb-3 shadow-sm">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-9 card-body">
                                <h5 className="card-title fw-bold">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                            <div className="col-md-3 text-end pe-3">
                                <button
                                    className="btn btn-primary px-4"
                                    onClick={() => handleEdit(post.id)}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Post;