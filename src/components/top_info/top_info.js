import React, { Component } from 'react';
import './top_info.scss'

class top_info extends Component {
    render() {
        return (
            <div className="info">
                <div className="pic-box">
                    <img src="http://elm.cangdu.org/img/16e07de610557177.jpg"/>
                </div>
                <p className="">今夜有雨</p>
                <p>
                    <span>
                        <em>粉丝</em>
                        <i>344</i>
                    </span>
                    <span>
                        <em>关注</em>
                        <i>344</i>
                    </span>
                </p>
                <a href="#">关注</a>
            </div>
        )
    }
}

export default top_info;