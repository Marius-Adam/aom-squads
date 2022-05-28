import css from './SearchBar.module.css';

interface ISearch {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchBar = ({ onChange }: ISearch) => {
  return (
    <div className={css.searchBar}>
      <div className={css.searchBar__filters}>
        <div className={css.searchBar__btn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9.664 15l-8.664-15h22l-8.703 15h-4.633zm2.336 2c-1.407 2.099-2.312 3.412-2.312 4.688 0 1.277 1.035 2.312 2.312 2.312s2.312-1.035 2.312-2.312c0-1.276-.905-2.589-2.312-4.688zm.159 3.007c-.333.833-1.266.622-.765-.465.211-.458.357-.652.598-1.049.198.311.389.959.167 1.514z" />
          </svg>
        </div>
      </div>
      <div className={css.searchBar__search}>
        <input
          type="text"
          placeholder="Search..."
          className={css.searchBar__input}
          onChange={onChange}
        />
        <div className={css.searchBar__btn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
