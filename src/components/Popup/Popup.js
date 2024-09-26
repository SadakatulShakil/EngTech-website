// Pappu Saha
import { useState, useEffect, useRef } from "react";

const Popup = () => {

    // Hook
    function useOnClickOutside(ref, handler) {
        useEffect(
        () => {
            const listener = (event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
            };
        },

      [ref, handler]
     );
    }

    // Create a ref that we add to the element for which we want to detect outside clicks
    const ref = useRef();
    // State for our modal
    const [isModalOpen, setModalOpen] = useState(false);
    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => setModalOpen(false));

    
    


    return (
        <div className='p-20 '>

              <div>
                {isModalOpen ? (
                    <div ref={ref}>
                    👋 Hey, I'm a modal. Click anywhere outside of me to close.
                    </div>
                ) : (
                    <button onClick={() => setModalOpen(true)}>Open Modal</button>
                )}
                </div>
        </div>
    );

    
};

export default Popup