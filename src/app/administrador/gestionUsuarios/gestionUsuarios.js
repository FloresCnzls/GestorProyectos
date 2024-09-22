"use client";

import React, {useState} from 'react';
import styles from './GestionUsu.module.css'


const GestionUser = () =>{
  // Estado para controlar modales
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId); 
  };

  const closeModal = () => {
    setActiveModal(null); 
  };

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
                <button className={styles.editBtn} onClick={() => openModal('editModal')}>
                  Editar
                </button>
                <button className={styles.deleteBtn} onClick={() => openModal('deleteModal')}>
                  Eliminar
                </button>
              </td>
            </tr>
            <tr>
              <td>Ana Martinez</td>
              <td>
                <button className={styles.editBtn} onClick={() => openModal('editModal')}>
                  Editar
                </button>
                <button className={styles.deleteBtn} onClick={() => openModal('deleteModal')}>
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Modal Editar */}
        <div id="editModal" className={`${styles.modal} ${activeModal === 'editModal' ? styles.active : ''}`}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <h3 className={styles.modalTitle}>Editar Usuario</h3>
            <input type="text" placeholder="Nombre del usuario" className={styles.modalInput} />
            <input type="email" placeholder="Correo electrónico" className={styles.modalInput} />
            <div className={styles.modalBtnContainer}>
              <button className={styles.modalBtn}>Guardar</button>
            </div>
          </div>
        </div>

        {/* Modal Eliminar */}
        <div id="deleteModal" className={`${styles.modal} ${activeModal === 'deleteModal' ? styles.active : ''}`}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
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