import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MUITable() {

    const rows = [
        { id: 1, firstName: 'Selim', lastName: 'Alkan', age: 28 },
        { id: 2, firstName: 'Ali', lastName: 'Küsbe', age: 18 },
        { id: 3, firstName: 'Veli', lastName: 'Traktör', age: 35 },
        { id: 4, firstName: 'Mehmet', lastName: 'Tezek', age: 65 }
    ]
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>İsim</TableCell>
                    <TableCell>Soyisim</TableCell>
                    <TableCell>Yaş</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={row.id}>
                        <TableCell >{row.id}</TableCell>
                        <TableCell >{row.firstName}</TableCell>
                        <TableCell >{row.lastName}</TableCell>
                        <TableCell >{row.age}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default MUITable