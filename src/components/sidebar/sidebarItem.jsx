import SkeletonSidebar from './skeleton/sidebarSkeleton';
import { useGetAllTracksQuery } from '../../servises/songsApi';
import s from './css/sidebarItem.module.css'

const SidebarItem = ({ link, src, alt }) => {

    const { isLoading } = useGetAllTracksQuery()

    return (
        <div className={s.sidebar__item}>
            {isLoading ? (
                <SkeletonSidebar />
            ) : (
                <a className={s.sidebar__link} href={link}>
                <img className={s.sidebar__img} src={src} alt={alt} />
            </a>)}
        </div>
    );
}

export default SidebarItem;