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
}

export const MyLabel = ( {
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
}: Props ) => {
    return (
        <span className={`label ${size} text-${color} `} style={{ color: fontColor }}>
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}
