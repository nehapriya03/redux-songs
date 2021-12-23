import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

export const SongList = ({ songs, selectSong }) => {
  const renderedList = songs.map((song) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => selectSong(song)}
          >
            Select
          </button>
        </div>
        <div className="content"> {song.title}</div>
      </div>
    );
  });
  return (
    console.log({ songs, selectSong }),
    (<div className="ui divided list">{renderedList}</div>)
  );
};

const mapStateToProps = ({ songs, selectedSong = {} }) => {
  console.log({ songs, selectedSong });
  return { songs, selectedSong };
};

export default connect(mapStateToProps, { selectSong })(SongList);
