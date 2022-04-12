import { links } from './components/Data/Data'
import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import ShopLogo from "./components/image/shop_logo.png"
import "./App.css"

export default function App() {
    return (
        <main id="home">
            <Navbar />
            <section className="home">
                <div className="main_div" id="home">
                    <h1 className="main_text">THE CAFE</h1>
                    <p>
                        The Cafe lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        In addition to our full espresso and brew bar menu, we
                        serve fresh made-to-order breakfast and lunch
                        sandwiches, as well as a selection of sides and salads
                        and other good stuff.
                    </p>
                    <div>
                        <p>
                            <i>"" Fresh is the new sweet.</i>
                        </p>
                        <p>Chef, Coffeeist and Owner: Liam Brown</p>
                    </div>
                    <img
                        src={
                            "https://www.ivyboarding.com/w3template/w3images/coffeeshop.jpg"
                        }
                        alt="home-pic"
                    ></img>
                </div>
                <br />
            </section>
            <section className="about" id="about">
                <div className="main_div" id="about">
                    <h1 className="main_text">ABOUT THE CAFE</h1>
                    <p>
                        The Cafe was founded in blabla by Mr. Smith in lorem
                        <br />
                        ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        <br />
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        <br />
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <br />
                    <p>
                        In addition to our full espresso and brew bar menu, we
                        serve fresh made-to-order breakfast and lunch
                        sandwiches, as well as a selection of sides and salads
                        and other good stuff.
                    </p>
                    <br />
                    <img
                        className="about_img"
                        src={
                            "https://www.ivyboarding.com/w3template/w3images/coffeehouse2.jpg"
                        }
                        alt="home-pic"
                    ></img>
                    <p>the Cafe </p>
                    <br />
                </div>
            </section>
            <section className="menu" id="menu">
                <div className="main_div" id="menu">
                    <h1 className="main_text">THE MENU</h1>

                    <h1>Eat</h1>
                    <br />
                    <h5>Bread Basket</h5>
                    <p>
                        Assortment of fresh baked fruit breads and muffins 5.50
                    </p>

                    <h5>Honey Almond Granola with Fruits</h5>
                    <p>
                        Natural cereal of honey toasted oats, raisins, almonds
                        and dates 7.00
                    </p>

                    <h5>Belgian Waffle</h5>
                    <p>Vanilla flavored batter with malted flour 7.50</p>

                    <h5>Scrambled eggs</h5>
                    <p>
                        Scrambled eggs, roasted red pepper and garlic, with
                        green onions 7.50
                    </p>

                    <h5>Blueberry Pancakes</h5>
                    <p>With syrup, butter and lots of berries 8.50</p>
                </div>

                <div>
                    <h1>Drinks</h1>
                    <br />
                    <h5>Coffee</h5>
                    <p>Regular coffee 2.50</p>
                    <p>cappuccino 3.50</p>
                    <br />
                    <h5>Chocolato</h5>
                    <p>Chocolate espresso with milk 4.50</p>

                    <h5>Corretto</h5>
                    <p>Whiskey and coffee 5.00</p>

                    <h5>Iced tea</h5>
                    <p>Hot tea, except not hot 3.00</p>

                    <h5>Soda</h5>
                    <p>Coke, 2.50</p>
                    <p>Sprite, 2.50</p>
                    <p>Fanta, 2.50</p>
                    <p>choco, 2.50</p>
                    <p>lemon, 2.50</p>
                </div>
            </section>
            <section className="location" id="location">
                <div className="main_div" id="location">
                    <h1 className="main_text">MAP</h1>
                    <br />
                    <p>You Can find us at this address ant this location.</p>
                    <br />
                    <div>
                        <img
                            className="map_img"
                            src={"https://www.w3schools.com/w3images/map.jpg"}
                            alt="map-pic"
                        ></img>
                    </div>
                    <br />
                    <p>
                        <span>FYI!</span> We offer full-service catering for any
                        event, large or small. We understand your needs and we
                        will cater the food to satisfy the biggerst criteria of
                        them all, both look and taste.
                    </p>
                    <br />
                    <p>
                        <strong>Opening hours:</strong> everyday from 6am to
                        5pm.
                    </p>
                    <p>
                        <strong>Address:</strong> 15 Adr street, 5015, NY
                    </p>
                </div>
            </section>
            <section className="footer" id="footer">
                <h3>Volg Mij</h3>
                <p className="icon_footer">
                    <a href="https://github.com/Stefannieuwenburg">
                        <AiOutlineGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/stefan-nieuwenburg-3030a1213/">
                        <IoLogoLinkedin />
                    </a>
                </p>
                <p>
                    © Copyright 2022 | Ontwikkeling door Stefan Nieuwenburg
                    Services | Alle rechten voorbehouden.
                </p>
                <br />
            </section>
        </main>
    );
}

function Navbar() {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop
    window.scrollTo({
      left: 0,
      top: location - 64,
    })
  }
    return (
        <nav className="sticky">
            <div>
                <a href="#footer">
                    <img className="logo" src={ShopLogo} alt="Logo"></img>
                </a>
            </div>
            <div>
                {/* { links} */}
                <div className="nav_links">
                    {links.map((link) => {
                        return (
                            <a
                                href={link.url}
                                key={link.id}
                                onClick={handleClick}
                            >
                                {link.text}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}








