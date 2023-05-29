import Search from './contentSearch';
import Playlist from './contentPlaylist';
import SkeletonPlaylist from './Skeleton/playlistSkeleton';
import { useGetSongsQuery } from '../../store/songsApi';
import { useState, useEffect } from 'react';
import s from './css/mainContent.module.css'

const Content = () => {
    const { isLoading } = useGetSongsQuery()

    const [loading, setLoading] = useState(true);

    useEffect(() => {
         const timer = setTimeout(() => {
            setLoading(false);
        }, isLoading)
        return () => clearTimeout(timer);
    }, [isLoading]);

    return (
    <div className={s.centerblock}>
        <Search />
        {
            loading ? (
                <SkeletonPlaylist />
            ) : (
                 <Playlist/>     
            )
        }
    </div>
    );
}


export default Content;