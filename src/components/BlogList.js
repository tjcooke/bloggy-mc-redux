import React from 'react';

export default function BlogList({posts, handleClick}) {
    // Helper function implicitly returns an <li>

    //If we want the IDs as well as the blog posts,
    // we should get an array of the IDs (using Object.keys).
    //Then, we  map over that array.
    // With each id, we can access the blog post
    // in the posts object.
    const listItems = Object.keys(posts).map(id => {
        const theBlogPost = posts[id];
        return <li onClick={() => {
            handleClick(id);
        }}>{theBlogPost.title} - {id}</li>
    });
    return (
        <ol>
            {listItems}
        </ol>
    )
}