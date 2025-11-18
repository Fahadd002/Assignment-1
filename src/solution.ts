// Problem 1: formatValue
const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === "string") return value.toUpperCase();
    if (typeof value === "number") return value * 10;
    return !value;
};

// Problem 2: getLength
const getLength = (value: string | any[]): number => {
    if (typeof value === "string") return value.length;
    if (Array.isArray(value)) return value.length;
    return 0;
};

// Problem 3: Create a Person class with name and age properties. Add a method getDetails
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Problem 4: filterByRating that accepts an array of items
interface RatedItem {
    title: string;
    rating: number;
}

const filterByRating = (items: RatedItem[]): RatedItem[] => {
    return items.filter(item => item.rating >= 4);
};

// Problem 5: filterActiveUsers 
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive);
};

// Problem 6 :printBookDetails
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
    const available = book.isAvailable ? "Yes" : "No";
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`;
};

// Problem 7: getUniqueValues
const getUniqueValues = (array1: (string | number)[], array2: (string | number)[]): (string | number)[] => {
    const combined = [...array1, ...array2];
    const unique: (string | number)[] = [];

    for (let value of combined) {
        let exists = false;

        for (let u of unique) {
            if (u === value) {
                exists = true;
                break;
            }
        }

        if (!exists) unique.push(value);
    }

    return unique;
};

// Problem 8
interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
    if (products.length === 0) return 0;

    return products
        .map(product => {
            const total = product.price * product.quantity;
            if (product.discount) {
                const discountAmount = (total * product.discount) / 100;
                return total - discountAmount;
            }
            return total;
        })
        .reduce((sum, value) => sum + value, 0);
};
