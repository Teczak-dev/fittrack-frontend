import styles from './Image.module.css';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const Image: React.FC<ImageProps> = ({src, alt, className}) =>{
    return(
	<img src={src} alt={alt} className={`${styles.Img} ${className}`} style={styles}/>
    );
}
