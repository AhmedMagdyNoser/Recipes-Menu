let buttonStyle = 'btn btn-outline-danger px-4 fw-bold '

export default function Main({ categories, checked, changeCategory }) {

  return (
    <main className="d-flex flex-column align-items-center my-3">

      <h2 className="p-3 fw-bold border-bottom border-3">قائمة الطعام</h2>

      <div className="my-3 d-flex gap-2 flex-wrap justify-content-center">
        {categories.map((item, i) => {
          return item === checked ?
            <button key={i} className={buttonStyle + 'active'} onClick={changeCategory}>{item}</button>
            : <button key={i} className={buttonStyle} onClick={changeCategory}>{item}</button>
        })}
      </div>

    </main>
  )

}