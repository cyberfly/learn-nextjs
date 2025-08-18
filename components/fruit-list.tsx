const FruitList = (props) => {
    console.log('props', props);

    const { fruits } = props;

    return (<>
    
    -------
    <h1>Fruit List</h1>

    <ul>
        {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
        ))}
    </ul>
    -------
    
    </>);
}
 
export default FruitList;