import React, { useState, useEffect } from "react"

function MateriaLista() {
  const [materias, setMaterias] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000')
      .then(res => res.json())
      .then(materias => {
        setMaterias(materias)
      })
  }, [])

  return (
    <>
    <h1>Lista de materias</h1>
    {materias.map(materia => 
      <>
      <p>Nombre: {materia.nombre}</p>
      <p>Estado: {materia.estado}</p>
      <p>Profesor: {materia.profesor}</p>
      </>
    )}
    </>
  )
}

export default MateriaLista