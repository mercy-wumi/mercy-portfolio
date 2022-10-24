import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const useScroll = (thresh = 0.3) => {
    const controls = useAnimation();
    const [element, view] = useInView({
        threshold: thresh,
        triggerOnce: true
    })
    if (view) {
        controls.start('animate')
    }
    else {
        controls.start('initial')
    }
    return [element, controls]
}