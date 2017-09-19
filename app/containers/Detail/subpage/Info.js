import React, { Component } from 'react';
import {getInfo} from "../../../api/detail/index";
import {withRouter} from 'react-router-dom';
import Loading from "../../../components/Loading/index";
import InfoComponent from "../../../components/InfoComponent/index";
class Info extends Component {
    constructor() {
        super();
        this.state = {data: false};
    }
    render() {
        return (
            <div>
                {
                    this.state.data? <InfoComponent data={this.state.data}/> : <Loading/>
                }
            </div>
        )
    }
    componentDidMount() {
        getInfo(this.props.match.params.id).then(data => {
            this.setState({data});
        });
    }
}
export default withRouter(Info);