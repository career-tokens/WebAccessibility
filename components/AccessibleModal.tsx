/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
interface Props {
  isModalOpen: boolean;
  onCloseModal: () => void;
}
const AccessibleModal: React.FC<Props> = ({ isModalOpen, onCloseModal }) => {
  const closeButtonRef = useRef<null | any>(null);
  const opensModalButtonRef = useRef<null | any>(null);
  const lastButtonRef = useRef<null | any>(null);

  const onCloseAndRefocus = () => {
    //when the modal is open and the Esc key is pressed, we need to close the modal
    //and return the focus to the modal open button(basically from where the modal
    //was initiated)
    onCloseModal();
    opensModalButtonRef.current?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isModalOpen) {
      //when the user presses Escape key and modal is open then run this function
      onCloseAndRefocus();
    }

    const firstInteractiveElementInModal = closeButtonRef.current; //targetting the first
    //interactive element in the modal that is the close button
    const lastInteractiveElementInModal = lastButtonRef.current;
    //targetting the last interactive element in the modal and that is the no button
    if (e.key === "Tab") {
      if (e.shiftKey && e.target === firstInteractiveElementInModal) {
        //basically if Tab+Shift is pressed and current focus is on the first element then
        //move to the last element
        e.preventDefault();
        lastInteractiveElementInModal?.focus();
      } else if (e.target === lastInteractiveElementInModal) {
        //if only Tab is pressed and current focus is on the last element then move to the
        //first element
        e.preventDefault();
        firstInteractiveElementInModal?.focus();
      }
    }
  };

  useEffect(() => {
    const rootElement = document.getElementById("root");
    rootElement?.setAttribute("aria-hidden", isModalOpen.toString());
    //the root element does not need to spoken about by the screen reader when the modal is open
    //and hence it is ignored by the accessbility tree, don't get the wrong idea, its still
    //in the document, its just being ignored by the screen reader

    if (isModalOpen) {
      opensModalButtonRef.current = document.activeElement; // this is to
      //refer to the modal button which opens the modal, this useEffect callback
      //will run whenever the isModalOpen changes and if the isModalOpen is true
      //means the modal just got opened and hence the current element in focus is
      //the modal button
      closeButtonRef.current?.focus(); //in the JSX we have associated the ref with
      //the close button and hence using javascript, we can focus the element whenever
      //the modal opens, that is bringing the focus inside the modal
    }

    document.addEventListener("keydown", onKeyDown); //whenever a key will be pressed, this
    //onKeyDown function will be called

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    }; //when the component unmounts,
    //remove the event listener
  }, [isModalOpen]);

  return (
    <>
      <style>
        {`
              button:focus{
                color:red !important;
                // this is to make sure that when a button is focused, that is clearly understood
              }
            `}
      </style>
      {isModalOpen &&
        // we are using createPortal from react-dom so as to create
        //create a different DOM element wrt to root div
        //check the html souce code on the page after rendering the modal
        //also the react docs for more info
        createPortal(
          <div className="pf-v5-c-backdrop">
            <div className="pf-v5-l-bullseye">
              <div
                className="pf-v5-c-modal-box pf-m-sm"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title-modal-basic-example-modal"
                aria-describedby="modal-description-modal-basic-example-modal"
              >
                <div className="pf-v5-c-modal-box__close">
                  <button
                    className="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-label="Close"
                    ref={closeButtonRef} //passing the ref for associating the close button to it
                    onClick={onCloseAndRefocus} //close modal on clicking the close button
                    //and also refocus to the modal button
                  >
                    <i className="fas fa-times" aria-hidden="true"></i>
                  </button>
                </div>
                <header className="pf-v5-c-modal-box__header">
                  <h1
                    className="pf-v5-c-modal-box__title"
                    id="modal-title-modal-basic-example-modal"
                  >
                    Accessible Modal
                  </h1>
                </header>
                <div
                  className="pf-v5-c-modal-box__body"
                  tabIndex={0}
                  id="modal-description-modal-basic-example-modal"
                >
                  <p>We are trying to create an accessible modal</p>
                  <p>Have you tried doing it on your own?</p>
                </div>
                <footer className="pf-v5-c-modal-box__footer">
                  <button className="pf-v5-c-button pf-m-primary" type="button">
                    Yes
                  </button>
                  <button
                    className="pf-v5-c-button pf-m-link"
                    type="button"
                    ref={lastButtonRef} //need to mark the last button to cycle the focus
                    //within the modal when its open
                  >
                    No
                  </button>
                </footer>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default AccessibleModal;
