const Comment = ({author, description, year}) => {
    return (
        <>
            <p>{author} wrote: {description} in {year}</p>
        </>
    );
}

export default Comment;