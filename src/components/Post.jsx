import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/danilocucharro.png" />
          <div className={styles.authorInfo}>
            <strong>Danilo Cucharro</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="03 de fevereiro às 07:28" dateTime="2024-02-03 07:28">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala pessoal 👋</p>
          <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻</p>
          <p>Acesse e deixe seu feedback <a href="">👉 devonlane.design</a></p>
          <p><a href="">#uiux </a></p>
          <p><a href="">#userexperience</a></p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}