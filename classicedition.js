function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell1name").textContent = "Cocoa House";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Railroads are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " paid $100 for landing on Luxury Tax.");
	player[turn].pay(100, 0);

	$("#landed").show().text("You landed on Luxury Tax. Pay $100.");
}

function citytax() {
	addAlert(player[turn].name + " paid $200 for landing on City Tax.");
	player[turn].pay(200, 0);

	$("#landed").show().text("You landed on City Tax. Pay $200.");
}

var square = [];
/*
square[0] = new Square("GO", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF");
square[1] = new Square("Mediterranean Avenue", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[3] = new Square("Baltic Avenue", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("City Tax", "Pay $200", "#FFFFFF");
square[5] = new Square("Reading Railroad", "$200", "#FFFFFF", 200, 1);
square[6] = new Square("Oriental Avenue", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[8] = new Square("Vermont Avenue", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Connecticut Avenue", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Just Visiting", "", "#FFFFFF");
square[11] = new Square("St. Charles Place", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Electric Company", "$150", "#FFFFFF", 150, 2);
square[13] = new Square("States Avenue", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Virginia Avenue", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Pennsylvania Railroad", "$200", "#FFFFFF", 200, 1);
square[16] = new Square("St. James Place", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[18] = new Square("Tennessee Avenue", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("New York Avenue", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Free Parking", "", "#FFFFFF");
square[21] = new Square("Kentucky Avenue", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[23] = new Square("Indiana Avenue", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Illinois Avenue", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("B&O Railroad", "$200", "#FFFFFF", 200, 1);
square[26] = new Square("Atlantic Avenue", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Ventnor Avenue", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Water Works", "$150", "#FFFFFF", 150, 2);
square[29] = new Square("Marvin Gardens", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect $200.", "#FFFFFF");
square[31] = new Square("Pacific Avenue", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("North Carolina Avenue", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[34] = new Square("Pennsylvania Avenue", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Short Line", "$200", "#FFFFFF", 200, 1);
square[36] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[37] = new Square("Park Place", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("LUXURY TAX", "Pay $100", "#FFFFFF");
square[39] = new Square("Boardwalk", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);
*/

