import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header({ search }) {

  let inputElement = useRef({});

  function handleSearch(e) {
    e.preventDefault();
    if (inputElement.current.value !== '') {
      search(inputElement.current.value);
      inputElement.current.value = '';
    }
  }

  return (
    <nav className="navbar navbar-expand-lg py-3 bg-dark">
      <div className="container " >
        <h1 className="text-white fw-bold fs-3 m-0">المطعم</h1>
        <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <FontAwesomeIcon icon={faBars} className="text-white" />
        </button>
        <div className="collapse navbar-collapse" style={{ flexGrow: '0' }} id="navbarSupportedContent">
          <form className="d-flex gap-2 mt-2 mt-lg-0" onSubmit={handleSearch}>
            <input ref={inputElement} className="form-control shadow-none rounded border-0" placeholder="ابحث.." />
            <button className="btn btn-warning" type="submit">بحث</button>
          </form>
        </div>
      </div>
    </nav>
  )

}