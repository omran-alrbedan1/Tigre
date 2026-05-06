export const imageVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -5 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export const backgroundVariants = {
    hidden: { opacity: 0, scale: 0.9,  },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.6,
            delay: 0.2
        }
    }
};

export const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 100
        }
    }),
    hover: {
        scale: 1.08,
        y: -5,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
        }
    },
    tap: {
        scale: 0.95
    }
};