// import React from "react";

import UpperSection from "@/Components/DashboardComponents/UpperSection/UpperSection";
import Navbar from "@/Components/Navbar/Navbar";

export type DashboardPageProps = {};
export const DashboardPage: React.FC<DashboardPageProps> = ({}) => {
  // console.log({  })
  // const [, set] = React.useState();
  // React.useEffect(() => {}, [])
  return (
    <>
      <Navbar />
      <UpperSection />
    </>
  );
};

export default DashboardPage;
