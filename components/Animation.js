export const animateIn = {
    initial: { y: 20, opacity: 0 },
    animate: {
        y: 0, opacity: 1, transition: {
            duration: 0.5
        }
    }
}

export const fadeIn = {
    initial: { y: -10, opacity: 0.8 },
    animate: {
        y: 0, opacity: 1, transition: {
            duration: .5
        }
    }
}

export const stagger = {
    animate: {
        staggerChildren: 0.2
    }
}
