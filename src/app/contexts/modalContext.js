import { createContext, useState } from "react";

//#region --------------------------------- Context ---------------------------------

export const ModalContext = createContext();

//#endregion

//#region --------------------------------- Provider ---------------------------------

export function ModalProvider({ children }) {
  //#region --------------------------------- Variables ---------------------------------

  const [onModal, setOnModal] = useState(false);

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return (
    <ModalContext.Provider
      value={{
        onModal,
        setOnModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
//#endregion
