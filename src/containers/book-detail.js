import React, {Component} from 'react'
import { connect } from 'react-redux'
import { activeBook } from '../reducers/active_book_reducer'
class BookDeatils extends Component {
    render() {

        if (this.props.bookDetails == undefined) {
            return( <h1>Click on a book</h1>)
        }
        return (
            <div>
                <h1>Book Details</h1>
                <h3><b>{this.props.bookDetails.title}</b></h3>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { bookDetails: state.active_book}
}

export default connect(mapStateToProps)(BookDeatils);