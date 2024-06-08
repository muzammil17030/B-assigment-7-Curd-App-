import axios from "axios";
import { Box, Button, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React from "react";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function App() {
  const [data, setData] = React.useState<Comment[]>([]); // Initialize an empty array to store the data

  const getData = () => {
    axios
     .get("https://jsonplaceholder.typicode.com/comments")
     .then((res) => {
        setData(res.data); // Update the state with the received data
        console.log(res.data, "data received");
      })
     .catch((err) => {
        console.log(err, "Error");
      });
  };

  const postData = () => {
    axios
     .post("https://jsonplaceholder.typicode.com/comments", {
        postId: '1',
        name: 'MUZAMMIL',
        email: 'uzammil17030@gmail.com',
        body: 'olid'
      })
     .then((res) => {
        console.log(res.data, 'Data sent');
      })
     .catch((err) => {
        console.log(err, 'Error occured');
      });
  };

  const putData = () => {
    axios.put("https://jsonplaceholder.typicode.com/comments/1", {
      postId: '2',
      name: 'ahad',
      email: 'ahad17030@gmail.com',
      body: 'Liquid',
      id: 32
    })
     .then((res) => {
        console.log(res.data, 'Data sent');
      })
     .catch((err) => {
        console.log(err, 'Error occured');
      });
  };

  const deleteData = () => {
    axios.delete("https://jsonplaceholder.typicode.com/comments/1")
     .then((res) => {
        console.log(res.data, 'Data deleted');
      })
     .catch((err) => {
        console.log(err, 'Error occured');
      });
  };

  return (
    <Box className='text-center'>
      <h1 className="text-center text-warning ">Curd App</h1>
      <Button className="mt-5 me-5"
        onClick={getData}
        sx={{ margin: 1, textTransform: "capitalize" }}
        color="secondary"
        variant="contained"
      >
        Get DATA
      </Button>

      <Button className="mt-5 me-5"
        sx={{ margin: 1, textTransform: "capitalize" }}
        variant="contained" onClick={postData}
        color="secondary"
      >
        Post DATA
      </Button>

      <Button className="mt-5 me-5"
        sx={{ margin: 1, textTransform: "capitalize" }}
        variant="contained" onClick={putData}
        color="secondary"
      >
        Put DATA
      </Button>

      <Button className="mt-5 me-5"
        sx={{ margin: 1, textTransform: "capitalize" }}
        variant="contained" onClick={deleteData}
        color="secondary"
      >
        Delete DATA
      </Button>

      {/* Render the data in a table */}
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default App;