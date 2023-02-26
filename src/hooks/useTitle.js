import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -H Consultancy`;
    }, [title])
}

export default useTitle;