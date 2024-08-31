import React, { useState } from "react";
import Products from "./Products";

const FoodRecipe = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const YOUR_APP_ID = "32de4395";
    const YOUR_APP_KEY = "686ead6880b7c1acd6cb07d35a79c287";

    const submitHandler = (e) => {
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
            .then(response => response.json())
            .then(data => setData(data.hits))
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div>
            <h2>Food Recipe App</h2>
            <form onSubmit={submitHandler}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> <br /><br />
                <input type="submit" className="btn btn-primary" value="Search" />
            </form>
            {data.length >= 1 ? <Products data={data} /> : null}
        </div>
    );
};

export default FoodRecipe;