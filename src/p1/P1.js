AnnieRoot.p1= AnnieRoot.p1||{};
AnnieRoot.p1.P1=class extends annie.Sprite{
	constructor() {
		super();
		let s=this;
		/*_a2x_need_start*/s.option_a=null;s.option_b=null;s.option_c=null;s.option_d=null;s.option_e=null;s.title=null;/*_a2x_need_end*/
		annie.initRes(s,"p1","P1");
		s.title.text = "题目标题";
		s.title.color = "#000000";
		s.title.size = 80;
		s.title.lineHeight = 80;
		s.option_a.text = "A: 测试数据aaaaaaaa";
		s.option_b.text = "B: 测试数据bbbbbbbb";
		s.option_c.text = "C: 测试数据cccccccc";
		s.option_d.text = "D: 测试数据dddddddd";
		var arr = ['a', 'b', 'c', 'd'];
		var initText = function () {
			for(var i = 0; i < 4; i ++) {
				s[`option_${arr[i]}`].color = "#000000";
				s[`option_${arr[i]}`].size = 40;
				s[`option_${arr[i]}`].lineHeight = 40;
			}
		}
		s.getSound(0)[0].play();
		console.log(s.getSound(0))
		initText();
		s.option_a.addEventListener(annie.MouseEvent.CLICK, function (e) {
			initText();
			s.option_a.color = "#ffff00";
		});

		s.option_b.addEventListener(annie.MouseEvent.CLICK, function (e) {
			initText();
			s.option_b.color = "#ffff00";
		});

		s.option_c.addEventListener(annie.MouseEvent.CLICK, function (e) {
			initText();
			s.option_c.color = "#ffff00";
		});

		s.option_d.addEventListener(annie.MouseEvent.CLICK, function (e) {
			initText();
			s.option_d.color = "#ffff00";
		});



	}
};
