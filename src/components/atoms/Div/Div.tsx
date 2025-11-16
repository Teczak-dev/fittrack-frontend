import styles from './Div.module.css';

interface DivProps{
    children: React.ReactNode;
    className?: string;
    style?: {};
}

export const Div: React.FC<DivProps> = ({children, className = styles.label , style = styles}) =>{
    return(
	<div className={className} style={style}>{children}</div>
    );
}
