import css from "./LogoComponent.module.css";

export default function LogoComponent() {
  return (
    <div className={css.container}>
      <svg className={css.icon} width="32" height="32">
        <use href="../../../public/sprite.svg#icon-iconlogo"></use>
      </svg>
      <h1 className={css.title}>Task Pro</h1>
    </div>
  );
}
