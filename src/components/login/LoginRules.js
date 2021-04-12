export const EmailRules = {
  required: "Campo Requerido",
  pattern: {
    value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
    message: "Email Invalido",
  },
  minLength: {
    value: 5,
    message: "Debe contener mas de 5 caracteres",
  },
};

export const PasswordRules = {
  required: "Campo Requerido",
  minLength: {
    value: 3,
    message: "Debe contener mas de 5 caracteres",
  },
};
