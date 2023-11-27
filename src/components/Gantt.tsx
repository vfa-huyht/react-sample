import React from 'react';
import PropTypes from 'prop-types';
import CollapsibleTable from './common/CollapsibleTable';
import { Box, Container } from '@mui/material';
import Calendar from './common/Calendar';
import { useState } from 'react';

const data = [
    {
        name: 'John',
        from: '10-01-2023',
        to: '10-23-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 2
    },
    {
        name: 'John',
        from: '10-05-2023',
        to: '10-28-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 2
    },
    {
        name: 'John',
        from: '10-11-2023',
        to: '11-01-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 2
    },
    {
        name: 'John',
        from: '10-03-2023',
        to: '10-14-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: -1
    },
    {
        name: 'John',
        from: '10-16-2023',
        to: '1-17-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: -1
    },
    {
        name: 'John',
        from: '10-23-2023',
        to: '11-02-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 2
    },
    {
        name: 'John',
        from: '10-24-2023',
        to: '11-25-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: -1
    },
    {
        name: 'John',
        from: '11-01-2023',
        to: '12-05-2023',
        task: '...',
        detail: '...',
        subtasks: [{
            name: 'John',
            from: '11-02-2023',
            to: '11-04-2023',
            task: '...',
            detail: '...',
            subtasks: [],
            status: 0
        },
        {
            name: 'John',
            from: '11-04-2023',
            to: '12-05-2023',
            task: '...',
            detail: '...',
            subtasks: [],
            status: 0
        }],
        status: 0
    },
    {
        name: 'John',
        from: '11-06-2023',
        to: '11-12-2023',
        task: '...',
        detail: '...',
        subtasks: [{
            name: 'John',
            from: '11-06-2023',
            to: '11-08-2023',
            task: '...',
            detail: '...',
            subtasks: [],
            status: 0
        },
        {
            name: 'John',
            from: '11-08-2023',
            to: '11-09-2023',
            task: '...',
            detail: '...',
            subtasks: [],
            status: 0
        }, {
            name: 'John',
            from: '11-09-2023',
            to: '11-12-2023',
            task: '...',
            detail: '...',
            subtasks: [],
            status: 0
        }],
        status: 0
    },
    {
        name: 'John',
        from: '11-01-2023',
        to: '11-11-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 1
    },
    {
        name: 'John',
        from: '11-23-2023',
        to: '11-28-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 1
    },
    {
        name: 'John',
        from: '11-29-2023',
        to: '11-30-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 1
    },
    {
        name: 'John',
        from: '12-03-2023',
        to: '12-09-2023',
        task: '...',
        detail: '...',
        subtasks: []
    },
    {
        name: 'John',
        from: '12-07-2023',
        to: '12-14-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 1
    },


]

function Gantt() {
    const [selectedItem, setselectedItem] = useState()
    const [indexClick, setIndexClick] = useState({})
    const getRow = (item: any) => {
        setselectedItem(item)
    }
    const expandRow = (index: any) => {
        setIndexClick(i => {
            const temp = { ...i }
            temp[index] = !temp[index]
            return temp
        })
    }
    return (
        <div>
            <Container maxWidth="xl">
                <Box sx={{
                    display: 'grid',
                    gap: 1,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}>
                    <CollapsibleTable data={data} rowClick={getRow} expandRow={expandRow}></CollapsibleTable>
                    <Calendar indexClick={indexClick} data={data} selectedItem={selectedItem}></Calendar>
                </Box>
            </Container>

        </div>
    );
}

export default Gantt;