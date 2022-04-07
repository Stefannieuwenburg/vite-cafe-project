export default function Home(props) {
    return (
        <>
            <div className="main_div" id="home">
                <h1 className="main_text">THE CAFE</h1>
                <p>
                    The Cafe lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
                <p>
                    In addition to our full espresso and brew bar menu, we serve
                    fresh made-to-order breakfast and lunch sandwiches, as well
                    as a selection of sides and salads and other good stuff.
                </p>
                <div>
                    <p>
                        <i>"" Fresh is the new sweet.</i>
                    </p>
                    <p>Chef, Coffeeist and Owner: Liam Brown</p>
                </div>
                <img src={"https://www.ivyboarding.com/w3template/w3images/coffeeshop.jpg"} alt="home-pic"></img>
            </div>
        </>
    );
}

