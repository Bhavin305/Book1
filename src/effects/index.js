import { useState } from 'react';


const filterAlgo = (filters, type, data) => {
    if(filters[type].includes(data)) {
        const newArray = filters[type];
        newArray.splice(newArray.indexOf(data), 1);
        return newArray;
    } else {
        return [...filters[type], data];
    }   
}

function useAppliedFilter() {
    const [filters, setFilter] = useState({ language: [], type: [], genre: []});
    const [filters2, setFilter2] = useState([]);

    const appliedFilter = (type, data) => {
        const result = filterAlgo(filters, type, data);
        if(filters2.includes(data)) {
            const newArray = filters2;
            newArray.splice(newArray.indexOf(data), 1);
            setFilter2(newArray);
        } else {
            setFilter2([...filters2, data]);
        }
        
        setFilter({...filters, [type]: result})
    }

    const deleteFilter = (data) =>{
        Object.keys(filters).map((item)=>{
            if(filters[item].includes(data)) {
                const newArray = filters[item];
                newArray.splice(newArray.indexOf(data), 1);
                setFilter({...filters, [item]: newArray})
            }
        });
        const newArray = filters2;
        newArray.splice(newArray.indexOf(data), 1);
        setFilter2(newArray);
    }

    return {
        filters,
        filters2,
        appliedFilter,
        deleteFilter
    };
}    

export default useAppliedFilter;