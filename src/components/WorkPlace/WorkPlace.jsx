import css from "./WorkPlace.module.css";
import TaskCard from "../CardTask/CardTask";
import AddCardBtn from "../AddCardBtn/AddCardBtn";

const arr = [
  { name: "to do" },
  { name: "in progres" },
  { name: "revue" },
  { name: "done" },
  { name: "done" },
  { name: "done" },
  { name: "done" },
  { name: "done" },
  { name: "done" },
  { name: "done" },
  { name: "done" },
  { name: "done" },
  { name: "done" },
  { name: "done" },
  { name: "done" },
  { name: "done" },
];

export default function WorkPlace() {
  return (
    <div className={css.container}>
      <div>
        <ul className={css.list}>
          {arr.map(({ name }) => (
            <li key={(~~(Math.random() * 1e8)).toString(16)}>
              <p>{name}</p>
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <AddCardBtn />
            </li>
          ))}
        </ul>
      </div>
      <button className={css.addColumnBtn}>Add column</button>
    </div>
  );
}
