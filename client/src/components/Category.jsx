import cBanner from "../assets/category-img/cBanner.webp"
import c1 from "../assets/category-img/c1.webp"
import c2 from "../assets/category-img/c2.webp";
import c3 from "../assets/category-img/c3.webp";
import c4 from "../assets/category-img/c4.webp";
import c5 from "../assets/category-img/c5.webp";
import c6 from "../assets/category-img/c6.webp";
import c7 from "../assets/category-img/c7.webp";
import c8 from "../assets/category-img/c8.webp";
import c9 from "../assets/category-img/c9.webp";
import c10 from "../assets/category-img/c10.webp";
import c11 from "../assets/category-img/c11.webp";
import c12 from "../assets/category-img/c12.webp";
import c13 from "../assets/category-img/c13.webp";
import c14 from "../assets/category-img/c14.webp";
import c15 from "../assets/category-img/c15.webp";
import c16 from "../assets/category-img/c16.webp";
import c17 from "../assets/category-img/c17.webp";
import c18 from "../assets/category-img/c18.webp";
import c19 from "../assets/category-img/c19.webp";
import c20 from "../assets/category-img/c20.webp";
import c21 from "../assets/category-img/c21.webp";
import c22 from "../assets/category-img/c22.webp";
import c23 from "../assets/category-img/c23.webp";
import c24 from "../assets/category-img/c24.webp";
import c25 from "../assets/category-img/c25.webp";
import c26 from "../assets/category-img/c26.webp";
import c27 from "../assets/category-img/c27.webp";
import c28 from "../assets/category-img/c28.webp";
import c29 from "../assets/category-img/c29.webp";
import c30 from "../assets/category-img/c30.webp";
// import c31 from "../assets/category-img/c31.webp";
// import c32 from "../assets/category-img/c32.webp";
import offerBanner from "../assets/category-img/offerBanner.webp"

const images = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20,
  c21,
  c22,
  c23,
  c24,
  c25,
  c26,
  c27,
  c28,
  c29,
  c30,
//   c31,
//   c32
];


export default function Category() {
  return (
    <div className="flex flex-col items-center mt-5">
      <img src={cBanner} alt="" />

      <div className="grid grid-cols-6 gap-4 w-full mt-8">
        {images.map((image, index) => {
            return (
                <img key={index} src={image} alt={`image ${index}`}  />
            )
        })}
      </div>

      <div className="mt-5">
        <img src={offerBanner} alt="" />
      </div>
    </div>
  )
}
