import React, {useContext, useState} from 'react';

interface ContextState {
  isOpenModal: (modal: string) => boolean;
  onOpenModal: (modal: string) => () => void;
  onCloseModal: (modal: string) => () => void;
}

interface ProviderProps {
  children?: React.ReactNode;
}

const ModalContext = React.createContext<ContextState | null>(null);

export const ModalProvider = ({children}: ProviderProps) => {
  const [modalOpenMap, setOpen] = useState<Record<string, boolean>>({});

  const isOpenModal = (modal: string) => modalOpenMap[modal];

  const onOpenModal = (modal: string) => () => {
    setOpen((modalOpenMap) => ({...modalOpenMap, [modal]: true}));
  };

  const onCloseModal = (modal: string) => () => {
    setOpen((modalOpenMap) => ({...modalOpenMap, [modal]: false}));
  };

  return (
    <ModalContext.Provider value={{isOpenModal, onOpenModal, onCloseModal}}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (modal: string) => {
  const state = useContext(ModalContext);
  if (state === null) throw new Error('Cannot find modal context provider.');

  const {isOpenModal, onOpenModal, onCloseModal} = state;

  return {
    isOpen: isOpenModal(modal),
    onOpen: onOpenModal(modal),
    onClose: onCloseModal(modal),
  };
};
