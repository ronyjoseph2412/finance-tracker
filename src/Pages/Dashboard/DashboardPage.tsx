// import React from "react";

import UpperSection from "@/Components/DashboardComponents/UpperSection/UpperSection";
import Navbar from "@/Components/Navbar/Navbar";

export type DashboardPageProps = {};
export const DashboardPage: React.FC<DashboardPageProps> = ({}) => {
  return (
    <>
      <Navbar />
      <UpperSection />
    </>
  );
};

export default DashboardPage;
