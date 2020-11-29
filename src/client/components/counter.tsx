import React from "react";

export interface ICounterProps {}

export interface ICounterState {
  count: number;
}

export interface ICounterEvent extends React.MouseEvent<HTMLButtonElement> {}

export class Counter extends React.PureComponent<ICounterProps, ICounterState> {
  constructor(props: ICounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // change code below this line

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  // change code above this line
  render() {
    return (
      <div>
        <button className="inc" onClick={(e: ICounterEvent) => this.increment()}>
          Increment!
        </button>
        <button className="dec" onClick={(e: ICounterEvent) => this.decrement()}>
          Decrement!
        </button>
        <button className="reset" onClick={(e: ICounterEvent) => this.reset()}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}
