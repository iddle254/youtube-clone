import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

import "./searchpage.styles.css";
import ChannelRow from "../ChannelRow/ChannelRow.component";
import VideoRow from "../VideoRow/VideoRow.component";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        channel="clever coder"
        verified
        subs="695k"
        noOfVideos={382}
        description="you can now find awesome programming  tutorials for free here"
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a free hour training...check"
        timestamp="59 seconds ago"
        channel="clever coder"
        title="let's build a youtube clone with reactjs for begginers"
        image="https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
      />
    </div>
  );
}

export default SearchPage;
