import React from 'react'

export const Card: React.FC<{ icon: string; title: string }> = ({
  icon,
  title,
  children,
}) => {
  return (
    <div className="card">
      <div className="card__header">{icon}</div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <div className="card__body">{children}</div>
      </div>
      <style jsx lang="scss">
        {`
          .card {
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
          }
          .card__header {
            background: #18222d;
            font-size: 70px;
            height: 160px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .card__content {
            padding: 10px;
          }
          .card__title {
            font-size: 1.5rem;
            color: #25252c;
          }
        `}
      </style>
    </div>
  )
}
