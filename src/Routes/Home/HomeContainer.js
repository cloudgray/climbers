import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    loading: true,
    error: null
  };

  async componentDidMount() {}

  render() {
    const { loading, error } = this.state;
    return <HomePresenter loading={loading} error={error} />;
  }
}
