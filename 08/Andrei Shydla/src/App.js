import React, { useState, useEffect } from "react";
import MainControlBlock from "./components/MainControlBlock";
import ClearWrapper from "./components/ClearWrapper";
import RegisterWrapper from "./components/RegisterWrapper";
import LoginWrapper from "./components/LoginWrapper";
import DeleteWrapper from "./components/DeleteWrapper";

import "./style.css";

function App() {
  const listOfForm = {
    none: {},
    register: { name: "register", label: "Registration Form" },
    login: { name: "login", label: "Login Form" },
    deleteAccount: { name: "deleteAccount", label: "Delete Account Form" },
  };
  const connectStates = { connect: "connect", disconnect: "disconnect" };

  const { connect, disconnect } = connectStates;
  const typesOfState = {
    on: "on",
    switching: "switching",
    clear: "clear",
    showForm: "showForm",
    getDataClearForm: "getDataClearForm",
  };
  const { on, switching, clear, showForm } = typesOfState;
  const [stateLocal, setStateLocal] = useState(clear);

  const createTypesOfContent = (listOfForm) => {
    let types = {};
    Object.keys(listOfForm).forEach((item) => {
      const keyName = `show${item[0].toUpperCase() + item.slice(1)}Form`;
      types[keyName] = keyName;
    });
    return types;
  };
  const typesOfContent = createTypesOfContent(listOfForm);
  const {
    showNoneForm,
    showRegisterForm,
    showLoginForm,
    showDeleteAccountForm,
  } = typesOfContent;

  const [data, setFormData] = useState({
    clearFormTypeOfContent: showNoneForm,
    connectorForms: disconnect,
    formState: clear,
    title: "",
    name: "",
    email: "",
    password: "",
    dataAdditionalActions: "",
  });

  const {
    clearFormTypeOfContent,
    connectorForms,
    formState,
    title,
    name,
    email,
    password,
    dataAdditionalActions,
  } = data;

  const sendDataToForm = (data) => {
    setFormData(data);
  };

  useEffect(() => {}, [clearFormTypeOfContent, connectorForms, formState]);

  const sendStateLocalToApp = (state) => {
    setStateLocal(state);
  };

  return (
    <div>
      <MainControlBlock
        stateLocal={stateLocal}
        typesOfContent={typesOfContent}
        listOfForm={listOfForm}
        connectStates={connectStates}
        typesOfState={typesOfState}
        functions={{ sendDataToForm: sendDataToForm }}
      />
      <div className="clearForm stateScreen">
        <p className="stateScreen-data">
          {`${clearFormTypeOfContent}, ${connectorForms}`}
        </p>
      </div>
      {clearFormTypeOfContent === showNoneForm && (
        <ClearWrapper
          typesOfContent={typesOfContent}
          connectStates={connectStates}
          typesOfState={typesOfState}
          data={data}
          functions={{
            setFormData: setFormData,
            sendStateLocalToApp: sendStateLocalToApp,
          }}
        />
      )}
      {clearFormTypeOfContent === showRegisterForm && (
        <RegisterWrapper
          typesOfContent={typesOfContent}
          connectStates={connectStates}
          typesOfState={typesOfState}
          data={data}
          functions={{
            setFormData: setFormData,
            sendStateLocalToApp: sendStateLocalToApp,
          }}
        />
      )}
      {clearFormTypeOfContent === showLoginForm && (
        <LoginWrapper
          typesOfContent={typesOfContent}
          connectStates={connectStates}
          typesOfState={typesOfState}
          data={data}
          functions={{
            setFormData: setFormData,
            sendStateLocalToApp: sendStateLocalToApp,
          }}
        />
      )}
      {clearFormTypeOfContent === showDeleteAccountForm && (
        <DeleteWrapper
          typesOfContent={typesOfContent}
          connectStates={connectStates}
          typesOfState={typesOfState}
          data={data}
          functions={{
            setFormData: setFormData,
            sendStateLocalToApp: sendStateLocalToApp,
          }}
        />
      )}
    </div>
  );
}

export default App;
