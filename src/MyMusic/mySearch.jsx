import { useState } from 'react';
import SearchButton from '../Main/Content/searchButton';
import sprite from '../Main/Content/icon/sprite.svg'
import s from '../Main/Content/css/contentSearch.module.css'



const MySearch = () => {

    const authors = [
        { id: "1", name: "Guilt" },
        { id: "2", name: "Elektro" },
        { id: "3", name: "I’m Fire" },
        { id: "4", name: "Non Stop" },
        { id: "5", name: "Run Run" },
        { id: "6", name: "Eyes on Fire" },
        { id: "7", name: "Mucho Bien" },
        { id: "8", name: "Knives n Cherries" },
        { id: "9", name: "How Deep Is Your Love" }]

    let authorItem = authors.map((author) => {
       return <li className={s.li} key={author.id}>{author.name}</li>
    })
    
    const genres = [
        { id: "1", name: "Рок" },
        { id: "2", name: "Поп-музыка" },
        { id: "3", name: "Техно" },
        { id: "4", name: "Инди" },
        { id: "5", name: "Xип-хоп" },
        { id: "6", name: "Шансон" },
        { id: "7", name: "Джаз" }]

    let genreItem = genres.map((genre) => {
        return <li className={s.li} key={genre.id}>{genre.name}</li>
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
        <h2 className={s.header}>Мои треки</h2>
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

export default MySearch;