import styles from './Image.module.css';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const Image: React.FC<ImageProps> = ({src, alt, className = styles.Img}) =>{
    return(
	<img src={src} alt={alt} className={className} style={styles}/>
    );
}
