import './Track.scss';

function Track() {
    return (
        <article className="track">
            <div className="track__information">
                <h3 className='track__name'></h3> {/* <!-- track name will go here --> */}
                <p className='track__artist'></p> {/* <!-- track artist will go here--> | <!-- track album will go here --> */}
            </div>
            <button class="track__button"></button> {/* <!-- + or - will go here --> */}
        </article>
    )
}

export default Track;