import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {


    const [topic, setTopic]= useState('');
    const [body, setBody]= useState('');
    const [name, setName]= useState('Kraine');
    const [isPending, setIsPending]= useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents page from refreshing
        const comment = {name, topic, body};

        setIsPending(true);
        fetch('http://localhost:8000/comments',{
            method: 'POST',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify(comment)
        }).then(()=>{
            console.log("new comment added");
            setIsPending(false);
            history.push('/');
        });

    }

    return (
        <div className="create">
            <h3>Add new comment</h3>
            <form onSubmit={handleSubmit}>

            <label htmlFor="">Name:</label>
                <select value={name} onChange={(event)=>setName(event.target.value)}>
                    <option value="Aundre">Aundre</option>
                    <option value="Kraine">Kraine</option>
                    <option value="Bushi">Bushi</option>
                </select>

                <label htmlFor="">Topic:</label>
                <input
                type="text"
                value={topic} onChange={(event)=> setTopic(event.target.value)}
                required />

                <label htmlFor="">Body:</label>
                <textarea
                value={body}
                onChange = {(event)=> setBody(event.target.value)}
                required></textarea>

                {!isPending && <button>Add Comment</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}

export default Create;