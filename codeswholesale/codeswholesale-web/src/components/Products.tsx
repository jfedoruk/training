import * as React from 'react';
import CentralLoader from './CentralLoader';

export default class Products extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            isLoading: true,
            products: []
        };
    }

    async componentDidMount() {
        var json = null;
        try {
            const result = await fetch('/products');
            console.log(result);
            json = await result.text();

            console.log(json);
        } catch (e) {
            console.log(e);
        }

        this.setState({products: json, isLoading: false});
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    <CentralLoader/>
                </div>
            );
        } else {
            return (
                <div>
                    Products {this.state.products}
                </div>
            );
        }
    }
}