import React, { createContext, ReactNode, useState } from "react";

export const ModalContext = createContext({});

function ModalProvider({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
