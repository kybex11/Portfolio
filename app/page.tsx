import Image from 'next/image'
import heading from '../styles/Header.module.css';
import about from '../styles/About.module.css';
import projects from '../styles/Projects.module.css';
import contacts from '../styles/Contacts.module.css';

export default function Home() {
  return (
    <main className='container'>
      <header className={heading.header}>
        <h1 className={heading.title}>Привет, я Артем Kybex</h1>
        <p className={heading.subtitle}>Фронтенд разработчик</p>
      </header>
        <br />
      <section className={about.about}>
        <h2 className={about.heading}>Обо мне</h2>
        <p className={about.description}>
          Я опытный фронтенд разработчик с фокусом на создание современных и интерактивных веб-приложений.
          </p>
        <p className={about.description}>
          У меня есть опыт работы с HTML, CSS, JavaScript, TypeScript и различными фреймворками, такими как React и Next.js.
          </p>
        <p className={about.description}>
          Я стремлюсь к постоянному обучению и развитию, чтобы оставаться в курсе последних технологий и лучших практик разработки.
          </p>
      </section> 
      <br />
      <section className={projects.projects}>
        <h2 className={projects.heading}>Проекты</h2>
        <ul className={projects.projectList}>
          <li>
            <h3>KybexOS</h3>
            <p>Это операционная система с крутым стилем. На базе ARM64. Написанная на Basic. Для интузиастов разработки и гейимнга</p>
          </li>
          <li>
            <h3>Discord Bot</h3>
            <p>Это дискорд бот с более 600+ комманд. Но к сожалению проект закрыт на очень долгое время :(</p>
          </li>
          <li>
            <h3>Mini Apps</h3>
            <p>Очень много маленьких сайтов, приложений и игр.</p>
          </li>
        </ul>
      </section>
      <br />
      <section className={contacts.contacts}>
        <h2 className={contacts.heading}>Контакты</h2>
        <ul className={contacts.contactList}>
          <li>
            <span className={contacts.icon}>
              <i className="fas fa-envelope"></i>
            </span>
            <a href="mailto:varnetcoding@gmail.com">varnetcoding@gmail.com</a>
          </li>
          <li>
            <span className={contacts.icon}>
              <i className="fas fa-phone"></i>
            </span>
            <a href="tel:+1234567890">+1234567890</a>
          </li>
          <li>
            <span className={contacts.icon}>
              <i className="fab fa-github"></i>
            </span>
            <a href="https://github.com/kybex11">github.com/kybex11</a>
          </li>
        </ul>
      </section>
    </main>
  )
}