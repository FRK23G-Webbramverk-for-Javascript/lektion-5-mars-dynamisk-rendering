function DecreaseButton(props) {
    const { counter, setCounter } = props;

    function handleClick() {
        // setCounter((counter) => {
        //     return counter - 1;
        // });
        setCounter(counter - 1);
    }

    return (
        <button onClick={ handleClick }>Minska med 1</button>
    )
}

export default DecreaseButton;