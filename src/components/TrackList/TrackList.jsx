import './TrackList.scss';
import Track from '../Track';

function TrackList({ tracks, onAdd, onRemove, isRemoval }) {
    return (
        <div className="tracklist">
            {tracks.map(track => {
                return <Track 
                        key={track.id}
                        track={track}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        isRemoval={isRemoval}
                        />
            })}
        </div>
    )
}

export default TrackList;