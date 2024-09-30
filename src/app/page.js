'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Usa 'next/navigation' en lugar de 'next/router'
import styles from "./page.module.css";

export default function Login() {
  console.log('Componente Login renderizado'); // Verificar si el componente está renderizando

  const [nombre_usuario, setnombre_usuario] = useState('');
  const [contrasena, setcontrasena] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    // Verifica si esta línea aparece en la consola
    console.log('Formulario enviado');
    

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre_usuario: nombre_usuario,
          contrasena: contrasena,
        }),
      });
          // Verifica el estado de la respuesta de la API
          console.log('Estado de la respuesta:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('Conexión exitosa:', data);  // Mostrar respuesta exitosa en la consola
        // Guarda el token en localStorage
        localStorage.setItem('token', data.token);
        router.push('/home'); // Redirige al dashboard después del login
      } else {
        const errorData = await response.json();
        console.log('Error en la respuesta de la API:', errorData);  // Mostrar error de la API
        setError(errorData.message || 'Credenciales incorrectas');
      }
    } catch (err) {
      console.log('Error de conexión:', err);  // Mostrar cualquier error de conexión
      setError('Hubo un problema con la conexión');
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Iniciar Sesión</h1>
         {/* Mostrar mensaje de error si existe */}
         {error && <p className={styles.errorMessage}>{error}</p>}
        <form className={styles.form}  onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="nombre_usuario">Usuario</label>
            <input type="text" id="nombre_usuario" placeholder="Ingrese su usuario" value={nombre_usuario}  onChange={(e) => setnombre_usuario(e.target.value)} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="contrasena">Contraseña</label>
            <input type="password" id="contrasena" placeholder="Ingrese su contraseña" value={contrasena}  onChange={(e) => setcontrasena(e.target.value)} required />
          </div>
          <button type="submit" className={styles.submitBtn}>Entrar</button>
        </form>
            
        <p className={styles.registerLink}>
          ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
}
