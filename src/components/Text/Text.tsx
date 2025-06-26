import React from 'react';
import styles from './text.module.scss';

interface TextProps {
    text: string | number | null | React.ReactNode;
    className?: string;
    color?: 'white' | 'blue'
    fontSize?: '8' | '12' | '14' | '16' | '16-15' | '18' | '20' | '20-15' | '24' | '32' | '64';
    fontWeight?: string;
    alignItems?: string;
    lineHeight?: '100' | '125' | '150';
    width?: '60' | '66' | '70' | '80' | '110';
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    leader?: '2' | '4';
    flexShrink?: '0';
    padding?: '0-16';
    textAlign?: 'left';
    whiteSpace?: 'pre-wrap';
    wordBreak?: 'break-all' | 'keep-all' | 'break-word' | 'normal';
    letterSpacing?: '-004';
}

const Text: React.FC<TextProps> = ({
    text,
    className = '',
    color = 'black_1',
    fontSize,
    fontWeight = '600',
    lineHeight,
    alignItems,
    width,
    as = 'p',
    leader,
    flexShrink,
    padding,
    textAlign,
    whiteSpace,
    wordBreak,
    letterSpacing = '',
}) => {
    const Tag = as;
    const textClass = [
        styles.text,
        className ? styles[className] : '',
        color ? styles[`color-${color}`] : '',
        fontSize ? styles[`font-size-${fontSize}`] : '',
        fontWeight ? styles[`font-weight-${fontWeight}`] : '',
        lineHeight ? styles[`line-height-${lineHeight}`] : '',
        width ? styles[`width-${width}`] : '',
        leader ? styles[`leader-${leader}`] : '',
        flexShrink ? styles[`flex-shrink-${flexShrink}`] : '',
        padding ? styles[`padding-${padding}`] : '',
        textAlign ? styles[`text-align-${textAlign}`] : '',
        whiteSpace ? styles[`white-space-${whiteSpace}`] : '',
        wordBreak ? styles[`word-break-${wordBreak}`] : '',
        letterSpacing ? styles[`letter-spacing-${letterSpacing}`] : '',
    ].filter(Boolean).join(' ');

    return (<Tag className={textClass}>{text}</Tag>);
};

export default Text;
