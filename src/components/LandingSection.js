const LandingSesction = () => {
    return (
        <section className="landing-section bg-meals-image bg-center py-12 bg-no-repeat bg-cover relative z-10 md:after:bg-gray-800 top-16 md:after:absolute md:after:w-full md:after:h-full md:after:-z-[1] md:after:bottom-0 md:after:contents[''] ">
            <div className="w-full h-full bg-black absolute top-0 opacity-40 -z-10"></div>
            <div className="md:w-1/2 w-5/6 mx-auto bg-gray-700 text-white space-y-4 text-center py-4 px-5 rounded-2xl shadow-xl translate-y-[130%] md:animate-moveDown">
                <h2 className="font-semibold text-xl capitalize">delecious food, delivered to you</h2>
                <p>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                <p>All our meal are cooked with high-quality ingrediants, just-in-time end of course by experienced chiefs.</p>
            </div>
        </section>
    );
};

export default LandingSesction;