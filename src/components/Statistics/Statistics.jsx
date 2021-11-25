// import React from 'react'
import style from "./Statistics.module.css";
import PropTypes from "prop-types";

function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={style.item}>
            <span className="label">{label}</span>
            <span className={style.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

//============= a tak sie nie da? zdestrukturyzowac w parametrach funkcji?
// function Statistics({ title, stats: { id, label, percentage } }) {
//   return (
//     <section className="statistics">
//       {title && <h2 className="title">{title}</h2>}
//       <ul className="stat-list">
//         {stats.map((stat) => (
//           <li key={id} className="item">
//             <span className="label">{label}</span>
//             <span className="percentage">{percentage}</span>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// function Statistics({ title, stats }) {
//   return (
//     <section className="statistics">
//       {title && <h2 className="title">{title}</h2>}
//       <ul className="stat-list">
//         {stats.map((stat) => (
//             <li key={stat.id} className="item">
//               <span className="label">{stat.label}</span>
//               <span className="percentage">{stat.percentage}</span>
//             </li>
//           ))}
//       </ul>
//     </section>
//   );
// }


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,  
};

export default Statistics
