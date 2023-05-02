import s from '../assets/css/sidebarSkeleton.module.css'

const SkeletonSidebar = () => {
    return (
        <div className="sidebar__list">
            <div className={s.list} />
        </div>
    );
}

export default SkeletonSidebar;