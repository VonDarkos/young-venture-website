
import css from "./AboutUsPage.module.css"
import type { Area } from "./areas"




export default function AboutUsPage() {

  const areas:Area = [
    { id:1, title:"Digital and frontier technologies",    img:"/images/hero/deep-tech.jpg",  icon:"/images/icons/creativity.colorable.svg" },
    { id:2, title:"Climate and energy technologies",      img:"/images/hero/clean-tech.jpg", icon:"/images/icons/relationship.colorable.svg" },
    { id:3, title:"Advanced materials",                   img:"/images/hero/youth.jpg",      icon:"/images/icons/mortarboard.colorable.svg" },
    { id:4, title:"Robotics and industrial automation",   img:"/images/hero/deep-tech.jpg",  icon:"/images/icons/partners.colorable.svg" },
    { id:5, title:"Medical technologies",                 img:"/images/hero/clean-tech.jpg", icon:"/images/icons/graduation.colorable.svg" },
    { id:6, title:"Computational biology",                img:"/images/hero/youth.jpg",      icon:"/images/icons/blog.colorable.svg" },
    { id:7, title:"Frontier physics-based innovations",   img:"/images/hero/deep-tech.jpg",  icon:"/images/icons/contact-book.colorable.svg" },
  ]

  return(
    <section className={css.section}>

      <div className="intro">
        <span className="titoletto">Focus areas</span>
        <h2>Our definition of deep tech</h2>
        <p>Our focus spans sectors where scientific breakthroughs can unlock meaningful economic and societal impact, including climate and energy technologies, advanced materials, robotics, industrial automation, medical technologies, computational biology, and frontier physics-based innovations.</p>
      </div>

      <div className={css.wrapperSelection}>
        <div className={css.sx}>
          <svg className={css.circularLine} viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMid meet">
            <circle cx="200" cy="200" r="200" fill="none" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        <div className={css.dx}>
          {areas.map((area)=>
          <div className="" key={area.id}>
            <h3>{area.title}</h3>
            <img src={area.icon} alt="" />
            <img src={area.img} alt="image" />
            </div>
          )}
        </div>

      </div>



    </section>
  )

}