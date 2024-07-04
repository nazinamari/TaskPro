import css from './NewBoardModal.module.css';
import { useForm } from 'react-hook-form';
import Icon from '../../../shared/components/Icon/Icon.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllBoards } from '../../../redux/board/selectors.js';
import { addBoard } from '../../../redux/board/operations.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icons from '../../../images/mini/icons.json';
import * as images from '../img/index.js';
import picData from '../data/pic.json';
import Picture from '../../../shared/components/Pic/Pic';
import clsx from 'clsx';

export default function NewBoardModal({ handleCreateModal }) {
  const data = picData.map(item => {
    return {
      ...item,
      url: images[item.url],
      url2x: images[item.url2x],
    };
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boards = useSelector(selectAllBoards);
  const [selectedIcon, setSelectedIcon] = useState('icon-projects');
  const [selectedBg, setSelectedBg] = useState('bg-0');
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      icon: selectedIcon,
      background: selectedBg,
      title: '',
    },
  });

  useEffect(() => {
    setValue('icon', selectedIcon);
    setValue('background', selectedBg);
  }, [selectedIcon, setValue, selectedBg]);

  const onSubmit = values => {
    if (boards.find(board => board.title.trim() === values.title.trim())) {
      alert('Board with this title already exists');
    } else {
      const newBoard = {
        title: values.title,
        icon: selectedIcon,
        background: selectedBg,
      };

      dispatch(addBoard(newBoard))
        .unwrap()
        .then(createdBoard => {
          console.log(createdBoard);
          navigate(`/home/${createdBoard._id}`);
          console.log('add board'); // додати тост
          handleCreateModal();
        })
        .catch(error => {
          console.error('Failed to add board:', error); // додати тост
        });
      reset();
    }
  };

  const stopPropagation = event => {
    event.stopPropagation();
  };

  return (
    <div className={css.container} onClick={handleCreateModal}>
      <div className={css.modalWindow} onClick={stopPropagation}>
        <div className={css.modalWindowContent}>
          <button className={css.closeBtn} onClick={handleCreateModal}>
            <Icon
              id="icon-close"
              width="18"
              height="24"
              className={css.iconClose}
              alt="icon-close"
            />
          </button>
          <h2 className={css.title}>New board</h2>
          <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={css.input}
              type="text"
              placeholder="Title"
              {...register('title', { required: 'Title is required' })}
            />
            {errors.title && <span>{errors.title.message}</span>}
            <div className={css.formContainer}>
              <h3 className={css.iconsTitle}>Icons</h3>
              <ul className={css.iconsContainer}>
                {icons.map(icon => (
                  <li key={icon.value} className={css.iconLabel}>
                    <input
                      type="radio"
                      value={icon.value}
                      id={icon.id}
                      {...register('icon')}
                      className={css.iconRadio}
                      onChange={() => setSelectedIcon(icon.value)}
                      checked={selectedIcon === icon.value}
                    />
                    <label htmlFor={icon.id} className={css.iconImage}>
                      <Icon
                        id={icon.id}
                        alt={icon.alt}
                        width={icon.width}
                        height={icon.height}
                      />
                    </label>
                  </li>
                ))}
              </ul>
              {errors.icon && <span>{errors.icon.message}</span>}
            </div>
            <h3 className={css.iconsTitle}>Background</h3>
            <ul className={css.bgList}>
              {/* {bgImages.map((imageSrc, index) => (
                <li key={index}>
                  <label htmlFor={`bg-${index}`} className={css.iconLabel}>
                    <input
                      type="radio"
                      value={imageSrc.value}
                      id={`bg-${index}`}
                      className={css.iconRadio}
                      onChange={() => setSelectedBg(imageSrc.value)}
                      checked={selectedBg === imageSrc.value}
                      onClick={() => {
                        console.log(imageSrc.value);
                        console.log('Current selectedBg:', selectedBg);
                        console.log(
                          'Input checked:',
                          selectedBg === imageSrc.value,
                        );
                      }}
                    />
                    <Background
                      className={css.bgImage}
                      width={imageSrc.width}
                      height={imageSrc.height}
                      src={imageSrc.src}
                      alt={imageSrc.value}
                    />
                  </label>
                </li>
              ))} */}
              {data.map((item, index) => (
                <li key={item.id}>
                  <label htmlFor={`bg-${index}`} className={css.bgLabel}>
                    <input
                      type="radio"
                      value={item.value}
                      id={`bg-${index}`}
                      className={css.iconRadio}
                      onChange={() => setSelectedBg(item.value)}
                      checked={selectedBg === item.value}
                    />
                    <Picture
                      className={clsx(
                        css.bgImage,
                        selectedBg === item.value && css.checked,
                      )}
                      url={item.url}
                      url2x={item.url2x}
                      width={item.width}
                      height={item.height}
                      alt={item.alt}
                    />
                  </label>
                </li>
              ))}
            </ul>
            <button type="submit" className={css.createBtn}>
              <div className={css.wrapper}>
                <Icon
                  id="icon-plus"
                  width="14"
                  height="14"
                  className={css.iconPlus}
                  alt="icon-close"
                />
              </div>

              <p className={css.createText}>Create</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}