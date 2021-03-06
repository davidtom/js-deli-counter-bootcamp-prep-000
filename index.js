// 1. takeANumber(): accepts the current line of people, `katzDeliLine`,
// along with the new person's name as parameters; should return their position
// in line.
function takeANumber (line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

// 2. nowServing(): returns the next person in line and then remove them
// from the line.
function nowServing(line) {
  if (line.length > 0){
    var serving = line.shift()
    return `Currently serving ${serving}.`;
  } else {
    return "There is nobody waiting to be served!";
  };
};

// 3. currentLine(): returns the current line
function currentLine(line) {
  var lineString = "The line is currently:";

  if (line.length > 0){
    for (var i = 0, l = line.length; i<l; i++){
      lineString += ` ${i+1}. ${line[i]},`;
    };
  } else {
    return "The line is currently empty."
  };

  return lineString.slice(0,lineString.length-1);
};
