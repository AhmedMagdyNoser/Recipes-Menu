import Fade from "./Fade"

export default function Card({ id, title, category, imgUrl, description, price }) {
  return (
    <Fade time='1s'>
      <div className="card mb-3 overflow-hidden">
        <div className="row g-0">
          <div className="col-lg-5 col-xl-3">
            <img src={'imgs/' + imgUrl} className="img-fluid" alt={imgUrl} />
          </div>
          <div className="col-lg-7 col-xl-9">
            <div className="card-body">
              <h5 className="card-title fw-bold">
                {title}
                <small className="badge bg-secondary mx-2 px-3 py-2 fw-normal">{category}</small>
              </h5>
              <p className="card-text text-muted">{description}</p>
              <span className="fw-bold fs-5">{price}</span>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}