import * as React from 'react';

export default class Product extends React.Component<any, any> {

    render() {
        const fromLow = this.props.product.prices.filter((prices: any) => prices.from === 1)[0];
        const imageSmall = this.props.product.images.filter((images: any) => images.format === 'SMALL')[0];

        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img
                        className="img-responsive"
                        src={imageSmall.image}
                    />
                    <h4>{this.props.product.name}</h4>
                    <p>Price: {fromLow.value}</p>
                </div>
            </div>
        );
    }
}