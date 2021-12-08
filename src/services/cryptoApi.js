import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { buildQueries } from "@testing-library/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "f0b436d7d3msh0eda405fbc99029p152ce4jsn8dc419faafff",
};
const baseUrl = "https://coinranking1.p.rapidapi.com/";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
});
export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;
//import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
