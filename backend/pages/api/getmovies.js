import { mongooseConnect } from "@/lib/mongoose";
import { Movie } from "@/models/Movie";
// api for fetching data from mongodb database
export default async function handle (req, res) {

    // if authenticated, connect to Mongodb
    await mongooseConnect()
    const {method} = req;
    //POST Request
    if (method === 'POST') {
        const {title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, language, subtitle,
            size, quality, youtubelink, category, watchonline, downloadlink, status } = req.body;
        
            const movieData = await Movie.create({
                title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, language, subtitle,
                size, quality, youtubelink, category, watchonline, downloadlink, status
            })

            res.json(movieData)
    }
    //Get Request

    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Movie.findById(req.query.id))
        } else {
            res.json((await Movie.find()).reverse())
        }
    }

    //WHEN UPDATE REQ
    if (method === 'PUT') {
        //when update then add _id to find movie
        const {_id, title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, language, subtitle,
            size, quality, youtubelink, category, watchonline, downloadlink, status} = req.body;

        await Movie.updateOne({_id}, { 
            title, slug, bgposter, smposter, titlecategory, description, rating, duration, year, genre, language, subtitle,
            size, quality, youtubelink, category, watchonline, downloadlink, status        
        });

        res.json(true);
    }

    //WHEN DELETE REQ
    if (method === 'DELETE') {
        if (req.query?.id) {
            await Movie.deleteOne({_id: req.query?.id});
            res.json(true);
        }
    }
}