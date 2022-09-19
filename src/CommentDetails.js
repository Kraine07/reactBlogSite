import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const CommentDetails = () => {

    const {id} =  useParams();
    const {data:comment, error, isPending} = useFetch('http://localhost:8000/comments/'+ id);
    const history = useHistory();
    const handleDelete = ()=>{
        fetch('http://localhost:8000/comments/'+ comment.id,{
        method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return (
        <div className="comment-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {comment && (
                <article>
                    <h3> {comment.topic} </h3>
                    <h4> By {comment.name},</h4>
                    <p>{comment.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default CommentDetails;