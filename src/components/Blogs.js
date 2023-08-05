import React from 'react'
import posts from './../data/posts'
import { NavLink } from 'react-router-dom'

const Blogs = () => {

    return (
        <div>
            <h3>Los 15 lenguajes de programación mejor pagados:</h3>
            <ul className="list-group">
                {
                    posts.map((post)=>(

                        <li key={post.id}>
                            <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
                            
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Blogs