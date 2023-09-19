interface ListItem {
  title: string;
  idx:number;
  isFavorite: boolean;
  created:string;
  edited:string;
  opening_crawl:string;
  director:string;
  producer:string;
  release_date:string;
  };
interface ListToObjectProps {
  items: ListItem[];
  chooseCurrent: (idx: number) => void;
}
class ApiService {
  
  static async fetchMovies(apiUrl:string) {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      let items = await response.json();
      items=items.results;
      console.log(items);
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
