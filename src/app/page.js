import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Iniciar Sesión</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="Ingrese su correo" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingrese su contraseña" required />
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
