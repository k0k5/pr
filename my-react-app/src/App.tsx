import { useState } from 'react'
import './App.css'


function Greeting() {
  return (
    <div>
      <h1>Привет, мир!</h1>
      <p>Это мой первый React-компонент.</p>
    </div>
  );
}


function TaskList() {
  return (
    <ul>
      <li>Позавтракать</li>
      <li>Проверить почту</li>
      <li>Сделать зарядку</li>
      <li>Выпить стакан воды</li>
    </ul>
  );
}

function ActionButton() {
  return (
    <div>
      <button>Нажми меня</button>
      <p>Кнопка пока не нажата.</p>
    </div>
  );
}

function ProfileCard() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '400px', marginBottom: '20px' }}>
      <h2>Анна Иванова</h2>
      <h3>Web-разработчик</h3>
      <p>Люблю писать чистый код и изучать новые технологии</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
      </ul>
    </div>
  );
}

function ImageGallery() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <img src="https://placehold.co/150x150" alt="Заглушка 1" />
      <img src="https://placehold.co/150x150" alt="Заглушка 2" />
      <img src="https://placehold.co/150x150" alt="Заглушка 3" />
    </div>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting />
      <TaskList />
      <ActionButton />
      <ProfileCard />
      <ImageGallery />
    </>
  )
}

export default App
