import MenuItem from "./MenuItem";

const menuFood = [
    { title: 'sushi', description: 'finest fish and veggies', price: 22.99 },
    { title: 'schnitzel', description: 'a german speciality', price: 16.50 },
    { title: 'barbecue burger', description: 'american, raw, meaty', price: 12.99 },
    { title: 'green bowl', description: 'healthy...and green...', price: 18.99 }
]
const Menu = (props) => {

    return (
        <section className="bg-gray-800 pt-36 pb-10 min-[376px]:h-[75rem] md:h-full  min-[321px]:h-[80rem] h-[85rem]">
            <div className="bg-white w-2/3 mx-auto rounded-2xl px-7 py-5 divide-y divide-black md:translate-y-0 translate-y-[45%] min-[321px]:translate-y-[40%] min-[376px]:translate-y-[30%]  md:animate-movep">
                {menuFood.map((e, i) => <MenuItem key={i} id={i} title={e.title} description={e.description} price={e.price}  />)}
            </div>
        </section>
    );
};

export default Menu;