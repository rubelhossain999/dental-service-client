import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Dr. Satu Roy`;
    }, [title]);
};

export default useTitle;