import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { MDBCard, MDBIcon, MDBCardBody, MDBCardTitle, MDBCardText, MDBMask, MDBView } from 'mdbreact'
import * as bookActions from '../../../actions/book'

import './style.scss'
import { bindActionCreators } from 'C:/Users/ADMIN/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

//data for CoupleButton Component
const data = {
  icon1: 'info-circle',
  text1: 'Chi tiết',
  icon2: 'shopping-cart',
  text2: 'Mua'
}
class BPCard extends Component {
  state = {
    redir: false,
    title: ''
  }
  getInform = () => {
    const {book, bookActions, fieldsBook } = this.props
    const { getDetailBook } = bookActions
    var category = Object.assign({}, fieldsBook.filter((item) => {
      return item.id === book.topic
    }))
    book.category = category[0]
    getDetailBook(book)

    this.setState({
      redir: true,
      title: book.title
    })

  }

  onAddToCart = book => {
    this.props.onAddToCart(book)

  }
  render() {
    var book = {
      id: 1,
      src: '',
      title: '',
      author: '',
      discount: 0,
      amount: 0,
      topic: 0,
      iventory: 0,
      rate: 0
    }
    if (this.props.book !== undefined)
      book = this.props.book
    const { redir, title } = this.state
    if (redir)
      return <Redirect to={`/${title}`} />
    return (
      <div className='bpcard-container'>
        <MDBCard style={{ minWidth: '14rem', height: 'auto' }} className='text-center'>
          <MDBView className='book-wrapper' hover onClick={this.getInform}>
            <LazyLoad height='200' offset={100} once>
              <img src={book.src} waves="true" className="imgBook" alt="" overlay="true" />
            </LazyLoad>
            <MDBMask className="flex-center" overlay="white-light" />
          </MDBView>
          <MDBCardBody>
            <MDBCardTitle onClick={this.getInform} className="h5" title={book.title}>{book.title}</MDBCardTitle>
            <MDBCardText className='font-italic text-muted'>
              {book.author}
            </MDBCardText>
            <div className='price'>
              {book.discount !== undefined &&
                <del>{this.$utils.formatVND(book.discount)}</del>}
              <p className='h3'>{this.$utils.formatVND(book.amount)}</p>
            </div>
            <div className='coubtn-wrapper'>
              <div className='coubtn-border'>
                <span className='detail' onClick={this.getInform}>
                  <div>
                    <MDBIcon icon={data.icon1} />
                  </div>
                  {data.text1}
                </span>
                <span className='cart' onClick={() => { this.onAddToCart(book) }}>
                  <div>
                    <MDBIcon icon={data.icon2} />
                  </div>
                  {data.text2}
                </span>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    )
  }
}

const MapStateToProps = state => {
  return {
    fieldsBook: state.fieldsBook
  }
}

const MapDispatchToProps = dispatch => {
  return {
    bookActions: bindActionCreators(bookActions, dispatch)
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(BPCard);
