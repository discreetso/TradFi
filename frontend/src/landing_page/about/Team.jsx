function Team() {
    return (
        <div className="container">
            <div className="row p-3 mt-5 border-top">
                <h1 className="text-center">People</h1>
            </div>

            <div className="row p-3 text-muted"
            style={{ lineHeight: '1.3', fontSize: '1.2em'}}>
                <div className="col-6 p-5 text-center">
                    <img src="media/images/nithinKamath.jpg" alt="OwnerImage" style={{ borderRadius:'100%', width:'50%' }} />
                    <h4 className="mt-5">John Doe</h4>
                    <h6>Founder, CEO</h6>
                </div>
                    
                <div className="col-6 p-3">
                    <p>
                        John Doe is Pakistani entrepreneur, best known as the
                        co-founder and CEO of TradFi, Pakistan's largest stock brokerage firm. 
                        He is recognized for revolutionizing the Pakistani brokerage industry by 
                        pioneering a low-cost, flat-fee model for trading. 
                    </p>
                    <p>
                        John began his career in the stock market at the age of 17 and was an
                        active trader for over a decade before founding TradFi. He worked 
                        night shifts at a call center to fund his daytime trading in his early years.
                    </p>
                    <p>
                        He was named Entrepreneur Of The Year 2024 for his contributions to 
                        financial services industry
                    </p>
                    <p>
                        Connect on <a href="#">HomePage</a> / <a href="#">Twitter</a> /  
                        <a href="#"> Trading QnA</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
