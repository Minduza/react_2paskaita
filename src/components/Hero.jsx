import '../App.css'

const Hero = (props) => {

    return <div>
        <div className="hero">
            {props.title && (props.subtitle && 
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
            )}  
        </div>
    </div>

}

export default Hero

// import PropTypes from "prop-types";

// import "./Hero.css";




// const Hero = ({ title, subtitle }) => {

//   return (

//     <div className="hero">

//       {title && <h1>{title}</h1>}

//       {subtitle && <h3>{subtitle}</h3>}

//     </div>

//   );

// };




// Hero.propTypes = {

//   title: PropTypes.string,

//   subtitle: PropTypes.string,

// };




// export default Hero;