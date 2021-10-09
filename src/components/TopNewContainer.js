import React from "react";
import { fetchNews, fetchNewsFailure, fetchNewsRequest, fetchNewsSuccess } from "../redux/newsAction";
import { connect } from "react-redux";

import { useSelector,useDispatch } from "react-redux";
import axios from "axios";


const TopNewContainer = () => {
    const newsData = useSelector((state)=>state.newsReducer);   //stare.reducer
    const dispatch = useDispatch()
    console.log("hi", newsData);
    const topNienty = []
    const topNientyBody = []
    if(newsData.news[1]) console.log('length');
    if(newsData.news[1]){
        for(let i =0;i<90;i++){
            topNienty[i] = newsData.news[i] ; 
            const id = newsData.news[i]
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(response => {
            const news = response.data
            topNientyBody[i] = news
            console.log('hi',topNientyBody[i].by)
        })
    }
    
    
         
    }
    //console.log('hi',topNientyBody[0].by);
    

    return(
        <div>
            {/* <h1>{newsData.news[0]}</h1> */}
            <h1>{topNientyBody.map(user => <div><h3>{user.by}</h3></div>)}</h1>
            <button onClick = {()=>dispatch(fetchNews())}>Top news</button>
        </div>
    )
    // return newsData.loading ? (
    //   <h2>loading</h2>
    // ) : newsData.error ? (
    //   <h2>{newsData.error}</h2>
    // ) : (
    //   <div>
    //     <h2>UserList</h2>
    //     <div>
    //         {/* {newsData && newsData.users && newsData.users.map(user => <p>{user.name}</p>) } */}
    //         {newsData.loading}
    //     </div>
    //     <button onClick={fetchNews}> Fetch user</button>
    //   </div>
    // );
  }

  export  default TopNewContainer

// const TopNewContainer = (newsData, fetch_news) => {
//   let clicked = false;
//   const hanleFetch = () => {
//     if (fetch_news) {
//       console.log("hi 2", newsData);
//     }
//     clicked = true;
//   };
//   console.log("hi", newsData);
//   return newsData.loading ? (
//     <h2>loading</h2>
//   ) : newsData.error ? (
//     <h2>{newsData.error}</h2>
//   ) : (
//     <div>
//       <h2>UserList</h2>
//       <div>
//           {/* {newsData && newsData.users && newsData.users.map(user => <p>{user.name}</p>) } */}
//           {newsData.loading}
//       </div>
//       <button onClick={fetchNews}> Fetch user</button>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     newsData: state.news_reducer
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetch_news: () => dispatch(fetchNews())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TopNewContainer);
