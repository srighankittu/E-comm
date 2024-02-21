import { useState } from "react";
import Header from "./Header";

function Dashboard() {
  const [products, setProducts] = useState([]);
  useState(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch("https://dummyjson.com/products");
    const jsonData = await data.json();
    console.log(jsonData.products);
    setProducts(jsonData.products);
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex flex-wrap">
        {products.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                width: "300px",
                margin: "10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.images[0]}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <h3>{item.title}</h3>
              <p style={{ margin: "4px 0", color: "#555" }}>
                <strong>Brand:</strong> {item.brand}
              </p>
              <p style={{ margin: "4px 0", color: "#555" }}>
                <strong>Category:</strong> {item.category}
              </p>
              <p style={{ margin: "4px 0", color: "#555", fontSize: "14px" }}>
                {item.description}
              </p>
              {item.discountPercentage > 0 && (
                <p style={{ margin: "4px 0", color: "red" }}>
                  <strong>Discount:</strong> {item.discountPercentage}%
                </p>
              )}
              <p style={{ margin: "4px 0", color: "#555" }}>
                <strong>Price:</strong> ${item.discountPercentage.toFixed(2)}{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#999",
                    marginLeft: "8px",
                  }}
                >
                  ${item.price.toFixed(2)}
                </span>
              </p>
              <p style={{ margin: "4px 0", color: "#555" }}>
                <strong>Rating:</strong> {item.rating} / 5
              </p>
              <p style={{ margin: "4px 0", color: "#555" }}>
                <strong>Stock:</strong> {item.availableStock} available
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
