import React from "react";
import "./Accordion.css";
export default function Accordion({ title, active, setActive }) {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={() => setActive(title)}>
            {active === title ? "X" : "|||"}
          </span>
        </div>
      </div>
      <div className={(active === title ? "show" : " ") + "accordionContent"}>
        <div className="container">
          <p>
            Kopincha bizda kirill yoki lotin alifbosidagi matnlarni
            kirilldan-lotinga, lotindan-kirillga ogirishga ehtiyoj boladi. Ushbu
            kiril lotin, lotin kiril onlayn translit dasturi ozbek tilidagi har
            qanday matnlarni hech qanday muammosiz hal qilishingizda sizga
            yordam beradi. Bu dasturning afzalligi shundaki, simvollar soni
            cheklanmangan, hamda qaysi tilga ogirishni dasturni ozi aniqlaydi.
            Butun bir maqolani yoki matnni birinchi bosh katakka qoysangiz, bir
            necha soniyadan song tayyor natijani qolga kiritasiz.
          </p>
        </div>
      </div>
    </div>
  );
}
