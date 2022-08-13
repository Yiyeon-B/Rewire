import React from 'react';
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo';

export default class ThoughtForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            firstThought: '',
            secondThought: '',
            thirdThought: '',
            fourthThought: '',
            date: new Date().toString()
        }
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { firstThought, secondThought, thirdThought, fourthThought, date } = this.state;
        const values = { firstThought, secondThought, thirdThought, fourthThought, date }

        switch(step) {
            case 1:
                return (
                    <SectionOne
                        handleClick={this.props.handleClick}
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 2:
                return (
                    <SectionTwo 
                        handleClick={this.props.handleClick}
                        prevStep={ this.prevStep }
                        nextStep={ this.nextStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 3: 
                window.location.reload(false);
                return null;
            default:
                //do nothing
        }
    }
}