square[0] = new Square("KOJA", "Gba $200 bi o n se koja.", "#FFFFFF");
square[1] = new Square("Cocoa House", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Community Chest", "Tele alaye to wa lori kaadi akomona", "#FFFFFF");
square[3] = new Square("Dugbe Market", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Owo Ori", "San $200", "#FFFFFF");
square[5] = new Square("Ibadan Railway Station", "$200", "#FFFFFF", 200, 1);
square[6] = new Square("Agodi Gardens", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Chance", "Tele alaye to wa lori kaadi akomona", "#FFFFFF");
square[8] = new Square("Ventura Mall", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Bodija Shopping Complex", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Se abewo", "", "#FFFFFF");
square[11] = new Square("University College Hospital", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Capital Building", "$150", "#FFFFFF", 150, 2);
square[13] = new Square("Agodi Gardens", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Jericho Mall", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Liberty Stadium", "$200", "#FFFFFF", 200, 1);
square[16] = new Square("Ibadan Polo Club", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Community Chest", "Tele alaye to wa lori kaadi akomona", "#FFFFFF");
square[18] = new Square("Alalubosa", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Magazine Road", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Free Parking", "", "#FFFFFF");
square[21] = new Square("Queens Cinemas", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Chance", "Tele alaye to wa lori kaadi akomona", "#FFFFFF");
square[23] = new Square("Ibadan Civic Centre", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Challenge Bus Terminal", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("Iwo Road Motor Park", "$200", "#FFFFFF", 200, 1);
square[26] = new Square("Bodija Market", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Oja'ba", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Ibadan Water Corporation", "$150", "#FFFFFF", 150, 2);
square[29] = new Square("Kokodome", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Koja Sewon", "Maa lo si ogba ewon. Ma se gba KOJA. Ma se gba $200.", "#FFFFFF");
square[31] = new Square("Ilaji Resort", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("University of Ibadan (Main Gate)", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Community Chest", "Tele alaye to wa lori kaadi akomona", "#FFFFFF");
square[34] = new Square("Amusement Park", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Olodo", "$200", "#FFFFFF", 200, 1);
square[36] = new Square("Chance", "Tele alaye to wa lori kaadi akomona", "#FFFFFF");
square[37] = new Square("Ibadan Golf Club", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("San Owo Faaji", "San $100", "#FFFFFF");
square[39] = new Square("IITA", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Jade lewon, Lofe. To ju kaadi di igba ti onilo re tabi ki o ta.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Ku orire o ti gbe gba oroke idije arewa. Gba $10.", function() { addamount(10, 'Community Chest');});
communityChestCards[2] = new Card("Lati ibi idokowo, gba $50.", function() { addamount(50, 'Community Chest');});
communityChestCards[3] = new Card("Owo idoju ti ofo ti too gba. Gba $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[4] = new Card("Adapada ninu owo ori. Gba $20.", function() { addamount(20, 'Community Chest');});
communityChestCards[5] = new Card("Owo isinmi ti too gba. Gba $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[6] = new Card("O ti jogun $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[7] = new Card("Gba $25 owo itonisona.", function() { addamount(25, 'Community Chest');});
communityChestCards[8] = new Card("San owo ilera $100.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[9] = new Card("Itanran asise lati Ile ifowopamo. Gba $200.", function() { addamount(200, 'Community Chest');});
communityChestCards[10] = new Card("San owo ile iwe $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[11] = new Card("San owo eleto ilera. San $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("Oni lojobi re. Gba $10 lowo gbo oludije kookan.", function() { collectfromeachplayer(10, 'Community Chest');});
communityChestCards[13] = new Card("Losi \"KOJA\" (Gba $200).", function() { advance(0);});
communityChestCards[14] = new Card("Atunse ohun ini. $40 lori ile kookan. $115 lori ile itura.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Losi Ewon. Maa lo taara. Magba \"KOJA\". Ma se gba $200.", function() { gotojail();});


chanceCards[0] = new Card("Jade lewon, Lofe. To ju kaadi di igba ti onilo re tabi ki o ta.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Atunse ohun ini. Lori ile kookan san $25. Lori ile itura san $100.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Ere asapajude san $15.", function() { subtractamount(15, 'Chance');});
chanceCards[3] = new Card("Won ti yan e ni oludari egbe. San $50 fun oludije kookan.", function() { payeachplayer(50, 'Chance');});
chanceCards[4] = new Card("Pada seyin ni iwon ese meta.", function() { gobackthreespaces();});
chanceCards[5] = new Card("Maa losi ibi ohun ini ilu ti o sun mo ju. Ti oludije miran ko ba tii ra, ra lowo Ile Ifiowopamo. Ti oludije miran ba ti ra, ju daisi ki osi san iye ti o se deede apapo isiro daisi lona mewa fun eni ti o nii.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Gba $50 lowo Ile Ifiowopamo.", function() { addamount(50, 'Chance');});
chanceCards[7] = new Card("Maa losi ile ise reluwe ti o sun mo ju. Ti oludije miran ko ba tii ra, ra lowo Ile Ifiowopamo. Ti oludije miran ba ti ra, ju daisi ki osi san iye ti o se deede apapo isiro daisi lona meji fun eni ti o nii.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("San $15 fun awon alaini.", function() { subtractamount(15, 'Chance');});
chanceCards[9] = new Card("Se Faaji lo si IITA. Ti o ba gba \"KOJA\" gba $200.", function() { advance(5);});
chanceCards[10] = new Card("Naa lo si Liberty.", function() { advance(39);});
chanceCards[11] = new Card("Maa lo si Oja'ba. Ti o ba gba \"KOJA\" gba $200.", function() { advance(24);});
chanceCards[12] = new Card("Owo ile ti to gba. Gba $150.", function() { addamount(150, 'Chance');});
chanceCards[13] = new Card("Maa losi ile ise reluwe ti o sun mo ju. Ti oludije miran ko ba tii ra, ra lowo Ile Ifiowopamo. Ti oludije miran ba ti ra, ju daisi ki osi san iye ti o se deede apapo isiro daisi lona meji fun eni ti o nii.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("Maa lo si Olodo. Ti o ba gba \"KOJA\" gba $200.", function() { advance(11);});
chanceCards[15] = new Card("Losi Ewon. Maa lo taara. Magba \"KOJA\". Ma se gba $200.", function() { gotojail();});
