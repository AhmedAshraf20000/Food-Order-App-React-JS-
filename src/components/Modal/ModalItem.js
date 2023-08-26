const ModalItem = () => {
    return (
        <div className="flex justify-between items-center border-b border-red-800 py-3">
            <div>
                <h2 className="capitalize font-bold text-lg mb-2">sushi</h2>
                <span className="text-red-800 font-bold">$22</span>
                <span className="ml-6 border-2 px-3 rounded-md">x1</span>
            </div>
            <div className="space-x-3">
                <button className="border border-red-800 text-red-800 hover:text-white hover:bg-red-800 px-2 rounded-md">+</button>
                <button className="border border-red-800 text-red-800 hover:text-white hover:bg-red-800 px-2 rounded-md">-</button>
            </div>
        </div>
    )
};

export default ModalItem;