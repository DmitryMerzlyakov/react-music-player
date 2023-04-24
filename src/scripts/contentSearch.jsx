import sprite from '../assets/icon/sprite.svg';
import '../assets/css/style.scss';

const Search = () => {
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
            <div className="filter__button button-author _btn-text">исполнителю</div>
            <div className="filter__button button-year _btn-text">году выпуска</div>
            <div className="filter__button button-genre _btn-text">жанру</div>
        </div>
    </div>
    );
}


export default Search;