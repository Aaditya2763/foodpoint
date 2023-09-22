import Card from '../Ui/Cards/Card';
import MealItem from './MealItems/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Burger',
    img:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    img:"https://www.cookwithkushi.com/wp-content/uploads/2023/02/tandoori_paneer_tikka_restaurant_style.jpg",
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Pizza',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpqOuxbQi2DBdipS84B_DK9MI-WqQdObPy9g&usqp=CAU",
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg",
    description: 'Healthy...and green...',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Burger',
    img:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm6',
    name: 'Schnitzel',
    img:"https://www.cookwithkushi.com/wp-content/uploads/2023/02/tandoori_paneer_tikka_restaurant_style.jpg",
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm7',
    name: 'Pizza',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpqOuxbQi2DBdipS84B_DK9MI-WqQdObPy9g&usqp=CAU",
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm8',
    name: 'Green Bowl',
    img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg",
    description: 'Healthy...and green...',
    price: 18.99,
  },

];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      img={meal.img}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;