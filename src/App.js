import foods from './food.json';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

const App = () => {
  const [foodList, setFoodList] = useState(foods);
  const [query, setQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState(false);

  const addFood = (newFood) => {
    const updatedFoodList = [newFood, ...foodList];
    setFoodList(updatedFoodList);
  }

  const handleSearch = (e) => {
    setQuery(e.target.value)
  }
  const filterFoods = (query, items) => {
    const filteredFoods = items.filter((food) => (
      food.name.toLowerCase().includes(query.toLowerCase())
    ))
    if (!filteredFoods.length) {
      return items;
    }
    return filteredFoods;
  }
  const filteredFoods = filterFoods(query, foodList);

  const deleteMovie = (id) => {
    const filteredFoodList = foodList.filter((movie) => movie.id !== id)
    setFoodList(filteredFoodList);

    if (!filteredFoodList.length) {
      setMessage(!message);
    }
  }
  const toggleShowForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      <button onClick={toggleShowForm} className='showForm-btn'>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </button>
      <Search handleSearch={handleSearch} />
      {showForm && <AddFoodForm addFood={addFood} />}
      <Divider>Food List</Divider>
      {message && <p id="message">Oops! There is no more content to show</p>}
      <Row className='foodList-container'>
        {filteredFoods.map((food, index) =>
          <FoodBox key={index} food={food} handleDelete={deleteMovie} />
        )}
      </Row>
    </div>
  );
}

export default App;
