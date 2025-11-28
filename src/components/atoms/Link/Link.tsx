import { NavLink, Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.css';

interface LinkProps{
    text:string;
    url: string;
    className?: string;
    style?: React.CSSProperties;
}

interface NavigationLinkProps{
    children: React.ReactNode;
    url: string;
    className?: string | (({ isActive }: { isActive: boolean }) => string);
    style?: React.CSSProperties;
}

export const Link: React.FC<LinkProps> = ({text, url, className, style=styles}) =>{
    return(
	<RouterLink to={url} className={`${styles.link} ${className}`} style={style}>{text}</RouterLink> 
    );
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({children, url, className, style=styles}) =>{
    return(
	<NavLink to={url} className={className} style={style}>{children}</NavLink> 
    );
}

export const LocalLink: React.FC<{text:string, url:string}> = ({text, url}) =>{
    return(
	<a href={url} className={styles.link} style={styles}>{text}</a> 
    );
}
