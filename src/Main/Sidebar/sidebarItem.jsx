import SkeletonSidebar from './skeleton/sidebarSkeleton';
import { useState, useEffect } from 'react';
import s from './css/sidebarItem.module.css'

const SidebarItem = ({ link, src, alt }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => clearTimeout(timer);
    });

    return (
        <div className={s.sidebar__item}>
            {loading ? (
                <SkeletonSidebar />
            ) : (
                <a className={s.sidebar__link} href={link}>
                <img className={s.sidebar__img} src={src} alt={alt} />
            </a>)}
        </div>
    );
}

export default SidebarItem;