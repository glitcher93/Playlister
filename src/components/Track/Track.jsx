import './Track.scss';

function Track({ track }) {
    return (
        <article className="track">
            <div className="track__information">
                <h3 className='track__name'>{track.name}</h3> {/* <!-- track name will go here --> */}
                <p className='track__artist'>{`${track.artist} | ${track.album}`}</p> {/* <!-- track artist will go here--> | <!-- track album will go here --> */}
            </div>
            <button class="track__button"></button> {/* <!-- + or - will go here --> */}
        </article>
    )
}

export default Track;