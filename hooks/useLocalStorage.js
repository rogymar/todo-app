import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(true)
            }
        }, 2000)
    }, []);

    // Función para guardar infor dentro del LocalStorage.
    const saveItems = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));

        setItem(newItem);
    };

    return { item, saveItems, loading, error };
}