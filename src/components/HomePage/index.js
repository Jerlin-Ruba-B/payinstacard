import Header from '../Header'
import Card2 from '../Card2'
import Card3 from '../Card3'
import Card4 from '../Card4'
import Card5 from '../Card5'
import Card6 from '../Card6'
import Card7 from '../Card7'
import './index.css'

const HomePage = () => (
  <div className="bg_container">
    <Header />
    <div className="card_1">
      <div className="ellipse_des_container">
        <img
          src="https://res.cloudinary.com/ruba/image/upload/v1693631180/Ellipse_46_ukpno0.svg"
          alt="ellipse"
          className="card_1_ellipse"
        />
        <div className="card_1_desc">
          <p className="sub_head_card_1">Discover the beauty of the tropics</p>
          <h1 className="card_1_heading">
            Tropical
            <br /> Destinations <br />{' '}
            <span className="span_card_1">For Student</span>
          </h1>
          <p className="card_1_para">
            Lorem ipsum dolor sit ameur consecture.Sit mattics donate mi
            bibendem integer <br /> rutrum nisi.A nec nisi vitae{' '}
          </p>
          <div className="substract_container">
            <img
              src="https://res.cloudinary.com/ruba/image/upload/v1693634467/Subtract_dnwaik.svg"
              alt="substract"
              className="substract"
            />
          </div>
          <button className="sign_up_btn" type="button">
            SIGN UP
          </button>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/ruba/image/upload/v1693634781/Ellipse_49_mgca0b.svg"
        alt="substract"
        className="substract_right"
      />
      <img
        src="https://res.cloudinary.com/ruba/image/upload/v1693635152/Group_171_flylab.svg"
        alt="pic"
        className="pic_size"
      />
    </div>
    <div className="cicle_substract_container">
      <img
        src="https://res.cloudinary.com/ruba/image/upload/v1693635713/Subtract_1_a4tgvc.svg"
        alt="substract"
        className="circle_substract"
      />
    </div>
    <Card2 />
    <Card3 />
    <Card4 />
    <Card5 />
    <Card6 />
    <Card7 />
  </div>
)

export default HomePage
