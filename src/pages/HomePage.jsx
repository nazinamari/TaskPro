import SideBar from "../components/SideBar/SideBar";
import { useState, useCallback } from "react";

import Layout from "../shared/components/Layout/Layout";
import MainContent from "../components/MainContent/MainContent";

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleCreateModal = useCallback(() => {
    setIsOpenCreateModal((prevState) => !prevState);
  }, []);

  return (
    <Layout>
      <SideBar
        isSidebarOpen={isSidebarOpen}
        handleCreateModal={handleCreateModal}
        isOpenCreateModal={isOpenCreateModal}
      />
      <MainContent
        toggleSidebar={toggleSidebar}
        handleCreateModal={handleCreateModal}
        isOpenCreateModal={isOpenCreateModal}
      />
    </Layout>
  );
}
