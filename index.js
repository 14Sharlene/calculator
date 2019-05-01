// document.getElementById() .innerHTML= id(value)

// var entries = [];
// var total = 0;

// var temp = '';
// $("button").onClick('click', function() {
//  	var val = $(this).text();

//   // Got a number, add to temp
//   if (!isNaN(val) || val === '.') {
//     temp += val;
//     $("#answer").val(temp.substring(0,10))

   
//   // Got some symbol other than equals, add temp to our entries
//   // then add our current symbol and clear temp
// } if (val === 'AC') {
//   entries = [];
//   temp = '';
//   total = 0;
//   $("#answer").val('')

// // Clear last entry
// } if (val === 'CE') {
//   temp = '';
//   $("#answer").val('')
  
// // Change multiply symbol to work with eval
// } else if (val === 'x') {
//   entries.push(temp);
//   entries.push('*');
//   temp = '';
  
// // Change divide symbol to work with eval
// } else if (val === '÷') {
//   entries.push(temp);
//   entries.push('/');
//   temp = '';

// // Got the equals sign, perform calculation
// } else if (val === '=') {
//   entries.push(temp);

//   var nt = Number(entries[0]);
//   for (var i = 1; i < entries.length; i++) {
//     var nextNum = Number(entries[i+1])
//     var symbol = entries[i];
    
//     if (symbol === '+') { nt += nextNum; } 
//     else if (symbol === '-') { nt -= nextNum; } 
//     else if (symbol === '*') { nt *= nextNum; } 
//     else if (symbol === '/') { nt /= nextNum; }
    
//     i++;
//   }
  
//   // Swap the '-' symbol so text input handles it correctly
//   if (nt < 0) {
//     nt = Math.abs(nt) + '-';
//   }
  
//   $("#answer").val(nt);
//   entries = [];
//   temp = '';
  
// // Push number
// } else {
//   entries.push(temp);
//   entries.push(val);
//   temp = '';
// }
// }); 

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
       <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />

      </div>
    );
  }
}