import TeachersMaterials from "@/components/manage-batch/TeachersMaterials";
import TeachersFilter from "@/components/manage-batch/TeachersFilter";
import TeachersProgressBar from "@/components/manage-batch/TeachersProgressBar";
import React from "react";
import TeachersNavTabs from "@/components/navbar/TeachersNavTabs";

export default function page() {
  return (
    <>
      <TeachersFilter />
      <TeachersProgressBar />
      <TeachersNavTabs />
      <TeachersMaterials />
    </>
  );
}
