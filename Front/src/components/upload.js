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

    const submit = (e) => {
        e.preventDefault()
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data'},
            body: form
        }
        console.log(request);
    
        // requete à l'api
        fetch(`http://localhost:5000/upload`, request)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        console.log(file);
    }
    return (
        <div>
            <form encType="multipart/form-data">
                <input type={"file"} onChange={e => setFile(e.target.files[0])} />
                <button onClick={submit}>submit</button>
            </form>
        </div>
    )
}