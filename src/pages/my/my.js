import React, { Component } from 'react';
import { connect } from "react-redux";
import TopInfo from '@/components/top_info/top_info'

class My extends Component {
    render() {
        return (
            <div>
                {<TopInfo />}
            </div>
        );
    }
}

export default connect()(My);;