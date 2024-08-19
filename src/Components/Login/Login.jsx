import styles from "../Login/Login.module.scss";
import { useContext } from "react";
import { UserLoginContext } from "../../Hooks/UseContextLogin";
import UseForms from "../../Hooks/UseForms";
import { Link } from "react-router-dom";

const Formulario = () => {
  const { logarUsers, forms, setForms, erroUsers } =
    useContext(UserLoginContext);
  const { error, bluerValidate } = UseForms();

  const changeValue = ({ target }) => {
    setForms({
      ...forms,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <section className={styles.wrapper}>
        <h1 style={{ display: "block", textAlign: "center" }}>Fazer login</h1>
        <form onSubmit={logarUsers} className={styles.form}>
          <input
            type="text"
            name="nome"
            value={forms.nome}
            placeholder="Seu nome"
            onBlur={bluerValidate}
            onChange={changeValue}
          />
          <input
            type="email"
            name="email"
            value={forms.email}
            placeholder="Seu email"
            onBlur={bluerValidate}
            onChange={changeValue}
          />
          <input
            type="password"
            value={forms.senha}
            placeholder="Seu senha"
            name="senha"
            onBlur={bluerValidate}
            onChange={changeValue}
          />
          {error && (
            <p style={{ color: "red", fontWeight: "600", margin: "4px 0px" }}>
              {error}
            </p>
          )}
          {erroUsers && (
            <p style={{ color: "red", fontWeight: "600", marginTop: "3px" }}>
              {erroUsers}
            </p>
          )}
          <Link to="/criar">Não tem uma conta?</Link>
          <button>Logar</button>
        </form>
      </section>
    </>
  );
};

export default Formulario;
