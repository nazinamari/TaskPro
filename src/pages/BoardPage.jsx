import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar/SideBar";
import Layout from "../shared/components/Layout/Layout";

export default function BoardPage() {
  return (
    <Layout>
      <SideBar />
      <MainContent content={<h1>YOUR BOARD</h1>} />
    </Layout>
  );
}
