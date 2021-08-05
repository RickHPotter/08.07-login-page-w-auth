import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import { login, changeValue } from '../../store/actions/auth.action'


export class Login extends Component {

    login = () => {
        const { credentials } = this.props;
        this.props.login(credentials).then(() => {

        })
    }

    render() {
        return (
            <div>
                <Container component ="main" max-width="xs">
                    <div className="mt-3 mt-md-5">
                        <div className="text-center">
                            <img src="/logo192.png"/>
                            <Typography className="mt-3 font-weight-normal" component="h1" variant="h6">
                                Criando uma aplicação com Lavarel</Typography>        
                        </div>

                        <div className="mt-4">
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            focus="false"
                            id="email"
                            label="E-mail"
                            name="username"
                            type="email"
                            value= { this.props.credentials.username }
                            onChange={ (text) => this.props.changeValue( { username: text.target.value } )}
                            ></TextField>

                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Senha"
                            name="password"
                            type="password"
                            value= { this.props.credentials.password }
                            onChange={ (text) => this.props.changeValue( { password: text.target.value } )}
                            ></TextField>

                            <Button 
                            type="button"
                            variant="contained"
                            fullWidth
                            color="primary"
                            size="large"
                            className="mb-3 mb-md-4 mt-4"
                            onClick= { () => this.login() }
                            >Login</Button>

                            <Link href="/register">

                            </Link>

                            <Button
                            type="button"
                            variant="contained"
                            fullWidth
                            color="secondary"
                            size="large"
                            className="mb=3 mb-md-4"
                            >Cadastrar</Button>


                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials: state.authReducer.credentials,
})

const mapDispatchToProps = dispatch => ({
    login: (credentials) => dispatch(login(credentials)),
    changeValue: (value) => dispatch(changeValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
