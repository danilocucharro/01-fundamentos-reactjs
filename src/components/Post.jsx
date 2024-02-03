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
          <p><a href="">#uiux #userexperience </a></p>
        </p>
      </div>
    </article>
  );
}