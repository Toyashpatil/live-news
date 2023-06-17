import React,{Component} from 'react'
import News from './containers/News'
import newNews from './news';

export default class Home extends Component{
  articles=[
    {
      "source": {"id": null,"name": "CNBC"},
      "author": "Hakyung Kim",
      "title": "Loading.........",
      "description": "Loading.......",
      "url": "https://www.cnbc.com/2023/06/14/stock-market-today-live-updates.html",
      "urlToImage": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831",
      "publishedAt": "2023-06-15T07:13:00Z",
      "content": "U.S. stock futures were roughly flat after the Federal Reserve skipped a rate hike at its meeting that ended Wednesday, but signaled two more rate hikes may still be in store later this year. \r\nDow J… [+2346 chars]"
    },
  ]

  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading:false
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=7218f140cb8149e5b72c24de88c2b52b";
    let data = await fetch(url);
    let ParsedData= await data.json();
    this.setState({articles:ParsedData.articles}); 
  }




  render(){
  return (
    <div className='flex space-y-4 space-x-4 flex-wrap justify-center'>
      {this.state.articles.map((note,index) => (
        <News key={index} title={note.title} url={note.urlToImage} read={note.url} content={note.description} />
      ))}
    </div>
  )
}
}
