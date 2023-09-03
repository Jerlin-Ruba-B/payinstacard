import './index.css'

const Card4 = () => (
  <div className="card4_container">
    <div className="card4_desc_container">
      <img
        src="https://res.cloudinary.com/ruba/image/upload/v1693631180/Ellipse_46_ukpno0.svg"
        alt="ellipse"
        className="card4_ellipse"
      />
      <div className="card4_desc">
        <p className="offer_desc">Get 20% off for student</p>
        <h1 className="card4_heading">
          Student discounts available.
          <br />
          <span className="card4_sub_heading">
            Get ready for some fun in the sun!
          </span>
        </h1>
        <ul>
          <li className="list_items">Lorem ipsum dolor sit amet</li>
          <li className="list_items">Lorem ipsum dolor sit amet</li>
          <li className="list_items">Lorem ipsum dolor sit amet</li>
          <li className="list_items">Lorem ipsum dolor sit amet</li>
          <li className="list_items">Lorem ipsum dolor sit amet</li>
        </ul>
        <button type="button" className="explore_btn">
          Explore More
        </button>
      </div>
    </div>
    <img
      src="https://res.cloudinary.com/ruba/image/upload/v1693634781/Ellipse_49_mgca0b.svg"
      alt="substract"
      className="card4_ellipse"
    />
    <img
      src="https://res.cloudinary.com/ruba/image/upload/v1693660776/Mask_group_1_grwsj8.svg"
      alt="pic"
      className="mask_pic"
    />
  </div>
)
export default Card4
