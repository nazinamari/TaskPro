import css from "./Filter.module.css";
import Icon from "../Icon/Icon";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

const priorityOptions = [
  {
    label: "Without priority",
    value: "without_priority",
    className: "withoutPriority",
  },
  { label: "Low", value: "low", className: "lowPriority" },
  { label: "Medium", value: "medium", className: "mediumPriority" },
  { label: "High", value: "high", className: "highPriority" },
];

const validationSchema = Yup.object({
  priority: Yup.string().required("Priority is required"),
});

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={css.dropdown} ref={dropdownRef}>
      <button className={css.filterBtn} onClick={toggleDropdown}>
        <Icon
          id="icon-filter"
          width="16"
          height="16"
          className={css.filterIcon}
        />
        Filters
      </button>
      {isOpen && (
        <div className={css.dropdownMenu}>
          <Formik
            initialValues={{ priority: null }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ setFieldValue, submitForm, values }) => (
              <Form className={css.formContainer}>
                <h2 className={css.h2}>Filters</h2>
                <hr className={css.line} />
                <div className={css.resetBtnWrapper}>
                  <h3 className={css.filterName}>Label color</h3>
                  <button className={css.showAll} type="button">
                    Show all
                  </button>
                </div>
                <div role="group" aria-labelledby="priority-radio-group">
                  {priorityOptions.map((option) => (
                    <label
                      key={option.value}
                      className={clsx(
                        css.radioLabel,
                        option.value === values.priority &&
                          css.checkedRadioLabel
                      )}
                    >
                      <div
                        className={clsx(
                          css.customRadio,
                          priorityOptions.map((currentOption) => {
                            if (currentOption.value === option.value) {
                              return css[option.className];
                            }
                          })
                        )}
                      >
                        <span
                          className={clsx(
                            css.customRadioDot,
                            option.value === values.priority &&
                              css.checkedRadioDot
                          )}
                        ></span>
                      </div>
                      <Field
                        type="radio"
                        name="priority"
                        value={option.value}
                        className={css.radioInput}
                        onClick={() => {
                          setFieldValue("priority", option.value);
                          submitForm();
                        }}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
}
