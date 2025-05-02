import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowComment = () => {
  const [comment, setComment] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/comments/${id}`
        );
        setComment(response.data);
      } catch (err) {
        console.error("Error fetching comment:", err);
      }
      setLoading(false);
    };
    fetchComment();
  }, [id]);

  return (
    <div className="comment-container">
      {loading && <p>Loading comment...</p>}

      {!loading && comment && (
        <div className="comment-card">
          <h2>Comment #{comment.id}</h2>
          <p>
            <strong>user: </strong> {comment.username}
          </p>
          <p>
            <strong>Comment: </strong>
            {comment.comment}
          </p>
        </div>
      )}
      <a href="/comments">show all</a>
      <br />
      <a href="/comments/new">Add new comment</a>
      <br />
      <a href={`/comments/${comment.id}/edit`}>Edit</a>
    </div>
  );
};

export default ShowComment;
