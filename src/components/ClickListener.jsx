const ClickListener = () => {
    const handleClick = (event) => {
    console.log(event);
    };

    const handleChange = (event) => {
        console.log(event.target.value);
        
    }

    return (
    <>
        <button onClick={handleClick}>Click Me!</button>
        <br/>
        <label>Type something here to log it: </label>
    <input onChange={handleChange}type="text" id="wordLog" name="wordLog"  />
    </>
    );
};

export default ClickListener;