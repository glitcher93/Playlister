import './Track.scss';

function Track({ track, onAdd, onRemove, isRemoval }) {

    const addTrack = () => {
        onAdd(track);
    }

    const removeTrack = () => {
        onRemove(track);
    }

    const renderButton = () => {
        if (isRemoval) {
            return <button 
                    className="track__button"
                    onClick={removeTrack}
                    >
                        -
                    </button>
        }
        return <button 
                className="track__button"
                onClick={addTrack}
                >
                    +
                </button>
    }

    return (
        <article className="track">
            <div className="track__information">
                <h3 className='track__name'>{track.name}</h3> {/* <!-- track name will go here --> */}
                <p className='track__artist'>{`${track.artist} | ${track.album}`}</p> {/* <!-- track artist will go here--> | <!-- track album will go here --> */}
            </div>
            {renderButton()}
        </article>
    )
}

export default Track;