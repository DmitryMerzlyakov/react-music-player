import { useState } from 'react';
import SearchButton from '../../components/searchButton/searchButton';
import { useGetAllTracksQuery } from '../../servises/songsApi';
import InputSearch from '../inputSearch/inputSearch';
import s from './contentSearch.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { delAuthor, delYear, delGenre, setAuthor, setGenre, setYear } from '../../store/slices/faiterSlice';


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

    const sortByYear = (e) => {
        dispatch(setYear(e.target.value))
    };

    const selectorAuthor = useSelector(setAuthor)
    const selectorGenre = useSelector(setGenre)
    const selectorYear = useSelector(setYear)

    const countAutgor = selectorAuthor.payload.filter.author
    const countGenre = selectorGenre.payload.filter.genre
    const countYear = selectorYear.payload.filter.age
    
    let lengthAuthor = countAutgor.length
    let lengthGenre = countGenre.length
    let lengthYear = countYear.length

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
        if (lengthYear > 0) {
            setVisibleYearInd(visibleYearInd)
        }
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
        <InputSearch tracks={data} />
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
                <button className={`${visibleYearInd ? s.yearInd : s.none}`} onClick={clearYear}>x</button>
                <button className={`${visibleGenreInd ? s.genreInd : s.none}`} onClick={clearGenre}>{lengthGenre}</button>
                {visibleAuthor && 
                    <div className={s.authordropdown}>
                        <ul className={s.author}>{authorItem}</ul>
                    </div>}
                {visibleYear &&
                    <div className={s.yeardropdown}>
                        <input className={s.year} id="new" value="newer" type="radio" name="choice" onClick={sortByYear}/>
                        <label htmlFor="new">Более новые</label>

                        <input className={s.year} id="old" value="older" type="radio" name="choice"onClick={sortByYear}/>
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