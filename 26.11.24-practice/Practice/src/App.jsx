import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    { name: "iPhone", category: "Electronics", price: 3000, inStock: true },
    { name: "MacBook", category: "Electronics", price: 6000, inStock: true },
    { name: "Banana", category: "Fruits", price: 5, inStock: true },
    { name: "T-Shirt", category: "Clothing", price: 80, inStock: true },
    { name: "Sofa", category: "Furniture", price: 2000, inStock: true },
    { name: "Carrot", category: "Vegetables", price: 3, inStock: true },
    { name: "Shoes", category: "Clothing", price: 150, inStock: true },
  ]);

  const [value, setValue] = useState("");
  const [valuePrice, setValuePrice] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState("");
  const [categories, setCategories] = useState("");
  const [filterArr, setFilterArr] = useState(products);
  const [dir, setDir] = useState("");
  const [sum, setSum] = useState(0);
  const [mostItem, setMostItem] = useState(null);
  const [likeArr, setLikeArr] = useState([]);
  const [changeArr, setChangeArr] = useState(products);
  const [showLikes, setShowLikes] = useState(false);
  const [priceDisplay, setPriceDisplay] = useState(true)
  const [nameEdit, setNameEdit,] = useState("");
  const [categoryEdit, setCategoryEdit,] = useState("");
  const [priceEdit, setPriceEdit,] = useState(0);
  const [inStockEdit, setInStockEdit,] = useState(false);
  const [editingProductName, setEditingProductName] = useState(null);




  const startEdit = (product) => {
  setNameEdit(product.name);
  setCategoryEdit(product.category);
  setPriceEdit(product.price);
  setInStockEdit(product.inStock);
  setEditingProductName(product.name);  // נשמור מי המוצר שאנחנו עורכים
};

  
  const editBtn = () => {
    if (editingProductName === null) {
      alert("No Product To Edit")
      return;
    }
    const newEditObject = { name:nameEdit, category:categoryEdit,price:Number(priceEdit),inStock:inStockEdit === "true" || inStockEdit === true}
    const updateProduct = products.map(p => {
      if (p.name === editingProductName) {
        return newEditObject
        
      } else {
        return p
      }
      

    })
    setNameEdit("");
    setCategoryEdit("");
    setPriceEdit(0);
    setInStockEdit(false);
    setProducts(updateProduct)
    setEditingProductName(null)

    

  }


  const likeBtn = (product) => {
    const findProduct = likeArr.some((p) => p.name === product.name);
    if (!findProduct) {
      setLikeArr([...likeArr, product]);
    } else {
      const updateArr = likeArr.filter((p) => p.name !== product.name);
      setLikeArr(updateArr);
    }
  };

  const addItem = () => {
    if (name.trim() === "") {
      alert("Name is required");
      return;
    }
    if (category.trim() === "") {
      alert("Category is required");
      return;
    }
    if (inStock !== true && inStock !== false) {
      alert("Please select stock status");
      return;
    }
    if (isNaN(Number(price)) || Number(price) <= 0) {
      alert("Price must be a positive number");
      return;
    }

    const newItem = { name, category, price: Number(price), inStock };

    const itemExists = products.some(
      (product) => product.name === newItem.name
    );
    if (itemExists) {
      alert("This item already exists in the list");
      return;
    }

    setProducts([...products, newItem]);
    setName("");
    setCategory("");
    setPrice("");
    setInStock(null);
  };

  useEffect(() => {
    const total = products.reduce((acc, cur) => acc + cur.price, 0);
    setSum(total);

    if (filterArr.length > 0) {
      const maxProduct = filterArr.reduce((max, item) =>
        max.price > item.price ? max : item
      );
      setMostItem(maxProduct);
    } else {
      setMostItem(null);
    }
  }, [products, filterArr]);

  const updateList = () => {
    let list = [...products];

    if (value !== "") {
      list = list.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
    }

    if (valuePrice !== "") {
      list = list.filter((product) => product.price <= Number(valuePrice));
    }

    if (categories !== "") {
      list = list.filter((product) =>
        product.category.toLowerCase().includes(categories.toLowerCase())
      );
    }

    if (dir === "up") {
      list = list.sort((a, b) => a.price - b.price);
    } else if (dir === "down") {
      list = list.sort((a, b) => b.price - a.price);
    }

    setFilterArr(list);
  };

  const removeItem = (product) => {
    const newProducts = products.filter((p) => p.name !== product.name);
    setProducts(newProducts);
  };

  useEffect(() => {
    updateList();
  }, [value, dir, valuePrice, products, categories]);

  useEffect(() => {
    if (showLikes) {
      setChangeArr(likeArr);
    } else {
      setChangeArr(filterArr);
    }
  }, [showLikes, likeArr, filterArr]);

  return (
    <div>
      <button onClick={() => setPriceDisplay(prev => !prev)}>Price Button</button>
      <button onClick={() => setDir("up")}>Up To Down</button>
      <button onClick={() => setDir("down")}>Down To Up</button>
      <p>filters</p>
      <select
        onChange={(e) => setCategories(e.target.value)}
        name="categories"
        id="categories"
        value={categories}
      >
        <option value="">categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Furniture">Furniture</option>
        <option value="Vegetables">Vegetables</option>
      </select>
      <button onClick={() => setCategories("")}>Clear</button>

      <button onClick={() => setShowLikes(!showLikes)}>
        {showLikes ? "To Filter Arr" : "To Liked Products"}
      </button>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        {changeArr.length === 0 ? (
          <p>No result</p>
        ) : (
          changeArr.map((product, index) => (
            <div key={index}>
              <div>
                <p>
                  {product.name} {product.inStock ? "in stock" : "out of stock"}
                </p>
                <p>{product.category}</p>

                <p
                  style={{
                    display: priceDisplay === true ? "block" : "none",
                    color:"green",
                    backgroundColor:
                      product.name === mostItem?.name ? "yellow" : "white",
                  }}
                >
                  {product.price} $
                </p>
                <button onClick={() => removeItem(product)}>Remove Item</button>
                {likeArr.some((p) => p.name === product.name) ? (
                  <button
                    onClick={() => likeBtn(product)}
                    style={{ background: "red" }}
                  >
                    ❤️ Liked
                  </button>
                ) : (
                  <button onClick={() => likeBtn(product)}>🤍 Like</button>
                )}
                <button onClick={() => startEdit(product)}>Edit</button>
              </div>
              
              <br />
              <br />
            </div>
          ))
        )}
      </div>

      <div>total: {sum} $ </div>
      <h2>Search</h2>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="search here"
      />
      <br />
      <input
        value={valuePrice}
        onChange={(e) => setValuePrice(e.target.value)}
        type="number"
        placeholder="less from number"
      />
      <br />
      <br />
      <br />
      <br />
      <h2>Edit Product</h2>
      <input
        value={nameEdit}
        onChange={(e) => setNameEdit(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <br />
      <input
        onChange={(e) => setCategoryEdit(e.target.value)}
        value={categoryEdit}
        type="text"
        placeholder="Category"
      />
      <br />
      <input
        onChange={(e) => setPriceEdit(e.target.value)}
        value={priceEdit}
        type="text"
        placeholder="Price"
      />
      <br />
      <p>true</p>
      <input
      type="radio"
      name="editInStock"
      checked={inStockEdit === true}
      onChange={() => setInStockEdit(true)}
    />
    <p>false</p>
    <input
      type="radio"
      name="editInStock"
      checked={inStockEdit === false}
      onChange={() => setInStockEdit(false)}
    />

      <br />
      <button onClick={editBtn}>Edit Product</button>
      <br />
      <br />
      <br />
      <br />
      <h2>Add Product</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <br />
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        type="text"
        placeholder="Category"
      />
      <br />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="Price"
      />
      <br />
      <p>true</p>
      <input
        value="true"
        onChange={(e) => setInStock(e.target.value === "true")}
        type="radio"
        name="optionGroup"
        checked={inStock === true}
      />
      <br />
      <p>false</p>
      <input
        value="false"
        onChange={(e) => setInStock(e.target.value === "true")}
        type="radio"
        name="optionGroup"
        checked={inStock === false}
      />
      <br />
      <button onClick={addItem}>Add Product</button>
      <br />
    </div>
  );
}

export default App;


// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersThree = [7,8,9];
// const arr = ["lama"];
// const numbersCombine = [...numbersOne, ...numbersTwo]
// const newElements = [888,...numbersOne];
// const newToEndElements = [...numbersOne,222];
// const thirdElements = [...numbersOne,...numbersTwo,...numbersThree]
//const newElementThird= [thirdElements,"shalom"]
//  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const lastThreeElements = originalArray.slice(-3)
// const originalArray = [1, 2, 3];
// const NewArr = originalArray.reverse()
// const arr=[1,2,3]
// const newArr = [arr[0],3,...arr.slice(2)]
// const arr= ["hey"]
// const newArr = [...arr]
//  const arr= ["hey"]
//  const arr2= ["her"]
//  const newArr=[...arr,...arr2]
// const arr= [1,2,3]
// const newArr=[...arr.slice(0,-1)]
// const arr= [1,2,3]
// const newArr=[...arr.slice(0,2),8,...arr.slice(2)]
// const arr =[1,2,3,4,5]
// const newArr =[...arr.slice(1,4)]
// const arr =[1,2,3,4,5]
// const newArr =[...arr.slice(1),arr[0]]
// const arr =[1,2,3,4,5]
// const newArr =["hello",...arr]
// const arr =[1,2,3,4,5]
// const newArr =["hello",...arr]

// const originalObject = {
//   name: "John",
//   age: 30,

// };

// const originalObject2 = {
//   address: {
//     city: "New York",
//     zip: "10001"
//   }
// };

// const originalObject3 = {...originalObject,...originalObject2}

//  const originalObject = {
//   name: "John",
//   age: 30,

// };

// const originalObject2 ={...originalObject,phone:2}

// console.log(originalObject2)

//  const originalObject = {
//   name: "John",
//   age: 30,

// };

// const originalObject2 ={...originalObject,age:2}

// console.log(originalObject2)

// const originalObject = {
//   name: "John",
//   age: 30,

// };

// const originalObject2 = {
//   address: {
//     city: "New York",
//     zip: "10001"
//   }
// };

// const originalObject3 = {
//   address: {
//     city: "Paris",
//     zip: "10001"
//   }
// };

// const originalObject4 = {...originalObject,...originalObject2,...originalObject3}

// console.log(originalObject4)

//  const originalObject = {
//   name: "John",
//   age: 30,

// };

// const originalObject2 ={...originalObject}

// console.log(originalObject2)

// function mergedObjects(...objects) {
//   return Object.assign({}, ...objects)
// }

// const object1 = { name: "John", age: 30 };  // אובייקט 1
// const object2 = { city: "Jerusalem", country: "Israel" };  // אובייקט 2
// const object3 = { phone: 555 };  // אובייקט 3

// const mergedObject = mergedObjects(object1, object2, object3);
// console.log(mergedObject)
