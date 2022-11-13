import React from "react";
import "./App.css";

class App extends React.Component
{
    constructor()
    {
        super();
        this.BubbleSort = this.BubbleSort.bind(this);
        this.HandleInput = this.HandleInput.bind(this);
        this.properArray = [];
        this.state = {
            result : "Input your numbers (e.g. 11, 12, 13)",
            array: []
        }
    }

    render()
    {
        return(
            <div className="container">
                <h1>Bubblesort</h1>
                <input type="textarea" onChange={this.HandleInput}/>
                <button className="mybuttonclass" onClick={this.BubbleSort}>SORT</button>
                <p className="result">{this.state.result}</p>
            </div>
        );
    }

    HandleInput(event)
    {
        this.properArray = event.target.value.split(",");
    }

    BubbleSort()
    {
        let arr = this.properArray;

        for(let i = 0; i < arr.length; i++)
        {
            for(let a = 0; a < arr.length; a++)
            {
                console.log(arr, i)
                console.log(arr[a], arr[a+1])
                if(+arr[a] > +arr[a + 1])
                {
                    let temp = arr[a];
                    arr[a] = arr[a + 1];
                    arr[a + 1] = temp;
                }
            }
        }
        this.properArray = arr;
        this.setState({array : this.properArray});
        this.setState({result : this.properArray.join(", ")})
    }
}

export default App;