import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "192.168.2.3";

  let api = axios.create({
    baseUrl: defaultUrl,
    headers: {
      common: {},
    },
  });
  return {
    provide: {
      axios: api,
    },
  };
});
