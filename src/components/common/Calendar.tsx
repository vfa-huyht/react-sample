import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import React from 'react';
import { Tooltip } from '@mui/material';

const daysofWeeks = ['月', '火', '水', '木', '金', '土', '日']


function Calendar(props: { data: any }) {
    const { data } = props
    let minDate = moment();
    let maxDate = moment('01-01-2023');
    data.forEach((item: any) => {
        if (moment(item.from) < minDate) {
            minDate = moment(item.from)
        }
        if (moment(item.to) > maxDate) {
            maxDate = moment(item.to)
        }
        if (item.subtasks && item.subtasks.length > 0) {
            item.subtasks.forEach((subItem: any) => {
                if (moment(subItem.from) < minDate) {
                    minDate = moment(subItem.from)
                }
                if (moment(subItem.to) > maxDate) {
                    maxDate = moment(subItem.to)
                }
            })
        }
    })
    const getDaysArray = function (start: any, end: any) {
        for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
            arr.push(moment(new Date(dt)).format('MM-DD-YYYY'));
        }
        return arr;
    };
    const calendars = getDaysArray(minDate.format('MM-DD-YYYY'), maxDate.format('MM-DD-YYYY'))
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 900 }} className="calendar-table">
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow style={{ height: 57 }}>
                            {calendars.map((item: any) => (
                                <TableCell style={{ minWidth: '51px', padding: 0 }}><div className="calendar-header">
                                    <span className="calendar-header__month">{moment(item).month() + 1}</span>
                                    <span className="calendar-header__day">{moment(item).date()}</span>
                                    <span className="calendar-header__week">{daysofWeeks[moment(item).isoWeekday() - 1]}</span>
                                </div></TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((item: any) => (
                                <TableRow style={{ height: 54 }} className="calendar-table__row">
                                    {
                                        calendars.map((ca: any) => (
                                            <TableCell style={{ minWidth: 50, padding: 0 }}>
                                            </TableCell>
                                        ))
                                    }
                                    <Tooltip title={`from: ${item.from} - to: ${item.to}`}>
                                        <div style={{
                                            left: calendars.indexOf(item.from) * 100 / calendars.length + '%',
                                            width: (calendars.indexOf(item.to) + 1 - calendars.indexOf(item.from)) * 52
                                        }} className={`calendar-table__progress-bar calendar-table__progress-bar--${item.status === -1 ? 'danger' : item.status === 1 ? 'todo' : 'in'}`}></div>
                                    </Tooltip>

                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
}

export default Calendar;