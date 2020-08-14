import { useState, useEffect } from 'react'

function DeBounce(char, delay) {
    const [deBouncedChar, setdeBouncedChar] = useState(char)

    useEffect(() => {
        const handle = setTimeout(() => {
            setdeBouncedChar(char)
        }, delay)

        return () => {
            clearTimeout(handle)
        }
    }, [char])

    return deBouncedChar
}

export default DeBounce