import {useState} from 'react';
import CommentList from '../components/CommentList';


const CommentBox = () => {

    // Create a state called comments
    const [comments, setComments] = useState();

    // A normal JS return - to return something!
    return (
        <>
            <h1>Comments</h1>
            <CommentList/>
        </>

    );
}

export default CommentBox;