import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
import styles from './HashComponent.scss';
import axios from 'axios'
import istance from '../axios-istance';


export default class HashComponent extends Component {
    state = {
        inputValue: '',
        borderInputColor: '#00cfff',
        btnDisabled: true
    }

    inputValueHandler = (value) => {

        if(value.length < 3 || value.length > 30){
            this.setState({
                borderInputColor: '#f44336',
                inputValue: value,
                btnDisabled: true
            });
        }else{ 
            this.setState({
                borderInputColor: '#00cfff',
                inputValue: value,
                btnDisabled: false
            });
        }
        
    }

    hashInputValue = () => {

        const { inputValue } = this.state;

        if(inputValue.length < 3 || inputValue.length > 30){
            this.setState({inputValue: ``, btnDisabled: true})
            return;
        }

        this.setState({btnDisabled: true});

        const valueToHash = {
            name: this.state.inputValue
        };
        
        // axios.defaults.headers.common['Authorization'] = '3Basdq312fsd@#21dwqc23rc2SASFDa14124';
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

        // axios.post('http://rekrutacja.gbx24.com/api/hash', valueToHash)
        //     .then( ({data: {hash}}) => {
        //         this.setState({inputValue: hash})
        //     })
        //     .then(() => {
        //         this.setState({btnDisabled: false})
        //     })
        //     .catch( err => alert(err))

        istance.post('/api/hash', valueToHash)
            .then( ({data: {hash}}) => {
                this.setState({inputValue: hash})
            })
            .then(() => {
                this.setState({btnDisabled: false})
            })
            .catch( err => alert(err))

    }

    render() {
        return (
            <div className={styles.HashComponent}>
                <div>
                    <input 
                        maxLength={30}
                        placeholder="Wpisz imię"
                        type="text" 
                        value={this.state.inputValue}
                        onChange={e => this.inputValueHandler(e.target.value)}
                        style={{border: `3px solid ${this.state.borderInputColor}`}}
                        />
                    <button disabled={this.state.btnDisabled} onClick={this.hashInputValue}>OK</button>
                </div>
                <div className={styles.CountBox}>
                    <li>Example</li>
                    <button onClick={() => this.setState({inputValue: '', btnDisabled: true, borderInputColor: `#00cfff`})}>Dziękuję</button>
                </div>
            </div>
        )
    }
}
