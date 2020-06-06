import React, { Component } from 'react';
import './App.css';
import Chart from '../components/Chart';
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    axios
      .get("/api/bplogchart/all")
      .then(res => {
        this.setState({
          data: res.data
        });
        console.log(res.data[0].systolic);
        //console.log(BPdata[2]);
      })
      .catch(err => console.log(err));

    this.setState({
      chartData:{
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'thu', 'Fri', 'Sat'],
        datasets:[
          {
            label:'Systolic Data',
            data:[
              122,
              118,
              122,
              106,
              105,
              117,
              124
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
          <h2>Blood Pressure Charts</h2>
          <br/><br></br>
        <Chart chartData={this.state.chartData} week="1" legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;
