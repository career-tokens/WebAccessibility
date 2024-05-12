"use client";

import React, { useState } from "react";
import "@patternfly/react-core/dist/styles/base.css";
import { Button } from "@patternfly/react-core";
import AccessibleModal from "@/components/AccessibleModal";
import BackHome from "@/components/ui/backhome";

const ModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className="main h-screen flex flex-col justify-evenly items-center">
      <BackHome/>
            <h1 className="text-lg bg-blue-600  text-white px-5 py-3 rounded-lg w-[95%] sm:w-[70%]" tabIndex={0}>
        Here we will see an accessible modal. Make sure to read about its properties in the blog (link to that in the home page). Also make sure to view the code on github.
      </h1>
      <Button
        variant="primary"
        ouiaId="Primary"
        onClick={() => {
          setIsModalOpen(true);
        }} //open the modal on clicking open modal
      >
        Show Modal
      </Button>
      {isModalOpen && (
        <AccessibleModal
          isModalOpen={isModalOpen}
          onCloseModal={onCloseModal}
        />
      )}
    </div>
  );
};

export default ModalPage;
