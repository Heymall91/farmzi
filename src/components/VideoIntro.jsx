export default function VideoIntro(){

    return(
        <section className="video__intro">
            <div className="wrapper">
                <div className="video__intro__block" data-aos="zoom-in" data-aos-duration="5000">
                    <div className="video__intro__ahead">
                        <p className="upper__des">Company Intro Video</p>
                        <h2 className="standart__h2">See our intro video and<br/>
                         lets start your dream<br/>
                         project.</h2>
                    </div>
                    <iframe width="570" height="417.18" src="https://www.youtube.com/embed/bMCPeteJHeY?si=0wYq1vaXA-KArqTH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}