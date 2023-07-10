import React, { CSSProperties, forwardRef, ForwardedRef, HTMLAttributes, useMemo } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

export interface RadioOptions {
  value: string;
  label: string;
}

export interface RadioStateColor {
  activeColor?: string;
  inactiveColor?: string;
  labelStyle?: CSSProperties;
}

export interface RadioProps extends RadioStateColor, HTMLAttributes<HTMLDivElement> {
  data: RadioOptions[];
  defaultValue?: string;
  className?: string;
  wrap?: boolean | 'wrap-reverse' | 'wrap' | 'nowrap';
  direction?: 'horizontal' | 'vertical' | undefined;
}

export function isWrap(wrap?: boolean | 'wrap-reverse' | 'wrap' | 'nowrap') {
  return (typeof wrap === 'string' && ['wrap', 'wrap-reverse'].includes(wrap)) || wrap === true;
}

const Radio = forwardRef((props: RadioProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    data,
    defaultValue,
    wrap = 'wrap',
    activeColor,
    inactiveColor,
    labelStyle,
    direction,
    className,
  } = props;

  const customStyle = useMemo<CSSProperties>(() => {
    return {
      display: 'flex',
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      alignItems: direction === 'vertical' ? 'flex-start' : 'center',
      flexWrap: isWrap(wrap) ? 'wrap' : 'nowrap',
      gap: '8px',
    };
  }, [wrap, direction]);

  const handleRadioClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const clickedRadio = (event.target as HTMLElement).previousElementSibling;

    const radioInputs = document.querySelectorAll(`.${styles.radio_input}`);

    radioInputs.forEach((input) => {
      const radioInputInner = input.nextElementSibling;

      if (input.getAttribute('name') === clickedRadio?.getAttribute('name')) {
        radioInputInner?.classList.remove(styles.radio_input_inner_checked);
      }
    });

    clickedRadio?.nextElementSibling?.classList.add(styles.radio_input_inner_checked);
  };

  const handleLabelClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const clickedLabel = (event.target as HTMLElement).previousElementSibling;
    const clickedRadio = clickedLabel?.lastElementChild;

    const radioInputs = document.querySelectorAll(`.${styles.radio_input}`);

    radioInputs.forEach((input) => {
      const radioInputInner = input.nextElementSibling;

      if (
        input.getAttribute('name') === clickedRadio?.previousElementSibling?.getAttribute('name')
      ) {
        radioInputInner?.classList.remove(styles.radio_input_inner_checked);
      }
    });

    clickedRadio?.classList.add(styles.radio_input_inner_checked);
  };

  const uniqueId = useMemo(() => Math.random().toString(36).substring(2, 6), []);

  const radioColorStyle = useMemo<CSSProperties>(() => {
    return {
      '--inactiveColor': inactiveColor || '#1890FF',
      '--activeColor': activeColor || '1890FF',
    } as CSSProperties;
  }, [inactiveColor, activeColor]);

  return (
    <div ref={ref} style={customStyle} className={className}>
      {data?.map((option) => (
        <div key={`${uniqueId}-${option.value}`} className={clsx(styles.wrap)}>
          <label
            htmlFor={`${uniqueId}-${option.value}`}
            className={clsx(styles.radio_label_wrapper)}
          >
            <span className={clsx(styles.radio_input_wrap)}>
              <input
                id={`${uniqueId}-${option.value}`}
                type="radio"
                className={clsx(styles.radio_input)}
                name={`${uniqueId}`}
                value={option.value}
                defaultChecked={defaultValue === option.value}
              />
              <span
                style={radioColorStyle}
                onClick={handleRadioClick}
                className={clsx(
                  styles.radio_input_inner,
                  defaultValue === option.value && styles.radio_input_inner_checked,
                )}
              ></span>
            </span>
            <span className={clsx(styles.label)} onClick={handleLabelClick} style={labelStyle}>
              {option.label}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
});

export { Radio };
