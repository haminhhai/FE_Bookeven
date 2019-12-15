import React, { Component } from 'react'
import { MDBIcon, MDBBtn } from 'mdbreact';
import { InputNumber } from 'antd'

import '../../styles/cart.scss'
import * as msg from '../../const/message'

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onDelete = product => {
        var { onRemoveProduct } = this.props
        onRemoveProduct(product)
    }

    onChangeQuantity = (e) => {
        var { onUpdateProduct } = this.props
        var { item } = this.props
        onUpdateProduct(item, e)

    }
    render() {
        var { item } = this.props
        return (
            <tr>
                <td className='remove align-middle'>
                    <MDBBtn onClick={() => { this.onDelete(item) }}>
                        <MDBIcon icon="times" />
                    </MDBBtn>
                </td>
                <td className='imgBook align-middle'>
                    <img src={item.src} alt={item.title} />
                </td>
                <td className='name align-middle'>{item.title}</td>
                <td className='quantity align-middle'>
                    <InputNumber min={1} max={item.inventory} defaultValue={item.quantity} onChange={this.onChangeQuantity} />
                </td>
                <td className='price align-middle'>
                    <del className='mr-1'>{this.$utils.formatVND(item.realPrice)}</del>
                    {this.$utils.calDiscountPrice(item.realPrice, item.percentDiscount)}
                </td>
                <td className='total align-middle font-weight-bold'>
                    {this.$utils.calTotalPrice(item.realPrice, item.percentDiscount, item.quantity)}
                </td>
            </tr>
        )
    }
}


export default CartItem;