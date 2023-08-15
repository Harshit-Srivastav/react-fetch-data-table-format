import "./styles.css";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRandomData = async () => {
    setLoading(true);
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(res.data);
    setLoading(false);
  };
  return (
    <div className="App">
      <h1>Fetch Users</h1>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <h1>Users</h1>
          <Table size="sm">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
              </tr>
            </thead>
            {data.map((item, id) => {
              return (
                <tbody key={id}>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.address.street}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </>
      )}
      <Button
        className="px-3 py-2"
        variant="outline-danger"
        onClick={fetchRandomData}
        disabled={data.length}
      >
        Fetch
      </Button>
    </div>
  );
}
