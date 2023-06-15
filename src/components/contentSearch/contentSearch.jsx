import { useState } from 'react';
import SearchButton from '../../components/searchButton/searchButton';
import sprite from '../../image/sprite.svg';
import { useGetAllTracksQuery } from '../../servises/songsApi';
import s from './contentSearch.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { delAuthor, delYear, delGenre, setAuthor, setGenre } from '../../store/slices/faiterSlice';


const Search = () => {

    const dispatch = useDispatch() 
    
    const { data = [] } = useGetAllTracksQuery()

    let authorItem = data.map((author) => {
        return <a className={s.li} key={author.id} onClick={() => {
            dispatch(setAuthor(author.author))
        }}>{author.author}</a>
    })

    let dataGenre = [...new Set(data.map((item) => { return item.genre }))]
   
    let genreItem = dataGenre.map((item) => {
        return <a className={s.li} key={item.id} onClick={() => {
            dispatch(setGenre(item))
        }} >{item}</a>
    })

    const selectorAuthor = useSelector(setAuthor)
    const selectorGenre = useSelector(setGenre)

    const countAutgor = selectorAuthor.payload.filter.author
    const countGenre = selectorGenre.payload.filter.genre
    
    let lengthAuthor = countAutgor.length
    let lengthGenre = countGenre.length


    const [visibleAuthor, setVisibleAuthor] = useState(false)
    const [visibleYear, setVisibleYear] = useState(false)
    const [visibleGenre, setVisibleGenre] = useState(false)
    const [visibleAuthorInd, setVisibleAuthorInd] = useState(false)
    const [visibleYearInd, setVisibleYearInd] = useState(false)
    const [visibleGenreInd, setVisibleGenreInd] = useState(false)
     
    const dropdownVisibleAuthor = () => {
        if (visibleGenre == true) {
            dropdownVisibleGenre()
        }
        if (visibleYear == true) {
            dropdownVisibleYear()
        }
        setVisibleAuthor(!visibleAuthor)
        setVisibleAuthorInd(!visibleAuthorInd)
        if (lengthAuthor > 0) {
            setVisibleAuthorInd(visibleAuthorInd)
        }
    }

    const dropdownVisibleYear = () => {
         if (visibleGenre == true) {
            dropdownVisibleGenre()
        }
        if (visibleAuthor == true) {
            dropdownVisibleAuthor()
        }
        setVisibleYear(!visibleYear)
        setVisibleYearInd(!visibleYearInd)
    }

    const dropdownVisibleGenre = () => {
        if (visibleAuthor == true) {
            dropdownVisibleAuthor()
        }
        if (visibleYear == true) {
            dropdownVisibleYear()
        }
        setVisibleGenre(!visibleGenre)
        setVisibleGenreInd(!visibleGenreInd)
        if (lengthGenre > 0) {
           setVisibleGenreInd(visibleGenreInd)
        }
    }
         
    const clearAuthor = () => {
        dispatch(delAuthor())
        setVisibleAuthorInd(false)
    }

    const clearYear = () => {
        dispatch(delYear())
        setVisibleYearInd(false)
    }

    const clearGenre = () => {
        dispatch(delGenre())
        setVisibleGenreInd(false)
    }

    return (
    <div>
        <div className={s.search}>
            <svg className={s.svg}>
                <use xlinkHref={`${sprite}#icon-search`}/>
            </svg>
            <input
                className={s.text}
                type="search"
                placeholder="Поиск"
                name="search"/>
        </div>
        <h2 className={s.header}>Треки</h2>
        <div className={s.filter}>
            <div className={s.title}>Искать по:</div>
                <SearchButton
                    onClick={dropdownVisibleAuthor}
                    howSearch="исполнителю"
                    visible={!visibleAuthor}
                />
                <SearchButton
                    onClick={dropdownVisibleYear}
                    howSearch="году выпуска"
                    visible={!visibleYear}
                />
                <SearchButton
                    onClick={dropdownVisibleGenre}
                    howSearch="жанру"
                    visible={!visibleGenre}
                />
                <button className={`${visibleAuthorInd ? s.authorInd : s.none}`} onClick={clearAuthor}>{lengthAuthor}</button>
                <button className={`${visibleYearInd ? s.yearInd : s.none }`} onClick={clearYear}></button>
                <button className={`${visibleGenreInd ? s.genreInd : s.none}`} onClick={clearGenre}>{lengthGenre}</button>
                {visibleAuthor && 
                    <div className={s.authordropdown}>
                        <ul className={s.author}>{authorItem}</ul>
                    </div>}
                {visibleYear &&
                    <div className={s.yeardropdown}>
                        <input className={s.year} id="new" type="radio" name="question"/>
                        <label htmlFor="new">Более новые</label>
                        <input className={s.year} id="old" type="radio" name="question" />
                        <label htmlFor="old">Более старые</label>
                    </div>}
                {visibleGenre &&
                    <div className={s.genredropdown}>
                        <ul className={s.genre}>{genreItem}</ul>
                    </div>}
        </div>
    </div>
    );
}

export default Search;