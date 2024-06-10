import css from "./BoardTittle.module.css";
export default function BoardPage({ title }) {
  return <p className={css.title}>{title}</p>;
}
