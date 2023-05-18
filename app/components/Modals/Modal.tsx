"use client";

import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";

interface ModalProps {
  isOpen: boolean;
  //   onClose: () => void;
  //   onSubmit: () => void;
  //   title?: string;
  //   body?: React.ReactElement;
  //   footer?: React.ReactElement;
  //   actionLabel: string;
  //   secondaryAction?: () => void;
  //   secondaryLabel?: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  //   onClose,
  //   onSubmit,
  //   title,
  //   body,
  //   footer,
  //   actionLabel,
  //   secondaryAction,
  //   secondaryLabel,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    setTimeout(() => {
      //   onClose();
    }, 300);
  }, [disabled]);

  return (
    <div className="overflow-y-auto overflow-x-none inset-0 outline-none focus:outline-none bg-neutral-800/70 fixed justify-center items-center flex z-50">
      <div className="relative mx-auto my-6 w-full md:w-4/6 lg:w-3/6 xl:w-2/5 h-full md:h-auto lg:h-auto">
        <div
          className={`h-full translate duration-300 ${
            showModal ? "translate-y-0" : "translate-y-full"
          } ${showModal ? "opacity-100" : "opacity-0"}`}
        >
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-center relative border-b-[1px] rounded-t p-6">
              <button
                onClick={handleClose}
                className="p-1 border-0 hover:opacity-70 transition absolute left-9"
              >
                <AiOutlineClose size={13} />
              </button>
              <div className="font-lg font-semibold">Hello World</div>
            </div>
            <div className="p-6 relative flex-auto">Body Element</div>
            <div className="p-6 flex flex-col gap-3">
              <div
                className="
                w-full flex flex-row items-center 
                "
              >
                <Button label="My Button" disabled={false} outline={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
