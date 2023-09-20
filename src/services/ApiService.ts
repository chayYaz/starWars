//aoiservices is for logic and outsideconnections
class ApiService {
  
  static async fetchInfo(apiUrl:string) {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      let items = await response.json();
      items=items.results;
     //adding idx to every item
      items = items.map((item:any,idx:number) => ({
        ...item,idx
      }));
      return items;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}

export default ApiService;
