import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';

export default class CentralLoader extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 mx-auto text-center">
                    <FontAwesome className="fas fa-spinner" name="spinner" spin={true} size="3x"/>
                </div>
            </div>
        );
    }
}
