import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredimg from '../../../assets/home/featured.jpg'

import './Featured.css'
const Featured = () => {
    return (
        <div className="festured-item text-white pt-8 my-20 bg-fixed">
            <SectionTitle
            subHeading="Check it Out"
            heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center px-20 py-36 bg-slate-600 bg-opacity-60 ">
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">where can get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias dolor excepturi molestiae exercitationem cumque ad dolore libero debitis, facilis repudiandae ut amet voluptates distinctio quisquam provident expedita ipsam voluptatem recusandae explicabo velit modi, fugit enim voluptas rem? Adipisci itaque aspernatur ipsum cumque asperiores veniam, quos vero, fugit a temporibus autem.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;