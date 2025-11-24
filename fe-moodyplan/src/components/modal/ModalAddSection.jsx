import React from 'react';

const ModalAddSection = ({onAddSection, onClose }) => {
    const [sectionName, setSectionName] = React.useState('');

    return (
        // Sử dụng class 'modal-add-section' để styling
        <div className="modal-add-section">

            {/* Input field */}
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Name this section"
                    value={sectionName}
                    onChange={(e) => setSectionName(e.target.value)}
                    className="section-name-input"
                    aria-label="Name this section input"
                />
            </div>

            {/* Action buttons/text */}
            <div className="action-buttons">

                {/* Nút "Add section" */}
                <button
                    type="button"
                    className="add-section-button"
                    disabled={!sectionName.trim()}
                >
                    Add section
                </button>

                {/* Text "Cancel" */}
                <button
                    type="button"
                    onClick={onClose}
                    className="cancel-button"
                >
                    Cancel
                </button>
            </div>

        </div>
    );
};

export default ModalAddSection;