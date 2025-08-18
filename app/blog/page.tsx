"use client";

export default function Blog() {
    const fruits = ["Apple", "Banana", "Orange"];

    const isLoggedIn = true;

    const showMessage = false;

    const handleClick = () => {
        alert("button clicked!");
    };

    return (<>
    <h1>Blog Page</h1>
    <p>This is blog post:</p>

    <a href="/blog/1">Blog post 1</a>
    <a href="/blog/2">Blog post 2</a>

    <p>This is loop render:</p>

    <ul>
        {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
        ))}
    </ul>

    <p>Conditional rendering ternary</p>

    {isLoggedIn ? 'anda telah login' : 'and belum login'}

    <p>Conditional rendering using AND</p>

    {showMessage && (
        <p>Ini adalah mesej</p>
    )}

    <p>Event handling</p>

    <button type="button" onClick={handleClick} >Test Button</button>

    </>);
}