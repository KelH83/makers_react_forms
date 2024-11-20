import { useState} from "react";

const Form = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [errorMessage, setErrorMessage] = useState("");

    function clean(str) {
        return str.replace(/[a-z-A-Z ]/g, "").replace(/ +/, " ")
    }

    const handleNameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePassChange = (event) => {
        setPassword(event.target.value);
        if (errorMessage) {
            setErrorMessage("");
        }
    };

    const handleNumChange = (event) => {
        const cleanNum = clean(event.target.value)
        setPhoneNumber(cleanNum);
        console.log(cleanNum)
    };

    const payload = {
        username: username,
        password: password,
        phone: phoneNumber
    }
    const handleSubmit = (event) =>{
        event.preventDefault()

        if (payload.password.length > 8) {
            setErrorMessage("Password must be less than 8 characters");
            return;
        }
        else if(!payload.password.match(/[A-Z]/)){
            setErrorMessage("Password must contain at least 1 uppercase letter");
            return;
        }

        fetch("http://someurl.com/some-endpoint"),{
            method: "POST",
            body: JSON.stringify(payload)
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <label>
            Enter your username:
            <input type="username" name="username" value={username} onChange={handleNameChange}></input>
        </label>
        <br/>
        <label>
            Enter your password:
            <input type="password" name="password" value={password} onChange={handlePassChange}></input>
        </label>
        {errorMessage && (
                <p style={{ color: "red" }}>{errorMessage}</p> 
            )}
        <br/>
        <label>
            Enter your phone number:
            <input type="tel" name="phonenumber" value={phoneNumber} onChange={handleNumChange}></input>
        </label>
        <br/>
        <label>
            Submit
            <input type="submit" name="submit"></input>
        </label>
    </form>
    )
};

export default Form;
