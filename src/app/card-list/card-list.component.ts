import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit {

  constructor(
  ) { }

  menpai = {
    shao_ling: "少林",
    hua_shan: "华山",
    gai_bang: "丐帮",
    shen_nong: "神农",
    wu: "无"
  };

  pailei = {
    gong_ji: "攻击",
    ji_neng: "技能",
    neng_li: "能力"
  };

  zhaoshis = [
    {
      xindongli: 1,
      name: "长拳",
      img: "http://pic.yupoo.com/nickzhang/975e5ae4/82a97afa.png",
      effect: "造成5点伤害",
      pailei: this.pailei.gong_ji,
      menpai: this.menpai.wu
    },
    {
      xindongli: 1,
      name: "招架",
      img: "http://pic.yupoo.com/nickzhang/4adaf27f/7d5038ae.png",
      effect: "获得4点格挡",
      pailei: this.pailei.ji_neng,
      menpai: this.menpai.wu
    },
    {
      xindongli: 2,
      name: "铁掌",
      img: "http://pic.yupoo.com/nickzhang/9f608814/6f9df0f7.png",
      effect:
        "造成8点伤害，并且置入地方状态栏2张“易伤”卡。（易伤，收到伤害+2）",
      menpai: this.menpai.shao_ling,
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 0,
      name: "独孤九剑",
      img: "http://pic.yupoo.com/nickzhang/7dd33ee9/7cb55f7b.png",
      effect: "当手牌都是攻击牌时，才能打出，造成10点伤害",
      menpai: this.menpai.hua_shan,
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 1,
      name: "大金刚拳",
      img: "http://pic.yupoo.com/nickzhang/5d311c82/97c177a2.png",
      effect: "造成你格挡值的伤害",
      menpai: this.menpai.shao_ling,
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 1,
      name: "华山剑",
      img: "http://pic.yupoo.com/nickzhang/d1eab118/d46b5368.png",
      effect: "造成6点伤害，并抽取一张牌",
      menpai: this.menpai.hua_shan,
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 1,
      name: "斗转星移",
      img: "http://pic.yupoo.com/nickzhang/61d7326f/9f9160ec.png",
      effect: "可作为手中任意一张攻击牌或能力牌使用",
      menpai: this.menpai.wu,
      pailei: this.pailei.ji_neng
    },
    {
      xindongli: 1,
      name: "太岳三清峰",
      img: "http://pic.yupoo.com/nickzhang/d1eab118/d46b5368.png",
      effect: "造成3点伤害2次",
      menpai: this.menpai.hua_shan,
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 1,
      name: "尧白功",
      img: "http://pic.yupoo.com/nickzhang/09fb4e60/01f47eaa.png",
      effect: "获得6点格挡，并且消耗一张手牌",
      menpai: this.menpai.hua_shan,
      pailei: this.pailei.ji_neng
    },
    {
      xindongli: 1,
      name: "云台指",
      img: "http://pic.yupoo.com/nickzhang/f8e8b817/37117403.png",
      effect: "造成6点伤害，并将弃牌堆里的一张放在抽牌堆顶",
      menpai: this.menpai.hua_shan,
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 2,
      name: "阴山掌",
      img: "http://pic.yupoo.com/nickzhang/91e096b9/a88b7ebf.png",
      effect: "造成6点伤害，手牌每有一张空手攻击牌，伤害+2",
      menpai: this.menpai.gai_bang,
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 0,
      name: "逐犬踢",
      img: "http://pic.yupoo.com/nickzhang/853fe68c/1551c6a4.png",
      effect: "造成3点伤害，每使用一次，则放入一张此牌的复制品，最多10张",
      menpai: this.menpai.gai_bang,
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 0,
      name: "小混天功",
      img: "http://pic.yupoo.com/nickzhang/6f1649df/eaa400dc.png",
      effect: "抽两张牌，将手牌的一张牌置于抽牌堆顶",
      menpai: this.menpai.gai_bang,
      pailei: this.pailei.ji_neng
    },
    {
      xindongli: 1,
      name: "大混天功",
      img: "http://pic.yupoo.com/nickzhang/2f1427fd/292d3f57.png",
      effect: "获得6点格挡，抽一张牌",
      menpai: this.menpai.gai_bang,
      pailei: this.pailei.ji_neng
    },
    {
      xindongli: 2,
      name: "金乌刀法",
      img: "http://pic.yupoo.com/nickzhang/09e5ec78/9662f9c5.png",
      effect: "造成7点伤害，额外造成力量x3的伤害",
      menpai: this.menpai.shen_nong,
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 2,
      name: "大力金刚掌",
      img: "http://pic.yupoo.com/nickzhang/91e096b9/a88b7ebf.png",
      effect: "造成7点伤害，2层虚弱（虚弱，敌方伤害-2）",
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 1,
      name: "太极拳",
      img: "http://pic.yupoo.com/nickzhang/02cdbfdc/6369cdbf.png",
      effect: "造成4点伤害，获得4点格挡",
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 1,
      name: "霹雳雷火弹",
      img: "http://pic.yupoo.com/nickzhang/ca9c70e6/df0a632b.png",
      effect: "对所有敌人造成4点伤害，一层易伤",
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 1,
      name: "巫山断魂刀",
      img: "http://pic.yupoo.com/nickzhang/26ec5ad2/1aefd5cf.png",
      effect: "对所有敌人造成6点伤害",
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 1,
      name: "生死符",
      img: "http://pic.yupoo.com/nickzhang/6f7beac8/bbed9a76.png",
      effect: "对任意敌人造成2点伤害4次，同一个敌人不能全吃伤害。",
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 2,
      name: "三阴夺元掌",
      img: "http://pic.yupoo.com/nickzhang/8ba2a405/ac972a0f.png",
      effect: "对任意敌人造成7点伤害，两层虚弱，两层易伤。",
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 3,
      name: "摧心断骨拳",
      img: "http://pic.yupoo.com/nickzhang/3d7b645a/c8f397e7.png",
      effect: "每当你失去生命时，此牌所需行动力-1，造成9点伤害。",
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 1,
      name: "七伤拳",
      img: "http://pic.yupoo.com/nickzhang/3d7b645a/c8f397e7.png",
      effect: "失去2点生命，造成7点伤害。",
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 0,
      name: "莲华功",
      img: "http://pic.yupoo.com/nickzhang/6f1649df/eaa400dc.png",
      effect: "抽四张牌，此回合不能再摸牌",
      pailei: this.pailei.ji_neng
    },
    {
      xindongli: 'X',
      name: "降龙十八掌",
      img: "http://pic.yupoo.com/nickzhang/cbebd717/0ecc40e4.png",
      effect: "消耗所有行动力，对所有敌人造成5xX点伤害",
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 1,
      name: "太极剑",
      img: "http://pic.yupoo.com/nickzhang/aadeb65b/6f3ce83e.png",
      effect: "造成5点伤害，每打出一次，伤害+2",
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 1,
      name: "五毒赤炎功",
      img: "http://pic.yupoo.com/nickzhang/d638d05c/aaaa36e7.png",
      effect: "你每出过一张攻击牌，就对所有敌人造成1点伤害",
      pailei: this.pailei.neng_li
    },
    {
      xindongli: 2,
      name: "玄冥太阴功",
      img: "http://pic.yupoo.com/nickzhang/8f054b7e/62d12701.png",
      effect: "获得7点格挡，此回合每受到一次攻击，都会对攻击造成3点伤害",
      pailei: this.pailei.ji_neng
    },
    {
      xindongli: 1,
      name: "罗汉伏魔神功",
      img: "http://pic.yupoo.com/nickzhang/1092af64/bf61bc9d.png",
      effect: "获得3点力量",
      pailei: this.pailei.neng_li
    },
    {
      xindongli: 1,
      name: "鍊松三鼎功",
      img: "http://pic.yupoo.com/nickzhang/2f1427fd/292d3f57.png",
      effect: "消耗1张牌，抽三张",
      pailei: this.pailei.ji_neng
    },
    {
      xindongli: 0,
      name: "纯阳无极功",
      img: "http://pic.yupoo.com/nickzhang/6f1649df/eaa400dc.png",
      effect: "消耗，获得2点行动力",
      pailei: this.pailei.ji_neng
    },
    {
      xindongli: 1,
      name: "明血六行功",
      img: "http://pic.yupoo.com/nickzhang/e0353f91/4f566d8d.png",
      effect: "增加2张伤口到自己的手牌，获得11点格挡（伤口不能被打出）",
      pailei: this.pailei.ji_neng
    },
    {
      xindongli: 1,
      name: "迷魂术",
      img: "http://pic.yupoo.com/nickzhang/6f7beac8/bbed9a76.png",
      effect: "使敌人失去2点力量，消耗",
      pailei: this.pailei.ji_neng
    },
    {
      xindongli: 2,
      name: "化功大法",
      img: "http://pic.yupoo.com/nickzhang/04953e1f/ae97b0a8.png",
      effect: "所有技能牌，行动力消耗变为0。所有技能牌使用后消耗",
      pailei: this.pailei.neng_li
    },
    {
      xindongli: 1,
      name: "暴雨梨花",
      img: "http://pic.yupoo.com/nickzhang/e2c2e63d/4dceaacb.png",
      effect: "造成1点伤害，五次，消耗",
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 1,
      name: "金雁功",
      img: "http://pic.yupoo.com/nickzhang/5f1393b4/db4d391c.png",
      effect: "消耗手牌中所有非攻击的牌，每张获得5点格挡",
      pailei: this.pailei.ji_neng
    },
    {
      xindongli: 1,
      name: "金刚不坏功",
      img: "http://pic.yupoo.com/nickzhang/6f1649df/eaa400dc.png",
      effect: "每回合结束时，获得2点格挡",
      pailei: this.pailei.neng_li
    },
    {
      xindongli: 2,
      name: "十面埋伏",
      img: "http://pic.yupoo.com/nickzhang/9c38f701/a5ed3698.png",
      effect: "给予所有敌人3层易伤，虚弱",
      pailei: this.pailei.ji_neng
    },
    {
      xindongli: 1,
      name: "连环鸳鸯腿",
      img: "http://pic.yupoo.com/nickzhang/f395023a/8216fce2.png",
      effect: "造成4点伤害，如果对方有易伤，则获得1点行动力，并且抽一张牌",
      pailei: this.pailei.gong_ji
    },
    {
      xindongli: 1,
      name: "左右互搏",
      img: "http://pic.yupoo.com/nickzhang/61d7326f/9f9160ec.png",
      effect: "这个回合中，你下两次的攻击牌打出两次",
      pailei: this.pailei.ji_neng
    },
    {
      xindongli: 2,
      name: "峨嵋金顶功",
      img: "http://pic.yupoo.com/nickzhang/2f1427fd/292d3f57.png",
      effect: "格挡值不会在回合结束时消失",
      pailei: this.pailei.neng_li
    },
    {
      xindongli: 2,
      name: "易筋经",
      img: "http://pic.yupoo.com/nickzhang/6f1649df/eaa400dc.png",
      effect: "获得25点格挡，消耗",
      pailei: this.pailei.ji_neng
    },
  ]

  ngOnInit() {
  }

}
