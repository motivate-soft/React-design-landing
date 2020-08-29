import React, { Component } from 'react'


export default class Card extends React.Component {


    render() {
        const { id, active, img, title, text, buttonText, onMouseEnter, onMouseLeave } = this.props
        return (
            <div
                // className={active === true ? 'card active-card shadow-lg' : 'card shadow'}
                className="gradient-box mb-3"
                onMouseEnter={() => onMouseEnter(id)}
                onMouseLeave={() => onMouseLeave(id)}>
                <div className="card-body d-flex flex-column">
                    <img src={img} alt={title} className="mx-auto" />
                    <h5 className="mx-auto text-center">{title}</h5>
                    <p className="mx-auto text-center">{text}</p>
                    <button
                        className='btn card-btn'
                    >{buttonText}</button>
                </div>
            </div >
        )
    }

}
