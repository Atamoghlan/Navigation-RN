let movieId = 0;
export const FETCH_URL = 'FetchUrl'
export const SEARCH_MOVIE = 'Search_Movie'
export const searchMovie = (data) => {
    return ({
        type: SEARCH_MOVIE ,
        payload: {
            data: data
        }
    })
}
export const loading = (loadingBool) => {
    return({
        type: 'Loading_Animation',
        loadingWorking: loadingBool
    })
}
export const favouriteList = (name, image) => {
    return ({
        type: 'Add_to_favourite_List',
        payload: {
            movieList: {
                icon: image?{uri: image.medium}: require("../images/popcorn.jpg"),
                name: name
            }
        }
    })
}

export const clearList = () => {
    return ({
    type: "ClearList",
    payload: {
        movieList: {
        }
    }
})};

export const deleteMovie = (index) => {
    return ({
        type: "DeleteMovie",
        payload: index
    })
}

export const fetchUrl = () => {
    return {
        type: FETCH_URL
    }
}