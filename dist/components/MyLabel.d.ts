/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
        * This is the message on the label
    */
    label: string;
    /**
        * This is the tag size
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
        * This is the UpperCase on the label
    */
    allCaps?: boolean;
    /**
        * This is the color on the label
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
        * Custom font color
    */
    fontColor?: string;
    /**
        * Custom background color
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => JSX.Element;
