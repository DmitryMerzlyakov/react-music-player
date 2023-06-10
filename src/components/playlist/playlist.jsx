import Content from '../contentPlaylist/contentPlaylist';
import Search from '../contentSearch/contentSearch';
// import SkeletonPlaylist from './Skeleton/playlistSkeleton';
// import { useGetAllTracksQuery } from '../../servises/songsApi';
// import { useState, useEffect } from 'react';
import s from './css/mainContent.module.css'

const Playlist = () => {
    // const { isLoading } = useGetAllTracksQuery()
    // console.log(isLoading);

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //      const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, isLoading)
    //     return () => clearTimeout(timer);
    // }, [isLoading]);

    return (
    <div className={s.centerblock}>
        <Search />
        <Content/>     
    </div>
    );
}


export default Playlist;