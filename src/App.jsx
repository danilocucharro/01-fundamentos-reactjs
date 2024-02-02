import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post 
        author="Danilo Cucharro" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, nam. Assumenda id commodi beatae. Doloremque doloribus explicabo, nostrum iste quasi ad reiciendis, repellat libero mollitia eaque dolore reprehenderit quae maiores?"
      />
      <Post 
        author="Robson Souza"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quae id perspiciatis corrupti voluptas, eligendi sunt quo consequuntur modi. Modi repellat aut cum veritatis ab laboriosam, doloremque harum earum ad?"
      />
    </>
  )
}