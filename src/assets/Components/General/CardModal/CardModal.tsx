import './CardModal.css';

// Displays content in a modal with a darkened translucent background
//      callBackDeselect: function to remove the modal
//      children: jsx to display
//      containerStyleId: custom display styling 
interface CardModalProps {
    callBackDeselect: () => void;
    children: React.ReactNode;
    containerStyleId?: string;
}

export const CardModal: React.FC<CardModalProps> = ({ callBackDeselect, children, containerStyleId}) => {

    return (
        <div className="cardmodal">
            <section id={containerStyleId} className="cardmodal-container">
                <div className="cardmodal-card">

                    {children}
                    
                </div>
            </section>
            <div className="cardmodal-background" onClick={callBackDeselect}></div>
        </div>
    );
}

