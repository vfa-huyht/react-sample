import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function Row(props: { row: any }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);



  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell style={{ width: '50px' }}>
          {
            row.subtasks && row.subtasks.length > 0 && <IconButton
              aria-label="expand row"
              style={{ width: 18, height: 18 }}
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          }

        </TableCell>
        <TableCell style={{ width: '20%' }}>{row.name}</TableCell>
        <TableCell style={{ width: '10%' }}>{row.task}</TableCell>
        <TableCell>{row.detail}</TableCell>
        <TableCell style={{ width: '20%' }}>{row.from}</TableCell>
        <TableCell style={{ width: '20%' }}>{row.to}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table aria-label="collapsible table">
              <TableHead>

              </TableHead>
              <TableBody>
                {row.subtasks.map((item: any) => (
                  <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell style={{ width: '50px' }}></TableCell>
                    <TableCell style={{ width: '20%' }}>{item.name}</TableCell>
                    <TableCell style={{ width: '10%' }}>{item.task}</TableCell>
                    <TableCell>{item.detail}</TableCell>
                    <TableCell style={{ width: '20%' }}>{item.from}</TableCell>
                    <TableCell style={{ width: '20%' }}>{item.to}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default function CollapsibleTable(props: { data: any }) {
  const { data } = props
  return (
    <TableContainer component={Paper} style={{ maxHeight: 900 }}>
      <Table stickyHeader aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Assignee</TableCell>
            <TableCell >Task</TableCell>
            <TableCell>Detail</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item: any) => (
            <Row key={item.name} row={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}