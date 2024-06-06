import css from "./LogoComponent.module.css";

export default function LogoComponent() {
  return (
    <div className={css.container}>
      <svg className={css.icon}>
        <use href="../../../public/sprite.svg#icon-iconlogo"></use>
      </svg>
      <h1 className={css.title}>TaskPro</h1>
    </div>
  );
}
