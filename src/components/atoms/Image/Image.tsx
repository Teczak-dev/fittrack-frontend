import styles from './Image.module.css';

export const Image: React.FC<{imgPath:string, altText:string}> = ({imgPath, altText}) =>{
    return(
	<img src={imgPath} alt={altText} style={styles}/>
    );
}
