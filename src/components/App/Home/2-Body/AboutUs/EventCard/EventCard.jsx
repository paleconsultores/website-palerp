// Dependencies
import React from "react";

export default function EventCard(
  {
    title = 'LOREM',
    content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at blanditiis eius eum fuga illum, incidunt magni, molestias nam nesciunt officia qui, quod ratione repudiandae sapiente sequi sint sunt? Aliquid?'
  })
{
  return(
    <div className="events-card">
      <h1 className="title">{title}</h1>
      <p>{content}</p>
    </div>
  );
}