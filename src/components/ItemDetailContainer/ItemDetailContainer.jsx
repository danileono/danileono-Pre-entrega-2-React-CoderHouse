import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import { useNavigate, useParams } from "react-router-dom"





export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate();


    const mostrarSiguiente = () =>{
        let ruta = id*1 + 1
        navigate(`/detalle/${ruta}`)
    }
    const mostrarAnterior = () =>{
        if(id > 0){
            let ruta = id*1 - 1
            navigate(`/detalle/${ruta}`)
        }
    }


    useEffect(() => {
        setCargando(true)
        const fetchProducto = async () => {
            try{
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await res.json();
                setProducto(data);

            } catch (error){
                setError(error)
            } finally {
                setCargando(false)
            }
        }

    fetchProducto()

    }, [id])

    

return (
    <>
    {
        cargando ? 
        <h3>cargando...</h3>
        :
        <ItemDetail producto={producto} 
                    mostrarSiguiente={mostrarSiguiente} 
                    mostrarAnterior={mostrarAnterior}
        />
    }
    </>
)
}

