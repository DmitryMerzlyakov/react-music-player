import { useState } from 'react';
import SearchButton from '../../components/searchButton/searchButton';
import sprite from '../../image/sprite.svg';
import { useGetSongsQuery } from '../../servises/songsApi';
import s from './contentSearch.module.css'



const Search = () => {
    
    const {data = []} = useGetSongsQuery()

    let authorItem = data.map((author) => {
       return <li className={s.li} key={author.id}>{author.author}</li>
    })
    


    let dataGenre = [...new Set(data.map((item) => { return item.genre }))]
   
    let genreItem = dataGenre.map((item) => {
        return <li className={s.li} key={item.id}>{item}</li>
    })



    const [visibleAuthor, setVisibleAuthor] = useState(false)
    const [visibleYear, setVisibleYear] = useState(false)
    const [visibleGenre, setVisibleGenre] = useState(false)



    const dropdownVisibleAuthor = () => {
        if (visibleGenre == true) {
            dropdownVisibleGenre()
        }
        if (visibleYear == true) {
            dropdownVisibleYear()
        }
        setVisibleAuthor(!visibleAuthor)
    }

    const dropdownVisibleYear = () => {
         if (visibleGenre == true) {
            dropdownVisibleGenre()
        }
        if (visibleAuthor == true) {
            dropdownVisibleAuthor()
        }
        setVisibleYear(!visibleYear)
    }

    const dropdownVisibleGenre = () => {
        if (visibleAuthor == true) {
            dropdownVisibleAuthor()
        }
        if (visibleYear == true) {
            dropdownVisibleYear()
        }
        setVisibleGenre(!visibleGenre)
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