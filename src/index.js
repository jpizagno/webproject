import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import './css/index.css';
import './css/bootstrap.min.css';
import './css/custom.css';

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
,"tristan.jpg"];


function Title(props) {
  return (
    <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h1 class="gallery-title">{props.titleText}</h1>
    </div>
  );
};

function FilterButtons(props) {
  return (
    <div align="center">
      <button class="btn btn-default filter-button" id="all" onClick={props.onClick} >{props.textAll}</button>
      <button class="btn btn-default filter-button" id="tristan" onClick={props.onClick} >{props.textTristan}</button>
    </div>
  );
};

class MyImage extends React.Component {
    constructor(props) {
        super(props);
    }

    clickHandler(image) {
        this.props.setImageOpenModal(image);
    }

    render() {
        return (
            <div class="col-md-3 col-sm-4 col-xs-6">
                <div class="thumbnail_container">
                  <div class="thumbnail">
                    <img src={ this.props.image} onClick={ () => this.clickHandler(this.props.image) } />
                </div>  
            </div>  
          </div>
        )
    }
}

class PhotoAlbum extends Component {
 constructor(props) {
    super(props);

    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.changeStateAlbum = this.changeStateAlbum.bind(this);
    this.setImageOpenModal = this.setImageOpenModal.bind(this);

    this.state = {
      open: false,
      albumType: 'albumAll',
      imageInModal: "all1.jpg",
    };
  }

  setImageOpenModal(imageToSet) {
    this.setState({ imageInModal: imageToSet });
    this.onOpenModal();
  }

  onOpenModal() {
    this.setState({ open: true });
  }
 
  onCloseModal() {
    this.setState({ open: false });
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
        for (var i=0 ; i < imagesOnDiskAll.length ; i++) {
          imagesRender.push(
            <MyImage image={imagesOnDiskAll[i]}  setImageOpenModal={this.setImageOpenModal}/>  
          );
        }
    } else {
      //this.imagesHtmlTristan.map( (image) => imagesRender.push(image) );
      for (var i=0 ; i < imagesOnDiskTristan.length ; i++) {
          imagesRender.push(
            <MyImage image={imagesOnDiskTristan[i]}  setImageOpenModal={this.setImageOpenModal}/>  
          );
        }
    }

    const { open } = this.state;
    return (
      <div class="container">
        <Modal open={open} onClose={this.onCloseModal} little>
          <img src={this.state.imageInModal} />
        </Modal>

         <div class="row">
          <Title  titleText="Tristan's First Day at School" />
        </div>

        <div class="row">
          <FilterButtons  textAll="All" textTristan="Tristan" />
        </div>

         <div class="row">
            {imagesRender}
         </div>


      </div>

    );
  }
}

ReactDOM.render(
  <PhotoAlbum />,
  document.getElementById('root')
);

