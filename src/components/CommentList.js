import Comment from './Comment';


const CommentList = ({comments}) => {

    // We have an array of objects
    // We want an array of JSX
    // We want a MAP

    // First map over all the comments returning a Comment component for each comment.
    // Save that to a variable
    // Render that in this component

    const commentNodes = comments.map((comment) => {  //commentNodes is an array of JSX
        return (
            <Comment author={comment.author} 
            description={comment.description} />
        )
    });

    // This is main part of this file.
    return (
        <>
            {commentNodes}
        </>
    );
}

export default CommentList;
