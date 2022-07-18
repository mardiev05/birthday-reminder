import React, { useContext } from "react";
import { Store } from "./Store";

export default function List() {
    const { data, deleteHandler } = useContext(Store)
    return <ul>
        {data?.map(person => (
            <li key={person.id}>
                <div className="img">
                    <img src={person?.img} alt={person?.name} />
                </div>
                <div className="content">
                    <h4 className="persons__name">{person?.name}</h4>
                    <p className="persons__age">{person?.age}</p>
                </div>
                <span onClick={() => deleteHandler(person.id)}>X</span>
            </li>
        ))}
    </ul>;
}
