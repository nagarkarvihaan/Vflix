import {IoClose} from "react-icons/io5";
import {BiSearch} from "reach-icons/bi";
import Link from "next/link";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import useFetchData from "@/hooks/useFetchData";

export default function Header() {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("nav");
            header.classList.toggle("sticky", window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);    
        }
    }, []);

    //functions for navlist iteams page routing active status
    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [searchbar, setSearchbar] = useState(false); 

    const [activeLink, setActiveLink] = useState('/');

    //search function by title of the movie
    const [moviesshortname, setMovieshortname] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);

    //fetch data from api
    const {alldata, loading} = useFetchData('/api/getmovies');

    //filter for published movies required
    const publishedData = alldata.filter(ab => ab.status === "publish");

    useEffect(() => {
        if (!moviesshortname.trim()) {
            setSearchResult([]);
            return;    
        }
    })

    const handleClick = () => {
        setClicked(!clicked);
    }

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setClicked(false);
    }

    useEffect (() => {
        // update active link state when the page is reloaded
        setActiveLink(router.pathname);
    }, [router.pathname]);

    const handleNabarOpen = () => {
        setNavbar(!navbar);
    }

    const handleNabarClose = () => {
        setNavbar(false);
    }

    const handleSearchbarOpen = () => {
        setSearchbar(!searchbar);
    }

    const handleSearchbarClose = () => {
        setSearchbar(false);    
    }

    return <>
        <nav className = "header">
            <h1 className = "logo" data-text = "&nbsp;Vflix&nbsp;">
                <a href = "/">&nbsp;Vflix&nbsp;</a>
            </h1>
            <form className = "search_bar">
                <input type = "text"
                    placeholder = "Search Movies..."
                />
            </form>
            {/* for mobile device */}
            <div id = {navbar ? "navbaractive" : "navbar"}>
                <div className = "navlogomovie">
                    <h1 className = "logo" data-text = "&nbsp;Vflix&nbsp;">
                        <a href = "/">&nbsp;Vflix&nbsp;</a>
                    </h1>
                    <div className = "navclosesvg" onClick = {handleNabarClose}>
                        <IoClose/>
                    </div>
                    <ul className = {clicked ? "navbar active" : "navbar"} onClick = {handleNabarClose}>
                        <li>
                            <Link href = "/" 
                                className = {activeLink === '/' ? 'active' : ''}
                                onClick = {() => handleLinkClick('/')}
                                
                            >Home</Link>
                        </li>
                        <li>
                            <Link href = "/movies" 
                                className = {activeLink === '/movies' ? 'active' : ''}
                                onClick = {() => handleLinkClick('/movies')}
                                
                            >Movies</Link>
                        </li>
                        <li>
                            <Link href = "/bollywood" 
                                className = {activeLink === '/bollywood' ? 'active' : ''}
                                onClick = {() => handleLinkClick('/bollywood')}
                                
                            >Bollywood</Link>
                        </li>
                        <li>
                            <Link href = "/hollywood" 
                                className = {activeLink === '/hollywood' ? 'active' : ''}
                                onClick = {() => handleLinkClick('/hollwood')}
                                
                            >Hollywood</Link>
                        </li>
                        <li>
                            <Link href = "/series" 
                                className = {activeLink === '/series' ? 'active' : ''}
                                onClick = {() => handleLinkClick('/series')}
                                
                            >Series</Link>
                        </li>
                        <li>
                            <Link href = "/contact" 
                                className = {activeLink === '/contact' ? 'active' : ''}
                                onClick = {() => handleLinkClick('/contact')}
                                
                            >Contact</Link>
                        </li>
                    </ul>

                </div>
            </div> 
            <div className = "mobile">
                <BiSearch className = "opensearchsvg" onClick = {handleSearchbarOpen}/>
                <FaBars onClick = {handleNabarOpen}/>
            </div>

        </nav>
      
    </>
}