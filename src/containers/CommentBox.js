import {useState} from 'react';
import CommentList from '../components/CommentList';


const CommentBox = () => {

    const initialState = [
        {
            id: 1,
            author: "The Main Author",
            description: "This is a long book"
        },
        {
            id: 2,
            author: "The Other Author",
            description: "This is a very short book"
        }
    ]

    // Create a state called comments
    // comment will be an array of objects
    const [comments, setComments] = useState(initialState);

    // A normal JS return - to return something!
    // {comments} in the return below is comments from the square brackets immediately above.
    return (
        <>
            <h1>Comments</h1>
            <CommentList comments={comments} />
        </>

    );
}

export default CommentBox;