import React from 'react';
import './App.css';

// Components
import Button from "./components/Button";
import ProductCard from "./components/ProductCard";
import Feature from "./components/Feature";
import Tile from "./components/Tile";

// Images
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"

// External data source
import {data} from "./data";


function App() {

    // destruction
    const [{buttons, productsInfo, features}] = data


    return (
        <>
            <nav>
                <h1>Handbags & Purses</h1>
                <Button title={"to the collection"} disabled={false}/>
                <Button title={"shop all bags"} disabled={false}/>
                <Button title={"pre-orders"} disabled={true}/>
            </nav>

            <main>
                <ProductCard label={"Best seller"} image={bag1} title={"The handy bag"} price={"400"}/>
                <ProductCard label={"Best seller"} image={bag2} title={"The stylish bag"} price={"250"}/>
                <ProductCard label={"New collection"} image={bag3} title={"The simple bag"} price={"300"}/>
                <ProductCard label={"New collection"} image={bag4} title={"The trendy bag"} price={"150"}/>
            </main>

            <footer>
                <Feature image={null} title={"the brand"}
                         text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut harum, neque. Ab at blanditiis cum delectus sdgvsd`}/>
                <Feature image={brand} title={"the brand"}
                         text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut harum, neque. Ab at blanditiis cum delectus doloremque dolorum earum error eum iste itaque libero molestias neque nesciunt, non placeat provident quidem rem rerum similique soluta suscipit ut veritatis voluptate? Reprehenderit."}/>
                <Feature image={story} title={"the brand"}
                         text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut harum, neque. Ab at blanditiis cum delectus doloremque dolorum earum error eum iste itaque libero molestias neque nesciunt, non placeat provident quidem rem rerum similique soluta suscipit ut veritatis voluptate? Reprehenderit."}/>
                <Feature image={null} title={"our story"}
                         text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut harum, neque. Ab at blanditiis cum delectus doloremque dolorum earum error eum iste itaque libero molestias neque nesciunt, non placeat providet quidem rem rerum similique soluta suscipit ut veritatis voluptate? Reprehenderit."}/>
            </footer>

            <p>Other solution. All the data comes from a external data source, <code>data.js</code></p>
            <nav>
                <h1>Handbags & Purses</h1>
                {buttons.map((item, index) => <Button key={index} title={item.title} disabled={item.disabled}/>)}
            </nav>

            <main>
                {productsInfo.map((info, index) => < ProductCard key={index} label={info.label}
                                                                 image={info.imageUrl}
                                                                 title={info.title}
                                                                 price={info.price}/>)}
            </main>

            <footer>
                {features.map((feature, index) => <Tile key={index} image={feature.imageUrl} title={feature.title}
                                                        body={feature.body}/>)}
            </footer>
        </>
    );
}

export default App;



