import React from 'react';
import DetailSection1Component from './detail/DetailSection1Component';
import DetailSection2Component from './detail/DetailSection2Component';

export default function ProductDetailComponent({dkey}) {
    return (
        <main id='productDetail'>
            <DetailSection1Component  dkey={dkey}/>
            <DetailSection2Component/>
        </main>
    );
}

