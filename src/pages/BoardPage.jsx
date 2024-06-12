import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar/SideBar";
import Layout from "../shared/components/Layout/Layout";
import BoardTittle from "../components/BoardTittle/BoardTittle";
import WorkPlace from "../components/WorkPlace/WorkPlace";
import { useParams } from "react-router-dom";

// звернутися по id і вернути назву дошки, записати в тайтл
export default function BoardPage() {
  const { id } = useParams();

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
