import s from '../assets/css/playlistSkeleton.module.css'

const SkeletonPlaylist = () => {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className={s.title} />
        <div className={s.author} />
        <div className={s.album} />
        <div className={s.time} />
      </div>
    </div>
  )
}


export default SkeletonPlaylist;