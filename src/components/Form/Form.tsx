import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenLightBox } from "../../redux/actions/actionCreators";
import "./Form.scss";
import LightBox from "../LightBox/LightBox";

const Form: React.FC = () => {
  let dispatch = useDispatch();
  let airportName = useSelector((state: any) => state.flight);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
  });
  const [input, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
  });

  //const prevData=usePrevious();

  useEffect(() => {
    validateInput("email");
  }, [input.email]);

  useEffect(() => {
    validateInput("phone");
  }, [input.phone]);

  useEffect(() => {
    validateInput("age");
  }, [input.age]);

  const checkIfAirportSelected = (): string =>
    airportName.length < 1 ? "" : " appear";

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.name.length === 0) {
      return;
    }
    if (errors.email.length > 0 || input.email.length === 0) {
      return;
    }
    if (errors.phone.length > 0 || input.phone.length === 0) {
      return;
    }
    if (errors.age.length > 0 || input.age.length === 0) {
      return;
    }
    console.log({ input });
    dispatch(setOpenLightBox(true));
    setInputs({ ...input, name: "", age: "", phone: "", email: "" });
  };

  const setInputData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "age" || e.target.name === "phone") {
      const result = e.target.value.replace(/\D/g, "");
      setInputs({ ...input, [e.target.name]: result });
    } else if (e.target.name === "name") {
      setInputs({
        ...input,
        [e.target.name]: e.target.value.replace(/[^a-z]/gi, ""),
      });
    } else {
      setInputs({ ...input, [e.target.name]: e.target.value });
    }
  };
  const validateInput = (name: string) => {
    switch (name) {
      case "email":
        let re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (input.email === "") {
          setErrors({ ...errors, email: "" });
        } else if (re.test(input.email)) {
          setErrors({ ...errors, email: "" });
        } else {
          setErrors({ ...errors, email: "No es un email valido" });
        }
        break;
      case "phone":
        if (input.phone === "") {
          setErrors({ ...errors, phone: "" });
        } else if (input.phone.length != 10) {
          setErrors({ ...errors, phone: "No es un numero valido" });
        } else {
          setErrors({ ...errors, phone: "" });
        }

        break;
      case "age":
        if (input.age === "") {
          setErrors({ ...errors, age: "" });
        } else if (parseInt(input.age) >= 18 && parseInt(input.age) <= 100) {
          setErrors({ ...errors, age: "" });
        } else {
          setErrors({ ...errors, age: "Edad invalida" });
        }
        break;
    }
  };

  return (
    <div className={`form__container`}>
      <p className={`form__welcome__text ${checkIfAirportSelected()}`}>
        Hola, bienvenido, sabemos que quieres viajar en{" "}
        <span>{airportName},</span> por favor diligencia el siguiente
        formulario:
      </p>
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
        className="form__data__container"
      >
        <div className="form__data__container__div">
          <input
            placeholder=" "
            autoComplete="off"
            className="form__input"
            value={input.name}
            onChange={(e) => {
              setInputData(e);
            }}
            name="name"
          />

          <label className="form__label">Nombre</label>
          {errors.name.length > 0 && (
            <p className="form__error">{errors.name}</p>
          )}
        </div>
        <div className="form__data__container__div">
          <input
            autoComplete="off"
            placeholder=" "
            className="form__input"
            value={input.email}
            onChange={(e) => {
              setInputData(e);
            }}
            name="email"
          />

          <label className="form__label">Email</label>
          {errors.email.length > 0 && (
            <p className="form__error">{errors.email}</p>
          )}
        </div>
        <div className="form__data__container__div">
          <input
            autoComplete="off"
            placeholder=" "
            className="form__input"
            value={input.phone}
            onChange={(e) => {
              setInputData(e);
            }}
            name="phone"
          />

          <label className="form__label">Celular</label>
          {errors.phone.length > 0 && (
            <p className="form__error">{errors.phone}</p>
          )}
        </div>
        <div className="form__data__container__div">
          <input
            autoComplete="off"
            placeholder=" "
            className="form__input"
            value={input.age}
            onChange={(e) => {
              setInputData(e);
            }}
            name="age"
          />

          <label className="form__label">Edad</label>
          {errors.age.length > 0 && <p className="form__error">{errors.age}</p>}
        </div>
        <div className="form__submit__container">
          <input className="form__submit" type="submit" value="enviar" />
        </div>
      </form>
    </div>
  );
};

export default Form;
