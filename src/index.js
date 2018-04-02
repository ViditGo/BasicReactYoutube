import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list"
import VideoDetail from "./components/video_detail";
import _ from "lodash";

const API_KEY = "AIzaSyD-JuOrWuFX26gvrdAwX97cOqDJzeALMuQ";

//Create a new component to produce HTML
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [],
    selectedVideo : null
  }
    this.videoSearch("React Tutorial");
  }

  videoSearch(term){
    YTSearch({key : API_KEY, term: term} , (videos) => this.setState({videos, selectedVideo : videos[0]})  );
  }
render(){
  //console.log(this.state.videos)
  const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);
  return (
    <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} video={this.state.videos}/>
    </div>
    );
}
  
}

//Put component in DOM
ReactDOM.render(<App />, document.querySelector(".container"));
