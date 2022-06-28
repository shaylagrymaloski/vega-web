import SimplePageLayout from "../templates/SimplePageLayout.js";
import {
  fetchuser,
  enableAccount,
  changeAccountRole,
} from "../../service/AdminPanel/AdminPanel.js";
import { UserContext } from "../../auth/UserProvider.js";
import { useState, useContext, useEffect } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";

let DummyData = [
  { fileName: "test", file: "test.pdf" },
  { fileName: "test2", file: "test2.pdf" },
];

const ManageSecrets = (props) => {
  const [selectFile, setSelectFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const [showAdd, setShowAdd] = useState(0);
  const [data, setData] = useState(DummyData);

  const handleClick = () => {
    setShowAdd(1);
  };
  const handleClickSubmit = () => {
    setShowAdd(0);
  };

  return (
    <SimplePageLayout>
      <Table>
        <thead>
          <tr>
            <td>
              <h3>Secret List</h3>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button onClick={handleClick}>+ Add Secret</button>
            </td>
          </tr>
          {(() => {
            if (showAdd != 0) {
              var submitVal = { fileName: "", file: "" };

              return (
                <tr>
                  <td>Secret Name: </td>
                  <td>
                    <input></input>
                  </td>

                  <td>
                    {" "}
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Control type="file" onChange={changeHandler} />
                    </Form.Group>
                  </td>
                  <td></td>
                  <td>
                    <button onClick={handleClickSubmit}>Submit</button>
                  </td>
                </tr>
              );
            } else {
              return <div></div>;
            }
          })()}

          {data.map(function (Secret, index) {
            console.log(Secret.fileName);

            const handleDelete = (index, e) => {
              setData(data.filter((v, i) => i !== index));
            };

            return (
              <tr>
                <td>{Secret.fileName}</td>
                <td>{""}</td>
                <td> {""}</td>
                <td>
                  {" "}
                  <button>Edit</button>
                </td>
                <td>
                  <button onClick={(e) => handleDelete(index, e)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </thead>
      </Table>
    </SimplePageLayout>
  );
};
export default ManageSecrets;
