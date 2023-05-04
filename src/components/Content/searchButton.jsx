import s from './css/searchButton.module.css'

const SearchButton = ({ howSearch, onClick, visible }) => {
    return (
        <button onClick={onClick} className={`${s.button} ${visible ? '' : s.active }`}>{howSearch}</button>
    );
}

export default SearchButton;