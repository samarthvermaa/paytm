import Modal from "react-modal";

const customStyles = {
  content: {
    top: "10%",
    left: "20%",
    right: "20%",
    bottom: "10%",
    //marginRight: "-50%",
    //transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
export const MyModal = ({ children, modalIsOpen, setIsOpen }) => {
  //const subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
};
