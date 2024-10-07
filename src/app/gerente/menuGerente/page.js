"use client"

import React from 'react';
import styles from './Menu.module.css';
import Image from 'next/image';

const GerenteMenu = ({handleMenuClick}) => {
    return(
        <header className={styles.header}>
       <Image
        src="/logo.png"  
        alt="Logo de la aplicación"
        width={150}
        height={50}
        priority
      />
          <nav className={styles.nav}>
          <a href="#" onClick={() => handleMenuClick("proyectos")}>
            Gestion de Proyectos
          </a>
          <a href="#" onClick={() => handleMenuClick("tareas")}>
            Asignar Tareas
          </a>
          <a href="#" onClick={() => handleMenuClick("actus")}>
            Ver actualizaciones
          </a>
          <a href="#" onClick={() => handleMenuClick("contacto")}>
            Contacto
          </a>
        </nav>
      </header>
    );
};

export default GerenteMenu;