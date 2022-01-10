import React from "react";
import ReactDOM from "react-dom";
import Button from '@mui/material/Button';

class MuiTest extends React.Component {

    render() {
        return (
            <Button variant="contained">Olá Mundo</Button>
        )
    }
}

ReactDOM.render(
    <MuiTest />,
    document.getElementById('app')
)