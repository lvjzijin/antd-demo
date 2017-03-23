import React from 'react';
import { message,Button} from 'antd';
import Header from './layout/header';

const App = React.createClass({
    getInitialState() {
        return {
            date: ''
        };
    },
    handleChange(value) {
        message.info('您选择的日期是: ' + value.toString());
        this.setState({
            date: value
        });
    },
    render() {
        return <div>
            <Header/>
            <div style={{marginTop: 20}}>当前日期：{this.state.date.toString()}</div>
            <Button type="primary">primary</Button>
            <Button type="ghost">ghost</Button>
            <Button>default</Button>
        </div>;
    }
});

export default App;