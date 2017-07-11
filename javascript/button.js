$(document).ready(function(){
	var person_clock_txt = document.getElementById("person-clock-txt");
	var person_clock_display = document.getElementById("person-clock");
	$("#start-button").click(function(e){
		$("#start-button").hide();
		$("#ai1-cards").show();
		$("#ai2-cards").show();
		$("#pokercards").show();
		$("#person-cards").show();
		$("#ai1-card1").animate({left:"0px"}, 200);
		$("#ai2-card1").delay(200).animate({left:"0px"}, 200);
		$("#person-card1").delay(400).animate({top:"60px",left:"98px"}, 200);
		$("#ai1-card2").delay(600).animate({left:"30px"}, 200);
		$("#ai2-card2").delay(800).animate({left:"30px"}, 200);
		$("#person-card2").delay(1000).animate({top:"60px",left:"128px"}, 200);
		$("#ai1-card3").delay(1200).animate({left:"60px"}, 200);
		$("#ai2-card3").delay(1400).animate({left:"60px"}, 200);
		$("#person-card3").delay(1600).animate({top:"60px",left:"158px"}, 200);
		setTimeout(function(){
			$(".alert-message").show().fadeOut(1000);
			$("#ai1-game-message").show().animate({top:"0px",opacity:"0"},600).delay(100);
			$("#ai2-game-message").show().animate({top:"0px",opacity:"0"},600).delay(100);
			$("#person-game-message").show().animate({top:"0px",opacity:"0"},600).delay(100);
			$("#person-chip").show().animate({top:"-100px",left:"88px"}, 400)
			.delay(200).fadeOut(300,function(){
				$(this).css({"top":"70px","left":"120px"});
			});
			$("#ai1-chip").show().animate({left:"239px",top:"20px"}, 400)
			.delay(200).fadeOut(300,function(){
				$(this).css({"top":"0px","left":"60px"});
			});
			$("#ai2-chip").show().animate({left:"-162px",top:"20px"}, 400)
			.delay(200).fadeOut(300,function(){
				$(this).css({"top":"0px","left":"60px"});
			});
		},1700);
		setTimeout(function(){
			person_money = person_money - person.anzhu;
			pc1_money = pc1_money - person.anzhu;
			pc2_money = pc2_money - person.anzhu;
			$(".person-money").text(person_money + "W");
			$(".ai1-money").text(pc1_money + "W");
			$(".ai2-money").text(pc2_money + "W");
			$(".in-total-message > div").text(person.in_total + "W");
		},2000);
		setTimeout(function(){
			$(".in-total-message").show();
		},2800);
		setTimeout(function(){
			$("#person-clock").show();
		},3000);
		setTimeout(function(){
			$("#button-list").show();
			$("#person-game-symbol").show();
			$("#ai1-game-symbol").show();
			$("#ai2-game-symbol").show();
			countDown(person_clock_txt,person_clock_display);
		},3050);
		e.stopPropagation();
	});
	$("#with-the-note").click(function(e){
		$("#button-list").hide();
		if(person.see === false){
			person.in_total += person.anzhu;
			person_money = person_money - person.anzhu;
			$(".person-money").text(person_money + "W");
		}else{
			person.in_total += person.mingzhu;
			person_money = person_money - person.mingzhu;
			$(".person-money").text(person_money + "W");
		}
		$("#person-chip").css("background-image","url(images/chip/with.png)").show()
		.animate({top:"-100px",left:"88px"},400).fadeOut(500,function(){
			$(this).css({"top":"70px","left":"120px"});
		});
		$(".in-total-message > div").text(person.in_total + "W");
		exitClock();
		if(person.ai2_giveup != 1){
			ai2Random();
		}else{
			ai1Random();
		}
		e.stopPropagation();
	});
	$("#add-chip").click(function(e){
		$("#button-list").hide();
		$("#chip-ul").show();
		e.stopPropagation();
	});
	$("#chip-10w").click(function(e){
		if(person.see === false){
			person.anzhu += 10;
			person.in_total += person.anzhu;
			person_money = person_money - person.anzhu;
			$(".message1").text("暗注：" + person.anzhu +"W");
			$(".person-money").text(person_money + "W");
		}else{
			person.mingzhu += 10;
			person.in_total += person.mingzhu;
			person_money = person_money - person.mingzhu;
			$(".message2").html("明注：" + person.mingzhu +"W");
			$(".person-money").text(person_money + "W");
		}
		$(".in-total-message > div").text(person.in_total + "W");
		$("#button-list").hide();
		$("#person-chip").css("background-image","url(images/chip/10W.png)").show()
		.animate({top:"-100px",left:"88px"},400).fadeOut(500,function(){
			$(this).css({"top":"70px","left":"120px"});
		if(person.ai2_giveup ===0){
			ai2Random();
		}else{
			ai1Random();
		}
		});
		$("#chip-ul").hide();
		exitClock();
		e.stopPropagation();
	});
	$("#chip-20w").click(function(e){
		if(person.see === false){
			person.anzhu += 20;
			person.in_total += person.anzhu;
			person_money = person_money - person.anzhu;
			$(".message1").text("暗注：" + person.anzhu +"W");
			$(".person-money").text(person_money + "W");
		}else{
			person.mingzhu += 20;
			person.in_total += person.mingzhu;
			person_money = person_money - person.mingzhu;
			$(".message2").html("明注：" + person.mingzhu +"W");
			$(".person-money").text(person_money + "W");
		}
		$(".in-total-message > div").text(person.in_total + "W");
		$("#button-list").hide();
		$("#person-chip").css("background-image","url(images/chip/20W.png)").show()
		.animate({top:"-100px",left:"88px"},400).fadeOut(500,function(){
			$(this).css({"top":"70px","left":"120px"});
		if(person.ai2_giveup ===0){
			ai2Random();
		}else{
			ai1Random();
		}
		});
		$("#chip-ul").hide();
		exitClock();
		e.stopPropagation();
	});
	$("#chip-50w").click(function(e){
		if(person.see === false){
			person.anzhu += 50;
			person.in_total += person.anzhu;
			person_money = person_money - person.anzhu;
			$(".message1").text("暗注：" + person.anzhu +"W");
			$(".person-money").text(person_money + "W");
		}else{
			person.mingzhu += 50;
			person.in_total += person.mingzhu;
			person_money = person_money - person.mingzhu;
			$(".message2").html("明注：" + person.mingzhu +"W");
			$(".person-money").text(person_money + "W");
		}
		$(".in-total-message > div").text(person.in_total + "W");
		$("#button-list").hide();
		$("#person-chip").css("background-image","url(images/chip/50W.png)").show()
		.animate({top:"-100px",left:"88px"},400).fadeOut(500,function(){
			$(this).css({"top":"70px","left":"120px"});
		if(person.ai2_giveup ===0){
			ai2Random();
		}else{
			ai1Random();
		}
		});
		$("#chip-ul").hide();
		exitClock();
		e.stopPropagation();
	});
	$("#chip-100w").click(function(e){
		if(person.see === false){
			person.anzhu += 100;
			person.in_total += person.anzhu;
			person_money = person_money - person.anzhu;
			$(".message1").text("暗注：" + person.anzhu +"W");
			$(".person-money").text(person_money + "W");
		}else{
			person.mingzhu += 100;
			person.in_total += person.mingzhu;
			person_money = person_money - person.mingzhu;
			$(".message2").html("明注：" + person.mingzhu +"W");
			$(".person-money").text(person_money + "W");
		}
		$(".in-total-message > div").text(person.in_total + "W");
		$("#button-list").hide();
		$("#person-chip").css("background-image","url(images/chip/100W.png)").show()
		.animate({top:"-100px",left:"88px"},400).fadeOut(500,function(){
			$(this).css({"top":"70px","left":"120px"});
			if(person.ai2_giveup ===0){
				ai2Random();
			}else{
				ai1Random();
			}
		});
		$("#chip-ul").hide();
		exitClock();
		e.stopPropagation();
	});
	$("#chip-exit").click(function(e){
		$("#chip-ul").hide();
		$("#button-list").show();
		e.stopPropagation();
	});
	$("#check-pocker").click(function(e){
		$("#person-card1").css("background-image",'url(images/'+person.person_cards[0]+'.png)');
		$("#person-card2").css("background-image",'url(images/'+person.person_cards[1]+'.png)');
		$("#person-card3").css("background-image",'url(images/'+person.person_cards[2]+'.png)');
		$("#person-game-symbol").css("background-image",'url(images/circle/see.png)');
		person.see = true;
		e.stopPropagation();
	});
	$("#give-up").click(function(e){
		person.person_giveup = 1;
		person.still_alive -= 1;
		$("#button-list").hide();
		$("#person-game-symbol").css("background-image",'url(images/circle/lose.png)');
		$("#person-cards").css("opacity","0.7");
		exitClock();
		if(person.still_alive === 2){	//如果还剩两个电脑			
			$("#person-clock").css({"top":"-130px","left":"180px"}).show();
			countDown(person_clock_txt,person_clock_display);
			pcCompare(person.pc1_data[1],person.pc2_data[1]);
			setTimeout(function(){
				exitClock();
				scoreboard();
			},3000);
		}
		if(person.still_alive === 1){	//如果还剩一个电脑		
			scoreboard();
		}
		e.stopPropagation();
	});
	$("#compare-card").click(function(e){
		$("#button-list").hide();
		if(person.still_alive ===3){
			$("#ai1-cards").css({"opacity":"0.7","cursor":"pointer"});
			$("#ai2-cards").css({"opacity":"0.7","cursor":"pointer"});
			$("#compare-txt1").show();
			$("#compare-txt2").show();
			$("#give-up-compare").show();
			$("#ai1-cards").one("click",function(e) {
				$("#ai2-cards").unbind("click"); 
				personCompare(person.person_data[1],person.pc1_data[1],1);
				setTimeout(function(){
					if(person.person_giveup === 1){
						$("#person-clock").css({"top":"-130px","left":"180px"}).show();
						countDown(person_clock_txt,person_clock_display);
						pcCompare(person.pc1_data[1],person.pc2_data[1]);
						setTimeout(function(){
							exitClock();
							scoreboard();
						},3000);
					}else{
							ai2Random();
					}
				},1000);
				e.stopPropagation();
			});
			$("#ai2-cards").one("click",function(e) {
				$("#ai1-cards").unbind("click"); 
				personCompare(person.person_data[1],person.pc2_data[1],2);
				setTimeout(function(){
					if(person.person_giveup === 1){
						$("#person-clock").css({"top":"-130px","left":"180px"}).show();
						countDown(person_clock_txt,person_clock_display);
						pcCompare(person.pc1_data[1],person.pc2_data[1]);
						setTimeout(function(){
							exitClock();
							scoreboard();
						},3000);
					}else{
							ai1Random();
					}
				},1000);
				e.stopPropagation();
			});
		}
		if(person.still_alive === 2){
			if(person.see === false){
				person.in_total += person.anzhu;
				person_money = person_money - person.anzhu;
				$(".person-money").text(person_money + "W");
			}else{
				person.in_total += person.mingzhu;
				person_money = person_money - person.mingzhu;
				$(".person-money").text(person_money + "W");
			}
			$("#person-chip").css("background-image","url(images/chip/compare.png)").show()
			.animate({top:"-100px",left:"88px"},400).fadeOut(500,function(){
				$(this).css({"top":"70px","left":"120px"});
			});
			$(".in-total-message > div").text(person.in_total + "W");
			if(person.ai1_giveup ===1){
				if(person.person_data[1] > person.pc2_data[1]){
					person.ai2_giveup = 1;
				}else{
					person.person_giveup =1;
				}
			}
			if(person.ai2_giveup ===1){
				if(person.person_data[1] > person.pc1_data[1]){
					person.ai1_giveup = 1;
				}else{
					person.person_giveup =1;
				}
			}
			setTimeout(function(){
				exitClock();
				scoreboard();
			},2000);
		}
		e.stopPropagation();
	});
	$("#give-up-compare").click(function(e){
		$("#give-up-compare").hide();
		$("#button-list").show();
		$("#ai1-cards").css({"opacity":"1","cursor":"default"});
		$("#ai2-cards").css({"opacity":"1","cursor":"default"});
		$("#compare-txt1").hide();
		$("#compare-txt2").hide();
		e.stopPropagation();
	});
	$(".scoreboard-exit").click(function(e){
		startGame();
		cardsReturn();
		$("#scoreboard").hide();
		$("#start-button").show();
		e.stopPropagation();
	});
	function countDown(who,which){
		clearInterval(who.timer);
		var t = 15;
		who.innerHTML = t;
		who.timer = setInterval(function(){
			t = t-1;
			who.innerHTML = t;
			if(t<0){
				clearInterval(who.timer);
				person.person_giveup = 1;
				person.still_alive -= 1;
				which.style.display = "none";
				$("#button-list").hide();
				$("#chip-ul").hide();
				$("#give-up-compare").hide();
				$("#person-game-symbol").css("background-image",'url(images/circle/lose.png)');
				$("#person-cards").css("opacity","0.7");	
				if(person.still_alive === 2){
					pcCompare(person.pc1_data[1],person.pc2_data[1]);
					setTimeout(function(){
						scoreboard();
					},3000);
				}
				if(person.still_alive ===1){
					if(person.ai1_giveup ===0 ){
						scoreboard();
					}
					if(person.ai2_giveup ===0 ){
						scoreboard();
					}
				}	
			}
		},1000);
	}
	function cardsReturn(){
		$("#person-cards").hide();
		$("#ai1-cards").hide();
		$("#ai2-cards").hide();
		$("#ai1-card1").css({"left":"249px","background-image":"url(images/back.png)"});
		$("#ai1-card2").css({"left":"249px","background-image":"url(images/back.png)"});
		$("#ai1-card3").css({"left":"249px","background-image":"url(images/back.png)"});
		$("#ai2-card1").css({"left":"-172px","background-image":"url(images/back.png)"});
		$("#ai2-card2").css({"left":"-172px","background-image":"url(images/back.png)"});
		$("#ai2-card3").css({"left":"-172px","background-image":"url(images/back.png)"});
		$("#person-card1").css({"top":"-145px","left":"88px","background-image":"url(images/back.png)"});
		$("#person-card2").css({"top":"-145px","left":"88px","background-image":"url(images/back.png)"});
		$("#person-card3").css({"top":"-145px","left":"88px","background-image":"url(images/back.png)"});
		$("#person-game-symbol").css({"background-image":"url(images/circle/dark.png)","opacity":"1"}).hide();
		$("#ai1-game-symbol").css({"background-image":"url(images/circle/dark.png)","opacity":"1"}).hide();
		$("#ai2-game-symbol").css({"background-image":"url(images/circle/dark.png)","opacity":"1"}).hide();
		$(".message1").text("暗注：10W");
		$(".message2").text("明注：20W");
		$("#person-cards").css("opacity","1");
		$("#ai1-cards").css("opacity","1");
		$("#ai2-cards").css("opacity","1");
		$("#person-chip").css("background-image","url(images/chip/10W.png)");
		$(".ai1-chip").css("background-image","url(images/chip/10W.png)");
		$(".ai2-chip").css("background-image","url(images/chip/10W.png)");
		$("#person-clock").css({"top":"-80px","left":"100px"});
	}
	function exitClock(){
		clearInterval(person_clock_txt.timer);
		$("#person-clock").hide();
	}
	function showAllCards(){
		$("#person-card1").css("background-image",'url(images/'+person.person_cards[0]+'.png)');
		$("#person-card2").css("background-image",'url(images/'+person.person_cards[1]+'.png)');
		$("#person-card3").css("background-image",'url(images/'+person.person_cards[2]+'.png)');
		$("#ai1-card1").css("background-image",'url(images/'+person.pc1_cards[0]+'.png)');
		$("#ai1-card2").css("background-image",'url(images/'+person.pc1_cards[1]+'.png)');
		$("#ai1-card3").css("background-image",'url(images/'+person.pc1_cards[2]+'.png)');
		$("#ai2-card1").css("background-image",'url(images/'+person.pc2_cards[0]+'.png)');
		$("#ai2-card2").css("background-image",'url(images/'+person.pc2_cards[1]+'.png)');
		$("#ai2-card3").css("background-image",'url(images/'+person.pc2_cards[2]+'.png)');
	}
	function scoreboard(){
		$(".in-total-message").hide();
		if(person.ai1_giveup === 1){
			var m = pc1_moneya - pc1_money;
			$("#ai1-scores .span2").css({"color":"black","font-weight":"normal"}).text("负");
			$("#ai1-scores .span3").text("-" + m +"W");
			$("#ai1-game-symbol").css("background-image","url(images/circle/lose.png)");
		}else{
			var mm = person.in_total - pc1_moneya + pc1_money;
			pc1_money += person.in_total;
			$(".ai1-money").text(pc1_money + "W");
			$("#ai1-game-symbol").css("background-image","url(images/circle/win.png)");
			$("#ai1-scores .span2").text("胜").css({"color":"red","font-weight":"800"});
			$("#ai1-scores .span3").text("+" + mm +"W");
		}
		if(person.ai2_giveup === 1){
			var a = pc2_moneya - pc2_money;
			$("#ai2-scores .span2").css({"color":"black","font-weight":"normal"}).text("负");
			$("#ai2-scores .span3").text("-" + a +"W");
			$("#ai2-game-symbol").css("background-image","url(images/circle/lose.png)");
		}else{
			var aa = person.in_total - pc2_moneya + pc2_money;
			pc2_money += person.in_total;
			$(".ai2-money").text(pc2_money + "W");
			$("#ai2-game-symbol").css("background-image","url(images/circle/win.png)");
			$("#ai2-scores .span2").text("胜").css({"color":"red","font-weight":"800"});
			$("#ai2-scores .span3").text("+" + aa +"W");
		}
		if(person.person_giveup === 1){
			lose++;
			$(".winorlose").text(win + "胜/" + lose +"负");
			var b = person_moneya - person_money;
			$("#person-scores .span2").css({"color":"black","font-weight":"normal"}).text("负");
			$("#person-scores .span3").text("-" + b +"W");
			$("#person-game-symbol").css("background-image","url(images/circle/lose.png)");
		}else{
			win++;
			$(".winorlose").text(win + "胜/" + lose +"负");
			var bb = person.in_total - person_moneya + person_money;
			person_money += person.in_total;
			$(".person-money").text(person_money + "W");
			$("#person-game-symbol").css("background-image","url(images/circle/win.png)");
			$("#person-scores .span2").text("胜").css({"color":"red","font-weight":"800"});
			$("#person-scores .span3").text("+" + bb +"W");
		}
		showAllCards();
		$("#scoreboard").show();
	}
	function pcCompare(pc1_scores,pc2_scores){
		if(person.ai2_see === false){
			person.in_total += person.anzhu;
			pc2_money = pc2_money - person.anzhu;
			$(".ai2-money").text(pc2_money + "W");
		}else{
			person.in_total += person.mingzhu;
			pc2_money = pc2_money - person.mingzhu;
			$(".ai2-money").text(pc2_money + "W");
		}
		$("#ai2-chip").css("background-image","url(images/chip/compare.png)").show()
		.animate({top:"20px",left:"-162px"},400).fadeOut(500,function(){
			$(this).css({"top":"0px","left":"60px"});
		});
		$(".in-total-message > div").text(person.in_total + "W");
		$("#ai2-game-message").text("比牌").css({"top":"60px","opacity":"1"})
		.animate({top:"0px",opacity:"0"}, 600);
		setTimeout(function(){
			if(pc1_scores > pc2_scores){
				person.ai2_giveup = 1;
			}else{
				person.ai1_giveup = 1;
			}
		},1000);
	}
	function personCompare(person_scores,ai_scores,which_ai){
		if(person.see === false){
			person.in_total += person.anzhu;
			person_money = person_money - person.anzhu;
			$(".person-money").text(person_money + "W");
		}else{
			person.in_total += person.mingzhu;
			person_money = person_money - person.mingzhu;
			$(".person-money").text(person_money + "W");
		}
		$("#person-chip").css("background-image","url(images/chip/compare.png)").show()
		.animate({top:"-100px",left:"88px"},400).fadeOut(500,function(){
			$(this).css({"top":"70px","left":"120px"});
		});
		$(".in-total-message > div").text(person.in_total + "W");
			if(which_ai === 1){
				if(person_scores > ai_scores){
					person.person_giveup = 0;
					person.ai1_giveup = 1;
					person.still_alive -= 1;
					$("#ai1-game-symbol").css("background-image",'url(images/circle/lose.png)');
				}else{
					person.person_giveup = 1;
					person.ai1_giveup = 0;
					person.still_alive -= 1;
					$("#person-game-symbol").css("background-image",'url(images/circle/lose.png)');
					$("#person-cards").css("opacity","0.7");
					$("#ai1-cards").css({"opacity":"1"});
				}
				exitClock();
				$("#ai1-cards").css({"cursor":"default"});
				$("#ai2-cards").css({"opacity":"1","cursor":"default"});
				$("#give-up-compare").hide();
				$("#compare-txt1").hide();
				$("#compare-txt2").hide();
			}
			if(which_ai === 2){
				if(person_scores > ai_scores){
					person.person_giveup = 0;
					person.ai2_giveup = 1;
					person.still_alive -= 1;
					$("#ai2-game-symbol").css("background-image",'url(images/circle/lose.png)');
				}else{
					person.person_giveup = 1;
					person.ai2_giveup = 0;
					person.still_alive -= 1;
					$("#person-game-symbol").css("background-image",'url(images/circle/lose.png)');
					$("#person-cards").css("opacity","0.7");
					$("#ai2-cards").css({"opacity":"1"});
				}
				exitClock();
				$("#ai2-cards").css({"cursor":"default"});
				$("#ai1-cards").css({"opacity":"1","cursor":"default"});
				$("#give-up-compare").hide();
				$("#compare-txt1").hide();
				$("#compare-txt2").hide();
			}

	}
		function ai1Random(){ //电脑1随机程序			
			var mood1 = Math.floor(Math.random()*10+1); //mood1表示看牌随机
			var mood2 = Math.floor(Math.random()*100+1);//mood2放弃随机
			var mood3 = Math.floor(Math.random()*100+1); //mood3加注随机
			var t = Math.floor(Math.random()*3+1);
			var time = t*1000;
			$("#person-clock").css({"top":"-130px","left":"-10px"}).show();
			countDown(person_clock_txt,person_clock_display);
			if(person.ai1_see === false){	//判断电脑1是否看牌,没看牌随机看牌
				if(mood1 < 7){	//不看牌
					setTimeout(function(){
							if( mood2 <= 15){ //ֱ直接放弃
								person.ai1_giveup = 1;
								person.still_alive -= 1;
								$("#ai1-game-symbol").css("background-image",'url(images/circle/lose.png)');
								$("#ai1-cards").css("opacity","0.7");
								$("#ai1-game-message").text("弃牌").css({"top":"60px","opacity":"1"})
								.animate({top:"0px",opacity:"0"}, 600);
								exitClock();
							}else{	
								if(mood2 > 20 && mood2 <=70){ //不加注
									person.in_total += person.anzhu;
									pc1_money = pc1_money - person.anzhu;
									$(".ai1-money").text(pc1_money + "W");
									$(".in-total-message > div").text(person.in_total + "W");
									$("#ai1-game-message").text("跟注").css({"top":"60px","opacity":"1"})
									.animate({top:"0px",opacity:"0"}, 600);
									$("#ai1-chip").css("background-image","url(images/chip/with.png)").show()
									.animate({top:"20px",left:"239px"},400).fadeOut(500,function(){
										$(this).css({"top":"0px","left":"60px"});
									});
									exitClock();
								}else{	//暗注加注
									if(mood3 <= 25){	//加注10W
										person.anzhu += 10;
										person.in_total += person.anzhu;
										pc1_money = pc1_money - person.anzhu;
										$(".ai1-money").text(pc1_money + "W");
										$(".message1").text("暗注：" + person.anzhu +"W");
										$("#ai1-game-message").text("加注").css({"top":"60px","opacity":"1"})
										.animate({top:"0px",opacity:"0"}, 600);
										$("#ai1-chip").css("background-image","url(images/chip/10W.png)")
										.show().animate({left:"239px",top:"20px"}, 400)
										.delay(200).fadeOut(300,function(){
											$(this).css({"top":"0px","left":"60px"});
										});
										exitClock();
									}
									if(mood3>25 && mood3<=50){ //加注20W
										person.anzhu += 20;
										person.in_total += person.anzhu;
										pc1_money = pc1_money - person.anzhu;
										$(".ai1-money").text(pc1_money + "W");
										$(".message1").text("暗注：" + person.anzhu +"W");
										$("#ai1-game-message").text("加注").css({"top":"60px","opacity":"1"})
										.animate({top:"0px",opacity:"0"}, 600);
										$("#ai1-chip").css("background-image","url(images/chip/20W.png)")
										.show().animate({left:"239px",top:"20px"}, 400)
										.delay(200).fadeOut(300,function(){
											$(this).css({"top":"0px","left":"60px"});
										});
										exitClock();
									}
									if(mood3>50 && mood3<=75){ //???50W
										person.anzhu += 50;
										person.in_total += person.anzhu;
										pc1_money = pc1_money - person.anzhu;
										$(".ai1-money").text(pc1_money + "W");
										$(".message1").text("暗注：" + person.anzhu +"W");
										$("#ai1-game-message").text("加注").css({"top":"60px","opacity":"1"})
										.animate({top:"0px",opacity:"0"}, 600);
										$("#ai1-chip").css("background-image","url(images/chip/50W.png)")
										.show().animate({left:"239px",top:"20px"}, 400)
										.delay(200).fadeOut(300,function(){
											$(this).css({"top":"0px","left":"60px"});
										});
										exitClock();
									}
									if(mood3>75 && mood3<=100){	//加注100W
										person.anzhu += 100;
										person.in_total += person.anzhu;
										pc1_money = pc1_money - person.anzhu;
										$(".ai1-money").text(pc1_money + "W");
										$(".message1").text("暗注：" + person.anzhu +"W");
										$("#ai1-game-message").text("加注").css({"top":"60px","opacity":"1"})
										.animate({top:"0px",opacity:"0"}, 600);
										$("#ai1-chip").css("background-image","url(images/chip/100W.png)")
										.show().animate({left:"239px",top:"20px"}, 400)
										.delay(200).fadeOut(300,function(){
											$(this).css({"top":"0px","left":"60px"});
										});
										exitClock();
									}	
									$(".in-total-message > div").text(person.in_total + "W");
								}
							}
					},time);
				}else{
					person.ai1_see = true;
				}
			}
			if(person.ai1_see === true){
				$("#ai1-game-symbol").css("background-image",'url(images/circle/see.png)');
				setTimeout(function(){
					if( person.pc1_data[1] <1500){ 	//牌太小，直接放弃
						person.ai1_giveup = 1;
						person.still_alive -= 1;
						$("#ai1-game-message").text("弃牌").css({"top":"60px","opacity":"1"})
						.animate({top:"0px",opacity:"0"}, 600);
						$("#ai1-game-symbol").css("background-image",'url(images/circle/lose.png)');
						$("#ai1-cards").css("opacity","0.7");
						exitClock();
					}else{
						if(mood2 <=20){ //看牌不加注
							person.in_total += person.mingzhu;
							pc1_money = pc1_money - person.mingzhu;
							$(".ai1-money").text(pc1_money + "W");
							$(".in-total-message > div").text(person.in_total + "W");
							$("#ai1-game-message").text("跟注").css({"top":"60px","opacity":"1"})
							.animate({top:"0px",opacity:"0"}, 600);
							$("#ai1-chip").css("background-image","url(images/chip/with.png)").show()
							.animate({top:"20px",left:"239px"},400).fadeOut(500,function(){
								$(this).css({"top":"0px","left":"60px"});
							});
							exitClock();
						}else{	//加注
							if(mood3 <= 25){	//加注10W
								person.mingzhu += 10;
								person.in_total += person.mingzhu;
								pc1_money = pc1_money - person.mingzhu;
								$(".ai1-money").text(pc1_money + "W");
								$(".message2").html("明注：" + person.mingzhu +"W");
								$("#ai1-game-message").text("加注").css({"top":"60px","opacity":"1"})
								.animate({top:"0px",opacity:"0"}, 600);
								$("#ai1-chip").css("background-image","url(images/chip/10W.png)").show()
								.animate({left:"239px",top:"20px"}, 400)
								.delay(200).fadeOut(300,function(){
									$(this).css({"top":"0px","left":"60px"});
								});
								exitClock();
							}
							if(mood3>25 && mood3<=50){ //加注20W
								person.mingzhu += 20;
								person.in_total += person.mingzhu;
								pc1_money = pc1_money - person.mingzhu;
								$(".ai1-money").text(pc1_money + "W");
								$(".message2").html("明注：" + person.mingzhu +"W");
								$("#ai1-game-message").text("加注").css({"top":"60px","opacity":"1"})
								.animate({top:"0px",opacity:"0"}, 600);
								$("#ai1-chip").css("background-image","url(images/chip/20W.png)").show()
								.animate({left:"239px",top:"20px"}, 400)
								.delay(200).fadeOut(300,function(){
									$(this).css({"top":"0px","left":"60px"});
								});
								exitClock();
							}
							if(mood3>50 && mood3<=75){ //加注50W
								person.mingzhu += 50;
								person.in_total += person.mingzhu;
								pc1_money = pc1_money - person.mingzhu;
								$(".ai1-money").text(pc1_money + "W");
								$(".message2").html("明注：" + person.mingzhu +"W");
								$("#ai1-game-message").text("加注").css({"top":"60px","opacity":"1"})
								.animate({top:"0px",opacity:"0"}, 600);
								$("#ai1-chip").css("background-image","url(images/chip/50W.png)").show()
								.animate({left:"239px",top:"20px"}, 400)
								.delay(200).fadeOut(300,function(){
									$(this).css({"top":"0px","left":"60px"});
								});
								exitClock();
							}
							if(mood3>75 && mood3<=100){	//加注100W
								person.mingzhu += 100;
								person.in_total += person.mingzhu;
								pc1_money = pc1_money - person.mingzhu;
								$(".ai1-money").text(pc1_money + "W");
								$(".message2").html("明注：" + person.mingzhu +"W");
								$("#ai1-game-message").text("加注").css({"top":"60px","opacity":"1"})
								.animate({top:"0px",opacity:"0"}, 600);
								$("#ai1-chip").css("background-image","url(images/chip/100W.png)").show()
								.animate({left:"239px",top:"20px"}, 400)
								.delay(200).fadeOut(300,function(){
									$(this).css({"top":"0px","left":"60px"});
								});
								exitClock();
							}	
							$(".in-total-message > div").text(person.in_total + "W");
						}
					}
				},time);
			}
			setTimeout(function(){
				if(person.person_giveup === 0 && person.still_alive >=2 ){
					$("#button-list").show();
					$("#person-clock").css({"top":"-80px","left":"100px"}).show();
					countDown(person_clock_txt,person_clock_display);
				}
				if(person.ai2_giveup ===0 && person.still_alive === 2 && person.person_giveup ===1){
					ai2Random();
				}
				if(person.still_alive === 1){
					scoreboard();
				}
			},time+900);
		}
	function ai2Random(){ //电脑2随机程序		
	var mood1 = Math.floor(Math.random()*10+1); //mood1看牌随机
		var mood2 = Math.floor(Math.random()*100+1);//mood2放弃随机
		var mood3 = Math.floor(Math.random()*100+1); //mood3家住随机
		var t = Math.floor(Math.random()*3+1);
		var time = t*1000;
		$("#person-clock").css({"top":"-130px","left":"180px"}).show();
		countDown(person_clock_txt,person_clock_display);
		if(person.ai2_see === false){	//判断是否看牌，没看牌随机看牌
			if(mood1 < 7){	//不看牌
				setTimeout(function(){
						if( mood2 <= 18){ //ֱ直接放弃
							person.ai2_giveup = 1;
							person.still_alive -= 1;
							$("#ai2-game-symbol").css("background-image",'url(images/circle/lose.png)');
							$("#ai2-cards").css("opacity","0.7");
							$("#ai2-game-message").text("弃牌").css({"top":"60px","opacity":"1"})
							.animate({top:"0px",opacity:"0"}, 600);
							exitClock();
						}else{	
							if(mood2 > 20 && mood2 <=70){ //不加注
								person.in_total += person.anzhu;
								pc2_money = pc2_money - person.anzhu;
								$(".ai2-money").text(pc2_money + "W");
								$(".in-total-message > div").text(person.in_total + "W");
								$("#ai2-game-message").text("跟注").css({"top":"60px","opacity":"1"})
								.animate({top:"0px",opacity:"0"}, 600);
								$("#ai2-chip").css("background-image","url(images/chip/with.png)").show()
								.animate({top:"20px",left:"-162px"},400).fadeOut(500,function(){
									$(this).css({"top":"0px","left":"60px"});
								});
								exitClock();
							}else{	//不看牌加注
								if(mood3 <= 25){	//加注10W
									person.anzhu += 10;
									person.in_total += person.anzhu;
									pc2_money = pc2_money - person.anzhu;
									$(".ai2-money").text(pc2_money + "W");
									$(".message1").text("暗注：" + person.anzhu +"W");
									$("#ai2-game-message").text("加注").css({"top":"60px","opacity":"1"})
									.animate({top:"0px",opacity:"0"}, 600);
									$("#ai2-chip").css("background-image","url(images/chip/10W.png)")
									.show().animate({left:"-162px",top:"20px"}, 400)
									.delay(200).fadeOut(300,function(){
										$(this).css({"top":"0px","left":"60px"});
									});
									exitClock();
								}
								if(mood3>25 && mood3<=50){ //加注20W
									person.anzhu += 20;
									person.in_total += person.anzhu;
									pc2_money = pc2_money - person.anzhu;
									$(".ai2-money").text(pc2_money + "W");
									$(".message1").text("暗注：" + person.anzhu +"W");
									$("#ai2-game-message").text("加注").css({"top":"60px","opacity":"1"})
									.animate({top:"0px",opacity:"0"}, 600);
									$("#ai2-chip").css("background-image","url(images/chip/20W.png)")
									.show().animate({left:"-162px",top:"20px"}, 400)
									.delay(200).fadeOut(300,function(){
										$(this).css({"top":"0px","left":"60px"});
									});
									exitClock();
								}
								if(mood3>50 && mood3<=75){ //加注50W
									person.anzhu += 50;
									person.in_total += person.anzhu;
									pc2_money = pc2_money - person.anzhu;
									$(".ai2-money").text(pc2_money + "W");
									$(".message1").text("暗注：" + person.anzhu +"W");
									$("#ai2-game-message").text("加注").css({"top":"60px","opacity":"1"})
									.animate({top:"0px",opacity:"0"}, 600);
									$("#ai2-chip").css("background-image","url(images/chip/50W.png)")
									.show().animate({left:"-162px",top:"20px"}, 400)
									.delay(200).fadeOut(300,function(){
										$(this).css({"top":"0px","left":"60px"});
									});
									exitClock();
								}
								if(mood3>75 && mood3<=100){	//加注100W
									person.anzhu += 100;
									person.in_total += person.anzhu;
									pc2_money = pc2_money - person.anzhu;
									$(".ai2-money").text(pc2_money + "W");
									$(".message1").text("暗注：" + person.anzhu +"W");
									$("#ai2-game-message").text("加注").css({"top":"60px","opacity":"1"})
									.animate({top:"0px",opacity:"0"}, 600);
									$("#ai2-chip").css("background-image","url(images/chip/100W.png)")
									.show().animate({left:"-162px",top:"20px"}, 400)
									.delay(200).fadeOut(300,function(){
										$(this).css({"top":"0px","left":"60px"});
									});
									exitClock();
								}	
								$(".in-total-message > div").text(person.in_total + "W");
							}
						}
				},time);
			}else{
				person.ai2_see = true;
			}
		}
		if(person.ai2_see === true){
			$("#ai2-game-symbol").css("background-image",'url(images/circle/see.png)');
			setTimeout(function(){
				if( person.pc2_data[1] <1600){ 	//牌太小直接放弃
					person.ai2_giveup = 1;
					person.still_alive -= 1;
					$("#ai2-game-message").text("弃牌").css({"top":"60px","opacity":"1"})
					.animate({top:"0px",opacity:"0"}, 600);
					$("#ai2-game-symbol").css("background-image",'url(images/circle/lose.png)');
					$("#ai2-cards").css("opacity","0.7");
					exitClock();
				}else{
					if(mood2 <=20){ //看牌不加注
						person.in_total += person.mingzhu;
						pc2_money = pc2_money - person.mingzhu;
						$(".ai2-money").text(pc2_money + "W");
						$(".in-total-message > div").text(person.in_total + "W");
						$("#ai2-game-message").text("跟注").css({"top":"60px","opacity":"1"})
						.animate({top:"0px",opacity:"0"}, 600);
						$("#ai2-chip").css("background-image","url(images/chip/with.png)").show()
						.animate({top:"20px",left:"-162px"},400).fadeOut(500,function(){
							$(this).css({"top":"0px","left":"60px"});
						});
						exitClock();
					}else{	//看牌加注
						if(mood3 <= 25){	//加注10W
							person.mingzhu += 10;
							person.in_total += person.mingzhu;
							pc2_money = pc2_money - person.mingzhu;
							$(".ai2-money").text(pc2_money + "W");
							$(".message2").html("明注：" + person.mingzhu +"W");
							$("#ai2-game-message").text("加注").css({"top":"60px","opacity":"1"})
							.animate({top:"0px",opacity:"0"}, 600);
							$("#ai2-chip").css("background-image","url(images/chip/10W.png)").show()
							.animate({left:"-162px",top:"20px"}, 400)
							.delay(200).fadeOut(300,function(){
								$(this).css({"top":"0px","left":"60px"});
							});
							exitClock();
						}
						if(mood3>25 && mood3<=50){ //加注20W
							person.mingzhu += 20;
							person.in_total += person.mingzhu;
							pc2_money = pc2_money - person.mingzhu;
							$(".ai2-money").text(pc2_money + "W");
							$(".message2").html("明注：" + person.mingzhu +"W");
							$("#ai2-game-message").text("加注").css({"top":"60px","opacity":"1"})
							.animate({top:"0px",opacity:"0"}, 600);
							$("#ai2-chip").css("background-image","url(images/chip/20W.png)").show()
							.animate({left:"-162px",top:"20px"}, 400)
							.delay(200).fadeOut(300,function(){
								$(this).css({"top":"0px","left":"60px"});
							});
							exitClock();
						}
						if(mood3>50 && mood3<=75){ //加注50W
							person.mingzhu += 50;
							person.in_total += person.mingzhu;
							pc2_money = pc2_money - person.mingzhu;
							$(".ai2-money").text(pc2_money + "W");
							$(".message2").html("明注：" + person.mingzhu +"W");
							$("#ai2-game-message").text("加注").css({"top":"60px","opacity":"1"})
							.animate({top:"0px",opacity:"0"}, 600);
							$("#ai2-chip").css("background-image","url(images/chip/50W.png)").show()
							.animate({left:"-162px",top:"20px"}, 400)
							.delay(200).fadeOut(300,function(){
								$(this).css({"top":"0px","left":"60px"});
							});
							exitClock();
						}
						if(mood3>75 && mood3<=100){	//加注100W
							person.mingzhu += 100;
							person.in_total += person.mingzhu;
							pc2_money = pc2_money - person.mingzhu;
							$(".ai2-money").text(pc2_money + "W");
							$(".message2").html("明注：" + person.mingzhu +"W");
							$("#ai2-game-message").text("加注").css({"top":"60px","opacity":"1"})
							.animate({top:"0px",opacity:"0"}, 600);
							$("#ai2-chip").css("background-image","url(images/chip/100W.png)").show()
							.animate({left:"-162px",top:"20px"}, 400)
							.delay(200).fadeOut(300,function(){
								$(this).css({"top":"0px","left":"60px"});
							});
							exitClock();
						}	
						$(".in-total-message > div").text(person.in_total + "W");
					}
				}
			},time);
		}
		setTimeout(function(){
			if(person.ai1_giveup === 0 && person.still_alive >=2){
				ai1Random();
			}
			if(person.person_giveup ===0 && person.still_alive === 2 && person.ai1_giveup === 1){
				$("#button-list").show();
				$("#person-clock").css({"top":"-80px","left":"100px"}).show();
				countDown(person_clock_txt,person_clock_display);
			}
			if(person.still_alive ===1){
				scoreboard();
			}
		},time+900);
	}
});

