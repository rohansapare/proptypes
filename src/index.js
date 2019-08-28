import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ItemList from './component/ItemList';
import ErrorBoundary from './error/ErrorBoundary';


/* export class index extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                <ItemList/>
                </ErrorBoundary>
            </div>
        )
    }
} */

export default index;


ReactDOM.render(<ItemList />, document.getElementById('root'));

