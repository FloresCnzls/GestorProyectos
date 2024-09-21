"use client";

import React from 'react';
import styles from './tabla.module.css'


const GestionUser = () =>{
    return (
        <div className={styles.page}>
         
          
            <div className={styles.container}>
      <h2 className={styles.title}>Lista de Usuarios</h2>
      <table className={styles.styledTable}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carlos Perez</td>
            <td>
              <button className={styles.editBtn} onClick={() => document.getElementById('editModal').style.display = 'block'}>
                Editar
              </button>
              <button className={styles.deleteBtn} onClick={() => document.getElementById('deleteModal').style.display = 'block'}>
                Eliminar
              </button>
            </td>
          </tr>
          <tr>
            <td>Ana Martinez</td>
            <td>
              <button className={styles.editBtn} onClick={() => document.getElementById('editModal').style.display = 'block'}>
                Editar
              </button>
              <button className={styles.deleteBtn} onClick={() => document.getElementById('deleteModal').style.display = 'block'}>
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Modal para Editar */}
      <div id="editModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={() => document.getElementById('editModal').style.display = 'none'}>
            &times;
          </span>
          <h3>Editar Usuario</h3>
          <input type="text" placeholder="Nombre del usuario" />
          <button className={styles.saveBtn}>Guardar</button>
        </div>
      </div>

      {/* Modal para Eliminar */}
      <div id="deleteModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={() => document.getElementById('deleteModal').style.display = 'none'}>
            &times;
          </span>
          <h3>¿Estás seguro de que quieres eliminar al usuario?</h3>
          <button className={styles.deleteConfirmBtn}>Eliminar</button>
        </div>
      </div>
   </div>
   </div>
   
    );
}
export default GestionUser;