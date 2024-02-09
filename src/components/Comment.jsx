import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css'
import { useState } from 'react';

export function Comment({ content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment () {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/danilocucharro.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Danilo Cucharro </strong>
              <time title="03 de fevereiro às 08:28" dateTime="2024-02-03 08:28">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}