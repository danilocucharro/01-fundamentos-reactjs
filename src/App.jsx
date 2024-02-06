import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/danilocucharro.png',
      name: 'Danilo Cucharro',
      role: 'Web Developer' 
    },
    content:[
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'paragraph', content: 'Acesse e deixe seu feedback' },
      { type: 'link', content: '👉 devonlane.design' },
      { type: 'link', content: '#uiux' },
      { type: 'link', content:'#userexperience' }
    ],
    publishedAt: new Date('2024-02-06 08:34:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3d.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat' 
    },
    content:[
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'paragraph', content: 'Acesse e deixe seu feedback' },
      { type: 'link', content: '👉 devonlane.design' },
      { type: 'link', content: '#uiux' },
      { type: 'link', content:'#userexperience' }
    ],
    publishedAt: new Date('2024-02-05 09:34:00'),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
