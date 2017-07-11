// var in_total = 30;	
var person_money = 5000;//定义玩家的金钱
var pc1_money = 5000;	//定义电脑1的金钱
var pc2_money = 5000; 	//定义电脑2的金钱
var win = 0 ;
var lose = 0;
function GameData(){
	this.pokerColor = ["clubs","hearts","spade","diamonds"];//花色
	this.pokerNum = ["2","3","4","5","6","7","8","9","10","11","12","13","14"];//点数
	this.cards = new Array(52);	//定义牌组
	this.k = 0;
	this.randomCards = new Array(9);//定义随机卡组

	this.pc1_cards = new Array(3); //电脑1牌组
	this.pc2_cards = new Array(3); //电脑2牌组
	this.person_cards = new Array(3);	//玩家牌组

	this.pc1_scores = 0;	//初始化电脑1分数
	this.pc2_scores = 0;	//初始化电脑2分数
	this.person_scores = 0;	//初始化玩家分数

	this.pc1_data = new Array(2);
	this.pc2_data = new Array(2);
	this.person_data = new Array(2);
// 
	this.pc1_cardsType = '';	//初始化电脑1牌型
	this.pc2_cardsType = '';	//初始化电脑2牌型
	this.person_cardsType = '';	//初始化玩家牌型
	// this.txt = '';	//初始化提示结果
	this.mingzhu = 20;	//设置明注初始
	this.anzhu = 10;	//设置暗注初始
	this.see = false; //玩家是否看牌
	this.ai1_see = false;//电脑1是否看牌	
	this.ai2_see = false;//电脑2是否看牌
	this.in_total = 30;//初始化总注
	this.person_giveup = 0;	//玩家是否弃牌	
	this.ai1_giveup = 0;	//电脑1是否弃牌
	this.ai2_giveup = 0;	//电脑2是否弃牌
	this.still_alive = 3;//剩余玩家数
}
function giveCards(){	//发牌
	for(var i = 0; i < 4; i++){				//创建52张扑克牌
	for(var j = 0; j < 13; j++){
		person.cards[person.k] = person.pokerColor[i]+person.pokerNum[j];
		person.k++;
		}
	}
	for(i = 0; i < 9; i++){
		var index = Math.floor(Math.random()*(51-i));
		person.randomCards[i] = person.cards[index];
		person.cards.splice(index,1);
	}
	 person.pc1_cards = new Array(person.randomCards[0],person.randomCards[3],person.randomCards[6]); //为电脑1发牌
	 person.pc2_cards = new Array(person.randomCards[1],person.randomCards[4],person.randomCards[7]); //为电脑2发牌
	 person.person_cards = new Array(person.randomCards[2],person.randomCards[5],person.randomCards[8]);//为玩家发牌

}
function paixu(cards){	//排序扑克牌，包括花色，顺序为黑红梅方													
	if(cards[0].replace(/[^0-9]/ig,"")-0 > cards[1].replace(/[^0-9]/ig,"")-0){
		var max0 = cards[0];
		cards[0] = cards[1];
		cards[1] = max0;
	}
	if(cards[1].replace(/[^0-9]/ig,"")-0 > cards[2].replace(/[^0-9]/ig,"")-0){
		var max1 = cards[1];
		cards[1] = cards[2];
		cards[2] = max1;
	}
	if(cards[0].replace(/[^0-9]/ig,"")-0 > cards[1].replace(/[^0-9]/ig,"")-0){
		var max2 = cards[0];
		cards[0] = cards[1];
		cards[1] = max2;
	}
	var a_after = cards[0].replace(/[^0-9]/ig,"")-0;//获取交换后的牌的大小
	var b_after = cards[1].replace(/[^0-9]/ig,"")-0;//获取交换后的牌的大小
	var c_after = cards[2].replace(/[^0-9]/ig,"")-0;//获取交换后的牌的大小	
	var a_color = cards[0].replace(/[^a-z]/ig,"");//获取交换后的花色
	var b_color = cards[1].replace(/[^a-z]/ig,"");//获取交换后的花色
	var c_color = cards[2].replace(/[^a-z]/ig,"");//获取交换后的花色
	var color_arr =[a_color,b_color,c_color];	
		for(var i = 0; i < 3; i++){
			color_arr[i] = color_arr[i].replace(/spade/,"4");
			color_arr[i] = color_arr[i].replace(/hearts/,"3");
			color_arr[i] = color_arr[i].replace(/clubs/,"2");
			color_arr[i] = color_arr[i].replace(/diamonds/,"1");
		}
	//先比较牌的牌型，再通过牌型的位置关系判断花色怎么排序。
	if(a_after == b_after && b_after == c_after){ 
		if(color_arr[0] > color_arr[1]){
			var max3 = cards[0];
			cards[0] = cards[1];
			cards[1] = max3;
		}
		if(color_arr[1] > color_arr[2]){
			var max4 = cards[1];
			cards[1] = cards[2];
			cards[2] = max4;
		}
		if(color_arr[0] > color_arr[2]){
			var max5 = cards[0];
			cards[0] = cards[1];
			cards[1] = max5;
		}
	}else{
		if(a_after == b_after){
			if(color_arr[0] > color_arr[1]){
				var max6 = cards[0];
				cards[0] = cards[1];
				cards[1] = max6;
			}
		}
		if(b_after == c_after){
			if(color_arr[1] > color_arr[2]){
				var max7 = cards[1];
				cards[1] = cards[2];
				cards[2] = max7;
			}
		}
	  }
}
function getScores(whos_Cards){		//获得分数
	var scores = 0 ; 		//定义牌值分数
	var cardsType = '';		//定义牌型
	var card0 = (whos_Cards[0].replace(/[^0-9]/ig,"") - 0);//取得牌的大小
	var card1 = (whos_Cards[1].replace(/[^0-9]/ig,"") - 0);//取得牌的大小
	var card2 = (whos_Cards[2].replace(/[^0-9]/ig,"") - 0);//取得牌的大小
	var cardColor0 = whos_Cards[0].replace(/[^a-z]/ig,"");//取得牌的花色
	var cardColor1 = whos_Cards[1].replace(/[^a-z]/ig,"");//取得牌的花色
	var cardColor2 = whos_Cards[2].replace(/[^a-z]/ig,"");//取得牌的花色
	var Colors_arr = [cardColor0,cardColor1,cardColor2];	//定义花色数组
	for(var i = 0; i < 3; i++){	//获取花色分数
		Colors_arr[i] = Colors_arr[i].replace(/spade/,"4");
		Colors_arr[i] = Colors_arr[i].replace(/hearts/,"3");
		Colors_arr[i] = Colors_arr[i].replace(/clubs/,"2");
		Colors_arr[i] = Colors_arr[i].replace(/diamonds/,"1");
	}
	if(cardColor0 == cardColor1 && cardColor1 == cardColor2){  //判断花色是否相等
			if(card1 - card0 == 1 && card2 - card1 ==1){
					cardsType = "清顺";	//判断是否为清顺
					scores += card0 * 1e10 + Colors_arr[2] * 0.01;	//计算得分得分
					return [cardsType,scores];	//返回牌型和得分       
			}else{
				cardsType = "清一色";	//判断是否为清一色
				scores += card2 * 1e8 +card1 * 1e7 +card0 * 1e6 + Colors_arr[2] * 0.01;	//计算得分
				return [cardsType,scores]; 	//返回牌型和得分
			}
	}else{
		if(card0 == card1 && card1 == card2){
			cardsType = "豹子";	//判断是否为豹子
			scores += card0 * 1e12 + Colors_arr[2] * 0.01;	
			return [cardsType,scores]; 
		}
		if(card1 - card0 ==1 && card2 -card1 == 1){
			cardsType = "顺子";	//判断是否为顺子
			scores += card2 * 1e6 + Colors_arr[2] * 0.01;
			return [cardsType,scores]; 
		}
		if(card1 == card0 && card2 != card1){
			cardsType = "对子";	//判断是否为对子
			scores += card0 * 1e4 + card2 * 1e3 + Colors_arr[1] * 0.01;
			return [cardsType,scores];
		}
		if(card2 == card1 && card0 != card1){
			cardsType = "对子";	//判断是否为对子
			scores += card2 * 1e4 + card0 * 1e3 + Colors_arr[2] * 0.01;
			return [cardsType,scores];
		}
		if(card0 != card1 && card1 != card2 && card0 != card2){
			cardsType = "散牌";	//判断是否为散牌
			scores += card2 * 1e2 + card1 * 1e1 + card0 * 1 + Colors_arr[2] * 0.01;
			return [cardsType,scores];
		}
	}
}
function startGame(){
	person = new GameData();
	giveCards();//发牌
	paixu(person.pc1_cards);	//排序电脑1的牌
	paixu(person.pc2_cards);	//排序电脑2的牌
	paixu(person.person_cards);	//排序玩家的牌

	person.pc1_data = getScores(person.pc1_cards);	//获得电脑1数据
	person.pc2_data = getScores(person.pc2_cards);	//获得电脑2数据
	person.person_data = getScores(person.person_cards);	//获得玩家数据

	person.pc1_cardsType = person.pc1_data[0];	//获得电脑1牌型
	person.pc2_cardsType = person.pc2_data[0];	//获得电脑2牌型
	person.person_cardsType = person.person_data[0];	//获得玩家牌型

	person.pc1_scores = person.pc1_data[1];	//获得电脑1分数
	person.pc2_scores = person.pc2_data[1];	//获得电脑2分数
	person.person_scores = person.person_data[1];	//获得玩家分数
	person_moneya = person_money;
	pc1_moneya = pc1_money;
	pc2_moneya = pc2_money;
}
startGame();

