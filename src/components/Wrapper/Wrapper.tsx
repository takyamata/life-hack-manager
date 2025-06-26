import React from 'react';
import styles from './wrapper.module.scss';

interface WrapperProps {
    children: React.ReactNode;
    display?: 'flex' | 'grid' | 'block' | 'inline-block';
    flexDirection?: 'column' | 'row';
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    gap?: string;
    rowGap?: string;
    columnGap?: string;
    maxWidth?: string;
    width?: string;
    height?: 'max'
    flexShrink?: '0' | '';
    position?: 'sticky' | 'absolute' | 'relative' | 'fixed';
    top?: '110' | '';
    padding?: '24';
    backgroundColor?: 'blue_green_3';
    minHeight?: '109';
    minWidth?: '160';
    as?: 'div' | 'span' | 'ul';
}

const Wrapper: React.FC<WrapperProps> = ({
    children,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    flexWrap,
    gap,
    rowGap,
    columnGap,
    maxWidth,
    width,
    height,
    position,
    top,
    flexShrink,
    padding,
    backgroundColor,
    minHeight,
    minWidth,
    as = 'div',
}) => {
    const Tag = as;
    const flexClass = [
        display ? styles[`display-${display}`] : '',
        flexDirection ? styles[`flex-direction-${flexDirection}`] : '',
        alignItems ? styles[`align-items-${alignItems}`] : '',
        justifyContent ? styles[`justify-content-${justifyContent}`] : '',
        flexWrap ? styles[`flex-wrap-${flexWrap}`] : '',
        gap ? styles[`gap-${gap}`] : '',
        rowGap ? styles[`row-gap-${rowGap}`] : '',
        columnGap ? styles[`column-gap-${columnGap}`] : '',
        maxWidth ? styles[`max-width-${maxWidth}`] : '',
        width ? styles[`width-${width}`] : '',
        height ? styles[`height-${height}`] : '',
        flexShrink ? styles[`flex-shrink-${flexShrink}`] : '',
        position ? styles[`position-${position}`] : '',
        top ? styles[`top-${top}`] : '',
        padding ? styles[`padding-${padding}`] : '',
        backgroundColor ? styles[`background-color-${backgroundColor}`] : '',
        minHeight ? styles[`min-height-${minHeight}`] : '',
        minWidth ? styles[`min-width-${minWidth}`] : '',
    ]
        .filter(Boolean)
        .join(' ');
    return (
        <Tag className={flexClass}>{children}</Tag>
    );
};

export default Wrapper;
