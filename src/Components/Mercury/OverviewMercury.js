import '../../Components/Global.css';

export default function OverviewMercury (){

    return(
        <div className='content-ctr'>
            <div className='img-ctr content'>
                <img alt="planet mercury" src={require("./img/overview.png")} />
            </div>
            
            <article className='content'>
                <h1>MERCURY</h1>
                <p>
                Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.
                </p>
                <div className='source'>
                    <p id="source-label">Source:</p><a href="https://en.wikipedia.org/wiki/Mercury_(planet)" target='_blank'>Wikipedia</a>
                </div>
                
            </article>
        </div>
    )
}