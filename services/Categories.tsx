
import http from './api/index';


export default async function getCategories() {
        
   try {              
      const response = await http.get(`/autocomplete`);
      return response
        
   } catch (error) {
       throw Error(`heppend error by getting categories!  ${error}`) 
   }
     
 }