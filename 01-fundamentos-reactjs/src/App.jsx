import "./global.css";

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Hygor Martins"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat dolorem porro neque facilis quod in distinctio, soluta omnis maiores facere odit quia perferendis mollitia tempora sapiente ipsa animi magnam obcaecati."
          />
          <Post
            author="Vanessa Silva"
            content="Uma nova autora muito linda!!"
          />
        </main>
      </div>
    </div>
  );
}
