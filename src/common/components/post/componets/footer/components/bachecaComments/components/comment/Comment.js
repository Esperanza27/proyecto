import cestino from "../../../../../../../../icon/cestino.png";
import editar from "../../../../../../../../icon/editar.png";
import "./Comment.scss";

const Comment = ({ comment , deleteComment }) => {
  return (
    <div className="comment-container">
      {comment?.text}
      <button onClick={() => deleteComment(comment?.id)}>
        <img src={cestino} alt="hello" className="button-delete"></img>
      </button>
      <button>
        <img src={editar} alt="hola" className="button-edit"></img>
      </button>
    </div>
  );
};
export default Comment;
