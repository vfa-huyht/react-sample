import React from 'react';
import PropTypes from 'prop-types';
import CollapsibleTable from './common/CollapsibleTable';
import { Box, Container } from '@mui/material';

Gantt.propTypes = {

};
const data = [
    {
        name: 'HuyHT',
        from: '01-01-2023',
        to: '01-05-2023',
        task: '...',
        detail: '...',
        subtasks: [{
            name: 'HuyHT',
            from: '01-02-2023',
            to: '01-04-2023',
            task: '...',
            detail: '...',
            subtasks: [],
            status: 0
        },
        {
            name: 'HuyHT',
            from: '01-04-2023',
            to: '01-05-2023',
            task: '...',
            detail: '...',
            subtasks: [],
            status: 0
        }],
        status: 0
    },
    {
        name: 'HuyHT',
        from: '01-06-2023',
        to: '01-12-2023',
        task: '...',
        detail: '...',
        subtasks: [{
            name: 'HuyHT',
            from: '01-06-2023',
            to: '01-08-2023',
            task: '...',
            detail: '...',
            subtasks: [],
            status: 0
        },
        {
            name: 'HuyHT',
            from: '01-08-2023',
            to: '01-09-2023',
            task: '...',
            detail: '...',
            subtasks: [],
            status: 0
        }, {
            name: 'HuyHT',
            from: '01-09-2023',
            to: '01-12-2023',
            task: '...',
            detail: '...',
            subtasks: [],
            status: 0
        }],
        status: 0
    },
    {
        name: 'HuyHT',
        from: '01-01-2023',
        to: '01-11-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 1
    },
    {
        name: 'HuyHT',
        from: '01-23-2023',
        to: '01-28-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 1
    },
    {
        name: 'HuyHT',
        from: '01-29-2023',
        to: '01-30-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 1
    },
    {
        name: 'HuyHT',
        from: '02-03-2023',
        to: '02-09-2023',
        task: '...',
        detail: '...',
        subtasks: []
    },
    {
        name: 'HuyHT',
        from: '02-07-2023',
        to: '02-14-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 1
    },
    {
        name: 'HuyHT',
        from: '03-01-2023',
        to: '03-13-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 2
    },
    {
        name: 'HuyHT',
        from: '03-05-2023',
        to: '03-08-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 2
    },
    {
        name: 'HuyHT',
        from: '03-01-2023',
        to: '03-03-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 2
    },
    {
        name: 'HuyHT',
        from: '18-03-2023',
        to: '20-03-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: -1
    },
    {
        name: 'HuyHT',
        from: '03-16-2023',
        to: '03-27-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: -1
    },
    {
        name: 'HuyHT',
        from: '03-23-2023',
        to: '03-29-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: 2
    },
    {
        name: 'HuyHT',
        from: '03-24-2023',
        to: '03-25-2023',
        task: '...',
        detail: '...',
        subtasks: [],
        status: -1
    },

]

function Gantt() {
    return (
        <div>
            <Container maxWidth="xl">
                <Box sx={{
                    display: 'grid',
                    gap: 1,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}>
                    <CollapsibleTable data={data}></CollapsibleTable>
                </Box>
            </Container>

        </div>
    );
}

export default Gantt;