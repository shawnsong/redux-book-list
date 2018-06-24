import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function averate(data) {
    return _.round(_.sum(data) / data.length);
}

export default (props) => {

    return (
        <div>
            <Sparklines width={180} height={120} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{averate(props.data)}</div>
        </div>
    );
};