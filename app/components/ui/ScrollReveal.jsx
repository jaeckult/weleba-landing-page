'use client';

import { motion } from 'framer-motion';

const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0,
    className = ""
}) => {
    return (
        <div className={className} style={{ width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: delay }}
                viewport={{ once: true, margin: "-50px" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
