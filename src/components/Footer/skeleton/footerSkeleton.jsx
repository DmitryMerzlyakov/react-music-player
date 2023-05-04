import s from './footerSkeleton.module.css';

const SkeletonFooter = () => {
    return (
        <div className={s.track}>
            <div className={s.img} />
            <div className={s.author} />
            <div className={s.album} />
        </div>
    );
}

export default SkeletonFooter;