import { useState, useEffect } from 'react';

export const useOnScrollHandler = () => {

    const [isHide, setIsHide] = useState(false);


    useEffect(() => {

        let lastPageYOffset = 0;

        const onScrollHandler = () => {

            let currentPageYOffset = window.pageYOffset;

            if (currentPageYOffset > lastPageYOffset) {
                setIsHide(true);
                
                setTimeout(() => { 
                    setIsHide(false) 
                }, 3000)

            } else {
                setIsHide(true);

                setTimeout(() => { 
                    setIsHide(false) 
                }, 3000)
            }

            lastPageYOffset = currentPageYOffset <= 0 ? 0 : currentPageYOffset;

        }

        window.addEventListener('scroll', onScrollHandler);

        return () => {
            window.removeEventListener('scroll', onScrollHandler)
        }

    }, [])


    return {
        isHide
    }

}