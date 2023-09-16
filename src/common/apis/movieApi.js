import axios from 'axios'

export default axios.create({
    baseURL :'https://www.omdbapi.com'
    // https://www.omdbapi.com/?apikey=d5cf69aa&s=barbie&type=movie
});