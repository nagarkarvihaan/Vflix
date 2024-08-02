import { useRouter } from "next/router"
import { useEffect } from "react";
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import { FcRating } from "react-icons/fc";
import { PiPaperPlaneRightLight } from "react-icons/pi";

export default function movies() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <Loading />
    }

    if (!session) {
        router.push('/auth');
        return null;
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(7);
    const [searchQuery, setSearchQuery] = useState('');
    const { alldata, loading } = useFetchData("/api/getmovies");

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const allMovie = alldata.length; //total number of movies

    //filter all data based on search query
    const filteredMovies = searchQuery.trim() === '' ? alldata : alldata.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));

    // calculate index of the first movie displayed on the current page
    const indexOfFirstMovie = (currentPage - 1) * perPage;
    const indexOfLastMovie = currentPage * perPage;

    // get the current page's movies
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie)

    const publishedMovies = currentMovies.filter(ab => ab.status === "publish");
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(allMovie / perPage); i++) {
        pageNumbers.push(i);
    }

    if (session) {
        return <>
            <div className="container">
                <div className="moviecards flex flex-col flex-left gap-2 w-100">
                    <div className="flex flex-sb w-100 movietitle">
                        <h2>List Of Published Movies</h2>
                        <Link href='/addmovie'><button>Add Movie</button></Link>
                    </div>
                </div>

                {loading ? <Spinner /> : <>
                    {publishedMovies.map((movie) => {
                        return <div className="moviecard" key={movie._id}>
                            <img src={movie.bgposter || "/img/noimage.jpg"} alt="movie" />
                            <div className="moviecardinfo">
                                <div>
                                    <h3>{movie.slug}</h3>
                                    <p>{movie.category}</p>
                                </div>
                                <Link href="/">{movie.downloadlink['480p']}</Link>
                                <div>
                                    <FcRating /> {movie.rating}
                                </div>
                                <div className="flex gap-2 mt-2">
                                    <Link href={`/movies/edit/${movie._id}`}><button>Update movie</button></Link>
                                    <Link href={`/movies/delete/${movie._id}`}><button>Delete movie</button></Link>
                                </div>
                            </div>
                        </div>
                    })}
                </>}

                {publishedMovies.length === 0 ? (
                    ""
                ) : (
                    <div className="blogpagination">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disable={currentPage === 1}
                        >Previous</button>
                        {pageNumbers.slice(Math.max(currentPage - 3, 0), Math.min(currentPage + 2, pageNumbers.length)).map(number => (
                            <button
                                key={number}
                                onClick={() => paginate(number)}
                                className={`${currentPage === number ? 'active' : ""}`}
                            >
                                {number}
                            </button>
                        ))}
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentMovies.length < perPage}
                        >Next</button>
                    </div>
                )}

            </div>
        </>
    }
}