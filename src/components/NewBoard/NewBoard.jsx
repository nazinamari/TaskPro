import { useForm } from "react-hook-form";
import css from "./NewBoard.module.css";

const icons = [
  { value: "Icon1", src: "/path/to/icon1.png", alt: "Icon 1" },
  { value: "Icon2", src: "/path/to/icon2.png", alt: "Icon 2" },
  { value: "Icon3", src: "/path/to/icon3.png", alt: "Icon 3" },
  { value: "Icon4", src: "/path/to/icon4.png", alt: "Icon 4" },
  { value: "Icon5", src: "/path/to/icon5.png", alt: "Icon 5" },
  { value: "Icon6", src: "/path/to/icon6.png", alt: "Icon 6" },
  { value: "Icon7", src: "/path/to/icon7.png", alt: "Icon 7" },
  { value: "Icon8", src: "/path/to/icon8.png", alt: "Icon 8" },
];

const backgrounds = [
  { value: "bgc 1", src: "/path/to/bgc1.png", alt: "Bgc 1" },
  { value: "bgc 2", src: "/path/to/bgc2.png", alt: "Bgc 2" },
  { value: "bgc 3", src: "/path/to/bgc3.png", alt: "Bgc 3" },
  { value: "bgc 4", src: "/path/to/bgc4.png", alt: "Bgc 4" },
  { value: "bgc 5", src: "/path/to/bgc5.png", alt: "Bgc 5" },
  { value: "bgc 6", src: "/path/to/bgc6.png", alt: "Bgc 6" },
  { value: "bgc 7", src: "/path/to/bgc7.png", alt: "Bgc 7" },
  { value: "bgc 8", src: "/path/to/bgc8.png", alt: "Bgc 8" },
  { value: "bgc 9", src: "/path/to/bgc8.png", alt: "Bgc 9" },
  { value: "bgc 10", src: "/path/to/bgc8.png", alt: "Bgc 10" },
  { value: "bgc 11", src: "/path/to/bgc8.png", alt: "Bgc 11" },
  { value: "bgc 12", src: "/path/to/bgc8.png", alt: "Bgc 12" },
  { value: "bgc 13", src: "/path/to/bgc8.png", alt: "Bgc 13" },
  { value: "bgc 14", src: "/path/to/bgc8.png", alt: "Bgc 14" },
  { value: "bgc 15", src: "/path/to/bgc8.png", alt: "Bgc 15" },
  { value: "bgc 16", src: "/path/to/bgc8.png", alt: "Bgc 16" },
];

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
        <div className={css.iconsContainer}>
          {icons.map((icon) => (
            <label key={icon.value} className={css.iconLabel}>
              <input
                type="radio"
                value={icon.value}
                {...register("Icon")}
                className={css.iconRadio}
              />
              <img src={icon.src} alt={icon.alt} className={css.iconImage} />
            </label>
          ))}
        </div>
        {errors.Icon && <span>{errors.Icon.message}</span>}
        <p>Background</p>
        <div className={css.backgroundsContainer}>
          {backgrounds.map((bg) => (
            <label key={bg.value} className={css.backgroundLabel}>
              <input
                type="radio"
                value={bg.value}
                {...register("Background")}
                className={css.backgroundRadio}
              />
              <img src={bg.src} alt={bg.alt} className={css.backgroundImage} />
            </label>
          ))}
        </div>
        {errors.Background && <span>{errors.Background.message}</span>}

        <input type="submit" value="Create " />
      </form>
    </div>
  );
}
