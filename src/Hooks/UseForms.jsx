import { useState } from "react";

const typeValidate = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    menssage: "Prencha um email valído.",
  },
};

const UseForms = () => {
  const [error, setError] = useState(null);

  const formValidate = (name, value) => {
    if (value.length === 0) {
      setError("Campo vazio");
      return false;
    }
    if (name === "email" && !typeValidate.email.regex.test(value)) {
      setError(typeValidate.email.menssage);
      return false;
    }

    setError(null);
    return true;
  };

  const bluerValidate = ({ target }) => {
    formValidate(target.name, target.value);
  };

  return {
    error,
    bluerValidate,
  };
};

export default UseForms;
