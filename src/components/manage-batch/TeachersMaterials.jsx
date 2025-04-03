"use client";
import React, { useEffect, useState } from "react";
import FolderPath from "../folder-path/FolderPath";
import ActionAndAccess from "../ActionAndAccess/ActionAndAccess";
import Folders from "./Folders";
import File from "./File";
import NewModal from "../modals/NewModal";
import MainFolder from "./MainFolder";
import { materialsData } from "../../../public/materialsData";
import CreateFolderModal from "../modals/CreateFolderModal";
import { v4 as uuid } from "uuid";
export default function TeachersMaterials() {
  const [allMaterials, setAllMaterials] = useState(materialsData); //array
  const [folderPath, setFolderPath] = useState([]); // array
  const [showFolderFile, setShowFolderFile] = useState(allMaterials[0]); // object

  const handelFolderClick = (data) => {
    setShowFolderFile(data);
    setFolderPath((pre) => [...pre, data]);
  };
  const handelMainFolderClick = (data) => {
    setShowFolderFile(data);
    setFolderPath([]);
  };
  const handelPathClick = (data, index) => {
    setShowFolderFile(data);
    setFolderPath((pre) => pre.filter((_, i) => index >= i));
  };
  const handelBackClick = () => {
    folderPath?.pop();
    setFolderPath(folderPath);
    setShowFolderFile(
      folderPath?.length === 0
        ? allMaterials[0]
        : folderPath[folderPath?.length - 1]
    );
  };

  const handelCreateMainFolder = (data) => {
    setAllMaterials((pre) => [...pre, data]);
  };

  const handelCreateFolder = (data) => {
    setShowFolderFile((pre) => ({
      ...pre,
      children: [...pre?.children, data],
    }));
  };

  const handelFileUpload = (data) => {
    setShowFolderFile((pre) => ({
      ...pre,
      data: [...pre?.data, data],
    }));
  };
  const handelFolderUpload = (files) => {
    const newData = processFolderUpload(files);
    setShowFolderFile((pre) => ({
      ...pre,
      children: [...pre?.children, newData[0]],
    }));
  };

  // Convert bytes to readable size
  function convertSize(bytes) {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)}MB`;
  }

  // Convert timestamp to date string
  function convertDate(timestamp) {
    return new Date(timestamp).toISOString().split("T")[0];
  }

  // Process uploaded files into the desired structure
  function processFolderUpload(files) {
    const rootFolders = [];

    for (const file of files) {
      const path = file.webkitRelativePath;
      const parts = path.split("/");
      const fileNameWithExt = parts.pop();
      const folderParts = parts;

      let currentParent = null;
      let currentChildren = rootFolders;

      // Traverse or create folder hierarchy
      for (const folderName of folderParts) {
        let folder = currentChildren.find((f) => f.foldername === folderName);
        if (!folder) {
          folder = {
            id: uuid(),
            foldername: folderName,
            data: [],
            children: [],
          };
          currentChildren.push(folder);
        }
        currentParent = folder;
        currentChildren = folder.children;
      }

      // Add file to the appropriate folder
      if (currentParent) {
        const fileNameParts = fileNameWithExt.split(".");
        const filename = fileNameParts.slice(0, -1).join(".");
        const type = fileNameParts.pop() || "";

        currentParent.data.push({
          id: uuid(),
          filename: filename,
          type: type,
          size: convertSize(file.size),
          date: convertDate(file.lastModified),
        });
      } else {
        console.warn("File is in the root directory:", fileNameWithExt);
      }
    }

    return rootFolders;
  }

  useEffect(() => {
    // setShowFolderFile(allMaterials[0]?.children);
  }, []);

  return (
    <>
      <section className=" px-4 rounded-b-lg mb-6">
        {/* main folder */}
        <MainFolder
          handelCreateMainFolder={handelCreateMainFolder}
          handelMainFolderClick={handelMainFolderClick}
          allMaterials={allMaterials}
        />
        {/* folder path */}
        <div className="flex justify-between items-center px-7 bg-white">
          <FolderPath
            handelBackClick={handelBackClick}
            handelPathClick={handelPathClick}
            folderPath={folderPath}
          />
          <ActionAndAccess />
        </div>

        {/* show folder */}
        <div className="bg-white px-7 flex justify-between border-t border-gray-300">
          <div className="w-full pr-3">
            {showFolderFile?.children?.map((item, i) => (
              <Folders
                handelFolderClick={handelFolderClick}
                key={i}
                data={item}
              />
            ))}
          </div>
          {/* folder details */}
          <div className="min-w-[200px] py-2 pl-3 border-l border-gray-300">
            <div className="text-sm">
              <span>
                <span className="font-bold">Created on: </span>
                <span>25/02/2025 10:35 pm</span>
              </span>
              <br />
              <span>
                <span className="font-bold">Created on: </span>
                <span>25/02/2025 10:35 pm</span>
              </span>
              <br />
              <span>
                <span className="font-bold">Created on: </span>
                <span>25/02/2025 10:35 pm</span>
              </span>
              <br />
              <span>
                <span className="font-bold">Created on: </span>
                <span>25/02/2025 10:35 pm</span>
              </span>
              <br />
              <span>
                <span className="font-bold">Created on: </span>
                <span>25/02/2025 10:35 pm</span>
              </span>
              <br />
              <span>
                <span className="font-bold">Created on: </span>
                <span>25/02/2025 10:35 pm</span>
              </span>
              <br />
            </div>
          </div>
        </div>

        <div className="bg-white px-7 flex rounded-b-lg justify-between border-t border-gray-300">
          <div className="w-full pr-3">
            {showFolderFile?.data?.map((item, i) => (
              <File key={i + "1"} data={item} />
            ))}
          </div>
        </div>

        <NewModal
          handelFolderUpload={handelFolderUpload}
          handelFileUpload={handelFileUpload}
          handelCreateFolder={handelCreateFolder}
          setAllMaterials={setAllMaterials}
          setShowFolderFile={setShowFolderFile}
        />
      </section>
    </>
  );
}
