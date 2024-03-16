import React, { useState } from 'react';
import Modal from "react-modal";

const StoreBox = ({ store }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const handleEditModalOpen = () => {
    setEditModalOpen(true);
  };

  const handleDetailsModalOpen = () => {
    setDetailsModalOpen(true);
  };

  return (
    <div className="store-box">
      <h2>{store.bname}</h2>
      <div className="btn-container">
        <button onClick={handleEditModalOpen}>Edit</button>
        <button onClick={handleDetailsModalOpen}>More Details</button>
      </div>
      <Modal isOpen={editModalOpen} onClose={() => setEditModalOpen(false)}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "50%", // Adjust the width as per your requirement
          maxHeight: "70%", // Adjust the maximum height as per your requirement
          overflowY: "auto", // Add vertical scrollbar if content exceeds maxHeight
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the overlay background color
        },
      }}
      onRequestClose={() => setEditModalOpen(false)}
      >
        {/* Edit modal content */}
        {/* Include input fields for business name, rebate percentage, and address */}
      </Modal>
      <Modal isOpen={detailsModalOpen} onClose={() => setDetailsModalOpen(false)}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "50%", // Adjust the width as per your requirement
          maxHeight: "70%", // Adjust the maximum height as per your requirement
          overflowY: "auto", // Add vertical scrollbar if content exceeds maxHeight
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the overlay background color
        },
      }}
      onRequestClose={() => setDetailsModalOpen(false)}
      >
        {/* Details modal content */}
        {/* Display data such as business name, address, rebate percentage, date created, number of complaints */}
      </Modal>
    </div>
  );
};

export default StoreBox;
