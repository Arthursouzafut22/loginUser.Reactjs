import { useContext } from "react";
import { UserLoginContext } from "../Hooks/UseContextLogin";

const Home = () => {
  const { users } = useContext(UserLoginContext);

  return (
    <>
      <section>
        <h1>Seja bem vindo a home {users && users?.user?.username}</h1>
      </section>
    </>
  );
};

export default Home;
