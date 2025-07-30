import React from 'react'
import styles from './Navbar.module.css'
import { IoSearchOutline } from "react-icons/io5"
// import { LuSettings2, LuShoppingCart } from "react-icons/lu"
import { Settings2, ShoppingCart } from "lucide-react";
import { TbArrowsSort } from "react-icons/tb"
import { BsFillGrid3X2GapFill, BsThreeDotsVertical } from "react-icons/bs"
// import { LuShoppingCart } from "react-icons/lu"
// import { BsThreeDotsVertical } from "react-icons/bs"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <span className={styles.logo}>kindle</span>
                <div className={styles.searchBox}>
                    <IoSearchOutline className={styles.searchIcon} />
                    <input type="text" placeholder='Search your Kindle'
                        className={styles.searchInput} />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.menuItem}>
                    <Settings2 className={styles.filterrIcon} />
                    <span className={styles.menuText}>Filter</span>
                </div>
                <div className={styles.menuItem}>
                    <TbArrowsSort className={styles.sortIcon} />
                    <span className={styles.menuText}>Sort by:Recent</span>
                </div>
                <div className={styles.menuItem}>
                    <BsFillGrid3X2GapFill className={styles.viewIcon} />
                    <span className={styles.menuText}>View</span>
                </div>
                <div className={styles.menuItem}>
                    <ShoppingCart className={styles.cartIcon} />
                </div>
                <div className={styles.menuItem}>
                    <BsThreeDotsVertical className={styles.moreIcon} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar