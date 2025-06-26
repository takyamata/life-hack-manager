import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
    children?: React.ReactNode;
    text?: string;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    id?: string;
    className?: string;
    width?: 'fit-content' | '156' | 'max';
    maxWidth?: '120' | ''
    height?: 'fit-content' | '48' |'max';
    flexShrink?: '0';
    backgroundColor?: 'white';
    borderColor?: 'white_1' | 'blue_1' | 'red_1' | 'gray_2' | 'none' | '';
    borderRadius?: '8' | '0';
    padding?: '8-12' | '0-16' | '4-70-4-16';
    target?: string;
    hover?: 'underline' | 'underline-black_1' | 'underline-red_1' | 'bg-gray_4';
    justifyContent?: 'flex-start';
    ref?: any;
    as?: 'button' | 'span';
    boxShadow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    type = 'button',
    onClick,
    disabled = false,
    id,
    className,
    width,
    maxWidth,
    height,
    flexShrink,
    backgroundColor,
    borderColor,
    borderRadius,
    padding,
    target,
    hover,
    justifyContent,
    ref,
    as = 'button',
    boxShadow = false,
}) => {
    const Tag = as;
    const buttonClass = [
        styles.button,
        className ? styles[className] : '',
        width ? styles[`button-size-width-${width}`] : '',
        maxWidth ? styles[`button-size-max-width-${maxWidth}`] : '',
        height ? styles[`button-size-height-${height}`] : '',
        flexShrink ? styles[`button-flex-shrink-${flexShrink}`] : '',
        backgroundColor ? styles[`button-background-color-${backgroundColor}`] : '',
        borderColor ? styles[`button-border-color-${borderColor}`] : '',
        borderRadius ? styles[`button-border-radius-${borderRadius}`] : '',
        padding ? styles[`button-padding-${padding}`] : '',
        justifyContent ? styles[`button-justify-content-${justifyContent}`] : '',
        hover ? styles[`button-hover-${hover}`] : '',
        boxShadow ? styles['button-box-shadow'] : '',
    ]
        .filter(Boolean)
        .join(' ');

    if (disabled) {
        return (
            <span className={buttonClass} onClick={onClick} id={id} ref={ref}>
                {children}
            </span>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                className={buttonClass}
                id={id}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                ref={ref}
            >
                {children}
            </a>
        );
    }

    return (
        <Tag type={type} className={buttonClass} onClick={onClick} disabled={disabled} id={id} ref={ref}>
            {children}
        </Tag>
    );
};

export default Button;
