import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BPChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:props.chartData
    }
    console.log(props.chartData)
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    week: 1
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.data}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Week '+this.props.week,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default BPChart;
