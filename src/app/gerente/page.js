"use client"

import React, {useState} from "react";
import GerenteMenu from "./menuGerente/gerenteMenu";
import GestionProyectos from "./gestionProyectos/gestionProyectos";
import GestionTareas from "./gestionTareas/gestionTareas";

export default function Home(){
    const [activeModule, setActiveModule] = useState("proyectos");

    // Función para cambiar el módulo según el menú seleccionado
    const handleMenuClick = (module) => {
        if (typeof module !== "string") {
            console.error("El parámetro del menú no es válido:", module);
            return;
          }
          setActiveModule(module);
    };

    return (
        <div>
          {/* Pasa la función para manejar el clic en el menú como prop */}
          <GerenteMenu handleMenuClick={handleMenuClick} />
    
          {/* Renderiza el módulo basado en el estado */}
          <main>
            {activeModule === "proyectos" && <GestionProyectos />}
            {activeModule === "tareas" && <GestionTareas />}
            {activeModule === "actus" && <AboutModule />}
            {activeModule === "contactos" && <ContactModule />}
          </main>
        </div>
      );
}