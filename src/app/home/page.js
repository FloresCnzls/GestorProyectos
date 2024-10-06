"use client";
import Image from "next/image"; 
import styles from "./home.module.css";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import GerenteMenu from "../gerente/menuGerente/gerenteMenu";
import GestionProyectos from "../gerente/gestionProyectos/gestionProyectos";
import GestionTareas from "../gerente/gestionTareas/gestionTareas";

export default function Home() {
  const router = useRouter();
  const [activeModule, setActiveModule] = useState("proyectos");

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    router.push('./'); 
  };

  const headers = {
    proyectos: "Gestión de Proyectos",
    tareas: "Gestión de Tareas",
    actus: "Acerca de",
    contactos: "Contacto"
  };

  const handleMenuClick = (module) => {
    if (typeof module !== "string") {
      console.error("El parámetro del menú no es válido:", module);
      return;
    }
    setActiveModule(module);
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
          <a href="#projects" onClick={() => handleMenuClick("proyectos")}>Proyectos</a>
          <a href="#team" onClick={() => handleMenuClick("tareas")}>Equipo</a>
          <a href="#about" onClick={() => handleMenuClick("actus")}>Acerca de</a>
          <a href="#contact" onClick={() => handleMenuClick("contactos")}>Contacto</a>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>{headers[activeModule]}</h1>
          <p>
            {activeModule === "proyectos" 
              ? "Organiza y gestiona tus proyectos de manera eficiente con nuestra herramienta, diseñada para maximizar la productividad."
              : activeModule === "tareas"
              ? "Gestiona tus tareas y asegura que cada actividad esté en el camino correcto."
              : activeModule === "actus"
              ? "Conoce más sobre nuestra plataforma y su historia."
              : "Ponte en contacto con nosotros para cualquier consulta."}
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
