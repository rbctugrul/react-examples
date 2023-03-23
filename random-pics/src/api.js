import axios from 'axios';

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
         Authorization: 'Client-ID _H4Dj9e9TeC59wc50Qj8IO3LsiIP_65nqZGynYPmd1o'
      },
      params: {
         query: term,
      },
   });

   return response.data.results;
};

export default searchImages;