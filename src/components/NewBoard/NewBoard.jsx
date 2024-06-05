import { useForm } from "react-hook-form";
import css from "./NewBoard.module.css";

export default function NewBoard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Icon: "Icon1",
      Background: "bgc 1",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className={css.container}>
      <h1 className={css.title}>New board</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Title" {...register("Title", { required: true })} />
        {errors.Title && <span>This field is required</span>}
        <p>Icons</p>
        <div>
          <label>
            <input type="radio" value="Icon1" {...register("Icon")} />
            Icon 1
          </label>
          <label>
            <input type="radio" value="Icon2" {...register("Icon")} />
            Icon 2
          </label>
          <label>
            <input type="radio" value="Icon3" {...register("Icon")} />
            Icon 3
          </label>
          <label>
            <input type="radio" value="Icon3" {...register("Icon")} />
            Icon 4
          </label>
          <label>
            <input type="radio" value="Icon3" {...register("Icon")} />
            Icon 5
          </label>
          <label>
            <input type="radio" value="Icon3" {...register("Icon")} />
            Icon 6
          </label>
          <label>
            <input type="radio" value="Icon3" {...register("Icon")} />
            Icon 7
          </label>
          <label>
            <input type="radio" value="Icon3" {...register("Icon")} />
            Icon 8
          </label>
        </div>
        {errors.Icon && <span>{errors.Icon.message}</span>}
        <p>Background</p>
        <div>
          <label>
            <input type="radio" value="bgc 1" {...register("Background")} />
            bgc 1
          </label>
          <label>
            <input type="radio" value="bgc 2" {...register("Background")} />
            bgc 2
          </label>
          <label>
            <input type="radio" value="bgc 3" {...register("Background")} />
            bgc 3
          </label>
          <label>
            <input type="radio" value="bgc 4" {...register("Background")} />
            bgc 4
          </label>
          <label>
            <input type="radio" value="bgc 5" {...register("Background")} />
            bgc 5
          </label>
          <label>
            <input type="radio" value="bgc 6" {...register("Background")} />
            bgc 6
          </label>
          <label>
            <input type="radio" value="bgc 7" {...register("Background")} />
            bgc 7
          </label>
          <label>
            <input type="radio" value="bgc 8" {...register("Background")} />
            bgc 8
          </label>
        </div>

        <input type="submit" value="Create " />
      </form>
    </div>
  );
}
