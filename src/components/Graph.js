import React from 'react'
import { Col, Panel } from 'react-bootstrap'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis'

class Graph extends React.Component{
    render(){
        return(
            <Panel header={'graph'}>
                 <XYPlot
                    width={500}
                    height={300}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis/>
                    <YAxis/>
                    <LineSeries data={[
                        {x:1,y:4},
                        {x:5, y:2},
                        {x:12,y:8}
                    ]}
                    />
                </XYPlot>
            </Panel>
        )
    }
}
export default Graph;
