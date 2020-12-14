const Comment = ({author, description}) => {
    return (
        <>
            <p>{author} wrote: {description}.</p>
        </>
    );
}

export default Comment;