
const Api = 'https://api.rawg.io/api'

const key = "?key=bc8c931920a745b5964a7a79f56a33d7 ";
const HttpRequest = (path)=>{

    return(
        fetch(Api + key + path )
        .then((res) => res.json)
    )
}

export default HttpRequest