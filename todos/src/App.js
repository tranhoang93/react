import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import TodoItem from './components/todo-item/TodoItem';
import Check from './check.png';
import Checked from './checked.png';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      add: "",
      currentStatus: "all",
      data: []
    }

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkData = this.checkData.bind(this);
    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleFooterClick = this.handleFooterClick.bind(this);
  }

  handleChange(event) {
    const valueInput = event.target.value;
    valueInput !== "" && this.setState({
      add: valueInput
    });
  }

  handleKeyUp(event) {
    const { add, data } = this.state;
    event.keyCode === 13 && this.setState({
      add: "",
      data: [
        {
          targetId: this.addTargetId(),
          name: add.trim(),
          isCompleted: false
        },
        ...data
      ]
    })
  }

  handleClick(item) {
    return (event) => {
      const isCompleted = item.isCompleted;
      const { data } = this.state;
      const index = data.indexOf(item);
      this.setState({
        data: [
          ...data.slice(0, index),
          {
            ...item,
            isCompleted: !isCompleted
          },
          ...data.slice(index + 1)
        ]
      })
      if (event.target.parentElement.dataset.target === item.targetId) {
        item.isCompleted === false && alert("You have not completed this...Are you sure??");
        this.setState({
          data: [
            ...data.slice(0, index),
            ...data.slice(index + 1)
          ]
        })
      }
    }
  }

  handleClickAll() {
    const url = this.checkData();
    const { data } = this.state;
    if (url === Check) {
      this.setState({
        data: data.map( (elt) => ({...elt, isCompleted: true}) )
      });
    } else {
      this.setState({
        data: data.map( (elt) => ({...elt, isCompleted: false}) )
      });
    }
  }

  handleFooterClick(event) {
    const { data } = this.state;
    let statusItem = event.target.dataset.status;
    statusItem !== "clear-completed" && this.setState({
        currentStatus: event.target.dataset.status
      })
    if (statusItem === "clear-completed") {
      let filterData = data.filter(elt => !elt.isCompleted);
      this.setState({
        data: filterData
      });
    }
  }

  checkData() {
    const { data } = this.state;
    let filtered = data.filter( elt => !elt.isCompleted );
    if (filtered.length > 0) {
      return Check;
    } else return Checked;
  }

  filterDataStatus(currentStatus) {
    const {data} = this.state;

    switch (currentStatus) {
      case "all":
        return data;
      case "active":
        return data.filter(elt => !elt.isCompleted);
      case "completed":
        return data.filter(elt => elt.isCompleted);
    }
  }

  addTargetId() {
    const { data } = this.state;
    const l = data.length + 1;
    return "data-" + l;
  }

  render() {
    const { add, currentStatus, data } = this.state;
    let urlImgAll = this.checkData();
    let filterData = this.filterDataStatus(currentStatus);

    return (
      <div className="App">
        <p className='title'>todos</p>
        <div className="wr">
          <Header onChange={this.handleChange} onKeyUp={this.handleKeyUp} data={add}/>
          {
            data.length > 0 && <img
              src={urlImgAll}
              alt="checkbox"
              width={30}
              height={30}
              className="all-checkbox"
              onClick={this.handleClickAll}
              />
          }

          {
            filterData && filterData.map( (item, index) => <TodoItem
              key={index}
              onClick={this.handleClick(item)}
              data={item}
            />)
          }

          {
            data.length > 0 && <Footer
              status={currentStatus}
              onClick={this.handleFooterClick} >{data}</Footer>
          }

        </div>
      </div>
    );
  }
}

export default App;
