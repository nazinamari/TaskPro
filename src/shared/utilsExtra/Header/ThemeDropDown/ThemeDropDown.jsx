import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "redux/auth/operations";
import { selectedUserTheme } from "redux/auth/selectors";

const options = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "violet", label: "Violet" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    color: state.isFocused ? "rgba(22, 22, 22)" : "rgba(22, 22, 22, 0.8)",
    border: "none",
    boxShadow: "none",
    display: "flex",
    margin: "auto 0",
    padding: "0",
    minHeight: "0",
    lineHeight: "1",
  }),

  downChevron: (provided) => ({
    ...provided,
    width: "16px",
    height: "16px",
    padding: "0",
    margin: "0 auto",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),

  input: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0",
    margin: "auto 0",

    "&::before": {
      content: "none",
    },
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: "#fff",
    color: state.isSelected ? "#5255BC" : "rgba(22, 22, 22)",
    "&:hover, &:focus": {
      color: "#5255bc",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "hsl(0, 0%, 50%)",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontWeight: "500",
    fontSize: "14px",
    letterSpacing: "-0.02em",
  }),
};

export const ThemeDropDown = () => {
  const dispatch = useDispatch();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const selectRef = useRef(null);

  const userTheme = useSelector(selectedUserTheme);
  const handleChangeTheme = (options) => {
    const theme = options.value;
    dispatch(changeTheme({ theme }));
    setMenuIsOpen(false);
  };
  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setMenuIsOpen(false);
    }
  };

  const toggleSelect = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const themeSelect = () => {
    options.find((option) => option.value === userTheme);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div ref={selectRef}>
      <Select
        options={options}
        styles={customStyles}
        onChange={handleChangeTheme}
        menuIsOpen={menuIsOpen}
        onMenuOpen={toggleSelect}
        onMenuClose={toggleSelect}
        placeholder={"screenPage.static.theme"}
        value={themeSelect()}
      />{" "}
    </div>
  );
};
