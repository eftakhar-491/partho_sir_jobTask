import { v4 as uuid } from "uuid";
export const materialsData = [
  {
    id: uuid(),
    foldername: "Content",
    data: [
      {
        id: uuid(),
        filename: "img-1",
        type: "pdf",
        size: "2MB",
        date: "2023-10-01",
      },
      {
        id: uuid(),
        filename: "img-2",
        type: "docx",
        size: "1.5MB",
        date: "2023-10-02",
      },
      {
        id: uuid(),
        filename: "img-3",
        type: "xlsx",
        size: "3MB",
        date: "2023-10-03",
      },
    ], //array of data
    children: [
      {
        id: uuid(),
        foldername: "children 1",
        data: [
          {
            id: uuid(),
            filename: "img-4",
            type: "pptx",
            size: "2.5MB",
            date: "2023-10-04",
          },
        ],
        children: [
          {
            id: uuid(),
            foldername: "children 1.1",
            children: [],
            data: [],
          },
          {
            id: uuid(),
            foldername: "children 1.2",
            children: [],
            data: [],
          },
        ],
      },
      {
        id: uuid(),
        foldername: "children 2",
        children: [],
        data: [],
      },
    ],
  },
  {
    id: uuid(),
    foldername: "Course Details",
    children: [],
    data: [],
  },
  { id: uuid(), foldername: "Revision", children: [], data: [] },
  { id: uuid(), children: [], data: [], foldername: "Importent Links" },
];
