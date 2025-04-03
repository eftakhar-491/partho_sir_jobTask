"use client";
import React, { useState } from "react";
import { FaFolder, FaUpload } from "react-icons/fa";
import CreateFolderModal from "./CreateFolderModal";
import UploadSingleFile from "./UploadSingleFile";
import UploadFolder from "./UploadFolder";

export default function NewModal({
  handelCreateFolder,
  handelFileUpload,
  handelFolderUpload,
  setAllMaterials,
  setShowFolderFile,
}) {
  const [newModal, setNewModal] = useState(false);
  const [createFolderModal, setCreateFolderModal] = useState({
    type: "other",
    isOpen: false,
  });
  const [uploadFileModal, setUploadFileModal] = useState(false);
  const [uploadFolderModal, setUploadFolderModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setNewModal((p) => !p)}
        className="cursor-pointer hover:bg-gray-700 bg-gray-800 text-white  fixed bottom-5 right-3 flex font-semibold gap-x-2 rounded-lg items-center p-3 text-sm"
      >
        {newModal ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Close
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            New
          </>
        )}
      </div>

      {/* modal */}

      {uploadFolderModal && (
        <UploadFolder
          handelFolderUpload={handelFolderUpload}
          setUploadFolderModal={setUploadFolderModal}
        />
      )}

      {uploadFileModal && (
        <UploadSingleFile
          setUploadFileModal={setUploadFileModal}
          handelFileUpload={handelFileUpload}
        />
      )}
      {createFolderModal?.isOpen && (
        <CreateFolderModal
          setCreateFolderModal={setCreateFolderModal}
          createFolderModal={createFolderModal}
          handelCreateFolder={handelCreateFolder}
        />
      )}
      {createFolderModal?.isOpen && (
        <CreateFolderModal
          setCreateFolderModal={setCreateFolderModal}
          createFolderModal={createFolderModal}
          handelCreateFolder={handelCreateFolder}
        />
      )}
      {newModal && (
        <div className="fixed right-3 bottom-18">
          <div className="w-64 bg-gray-900 text-white rounded-lg shadow-lg p-2">
            <button
              onClick={() =>
                setCreateFolderModal((pre) => ({
                  isOpen: true,
                  type: pre?.type,
                }))
              }
              className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-800 rounded-md"
            >
              <div className="flex items-center gap-2">
                <FaFolder />
                <span>New folder</span>
              </div>
            </button>
            <button
              onClick={() => setUploadFileModal(true)}
              className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-800 rounded-md"
            >
              <div className="flex items-center gap-2">
                <FaUpload />
                <span>File upload</span>
              </div>
            </button>
            <button
              onClick={() => setUploadFolderModal(true)}
              className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-800 rounded-md"
            >
              <div className="flex items-center gap-2">
                <FaUpload />
                <span>Folder upload</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
