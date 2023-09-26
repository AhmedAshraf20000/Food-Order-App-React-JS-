import { memo, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import axios from "axios";

const meals = [
    {
        "description": "finest fish and veggies",
        "price": 22.99,
        "title": "sushi"
    },
    {
        "description": "a german speciality",
        "price": 16.5,
        "title": "schnitzel"
    },
    {
        "description": "american, raw, meaty",
        "price": 12.99,
        "title": "barbecue burger"
    },
    {
        "description": "healthy...and green...",
        "price": 18.99,
        "title": "green bowl"
    }
];

const Menu = () => {
    const [menuFood, setMenuFood] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState('');

    // async function fetchFood() {
    //     try {
    //         const data = await axios.get('https://food-order-app-3cdb2-default-rtdb.firebaseio.com/meals.json');
    //         setMenuFood(data.data);
    //     }
    //     catch (e) {
    //         setError('Something went wrong.')
    //     }
    //     setIsLoading(false);
    // };

    useEffect(() => setMenuFood(meals), []);

    return (
        <section className="bg-gray-800 pt-36 pb-10 min-[376px]:h-[75rem] md:h-full  min-[321px]:h-[80rem] h-[85rem] md:min-h-screen ">
            <div className="bg-white  w-2/3 mx-auto rounded-2xl px-7 py-5 divide-y divide-black md:translate-y-0 translate-y-[45%] min-[321px]:translate-y-[40%] min-[376px]:translate-y-[30%]  md:animate-movep">
                {menuFood.map((e, i) => <MenuItem key={i} id={i} title={e.title} description={e.description} price={e.price} />)}
            </div>
        </section >
    );
};

export default memo(Menu);