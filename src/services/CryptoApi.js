import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '28b8330eb8mshc816ce3531bc8d3p11d3c7jsna5f38b48a549',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
        }),
        getExchanges: builder.query({
            query:()=>createRequest(`/exchanges`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId)=> createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
        query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
        }),
    })
});

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery
} = cryptoApi;