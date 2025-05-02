import { useEffect, useState } from "react";
import axios from "axios";

const Comments = () => {
  const [comments, setComments] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchComments = async () => {
      const Comments = await axios.get("http://localhost:5000/comments");
      setComments(Comments.data);
      console.log(Comments.data);
    };
    fetchComments();
    setLoading(false);
  }, []);
  return (
    <div>
      <h1>Comments</h1>
      {!loading &&
        comments.map((comment) => (
          <p>
            {comment.username} : {comment.comment} .
            <a href={`/comments/${comment.id}`}>show comment</a>
          </p>
        ))}
      <a href="comments/new">Add comment</a>
    </div>
  );
};

export default Comments;
