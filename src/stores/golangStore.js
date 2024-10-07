// Make sure you have included this file in your Svelte app's project structure
// and then import it where you want to make API calls.

import { gql, request } from 'graphql-request';

const apiString = "https://gographql.cfapps.us10-001.hana.ondemand.com/:8080";

export const apiStore = {
    getPostajalisca: async () => {
          const query = gql`
          {
              postajalisca {
                  _id
                  ime
                  naslov
                  latitude
                  longitude
                  kolesaArray {
                      serijska_stevilka
                  }
              }
          }
      `

      const data = await request(apiString, query);
      return data;
    },
    getIzposoje: async () => {
          const query = gql`
          {
              izposoje {
                _id
                start_station
                end_station
                username
                duration
                weather
                start_date
                end_date
              }
          }
      `

      const data = await request(apiString, query);
      return data;
    },
    getKolesa: async () =>  {
      const query = gql`
        {
            kolesa {
              _id
              mnenje
              serijska_stevilka
              jeIzposojen
            }
        }
    `

      const data = await request(apiString, query);
      return data;
    },
    deletePostajalisce: async (id) => {
      const query = gql`
        mutation {
          deletePostajalisce(input: "${id}")
        }
      `

      const data = await request(apiString, query);
      return data;
    },
    deleteIzposoja: async (id) => {
      const query = gql`
        mutation {
          deleteIzposoja(input: "${id}")
        }
      `

      const data = await request(apiString, query);
      return data;
    },
    deleteKolo: async (id) => {
      const query = gql`
        mutation {
          deleteKolo(input: "${id}")
        }
      `

      const data = await request(apiString, query);
      return data;
    },
    addPostajalisce: async (ime, naslov, latitude, longitude) => {
      const query = gql`
        mutation {
          createPostajalisce(input: {ime: "${ime}", naslov: "${naslov}", latitude: ${parseFloat(latitude)}, longitude: ${parseFloat(longitude)}}) {_id}
        }
      `

      const data = await request(apiString, query);
      return data;
    },
    addKolo: async (serijska_stevilka) => {
      const query = gql`
        mutation {
          createKolo(input: {serijska_stevilka: "${serijska_stevilka}"}){_id}
        }
      `

      const data = await request(apiString, query);
      return data;
    },
    updateKolo: async (id, serijska_stevilka) => {
      const query = gql`
        mutation {
          changeKolo(input: {_id: "${id}", serijska_stevilka: "${serijska_stevilka}"})
        }
      `

      const data = await request(apiString, query);
      return data;
    },
    updatePostajalisce: async (id, ime, naslov, latitude, longitude) => {
      const query = gql`
        mutation {
          changePostajalisce(input: {_id: "${id}", ime: "${ime}", naslov: "${naslov}", latitude: ${parseFloat(latitude)}, longitude: ${parseFloat(longitude)}})
        }
      `

      const data = await request(apiString, query);
      return data;
    }
}
