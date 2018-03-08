import * as React from 'react';
import CentralLoader from './CentralLoader';
import Product from './Product';

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
        var products = [];

        try {
            const result = await fetch('/products');
            console.log(result);
            json = await result.text();

            // console.log(json);
            products = new Array(JSON.parse(json));
            console.log(products);
        } catch (e) {
            console.log(e);
        }

        this.setState({products: products[0], isLoading: false});
    }

    renderProducts() {
        const products = this.state.products;

        return products.map((product: any, index: any) => {
            return <Product product={product} key={index}/>;
        }).reduce(
            (acc: any, element: any, idx: any) => {
                if (idx % 3 === 0) {
                    acc.push([]);
                }
                acc[acc.length - 1].push(element);
                return acc;
            },
            [])
            .map((row: any, key: number) => {
                return <div className="row" key={key}>{row}</div>;
            });
    }

    filterList() {
        console.log('filter');
    }

    renderFilterForm() {
        return (
            <form>
                <fieldset className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Wyszukaj po nazwie..."
                        onChange={this.filterList}
                    />
                </fieldset>
            </form>
        );
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
                    {this.renderFilterForm()}
                    <div className="container-fluid col-md-10 col-md-offset-1">
                        <div id="portfolio" className="jumbotron">
                            {this.renderProducts()}
                        </div>
                    </div>
                </div>
            );
        }
    }
}