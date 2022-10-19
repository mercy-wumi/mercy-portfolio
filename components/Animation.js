export const hero = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 1, opacity: 1 }
}

export const animateIn = {
    initial: { y: 30, opacity: 0 },
    animate: {
        y: 0, opacity: 1, transition: {
            duration: 0.6
        }
    }
}

export const stagger = {
    animate: {
        staggerChildren: 0.2
    }
}
