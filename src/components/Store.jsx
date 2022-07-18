import React, { useState, createContext } from "react";
export const Store = createContext()

export default function StoreProvider({ children }) {


    const [data, setData] = useState([
        {
            id: 1,
            name: "Amelia",
            age: "3 Month",
            img: "https://static.onecms.io/wp-content/uploads/sites/24/2019/01/GettyImages-892959344.jpg"
        },
        {
            id: 2,
            name: "Jessica",
            age: "5 Month",
            img: "https://i.pinimg.com/736x/04/c1/9c/04c19ccfbd4b4decfaca451580a11c7c.jpg"
        },
        {
            id: 3,
            name: "Emma",
            age: "3 Month",
            img: "https://i.pinimg.com/236x/c5/e9/cb/c5e9cbc05485f711e5b566ef45747250--bows-for-girls-baby-girls.jpg"
        },
        {
            id: 4,
            name: "Sophia",
            age: 1,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpAXCvuojRkQohhEovih64WMCU1sAXh2WuDyVQtpQR_i09q6sa6IHCLaTZ4UJzTbXr7HQ&usqp=CAU"
        },
        {
            id: 5,
            name: "Isabella",
            age: "4 Month",
            img: "https://spfinsurance.com/wp-content/uploads/2012/11/california-baby-health-insurance-1.jpg"
        },
    ])

    const deleteHandler = (id) => {
        const filtered = data.filter(person => person.id !== id)
        setData(filtered)
    }

    function refreshPage() {
        window.location.reload(false);
    }

    return <Store.Provider value={{ data, setData, deleteHandler, refreshPage }}>
        {children}
    </Store.Provider>
}
