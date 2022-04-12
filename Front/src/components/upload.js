import React from "react";

export const Upload = () => {
    const [file, setFile] = React.useState()

    const form = new FormData()
    React.useEffect(() => {

        form.append( 
            "myFile", 
            file
          ); 
    }, [file])

    const submit = () => {
        e.preventDefault()
        const request = {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json'},
            body: form
        }
        console.log(request);
    
        // requete à l'api
        fetch(`http://localhost:5000/user/signup`, request)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        console.log(file);
    }
    return (
        <div>
            <input type={"file"} onChange={e => setFile(e.target.files[0])} />
            <button onClick={submit}>submit</button>
        </div>
    )
}