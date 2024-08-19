import { createContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const UserLoginContext = createContext();

export const StorageLogin = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [erroUsers, setErroUsers] = useState(null);
  const [sucess, setSucess] = useState(null);
  const [forms, setForms] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const navigate = useNavigate();

  const fetchUsers = useCallback(async () => {
    try {
      const us = await fetch("user.json");
      if (!us.ok) throw new Error("Sem usuários encontrados.");
      const respostaUsers = await us.json();
      setUsers(respostaUsers);
    } catch (error) {
      setErroUsers(error.message);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const criarUsers = useCallback((e) => {
    e.preventDefault();
    const newUsers = {
      username: forms?.nome,
      email: forms?.email,
      password: forms?.senha,
    };

    let quantyLength = Object.values(newUsers).some(
      (item) => item.length === 0
    );

    if (quantyLength) {
      setErroUsers("erro ao criar conta!");
      return false;
    } else {
      setUsers({ ...users, newUsers });
      setSucess("Conta criada com sucesso!");
      setErroUsers(null);
      delayNavigate();
      localStorage.setItem("user", JSON.stringify(newUsers));
      setForms({ nome: "", email: "", senha: "" });
      return true;
    }
  });

  const delayNavigate = useCallback(() => {
    setTimeout(() => {
      navigate("/login");
      setSucess(null);
    }, 1000);
  }, [navigate]);

  const logarUsers = useCallback((e) => {
    e.preventDefault();

    const storage = localStorage.getItem("user");
    const user = JSON.parse(storage);
    if (user) {
      const { username, email, password } = user;

      let usersCaixa;
      Object.values(user)?.map((item) => {
        return (usersCaixa = item?.length === 0 ? true : false);
      });

      if (
        usersCaixa ||
        username !== forms?.nome ||
        email !== forms?.email ||
        password !== forms?.senha
      ) {
        setErroUsers("Usuario não encontrado");
        return false;
      } else {
        setErroUsers(null);
        setUsers({ ...users, user });
        setForms({ nome: "", email: "", senha: "" });
        navigate("/");
      }

      const userSearch = users?.find((dados) => {
        return (
          dados?.username === username &&
          dados?.email === email &&
          dados?.password === password
        );
      });

      return userSearch;
    }
  });

  return (
    <UserLoginContext.Provider
      value={{
        users,
        criarUsers,
        logarUsers,
        forms,
        setForms,
        sucess,
        erroUsers,
      }}
    >
      {children}
    </UserLoginContext.Provider>
  );
};
