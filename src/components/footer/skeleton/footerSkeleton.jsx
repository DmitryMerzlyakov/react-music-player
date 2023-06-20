import s from '../css/mainFooter.module.css';

const SkeletonFooter = () => {
    return (
        <div className={s.bar}>
            <div className={s.content}>
                <input type='range' value='0' className={s.progress} /> 
                <div className={s.block}>
                    <div className={s.player}></div>
                    <div className={s.trackplay}></div> 
                    <div className={s.volume}></div>
                </div>
            </div>
       </div>
    );
}

export default SkeletonFooter;