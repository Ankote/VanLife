import React from "react"
import Van from "../Van"
import '../style/Vans.css'
export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    const vansList = vans.map(van=>
        <Van key={van.id}>
            <div key={van.id} className="van-tile">
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        </Van>
    ) 
    
    return (
        <>
            <div className="van-list-container">
                <h1>Explore our van options</h1>
                <div className="van-list">
                    {vansList}
                </div>
            </div>
        </>
    )
}