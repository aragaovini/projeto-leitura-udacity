import React, { Component } from "react";
import Comment from "./Comment";

class ListComments extends Component {
  render() {
    const { comments, onEditClick } = this.props;
    return (
      <div>
        <h4>Comentários</h4>
        {comments &&
          comments.map(comment => {
            return (
              <Comment
                key={comment.id}
                id={comment.id}
                autor={comment.author}
                comentario={comment.body}
                pontos={comment.voteScore}
                onEditClick={onEditClick}
              />
            );
          })}
        {!comments.length && <p>Não há comentários</p>}
      </div>
    );
  }
}

export default ListComments;
