import { useState } from 'react';
import s from './inputSearch.module.css'
import sprite from '../../image/sprite.svg'
import { useDispatch } from 'react-redux';
import { setSearchTrack, delTrack } from '../../store/slices/faiterSlice';

const InputSearch = ({tracks}) => {

    const dispatch = useDispatch()

    const [searchTerm, setSearchTerm] = useState('')
    const [placeholder, setPlaceholder] = useState()

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    let filteredTracks = [];
    if (tracks) {
        filteredTracks = tracks.filter((track) =>
            track.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    const handleTrackClick = (track) => {
        // dispatch(setSearchTrack(track.name));
        dispatch(setSearchTrack({ name: track.name }));
        setPlaceholder(track.name)
        console.log(track.name);
        setSearchTerm('');
    };

    const handleClose = () => {
        dispatch(delTrack())
        setPlaceholder()
    }

    return (
       <>
        <div className={s.search}>
            <svg className={s.svg}>
                <use xlinkHref={`${sprite}#icon-search`}/>
            </svg>
            <input
                className={s.text}
                type="search"
                placeholder={placeholder}
                name="search"
                value={searchTerm}
                onChange={handleSearch} />
            <svg className={s.svg} onClick={handleClose}>
                <use xlinkHref={`${sprite}#icon-close`}/>
            </svg>
        {searchTerm && (
            <ul className={s.dropdownSearch}>
            {filteredTracks.map((track, index) => (
                <li className={s.li} key={index} onClick={() => handleTrackClick(track)}>
                {track.name}
                </li>
            ))}
            </ul>
        )}
        </div>
       </>
    )
}

export default InputSearch