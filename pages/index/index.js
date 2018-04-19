//index.js
//获取应用实例
const app = getApp()
let timer;
let loopnum=0;
let btnflag=false;

Page({
  data: {
    result:'结果',
    changeSrc:'',
    mychooseSrc: '../img/clipper.png',
    winnum:0,
    btnstate:false,
    src: [
      '../img/clipper.png',
      '../img/stone.png',
      '../img/step.png'
      ]
  },
  //事件处理函数
  onLoad: function () {
    this.timerGo();
  },
  timerGo(){
    timer=setInterval(this.move,50)
  },
  move(){
      loopnum=parseInt(Math.random()*3);
      this.setData({changeSrc:this.data.src[loopnum]});
  },
  myChoose(event){
    if (this.data.btnstate) {
      return;
    }
    this.setData({mychooseSrc:this.data.src[event.currentTarget.id]})
    clearInterval(timer);
    if (this.data.mychooseSrc == this.data.changeSrc){
      this.setData({ result: '竟然想法一样，再来一次吧'});
    } else if (this.data.mychooseSrc == '../img/clipper.png' && this.data.changeSrc =='../img/step.png'){
      this.setData({ winnum: this.data.winnum + 1 });
      this.setData({ result: '你赢了' });
    } else if (this.data.mychooseSrc == '../img/stone.png' && this.data.changeSrc == '../img/clipper.png'){
      this.setData({ winnum: this.data.winnum + 1 });
      this.setData({ result: '你赢了' });
    } else if (this.data.mychooseSrc == '../img/step.png' && this.data.changeSrc == '../img/stone.png'){
      this.setData({ winnum: this.data.winnum + 1 });
      this.setData({ result: '你赢了' });
    }else{
      this.setData({ result: '你输了，再来一次吧' });
    }
    this.setData({
      btnstate:true
    });
  },
  again(){
    if(this.data.btnstate==false){
      console.log(2);
      return;
    }else{
      console.log(1);
      this.timerGo();
      this.setData({
        btnstate: false,
        result: '结果'
      });
    }
  }
})
