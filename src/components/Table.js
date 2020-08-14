import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Pagination from '@material-ui/lab/Pagination';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

const dateFormater = (dataDate) => {
    const event = new Date(dataDate);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

    return dataDate === null ? 'N/A' : event.toLocaleDateString('en-US', options)
}

function Row(data) {
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="medium" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {data.data.product_name}
                </TableCell>
                <TableCell align="center">{data.data.brand}</TableCell>
                <TableCell align="center">{data.data.quantity}</TableCell>
                <TableCell align="center">{data.data.category}</TableCell>
                <TableCell align="center">{data.data.price_paid}</TableCell>
                <TableCell align="center">{dateFormater(data.data.date_purchased)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Details</Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Size (Oz)</TableCell>
                                        <TableCell>Price Per Oz</TableCell>
                                        <TableCell>Date Opened</TableCell>
                                        <TableCell>Date Finished</TableCell>
                                        <TableCell align="left">Repurchase?</TableCell>
                                        <TableCell align="left">Notes</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                        <TableCell component="th" scope="row">{data.data.oz_size}</TableCell>
                                        <TableCell align="left">{data.data.price_per_oz}</TableCell>
                                        <TableCell align="left">{dateFormater(data.data.date_opened)}</TableCell>
                                        <TableCell align="left">{dateFormater(data.data.date_finished)}</TableCell>
                                        <TableCell align="left">{data.data.repurchase}</TableCell>
                                        <TableCell align="left">{data.data.notes}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function CollapsibleTable({ data, count, page, setPageNumber }) {
    let roundedCount = count / 10

    const handlePagination = (e, v) => {
        setPageNumber(v)
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table" size={'small'} style={{ width: '100%' }}>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Product</TableCell>
                        <TableCell align="center">Brand</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Price Paid</TableCell>
                        <TableCell align="right">Purchase Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data &&
                        data.map((item) => (
                            <Row key={item.id} data={item} />
                        ))
                    }
                </TableBody>
            </Table>
            <Pagination count={roundedCount.toFixed()} variant="outlined" color="primary" page={page} onChange={handlePagination} />
        </TableContainer>
    );
}
