import AboutUs from "../aboutUs/AboutUs";
import Action from "../action/Action";
import Banner from "../banner/Banner";
import Category from "../category/Category";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Action></Action>
            <AboutUs></AboutUs>
        </div>


    );
};

export default Home;