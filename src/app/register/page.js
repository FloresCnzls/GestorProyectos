import styles from "./register.module.css";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Registrarse</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Ingrese su nombre" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="Ingrese su correo" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingrese su contraseña" required />
          </div>
          <button type="submit" className={styles.submitBtn}>Registrarse</button>
        </form>
        <p className={styles.registerLink}>
          ¿Ya tienes cuenta? <a href="/">Inicia sesión aquí</a>
        </p>
      </div>
    </div>
  );
}
