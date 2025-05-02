import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewComments = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postedComment = await axios.post(
        "http://localhost:5000/comments/new",
        {
          username,
          comment,
        }
      );
      console.log(postedComment.data);
      navigate("/comments");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewComments;
