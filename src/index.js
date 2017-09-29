import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/bootstrap.min.css';

function Title(props) {
  return (
    <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h1 class="gallery-title">{props.titleText}</h1>
    </div>
  );
}

function FilterButtons(props) {
  return (
    <div align="center">
      <button class="btn btn-default filter-button" id="all" onClick={props.onClick} >{props.textAll}</button>
      <button class="btn btn-default filter-button" id="tristan" onClick={props.onClick} >{props.textTristan}</button>
    </div>
  );
}

function Images(props) {
  let image = null;
  if (props.albumType == 'all') {
    image = process.env.PUBLIC_URL + 'all3.jpg';
  } else {
    image = process.env.PUBLIC_URL + 'tristan9.jpg';
  }
  return (
    <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
      <img src={image} width="200" height="200" />
    </div>
  );
}

class PhotoAlbum extends React.Component {
  constructor() {
    super();
    this.state = {
      albumType: 'albumAll',
    };
    this.changeStateAlbum = this.changeStateAlbum.bind(this);
  }

  changeStateAlbum(e) {
    var albumTypeChanged = 'all';
  	switch(e.target.id){
    	case 'all':
        albumTypeChanged = 'all';
        break;
      case 'tristan':
        albumTypeChanged = 'tristan';
        break;
    };
  	this.setState({
    	albumType: albumTypeChanged
    });
  }

  componentDidMount() {
    var that = this;
    document.getElementById("all").addEventListener('click', that.changeStateAlbum, false);
    document.getElementById("tristan").addEventListener('click', that.changeStateAlbum, false);
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <Title  titleText="Tristan's First Day at School" />
        </div>

        <div class="row">
          <FilterButtons  textAll="All" textTristan="Tristan" />
        </div>
        <br/>

        <div class="row">
          <Images albumType={this.state.albumType} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <PhotoAlbum />,
  document.getElementById('root')
);

