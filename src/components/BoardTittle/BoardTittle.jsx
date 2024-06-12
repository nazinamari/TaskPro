import css from "./BoardTittle.module.css";
export default function BoardTittle({ title }) {
  return <p className={css.title}>{title}</p>;
}
