var first_term = ["Butterface", "Communist", "Creepy", "Democrat", "Dicknose", "Drug-Loving", "Elitist", "Goat", "Idiotic", "Insecure", "Lazy", "Pie-Eating", "Pompous", "Racist", "Slimy", "Slutty", "Smelly", "Stupid", "Tone Deaf", "Ugly", "White Trash"];

var second_term = ["Ass", "Ball", "Bitch", "Boner", "Butt", "Cock", "Crotch", "Dick", "Douche", "Fuck", "Nut", "Prick", "Rectum", "Shart", "Shit", "Slut", "Sperm", "Sphincter", "Taint", "Turd", "Twat"];

var third_term = ["Bag", "Balloon", "Biscuit", "Blossom", "Box", "Canoe", "Captain", "Clown", "Dragon", "Goblin", "Hammer", "Hound", "Jockey", "Knob", "Monster", "Nazi", "Pilot", "Pirate", "Socket", "Sucker", "Waffle"]

function selectTerm(ary) {
  return ary[Math.floor(Math.random()*ary.length)]
}

function generateInsult() {
  var first =  selectTerm(first_term);
  var second =  selectTerm(second_term);
  var third =  selectTerm(third_term);
  return first + " " + second + " " + third + "!";
}
