import './TrackList.scss';
import Track from '../Track';

function TrackList({ tracks }) {
    return (
        <div className="tracklist">
            {/* <!-- You will add a map method that renders a set of Track components  --> */}
            {tracks.map(track => {
                return <Track 
                        key={track.id}
                        track={track}
                        />
            })}
        </div>
    )
}

export default TrackList;