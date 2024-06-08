import SideBar from "../components/SideBar/SideBar";
import { useState } from "react";

import Layout from "../shared/components/Layout/Layout";
import MainContent from "../components/MainContent/MainContent";

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <Layout>
      <SideBar isSidebarOpen={isSidebarOpen} />
      <MainContent toggleSidebar={toggleSidebar} />
    </Layout>
  );
}
