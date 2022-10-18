export default class Dish {
    constructor(dishType) {
        this.dishType = dishType;
        this.dishList = [];
    }

    add(name, price, pic) {
        let dish = {};
        dish.name = name;
        dish.price = price;
        dish.pic = pic;
        this.dishList.push(dish);
    }
}
