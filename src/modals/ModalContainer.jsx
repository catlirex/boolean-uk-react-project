import styled from "styled-components";

import useStore from "../store";
import NewSearch from "./NewSearch";

const modals = {
  "": null,
  newSearch: NewSearch,
};

function ModalContainer({ className }) {
  const modal = useStore((store) => store.modal);
  const closeModal = useStore((store) => store.closeModal);

  const Modal = modals[modal];

  if (!modal) return null;

  return (
    <div className={`modal-container ${className}`}>
      <div className="modal">
        <button className="close-modal" onClick={closeModal}>
          &times;
        </button>
        <Modal />
      </div>
    </div>
  );
}

export default styled(ModalContainer)`
  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  display: grid;
  place-content: center;

  background-color: #00000040;

  z-index: 1000;

  .modal {
    border-radius: 5px;
    padding: 20px 40px;
    background-color: white;
    position: relative;

    display: grid;
    grid-gap: 5px;
  }

  .close-modal {
    position: absolute;

    top: -10px;
    right: -10px;

    justify-self: end;
    border-radius: 50%;
    border: solid 1px navy;
    background-color: navy;

    width: 30px;
    height: 30px;

    font-size: 1.5rem;
    color: white;

    display: grid;
    place-content: center;
  }
`;
