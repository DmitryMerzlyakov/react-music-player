import s from './playlistSkeleton.module.css'

const SkeletonPlaylist = () => {
  return (
    <div className={s.playlist__item}>
      <div className={s.playlist__track}>
        <div className={s.title} />
        <div className={s.author} />
        <div className={s.album} />
        <div className={s.time} />
      </div>
    </div>
  )
}


export default SkeletonPlaylist;