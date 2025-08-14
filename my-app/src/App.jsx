import React, { useState } from "react";
import InputWithButton from "./components/Input";
import UsersTable from "./components/Table";
import BasicModal from "./components/ModaUserl";
import EditUserModal from "./components/UpdateModal";
import EmptyUsersMessage from "./components/EmptyState";

function App() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [UpdateModal, setUpdateModal] = useState(false);
  const [indexforUpdate, setIndex] = useState(null);

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
      name: userName,
    });
    setIsModalOpen(true);
  };
  function isModalClose(val) {
    setIsModalOpen(val);
  }
  function removeUser(index) {
    const NewUsers = users.filter((_, i) => i !== index);
    setUsers(NewUsers);
  }

  function deleteUser(val) {
    removeUser(val);
    console.log(val);
  }
  function OpenUpdateModal(val) {
    setUpdateModal(val);
  }
  function CloseUpdateModal(val) {
    setUpdateModal(val);
  }
  function getIndexOfUser(index) {
    setIndex(index);
  }
  function getIndexAndValue(index, value) {
    const ArrayModified = users.map((user, ind) =>
      ind === index ? value : user
    );
    setUsers(ArrayModified);
  }

  console.log(UpdateModal);

  if (users.length === 0) {
    return (
      <>
        <InputWithButton getuser={addUser} />

        <EmptyUsersMessage />
      </>
    );
  } else {
    return (
      <>
        <EditUserModal
          handleClose={CloseUpdateModal}
          isOpen={UpdateModal}
          theIndex={indexforUpdate}
          newInfo={getIndexAndValue}
        />

        {isModalOpen && (
          <BasicModal
            isOpen={isModalOpen}
            isclose={isModalClose}
            userData={selectedUser}
          />
        )}

        <InputWithButton getuser={addUser} />
        <UsersTable
          boolEdit={OpenUpdateModal}
          utilisateurs={users}
          booleanFunction={toggleModal}
          InfoUser={handleUserSelection}
          IndexUser={deleteUser}
          getIndex={getIndexOfUser}
        />
      </>
    );
  }
}
export default App;
