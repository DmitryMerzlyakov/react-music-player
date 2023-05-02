import { useState } from 'react';
import styled from "styled-components";
import SearchButton from './searchButton';
import sprite from '../assets/icon/sprite.svg';
import '../assets/css/style.scss';


const LI = styled.li`
margin-bottom: 10px;
:hover {
    text-decoration-line: underline;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #B672FF;
}
`

const Search = () => {

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
       return <LI key={author.id}>{author.name}</LI>
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
        return <LI key={genre.id}>{genre.name}</LI>
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
        <div className="centerblock__search search">
            <svg className="search__svg">
                <use xlinkHref={`${sprite}#icon-search`}/>
            </svg>
            <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"/>
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
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
                    <div className="author__wrapper">
                            <ul className='author'>{authorItem}</ul>
                    </div>}
                {visibleYear &&
                    <div className='year__wrapper'>
                        <input className='year' id="new" type="radio" name="question"/>
                        <label htmlFor="new">Более новые</label>
                        <input className='year' id="old" type="radio" name="question" />
                        <label htmlFor="old">Более старые</label>
                    </div>}
                {visibleGenre &&
                    <div className="genre__wrapper">
                        <ul className='genre'>{genreItem}</ul>
                    </div>}
        </div>
    </div>
    );
}

export default Search;