import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/bootstrap.min.css';

var imagesOnDiskAll = ["all1.jpg"
,"all2.jpg"
,"all3.jpg"
,"all4.jpg"
,"all5.jpg"
,"all6.jpg"
,"all7.jpg"
,"all_julia_jim.jpg"
,"tristan11.jpg"
,"tristan10.jpg"
,"tristan12.jpg"
,"tristan13.jpg"
,"tristan14.jpg"
,"tristan15.jpg"
,"tristan1.jpg"
,"tristan2.jpg"
,"tristan3.jpg"
,"tristan4.jpg"
,"tristan5.jpg"
,"tristan6.jpg"
,"tristan7.jpg"
,"tristan8.jpg"
,"tristan9.jpg"
,"tristan.jpg"];

var imagesOnDiskTristan = ["tristan11.jpg"
,"tristan10.jpg"
,"tristan12.jpg"
,"tristan13.jpg"
,"tristan14.jpg"
,"tristan15.jpg"
,"tristan1.jpg"
,"tristan2.jpg"
,"tristan3.jpg"
,"tristan4.jpg"
,"tristan5.jpg"
,"tristan6.jpg"
,"tristan7.jpg"
,"tristan8.jpg"
,"tristan9.jpg"
,"tristan.jpg"];

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

class PhotoAlbum extends React.Component {
  constructor() {
    super();
    this.state = {
      albumType: 'albumAll',
    };
    this.changeStateAlbum = this.changeStateAlbum.bind(this);

    //var imagesInternalTestAll = ["all3.jpg"
    //,"tristan9.jpg"];

    this.imagesHtmlAll = [];
    for (var i=0 ; i < imagesOnDiskAll.length ; i++) {
      this.imagesHtmlAll.push(
        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
        <img src={  imagesOnDiskAll[i]  } width="200" height="200" />
      </div>
      );
    }

    this.imagesHtmlTristan = [];
    for (var i=0 ; i < imagesOnDiskTristan.length ; i++) {
      this.imagesHtmlTristan.push(
        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
        <img src={ imagesOnDiskTristan[i]} width="200" height="200" />
      </div>
      );
    }

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

    let imagesRender = [];
    if(this.state.albumType === 'all') {
      this.imagesHtmlAll.map( (image) => imagesRender.push(image) );
    } else {
      this.imagesHtmlTristan.map( (image) => imagesRender.push(image) );
    }

    return (
      <div class="container">
        <div class="row">
          <Title  titleText="Tristan's First Day at School" />
        </div>

        <div class="row">
          <FilterButtons  textAll="All" textTristan="Tristan" />
        </div>
        <br/>

        {imagesRender}

      </div>
    );
  }
}

ReactDOM.render(
  <PhotoAlbum />,
  document.getElementById('root')
);

