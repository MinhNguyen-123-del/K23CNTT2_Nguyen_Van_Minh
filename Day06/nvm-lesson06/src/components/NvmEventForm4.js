import React, { Component } from "react";

class NvmEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvmSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    nvmHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.nvmSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
       
        this.setState({
            nvmSelectCheckBox:selectedOptions
        });
    }

  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.nvmSelectCheckBox.includes("Apple")}
              onChange={this.nvmHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.nvmSelectCheckBox.includes("Banana")}
              onChange={this.nvmHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.nvmSelectCheckBox.includes("Orange")}
              onChange={this.nvmHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NvmEventForm4;