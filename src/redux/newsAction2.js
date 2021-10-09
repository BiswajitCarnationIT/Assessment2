/*import axios from "axios"
import { FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS } from "./newsActionType"


export const fetchNewsRequest = () => {
    return {
        type:FETCH_NEWS_REQUEST
    }
}

export const fetchNewsSuccess = (news) => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload:news
    }
}

export const fetchNewsFailure = (error) =>{
    return {
        type: FETCH_NEWS_FAILURE,
        payload: error
    }
}

export const fetchNews = () => {
    console.log('fetch function');
    return (dispatch) => {
        dispatch(fetchNewsRequest)
        let promices = []
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(response => {
            const newsIndex = response.data
            for(let i = 0;i<90;i++){
                const id = newsIndex[i]
                promices[i] = axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                    
            }
            Promise.all(promices).then((values) => {
                console.log('values',values);
                fetchNewsSuccess(newsIndex)
            });
            

            /*let topNientyNews = []
            let j = 0
            for(let i = 0;i<90;i++){
                const id = newsIndex[i]
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                    .then(response => {
                        const news = response.data
                        topNientyNews[i] = news
                        j++
                        //console.log('hi',news)
                        console.log('hi',topNientyNews[i].by)
                    })

            }
            console.log('j',j)
            if(j > 70) console.log('j 70',j);
            console.log('NewIndex',newsIndex)
            console.log('topNientyNews',topNientyNews)
            setTimeout(dispatch(fetchNewsSuccess(newsIndex),100000)
        })
        .catch(error => {
            const errorMsg = error.message
            console.log('url error response',errorMsg);
            dispatch(fetchNewsFailure(error))
        })
    }
}
*/