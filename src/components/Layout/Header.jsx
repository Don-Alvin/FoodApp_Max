import React from 'react'
import HeaderCartButton from './HeaderCartButton'

import mealsImage from '../../images/meals.jpg'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <h1>MyMeals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="meals" />
        </div>
    </>
  )
}

export default Header