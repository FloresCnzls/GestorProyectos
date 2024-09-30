"use client";
import Image from "next/image"; 
import styles from "./home.module.css";
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    // Lógica para cerrar sesión
    localStorage.removeItem('token'); // Eliminar el token
    router.push('./'); // Redirigir a la página de inicio de sesión
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          src="/logo.png" // Cambia a tu logo
          alt="Logo de la aplicación"
          width={150}
          height={50}
          priority
        />
        <nav className={styles.nav}>
          <a href="#projects">Proyectos</a>
          <a href="#team">Equipo</a>
          <a href="#about">Acerca de</a>
          <a href="#contact">Contacto</a>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Gestión de Proyectos Simplificada</h1>
          <p>
            Organiza y gestiona tus proyectos de manera eficiente con nuestra herramienta, diseñada para maximizar la productividad.
          </p>
          <a className={styles.cta} href="#get-started">
            Comenzar ahora
          </a>
        </section>

        <section id="projects" className={styles.projects}>
          <h2>Tus Proyectos</h2>
          <div className={styles.projectList}>
            <div className={styles.projectCard}>Proyecto 1</div>
            <div className={styles.projectCard}>Proyecto 2</div>
            <div className={styles.projectCard}>Proyecto 3</div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Gestión de Proyectos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

