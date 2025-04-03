import React from "react";
import { v4 as uuid } from "uuid";
export default function CreateFolderModal({
  handelCreateMainFolder,
  setIsShowCreateFolder,
  handelCreateFolder,
  createFolderModal,
  setCreateFolderModal,
}) {
  return (
    <>
      <div className="fixed w-screen bg-black/15 z-30 h-screen top-0 left-0 flex items-center justify-center">
        <div className="bg-white rounded-lg p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (createFolderModal?.type === "other") {
                console.log("other");

                handelCreateFolder({
                  id: uuid(),
                  foldername: e.target.foldername.value,
                });

                setCreateFolderModal((pre) => ({
                  type: pre?.type,
                  isOpen: false,
                }));
              } else {
                handelCreateMainFolder({
                  id: uuid(),
                  foldername: e.target.foldername.value,
                });
                setIsShowCreateFolder((pre) => ({
                  type: pre?.type,
                  isOpen: false,
                }));
              }
            }}
          >
            <label className="text-xl font-semibold mb-3 block">
              Create Folder
            </label>
            <div>
              <label className="text-sm" htmlFor="foldername">
                Folder Name
              </label>
              <br />
              <input
                required
                className="pl-2 text-sm py-1 border rounded-lg mt-1 mb-4"
                type="text"
                name="foldername"
              />
            </div>
            <button
              className="bg-blue-200 w-full rounded-lg text-sm py-1 font-semibold hover:bg-blue-400 cursor-pointer"
              type="submit"
            >
              Create Folder
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
