import React, { useState } from "react";
import InputWithButton from "./components/Input";
import UsersTable from "./components/Table";
import BasicModal from "./components/ModaUserl";



function App() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const toggleModal = (value) => {
    setIsModalOpen(value);
    if (!value) {
      setSelectedUser(null);
    }
  };

  const handleUserSelection = (userId, userName) => {
    setSelectedUser({
      id: userId,
      name: userName
    });
    setIsModalOpen(true);
  };
  function isModalClose(val){
    setIsModalOpen(val)
  }
  return (
    <>
      {isModalOpen && (
        <BasicModal 
          isOpen={isModalOpen} 
          isclose={isModalClose}
          userData={selectedUser}
        />
      )}

      <InputWithButton getuser={addUser} />
      <UsersTable
        utilisateurs={users}
        booleanFunction={toggleModal}
        InfoUser={handleUserSelection}
      />
    </>
  );
}

export default App;
