import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar/SideBar";
import Layout from "../shared/components/Layout/Layout";
import BoardTittle from "../components/BoardTittle/BoardTittle";
import { useState, useEffect } from "react";
import WorkPlace from "../components/WorkPlace/WorkPlace";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBoardById } from "../../redux/board/operations";
// import { selectBoard } from "../../redux/board/selectors";

export default function BoardPage() {
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    if (path) {
      setId(path);
    }
  }, [location.pathname]);

  useEffect(() => {
    dispatch(getBoardById(id));
  }, [dispatch, id]);

  // const board = useSelector(selectBoard);

  return (
    <Layout>
      <SideBar />
      <MainContent
        header={<BoardTittle title={id || "Loading..."} />} // Передати board.title
        content={<WorkPlace />}
      />
    </Layout>
  );
}
