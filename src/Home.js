
import CommentList from './CommentList';
import useFetch from './useFetch';

const Home = () => {

    const {data:comments, isPending, error} = useFetch('http://localhost:8000/comments'); // data is assigned to the variable comments

    return (
        <div className="home">
            { isPending && <h4>Loading ...</h4>}
            { error && <p>{ error}</p>}
            {comments && <CommentList comments = {comments} title = 'All Comments'/>}
        </div>
    );
}

export default Home;