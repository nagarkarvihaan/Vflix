import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';


export default function Movie(
    {
        _id,
        title: existingtitle,
        slug: existingslug,
        bgposter: existingbgposter,
        smposter: existingsmposter,
        titlecategory: existingtitlecategory,
        description: existingdescription,
        rating: existingrating,
        duration: existingduration,
        year: existingyear,
        genre: existinggenre,
        language: existinglanguage,
        subtitle: existingsubtitle,
        size: existingsize,
        quality: existingquality,
        youtubelink: existingyoutubelink,
        category: existingcategory,
        watchonline: existingwatchonline,
        downloadlink: existingdownloadlink,
        status: existingstatus
    }
) {
    const [redirect, setRedirect] = useState(false);
    const router = useRouter();

    const [title, setTitle] = useState(existingtitle || '');
    const [slug, setSlug] = useState(existingslug || '');
    const [bgposter, setBgposter] = useState(existingbgposter || '');
    const [smposter, setSmposter] = useState(existingsmposter || '');
    const [titlecategory, setTitleCategory] = useState(existingtitlecategory || '');
    const [description, setDescription] = useState(existingdescription || '');
    const [rating, setRating] = useState(existingrating || '');
    const [duration, setDuration] = useState(existingduration || '');
    const [year, setYear] = useState(existingyear || '');
    const [genre, setGenre] = useState(existinggenre || '');
    const [language, setLanguage] = useState(existinglanguage || '');
    const [subtitle, setSubtitle] = useState(existingsubtitle || '');
    const [size, setSize] = useState(existingsize || '');
    const [quality, setQuality] = useState(existingquality || '');
    const [youtubelink, setYoutubelink] = useState(existingyoutubelink || '');
    const [category, setCategory] = useState(existingcategory || '');
    const [watchonline, setWatchonline] = useState(existingwatchonline || '');
    const [downloadlink, setDownloadLink] = useState(existingdownloadlink || {
        "480p": "",
        "720p": "",
        "1080p": "",
        "4k": "",
    });
    const [showInputs, setShowInputs] = useState({
        "480p": false,
        "720p": false,
        "1080p": false,
        "4k": false,
    });
    const [status, setStatus] = useState(existingstatus || '');

    //function to create movies
    async function createMovie(ev) {
        ev.preventDefault();
        const data = {title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, language, subtitle,
            size, quality, youtubelink, category, watchonline, downloadlink, status}
        if (_id) {
            await axios.put('/api/getmovies', {...data, _id})
        } else {
            await axios.post('/api/getmovies', data);
        }

        setRedirect(true);
    }

    if (redirect) {
        router.push('/')
        return null;
    }

    //Download link functions

    const resolutions = ["480p", "720p", "1080p", "4k"]

    const handleInputChange = (resolution, value) => {
        setDownloadLink(prevstate => ({
            ...prevstate,
            [resolution]: value
        }));
    };

    const toggleInputVisibility = resolution => {
        setShowInputs(prevstate => ({
            ...prevstate,
            [resolution]: !prevstate[resolution]
        }));
    };


    const handleSlugChange = (ev) => {
        const inputValue = ev.target.value;

        const newSlug = inputValue.replace(/\s+/g, '-');
        setSlug(newSlug)
    }

    const categories = ["Bollywood", "Hollywood", "Marvel Studio", "TV shows", "Web Series"]

    return <>
        <Head>
            <title>Add Movie page</title>
        </Head>
        <form className="addmovieform" onSubmit = {createMovie}>
            {/* preview bgposter and smposter image*/}
            <div className="w-100 flex gap-3 mt-1">
                {bgposter ? <div className="bgposter flex flex-col w-70 flex-left">
                    <img src={bgposter} id="prv" alt="image" />
                    <label htmlFor="prv">Background Image Preview</label>

                </div> : null}
                {smposter ? <div className="smposter flex flex-col w-33 flex-left">
                    <img src={smposter} id="prv" alt="image" />
                    <label htmlFor="prv">Smposter Preview</label>

                </div> : null}
            </div>

            <div className="formdata w-100 flex flex-sb mt-3 flex-left">
                {/* left side */}
                <div className="w-50 flex flex-col flex-left">
                    {/* movie background image */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="bgposter">Background Poster</label>
                        <input type="text"
                            id="bgposter"
                            placeholder="Bgposter image link"
                            value={bgposter}
                            onChange={ev => setBgposter(ev.target.value)}>
                        </input>
                    </div>
                    {/*movie title*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="title">Movie Title</label>
                        <input type="text"
                            id="title"
                            placeholder="Title"
                            value={title}
                            onChange={ev => setTitle(ev.target.value)}
                        />
                    </div>
                    {/*movie description*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="description">Description</label>
                        <textarea type="text"
                            id="description"
                            placeholder="Description"
                            value={description}
                            onChange={ev => setDescription(ev.target.value)}
                        />
                    </div>

                    {/*movie rating */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="rating">Rating</label>
                        <input type="text"
                            id="rating"
                            placeholder="Rating"
                            value={rating}
                            onChange={ev => {
                                let newValue = ev.target.value <= 10.0 ? ev.target.value : 10.0;
                                newValue = newValue >= 0 ? newValue : 0;
                                setRating(newValue);
                            }}
                            step="0.1" //define the step increment as 0.1
                            max="10.0" // set the maximum value to 10.0
                            min="0" // set minimum value
                        />
                    </div>
                    {/*movie duration*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="duration">Duration</label>
                        <input type="text"
                            id="duration"
                            placeholder="Duration"
                            value={duration}
                            onChange={ev => setDuration(ev.target.value)}
                        />
                    </div>

                    {/*movie watchonline link*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="watchonline">Watchonline link</label>
                        <input type="text"
                            id="watchonline"
                            placeholder="watchonline"
                            value={watchonline}
                            onChange={ev => setWatchonline(ev.target.value)}
                        />
                    </div>

                    {/*movie download link*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="downloadlink">Download link</label>
                        <div className="flex gap-1">
                            <div className={showInputs['480p'] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility('480p')}>
                                {showInputs['480p'] ? 'Hide 480p' : 'Show 480p'}
                            </div>
                            <div className={showInputs['720p'] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility('720p')}>
                                {showInputs['720p'] ? 'Hide 720p' : 'Show 720p'}
                            </div>
                            <div className={showInputs['1080p'] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility('1080p')}>
                                {showInputs['1080p'] ? 'Hide 1080p' : 'Show 1080p'}
                            </div>
                            <div className={showInputs['4k'] ? 'dresolbtn active' : 'dresolbtn'} onClick={() => toggleInputVisibility('4k')}>
                                {showInputs['4k'] ? 'Hide 4k' : 'Show 4k'}
                            </div>
                        </div>
                        {resolutions ? <>{resolutions.map(resolution => (
                            <div key={resolution} className="w-100">
                                {showInputs[resolution] && (
                                    <>
                                        <input type="text"
                                            id={`downloadlink${resolution}`}
                                            placeholder={`${resolution} Download link`}
                                            value={downloadlink[resolution]}
                                            onChange={ev => handleInputChange(resolution, ev.target.value)}
                                        />
                                    </>
                                )}
                            </div>
                        ))}</> : null}
                    </div>

                    {/* Movie status (Draft or Publish)*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="status">Status</label>
                        <div className="flex gap-05">
                            <input type="radio"
                                id="draft"
                                name="status"
                                value="draft"
                                checked={status === "draft"}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label htmlFor="draft">Draft</label>
                        </div>
                        <div className="flex gap-05">
                            <input type="radio"
                                id="publish"
                                name="status"
                                value="publish"
                                checked={status === "publish"}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                            <label htmlFor="publish">Publish</label>
                        </div>
                    </div>


                </div>
                {/* right side */}
                <div className="w-50 flex flex-col flex-left">
                    {/* Movie small Poster*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="smposter">Main Poster</label>
                        <input type="text"
                            id="smposter"
                            placeholder="smposter image link"
                            value={smposter}
                            onChange={ev => setSmposter(ev.target.value)}
                        />
                    </div>

                    {/* Movie slug url*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="slug">Slug (url)</label>
                        <input type="text"
                            id="slug"
                            placeholder="URL of the movie"
                            value={slug}
                            onChange={handleSlugChange}
                        />
                    </div>

                    {/*Release year of Movie */}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="year">Release Year</label>
                        <input type="text"
                            id="year"
                            placeholder="year"
                            value={year}
                            onChange={ev => setYear(ev.target.value)}
                        />
                    </div>

                    {/* Youtube embed link*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="youtubelink">YouTube Link</label>
                        <input type="text"
                            id="youtubelink"
                            placeholder="youtubelink"
                            value={youtubelink}
                            onChange={ev => setYoutubelink(ev.target.value)}
                        />
                    </div>

                    {/* Language of the movie*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="language">Language</label>
                        {/* <input type="text"
                            id="language"
                            placeholder="Language"
                            value={language}
                            onChange={ev => setLanguage(ev.target.value)}
                        /> */}
                        <select onChange={(e) => setLanguage(e.target.value)} value={language} name="language" id="language">
                            <option value="">Select Language</option>
                            <option value="English">English</option>
                        </select>
                    </div>

                    {/* Quality of the movie*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="quality">Movie</label>
                        <select onChange={(e) => setQuality(e.target.value)} value={quality} name="quality" id="quality">
                            <option value="">Select Quality</option>
                            <option value="480p || 720p || 1080p - WEBDL">480p || 720p || 1080p - WEB-DEL</option>
                            <option value="480p || 720p || 1080p || 2160p - WEB-DL">480p || 720p || 1080p - WEB-DL</option>
                            <option value="480p || 720p || 1080p - HDTC">480p || 720 || 1080p - HDTC</option>
                        </select>
                    </div>

                    {/*subtitle of the movie*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="subtitle">Movie subtitle</label>
                        <select onChange={(e) => setSubtitle(e.target.value)} value={subtitle} name="subtitle" id="subtitle">
                            <option value="">Select subtitle</option>
                            <option value="English">English</option>
                        </select>
                    </div>

                    {/* size of the movie*/}
                    <div className="w-100 flex flex-col flex-left mb-2">
                        <label htmlFor="size">Movie Size</label>
                        <input type="text"
                            id="size"
                            placeholders="350MB|| 1GB || 2GB || 4GB"
                            value={size}
                            onChange={ev => setSize(ev.target.value)}
                        />
                    </div>

                    {/* movie title category*/}
                    <div className="moviecategory flex flex-sb flex-left">
                        <div className="w-50 flex flex-col flex-left mb-2">
                            <label htmlFor="">Title Category</label>
                            {['Movies', 'Series', 'Shows'].map((cat) => (
                                <div key={cat} className="flex gap-05">
                                    <input type="radio"
                                        id={cat.toLowerCase()}
                                        name="titlecategory"
                                        value={cat.toLowerCase()}
                                        checked={titlecategory === cat.toLowerCase()}
                                        onChange={(e) => setTitleCategory(e.target.value)}
                                    />
                                    <label htmlFor={cat.toLowerCase()}>{cat}</label>
                                </div>
                            ))}
                        </div>

                        {/* movie category*/}
                        <div className="w-50 flex flex-col flex-left mb-2">
                            <label htmlFor="">Categories</label>
                            {categories.map((cat) => (
                                <div key={cat} className="flex gap-05">
                                    <input type="radio"
                                        id={cat.toLowerCase()}
                                        name="Categories"
                                        value={cat.toLowerCase()}
                                        checked={category === cat.toLowerCase()}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                    <label htmlFor={cat.toLowerCase()}>{cat}</label>
                                </div>
                            ))}
                        </div>

                        {/* movie genre*/}
                        <div className="w-50 flex flex-col flex-left mb-2">
                            <label htmlFor="">Genres</label>
                            {['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Crime', 'Fantasy', 'Horror', 'Romance', 'Thriller', 'Science_Fiction'].map((genreOption) => (
                                <div key={genreOption} className="flex gap-05">
                                    <input type="checkbox"
                                        value={genreOption.toLowerCase()}
                                        checked={genre.includes(genreOption.toLowerCase())}
                                        onChange={(e) => {
                                            const selectedGenre = e.target.value;
                                            setGenre((preGenre) => {
                                                if (preGenre.includes(selectedGenre)) {
                                                    return preGenre.filter((genre) => genre !== selectedGenre)
                                                } else {
                                                    return [...preGenre, selectedGenre]
                                                }
                                            })
                                        }}
                                    />
                                    {genreOption}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* To save all the data in MongoDB*/}
            <div className="w-100 mb-2">
                <button type="submit" className="w-100 flex-center">SAVE DATA</button>
            </div>

        </form>



    </>
}

