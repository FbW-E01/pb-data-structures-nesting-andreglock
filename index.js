let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

console.log('Task 1:');

for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        console.log(board[i][j]);
    }
};

const doggo = {
    name: 'Linda',
    breed: 'Roma Beggar',
    favoriteFoods: ['Cucumber', 'Bananas', 'Carrots', 'Strawberries'],
    printFav() {
        for (let i = 0; i < this.favoriteFoods.length; i++) {
            console.log(this.favoriteFoods[i]);
        }
    }
};

console.log('2.3:', doggo.favoriteFoods[1]);
console.log('Task 2.4:');
doggo.printFav();

const recipes = {
    ingredients: {
        butter: 'Butter', 
        sugar: 'Sugar',
        flour: 'Flour',
    },
    printIngredients() {
        for (let i = 0; i < Object.keys(this.ingredients).length; i++) {
            console.log(Object.keys(this.ingredients)[i]);
        }
    }
};

recipes.ingredients.ginger = 'Ginger';

console.log('3.3:', recipes);

recipes.ingredients.sugar = 'Brown sugar';

console.log('3.4:', recipes);

console.log('Task 3.5:');
recipes.printIngredients();