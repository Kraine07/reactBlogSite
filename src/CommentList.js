import { Link } from "react-router-dom";
const CommentList = ( {comments,title} )=>{
    return(
        <div className="comment-list">
            <h2>{ title }</h2>
            {comments.map((comment)=>(
                <div className="comment-preview" key={comment.id}>
                    <Link to={`comments/${comment.id}`}>
                        <h4>{comment.topic}</h4>
                        <p> { comment.name }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default CommentList;