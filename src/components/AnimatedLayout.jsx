import React from 'react';
import {motion} from 'framer-motion'

const AnimatedLayout = ({children}) => {
    return (
        <motion.div
            initial={{opacity:0.2, marginLeft:-1600}}
            animate={{marginLeft:0, opacity:1}}
            exit={{transition:{duration:0.3}}}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedLayout;