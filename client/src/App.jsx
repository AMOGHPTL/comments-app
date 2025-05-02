import { Routes, Route } from "react-router-dom";
import Comments from "./pages/Comments";
import NewComments from "./pages/NewComment";
import ShowComment from "./pages/ShowComment";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/comments" element={<Comments />} />
        <Route path="/comments/new" element={<NewComments />} />
        <Route path="/comments/:id" element={<ShowComment />} />
        <Route path="*" element={"/comments"} />
      </Routes>
    </div>
  );
};

export default App;
