import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Song Detail</h3>
      <p>
        Title: {song.title} <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return { song: selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
