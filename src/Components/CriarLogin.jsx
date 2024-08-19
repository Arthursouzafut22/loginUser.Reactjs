
import styles from "../Components/Login/Login.module.scss"
import { useContext } from "react";
import { UserLoginContext } from "../Hooks/UseContextLogin";
import UseForms from "../Hooks/UseForms";

const CriarLogin = () => {
  const { criarUsers, forms, setForms, sucess, erroUsers } =
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
      <h1 style={{ textAlign: "center" }}>Criar conta</h1>
      <form onSubmit={criarUsers} className={styles.form}>
        <input
          type="text"
          placeholder="Seu nome"
          name="nome"
          value={forms.nome}
          onBlur={bluerValidate}
          onChange={changeValue}
        />
        <input
          type="email"
          placeholder="Seu email"
          name="email"
          value={forms.email}
          onBlur={bluerValidate}
          onChange={changeValue}
        />
        <input
          type="password"
          name="senha"
          placeholder="Sua senha"
          value={forms.senha}
          onBlur={bluerValidate}
          onChange={changeValue}
        />
        {error && <p style={{ color: "red", fontWeight: "600", margin:"4px 0px" }}>{error}</p>}
        {sucess && (
          <p style={{ color: "green", fontWeight: "700" }}>{sucess}</p>
        )}
        {erroUsers && (
          <p style={{ color: "red", fontWeight: "700" }}>{erroUsers}</p>
        )}
        <button>Criar</button>
      </form>
      </section>
    </>
  );
};

export default CriarLogin;
