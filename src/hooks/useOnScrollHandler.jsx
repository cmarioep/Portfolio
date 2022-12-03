import { useState, useEffect } from 'react';

export const useOnScrollHandler = () => {

    const [navBarVisible, setNavBarVisible] = useState(false);
    const [tapBarVisible, setTapBarVisible] = useState(false);
    const [hideScrollIndicator, setHideScrollIndicator] = useState(false);


    useEffect(() => {

        let lastPageYOffset = 0;

        const onScrollHandler = () => {
            let currentPageYOffset = window.pageYOffset;

            // navBar visibility condition
            if (window.scrollY > 10) {
                setNavBarVisible(true);
            } else {
                setNavBarVisible(false);
            }

            // scrollDown and tapBar indicator visibility condition
            if (currentPageYOffset > lastPageYOffset) {
                setHideScrollIndicator(true);
                setTapBarVisible(false);
            } else {
                setHideScrollIndicator(false);
                setTapBarVisible(true);
            }

            // tapBar visibility condition
            if (window.scrollY < 10) {
                setTapBarVisible(false);
            }

            lastPageYOffset = currentPageYOffset <= 0 ? 0 : currentPageYOffset;

        }

        window.addEventListener('scroll', onScrollHandler);

        return () => {
            window.removeEventListener('scroll', onScrollHandler)
        }

    }, [])


    return {
        navBarVisible,
        hideScrollIndicator,
        tapBarVisible,
    }

}