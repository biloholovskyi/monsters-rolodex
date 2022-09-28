import React, {ChangeEvent} from 'react'

import './search-box.styles.css'

interface ISearchBoxComponent {
  className: string
  placeholder?: string
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchBoxComponent = ({ className, placeholder, onChangeHandler }: ISearchBoxComponent) => {
  return (
    <div>
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default SearchBoxComponent
