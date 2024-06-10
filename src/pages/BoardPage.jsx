import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar/SideBar";
import Layout from "../shared/components/Layout/Layout";
import BoardTittle from "../components/BoardTittle/BoardTittle";
import WorkPlace from "../components/WorkPlace/WorkPlace";

export default function BoardPage() {
  return (
    <Layout>
      <SideBar />
      <MainContent
        header={<BoardTittle title="Project office" />}
        content={<WorkPlace />}
      />
    </Layout>
  );
}
