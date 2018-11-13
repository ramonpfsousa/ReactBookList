import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.activeBook) {
            return <div>Selecione um livro</div>;
        }

        return (
            <div>
                <h3>{this.props.activeBook.title}</h3>
                <p>{this.props.activeBook.detail}</p>
                <small>Pages: {this.props.activeBook.pages} </small>
            </div>
        );
    }
}

function mapStateToProps({activeBook}) {
    
    return { 
        activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);