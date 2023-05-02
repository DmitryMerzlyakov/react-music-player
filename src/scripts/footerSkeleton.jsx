import s from '../assets/css/footerSkeleton.module.css';

const SkeletonFooter = () => {
    return (
        <div className="track-play__contain">
            <div className={s.img} />
            <div className={s.author} />
            <div className={s.album} />
        </div>
    );
}

export default SkeletonFooter;