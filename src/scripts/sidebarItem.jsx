import SkeletonSidebar from './sidebarSkeleton';
import { useState, useEffect } from 'react';

const SidebarItem = ({ link, src, alt }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => clearTimeout(timer);
    });

    return (
        <div className="sidebar__item">
            {loading ? (
                <SkeletonSidebar />
            ) : (
            <a className="sidebar__link" href={link}>
                <img className="sidebar__img" src={src} alt={alt} />
            </a>)}
        </div>
    );
}

export default SidebarItem;