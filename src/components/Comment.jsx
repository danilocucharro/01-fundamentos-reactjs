import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css'

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/danilocucharro.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane <span>(você)</span></strong>
              <time title="03 de fevereiro às 08:28" dateTime="2024-02-03 08:28">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
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