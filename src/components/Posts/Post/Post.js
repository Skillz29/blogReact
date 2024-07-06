/* eslint-disable jsx-a11y/img-redundant-alt */
import { ReactComponent as HeartIcon } from "../../../assets/images/like.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/images/delete.svg";
import { ReactComponent as EditIcon } from "../../../assets/images/edit.svg";
// import heartIcon from "../../../assets/images/like.svg"
import imagePlaceholder from "../../../assets/images/NoImage.png";

import "./Post_module.css";

export default function Post({
  title,
  description,
  liked,
  thumbnail = imagePlaceholder,
  likePost,
  deletePost,
  selectPost,
}) {
  const customFolling = liked ? "red" : "black";

  const customDescription = (
    <p>
      {description.length > 100 ? (
        <>
          {description.slice(0, 101)}...
          <a href="/">About</a>
        </>
      ) : (
        description
      )}
    </p>
  );

  return (
    <div className="post">
      <img className="post-image" src={thumbnail} alt="image Placeholder" />
      <h3> {title} </h3>
      {customDescription}

      <div className="actions">
        <button onClick={likePost} className="likeBtn">
          <HeartIcon fill={customFolling} />
        </button>
        <button className="deleteBtn" onClick={deletePost}>
          <DeleteIcon />
        </button>
        <button onClick={selectPost}  >
          <EditIcon />
        </button>
      </div>
    </div>
  );
}
