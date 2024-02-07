import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css'

export function Comment({ content }) {
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

            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button >
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}