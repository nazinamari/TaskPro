import BoardCard from "../BoardCard/BoardCard";
import css from "./BoardNavigation.module.css";
export default function BoardNavigation() {
  const arr = [
    { icon: "icon-bell-01", title: "Project office", id: "1" },
    { icon: "icon-colors", title: "Project pictures", id: "2" },
    { icon: "icon-bell-01", title: "Project cartoons", id: "3" },
    { icon: "icon-colors", title: "Project chinaaa", id: "4" },
    { icon: "icon-bell-01", title: "Project sauntres", id: "5" },
    { icon: "icon-colors", title: "Project icons", id: "6" },
  ];

  return (
    <nav>
      <ul className={css.list}>
        {arr.map(({ icon, title, id }) => (
          <li key={id}>
            <BoardCard icon={icon} title={title} id={id} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
