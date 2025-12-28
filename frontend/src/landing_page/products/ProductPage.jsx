import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe"

function ProductPage() {
    return (
        <>
        <Hero />
        
        <LeftSection 
        imageURL="media/images/kite.png"
        productName="kite" 
        productDescription="Our ultra trading flagship platform with streaming market data, advance charts, an elegant UI, and more. Enjoy the kite experience seamleslyon your Andriod and iOS devices." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>
        
        <RightSection 
        imageURL="media/images/console.png"
        productName="Console" 
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations. " 
        learnMore=""/>
        
        <LeftSection 
        imageURL="media/images/coin.png"
        productName="Coin" 
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bit-size cards to help you learn on the go." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>

        <RightSection 
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API" 
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase. " 
        learnMore=""/>

        <LeftSection 
        imageURL="media/images/varsity.png"
        productName="Varsity mobile" 
        productDescription="Our ultra trading flagship platform with streaming market data, advance charts, an elegant UI, and more. Enjoy the kite experience seamleslyon your Andriod and iOS devices." 
        tryDemo="" 
        learnMore="" 
        googlePlay="" 
        appStore=""/>
        
        <p className="text-center mt-5 mb-5">
            Want to know more about our technology stack? Check out Zerodha.tech blog.
        </p>

        <Universe />
        </>
    );
}

export default ProductPage;