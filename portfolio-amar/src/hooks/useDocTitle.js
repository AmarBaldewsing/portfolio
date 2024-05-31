import { useEffect } from "react";

const useDocumentTitle = (page) => {
    useEffect(() => {
        document.title = 'Amar Baldewsing - ' + page;
    }, [page])
}
 
export default useDocumentTitle;