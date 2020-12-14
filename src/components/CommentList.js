import Comment from './Comment';


const CommentList = () => {
    return (
        <>
            <Comment author="Kidda"
                    description="This is a long book." 
                    year={1999}/>
            <Comment author="Yaar" 
                     description="This is a much shorter book." 
                     year={2015}/>
            <Comment author="Teek He?" 
                    description="Not really a book"
                    year={2019} />
        </>
    );
}

export default CommentList;
