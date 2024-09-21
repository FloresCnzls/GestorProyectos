"use client";

import React from 'react';
import styles from "./Menu.module.css";
import Image from 'next/image';

const AdminMenu = ({handleMenuClick}) => {
    return (
      <header className={styles.header}>
       <Image
        src="/logo.png"  // El archivo "logo.png" debe estar en la carpeta "public"
        alt="Logo de la aplicación"
        width={150}
        height={50}
        priority
      />
          <nav className={styles.nav}>
          <a href="#" onClick={() => handleMenuClick("projects")}>
            Gestion
          </a>
          <a href="#" onClick={() => handleMenuClick("team")}>
            Prueba
          </a>
          <a href="#" onClick={() => handleMenuClick("about")}>
            Acerca de
          </a>
          <a href="#" onClick={() => handleMenuClick("contact")}>
            Contacto
          </a>
        </nav>
      </header>
    );
  };
  
  export default AdminMenu;