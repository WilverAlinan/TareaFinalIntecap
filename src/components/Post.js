import React from 'react'
import posts from '../data/posts'
import { useParams, Navigate, NavLink } from 'react-router-dom'

const Post = () => {

    const { id } = useParams()

    console.log("El id es..... " + id);

    return (
        <div>

            {posts[id - 1] ?
                <div>
                    <h1>{posts[id - 1].title}</h1>
                    <p>{posts[id - 1].content}</p>
                    <NavLink to='/blog'> Volver </NavLink>

                </div>
                :
                <div>
                    <Navigate to="/Error404" />
                </div>
            }



        </div>
    )
}

export default Post
