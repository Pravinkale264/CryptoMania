import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const cryptoNewsHeaders = {
//     'X-RapidAPI-Key': '28b8330eb8mshc816ce3531bc8d3p11d3c7jsna5f38b48a549',
//     'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
// }
const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '28b8330eb8mshc816ce3531bc8d3p11d3c7jsna5f38b48a549',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
// const baseUrl = 'https://crypto-news16.p.rapidapi.com';

const createRequest = (url)=>({url,headers:cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;