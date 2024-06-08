import User from "./User";
import UserClass from "./UserClass";
import { PROFILE_PHOTO} from "../utils/constants";
import { Link } from "react-router-dom";

const About = () =>{
    return (
        <div className="m-0 p-0 box-border">
            <div class="about_section" id="About">
                <div class="about_img">
                    <img src={PROFILE_PHOTO} alt=""/>
                </div>
                <div class="about_details">
                    <h1>About Me</h1>
                    <p>I am a passionate full stack(MERN) developer with a strong inclination towards problem solving. My expertise lies in creating intuitive user interfaces and ensuring seamless user experiences. I thrive on challenges and enjoy tackling complex data structure and algorithmic questions. <br></br>
                    I actively practice on LeetCode to sharpen my problem-solving skills and continuously improve my coding abilities.</p>
                    <div class="btns">
                        <Link to ="/contact" class="btn btn1">HIRE ME</Link>
                        <a href="https://drive.google.com/uc?export=download&id=1mkdXhnR50t3E3SE5ZDh0t5CDTAR8Be-o" class="btn btn2">DOWNLOAD CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About


/*
(
        <div className="m-0 p-0 box-border">
            <div className="w-full h-auto bg-gray-700 flex items-center justify-between pt-[50px] pb-[50px] pl-[13%] pr-[13%]" id="About">
                <div class="about_img">
                    <img src="./img/about-us.png" alt="" className="w-[430px] translate-y-[50px]"/>
                </div>
                <div class="about_details">
                    <h1 className="text-6xl text-white relative">About Me</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ipsam voluptas perspiciatis voluptatum magnam fugit deleniti, dolorem rerum excepturi quasi! <br></br>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore consectetur quidem animi at debitis.</p>
                    <div class="btns">
                        <a href="#" class="btn btn1">HIRE ME</a>
                        <a href="#" class="btn btn2">DOWNLOAD CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
*/