import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar/SideBar";
import Layout from "../shared/components/Layout/Layout";
import BoardTittle from "../components/BoardTittle/BoardTittle";
import WorkPlace from "../components/WorkPlace/WorkPlace";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoardById } from "../../redux/board/operations";
import { selectBoard } from "../../redux/board/selectors";

export default function BoardPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardById(id));
  });

  const board = useSelector(selectBoard);

  return (
    <Layout>
      <SideBar />
      <MainContent
        header={<BoardTittle title={"Project office"} />} // Передати board.title
        content={<WorkPlace />}
      />
    </Layout>
  );
}
