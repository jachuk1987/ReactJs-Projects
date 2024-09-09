import React from "react";

const Products = ({ data }) => {
    return (
        <div>
            <div className="row">
                {data.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={item.recipe.image} alt="Recipe" />
                            <div className="card-body">
                                <center>
                                    <h4 className="card-title">{item.recipe.label}</h4>
                                    <p className="card-text">Total Amount of Calories: {Math.round(item.recipe.calories)}</p>
                                    <a href={item.recipe.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                        View Recipe
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                ))};
            </div>
        </div>
    );
};

export default Products;