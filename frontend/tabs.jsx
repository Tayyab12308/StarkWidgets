import React from 'react';
import Headers from './headers';

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: 0
    }
    this.selectedTab = this.selectedTab.bind(this);
  }

  selectedTab(idx) {
    this.setState({ selectedTab: idx })
  }

  render() {
    const content = this.props.tabs[this.state.selectedTab];

    return (
      <>
      <div className="all-tabs">
        <h1 className="taw-title">Tabs</h1>
        <div className="tabs-container">
          <div className="tabs">
            <Headers 
              selectedTab={this.state.selectedTab}
              changeTab={this.selectedTab}
              tabs={this.props.tabs}
            >
            </Headers>
            <div className="content">
              <article id={content.id}>
              </article>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Tabs;