import { useState, useEffect } from 'react';

export interface Size {
    width: number | undefined;
}

export const useWindowSize = (): Size => {
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};
