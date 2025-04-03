import React from "react";
import { v4 as uuid } from "uuid";
export default function UploadSingleFile({
  setUploadFileModal,
  handelFileUpload,
}) {
  return (
    <div className="fixed w-screen bg-black/15 z-30 h-screen top-0 left-0 flex items-center justify-center">
      <div className="bg-white rounded-lg p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const file = e.target.filename.files[0];

            if (file && file.type !== "") {
              handelFileUpload({
                id: uuid(),
                filename: file?.name,
                type: file?.type,
                size: file?.size,
                date: new Date(),
              });

              setUploadFileModal(false);
            } else {
              alert("Please select a valid file.");
            }
          }}
        >
          <label className="text-xl font-semibold mb-3 block">
            Upload File
          </label>
          <div>
            <label className="text-sm" htmlFor="foldername">
              Choose File
            </label>
            <br />
            <input
              required
              className="pl-2 text-sm py-1 border rounded-lg mt-1 mb-4"
              type="file"
              name="filename"
              accept="*/*" // Accept all file types
            />
          </div>
          <button
            className="bg-blue-200 w-full rounded-lg text-sm py-1 font-semibold hover:bg-blue-400 cursor-pointer"
            type="submit"
          >
            Upload File
          </button>
        </form>
      </div>
    </div>
  );
}
