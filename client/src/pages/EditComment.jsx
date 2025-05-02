import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditComment = () => {
  const [comment, setComment] = useState({});
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchedComment = async () => {
      const comment = await axios.get(
        `http://localhost:5000/comments/${id}/edit`
      );
      setComment(comment.data);
      setLoading(false);
    };
    fetchedComment();
    setNewComment(comment.comment);
  }, []);

  const handleSubmit = async (e) => {
    const updatedComment = await axios.patch(
      `http://localhost:5000/comments/${id}/edit`,
      { comment: newComment }
    );
  };

  return (
    <div>
      <h1>edit</h1>
      {!loading && (
        <form onSubmit={handleSubmit} action={"/comments"}>
          <textarea
            name=""
            id=""
            onChange={(e) => setNewComment(e.target.value)}
          >
            {comment.comment}
          </textarea>
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default EditComment;
