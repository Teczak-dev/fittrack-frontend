import styles from './Image.module.css';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    onClick?: () => void;
}

export const Image: React.FC<ImageProps> = ({src, alt, className, onClick}) =>{
    return(
	<img src={src} alt={alt} className={`${styles.Img} ${className}`} style={styles} onClick={onClick}/>
    );
}
