function ShowCounter(props) {
    console.log('ShowCounter laddas om');
    const { counter } = props;

    return (
        <h2>Counter är: { counter }</h2>
    )
}

export default ShowCounter;