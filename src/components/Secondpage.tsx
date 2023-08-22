import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box'
import ThirdComponent from './ThirdComponent'

interface TableData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const columns: GridColDef[] = [
    { field: 'userId', headerName: 'User ID', width: 90, type: "number" },
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
    },
    {
        field: 'title', headerName: 'Title', type: "string", width: 300
    },
    {
        field: 'body', headerName: 'Body', type: 'string', width: 700
    }

];


const Secondpage = () => {

    const [tabledata, setTableData] = useState<TableData[]>([]);

    useEffect(() => {
        const getItems = async () => {
            const url = "https://jsonplaceholder.typicode.com/posts";
            const res = await axios.get<TableData[]>(url); // Add type parameter for axios.get
            console.log(res.data);
            setTableData(res.data);
        };
        getItems();
    }, []);

    return (
        <>
            <Box sx={{ height: "100vh", width: '80vw' }}>
                <DataGrid
                    rows={tabledata}
                    columns={columns} />
            </Box>
            <ThirdComponent />
        </>
    );
};

export default Secondpage;


