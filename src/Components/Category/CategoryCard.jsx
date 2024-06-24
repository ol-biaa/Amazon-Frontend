import React from 'react';
import classes from './category.module.css'
function CategoryCard({info}) {
  return (
    <div className={classes.category}>
      <a href={`/category/${info.name}`}>
        <span>
          <h2>{info.title}</h2>
        </span>
        <img src={info.imgLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard