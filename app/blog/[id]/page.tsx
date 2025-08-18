import * as React from 'react'

export default function BlogPost({ params }) {

    const { id } = React.use(params)

    return (
        <>
        <h1>Blog Post { id }</h1>
        </>
    );
}