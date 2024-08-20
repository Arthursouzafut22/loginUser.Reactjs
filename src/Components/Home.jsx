import { useContext } from "react";
import { UserLoginContext } from "../Hooks/UseContextLogin";

const Home = () => {
  const { users, userLogaute } = useContext(UserLoginContext);

  return (
    <>
      <section>
        <h1>Seja bem vindo a home {users && users?.user?.username}</h1>
        <button
          onClick={userLogaute}
          style={{
            fontSize: "17px",
            display: "block",
            padding: "10px 15px",
            borderRadius: "7px",
            background: " #a78bfa",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            margin: "0 auto",
          }}
        >
          Sair
        </button>
      </section>
    </>
  );
};

export default Home;
