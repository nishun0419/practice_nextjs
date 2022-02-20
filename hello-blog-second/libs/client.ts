import { createClient } from "microcms-js-sdk"
export const client = createClient({
  serviceDomain: "ninotem",
  apiKey: process.env.API_KEY
})