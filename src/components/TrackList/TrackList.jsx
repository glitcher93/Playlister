import './TrackList.scss';
import Track from '../Track';

function TrackList({ tracks, onAdd, isRemoval }) {
    return (
        <div className="tracklist">
            {/* <!-- You will add a map method that renders a set of Track components  --> */}
            {tracks.map(track => {
                return <Track 
                        key={track.id}
                        track={track}
                        onAdd={onAdd}
                        isRemoval={isRemoval}
                        />
            })}
        </div>
    )
}

export default TrackList;