<template>
  <div class="container">
    <Row>
    <Col class="loginbar" span="24">
    <div class="w clear">
    <img src="../assets/img/Logo.jpg" class="fl" alt="">
      <router-link to="/register"><Button type="primary" shape="circle" class="bg-color fr" size="large">立即注册</Button></router-link>
    </div>
    </Col>
  </Row>
    <!-- bannner-->
    <Row class="banner">
      <Col span="24" >
      <div class="w clear">
      <img src="../assets/img/computer.png"  class="fl computer" alt="">
        <div class="form fr" v-show="isAccountLogin">
          <img src="../assets/img/sm.png" alt="" class="codesafe"  @click="codelogin()" >
         <h4>账号登录</h4>
          <p>亲爱的用户，欢迎使用榕智监测系统！</p>
         <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          <FormItem prop="user" class="greeninput">
            <Input  v-model="formInline.user" placeholder="邮箱（企业）/手机号 （）" >
            <!--<Icon type="ios-person-outline" slot="prepend"></Icon>-->
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input  v-model="formInline.password" placeholder="请输入密码">
            <!--<Icon type="ios-locked-outline" slot="prepend"></Icon>-->
            </Input>
          </FormItem>
           <p class="rember">
             <span class="left fl"><i class="gou fl" v-show="isShow" ></i><b class="kuang fl" @click="goutoggle()"></b>记住账号</span>
             <a href="" class="fr">忘记密码?</a>
             </p>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
          </FormItem>
        </Form>
        </div>
        <div class="codelogin fr" @click="codelogin()" v-show="!isAccountLogin">
          <img src="../assets/img/ewcode.jpg" alt="">
        </div>
      </div>
      </Col>
    </Row>
    <div class="show">
      <Row class="main">
        <div class="w clear">
          <h3 class="title">主营业务</h3>
          <Row type="flex" justify="center" class="code-row-bg">
            <Col span="8"><img src="../assets/img/main-1.png" alt=""></Col>
            <Col span="8"><img src="../assets/img/main-2.png" alt=""></Col>
            <Col span="8"><img src="../assets/img/main-3.png" alt=""></Col>
          </Row>
          <Row type="flex" justify="center" class="code-row-bg">
            <Col span="8"><h5>监测与评估</h5></Col>
            <Col span="8"><h5>数据化营销</h5></Col>
            <Col span="8"><h5>内容洞察</h5></Col>
          </Row>
      </div>
      </Row>
      <Row class="Monitor">
        <div class="w clear">
          <h3 class="title">数据监控</h3>
          <Row type="flex" justify="center" class="code-row-bg">
            <Col span="6" class="item"><img src="../assets/img/optimize-1.png" alt=""><div class="bottom"> <h5>可视化传播图</h5><p> 实时观察传播的每一步</p></div></Col>
            <Col span="6" class="item"><img src="../assets/img/optimize-2.png" alt=""><div class="bottom"> <h5>分渠道数据监测</h5><p> 轻松生成渠道专属链接</p></div></Col>
            <Col span="6" class="item"><img src="../assets/img/optimize-3.png" alt=""><div class="bottom"> <h5>实时数据统计</h5><p> 手机/电脑随时查看数据 一键生成报告</p></div></Col>
            <Col span="6" class="item"><img src="../assets/img/optimize-4.png" alt=""><div class="bottom"> <h5>数据分析</h5><p> 多样化分析，让你了解传播</p></div></Col>
          </Row>
        </div>
      </Row>
      <Row class="optimize">
        <div class="w clear">
          <h3 class="title">推广优化</h3>
          <Row type="flex" justify="center" class="code-row-bg">
            <Col span="6" class="item"><img src="../assets/img/monitor-1.png" alt=""><div class="bottom"><h5>微信红包</h5><p> 刺激传播，快速寻找引爆点</p></div></Col>
            <Col span="6" class="item"><img src="../assets/img/monitor-2.png" alt=""><div class="bottom"><h5>多条分享语</h5><p> 用数据找出最吸睛的标题</p></div></Col>
            <Col span="6" class="item"><img src="../assets/img/monitor-3.png" alt=""><div class="bottom"><h5>粉丝管理</h5><p>粉丝分组标贴，高效维护</p></div></Col>
            <Col span="6" class="item"><img src="../assets/img/monitor-4.png" alt=""><div class="bottom"><h5>可视化传播图</h5><p> 实时观察传播的每一步</p></div></Col>
          </Row>
        </div>
      </Row>
      <Row class="Customer">
        <div class="w clear">
          <h3 class="title">合作客户</h3>
          <Row type="flex" justify="center" class="code-row-bg">
            <Col span="3" class="item"><img src="../assets/img/cus-1-1.png" alt=""></Col>
            <Col span="3" class="item"><img src="../assets/img/cus-1-2.png" alt=""></Col>
            <Col span="3" class="item"><img src="../assets/img/cus-1-3.png" alt=""></Col>
            <Col span="3" class="item"><img src="../assets/img/cus-1-4.png" alt=""></Col>
            <Col span="3" class="item"><img src="../assets/img/cus-1-5.png" alt=""></Col>
          </Row>
          <Row type="flex" justify="center" class="code-row-bg">
            <Col span="4" class="item"><img src="../assets/img/cus-2-1.png" alt=""></Col>
            <Col span="4" class="item"><img src="../assets/img/cus-2-2.png" alt=""></Col>
            <Col span="4" class="item"><img src="../assets/img/cus-2-3.png" alt=""></Col>
            <Col span="4" class="item"><img src="../assets/img/cus-2-4.png" alt=""></Col>
            <Col span="4" class="item"><img src="../assets/img/cus-2-5.png" alt=""></Col>
          </Row>
          <Row type="flex" justify="center" class="code-row-bg">
            <Col span="4" class="item"><img src="../assets/img/cus-3-1.png" alt=""></Col>
            <Col span="4" class="item"><img src="../assets/img/cus-3-2.png" alt=""></Col>
            <Col span="4" class="item"><img src="../assets/img/cus-3-3.png" alt=""></Col>
            <Col span="4" class="item"><img src="../assets/img/cus-3-4.png" alt=""></Col>
            <Col span="4" class="item"><img src="../assets/img/cus-3-5.png" alt=""></Col>
          </Row>
        </div>
      </Row>
    <Row class="foot">
      <p>商务合作：电话021-0000000    邮箱：0000000@youshu.com</p>
      <p>Copyright © 2011-2017 XXXXXXXX.沪ICP备XXXXXXX号-14   </p>
    </Row>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        },
        isShow: true,
        isAccountLogin: true
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      goutoggle () {
        this.isShow = !this.isShow
      },
      codelogin () {
        this.isAccountLogin = !this.isAccountLogin
      }
    }
  }
</script>
<style>
  .container {
    background-color: #fff;
  }
  /*logoinbar*/
  .loginbar{
    padding-top: 20px;
    height: 80px;
    background-color: #fff;
  }
  /*banner*/
  .banner {
    background: url("../assets/img/banner-bg.png") no-repeat ;
    background-size:100% 100% ;
    height: 655px;
  }
  .banner .computer{
    margin-top: 76px;
    margin-left: 15px;
  }
  .form {
    position: relative;
    text-align: left;
    padding-left:35px;
    height: 421px;
    width: 383px;
    margin-top: 83px;
    background-color: #fff;
  }
   .codelogin{
    margin-top: 83px;
  }
  .form input{
    width: 305px;
    height: 39px;
  }
  .greeninput input{
    border: 1px #a3da34 solid;
  }
  .form h4{
    margin-top:39px ;
    font-size: 26px;
    font-weight: 600;
  }
  .form p {
   line-height: 50px;
  }
  .form button{
    width: 300px;
    background-color: #000;
    border: #000;
  }
  .form .codesafe{
    position: absolute;
    top: 12px;
    right: 12px;
  }
  .form .rember .left {
   position: relative;

  }
  .form .rember{
    /*margin: 20px 0;*/
    width:305px ;
    height: 50px;
    line-height: 50px;
  }
  .form .rember a{
    color: #a3da34;
  }
  .form .rember a:after{
    display: block;
    content: "";
    margin-top: 3px;
    height: 1px;
    width: 60px;
    background-color: #a3da34;
  }
  .form .rember .gou{
    position: absolute;
    left: 2px;
    top: 5px;
    display: inline-block;
    background: url("../assets/img/gou.png");
    height: 11px;
    width: 12px;
  }
  .form .rember .kuang{
    z-index: 2;
    margin-right: 5px;
    margin-top: 2px;
    display: inline-block;
    background: url("../assets/img/goukuang.png");
    height: 16px;
    width: 16px;
  }
  .main{
    height: 490px;
  }
  .show .title{
    font-size: 40px;
    line-height: 170px;
    position: relative;
  }
  .show .title:after{
    display: block;
    content: "";
    height: 3px;
    position: absolute;
    top:120px;
    left: 50%;
    margin-left: -35PX;
    width: 70px;
    background-color: #a3da34;
  }

  .show h5{
    font-size: 26px;
    font-weight: 400;
    line-height: 100px;

  }

  .Monitor{
    background-color: #f8fcf9;
    height: 522px;
  }
  .Monitor h5{

  }
  .show .bottom{
    position: absolute;
    width: 100%;
    top: 130px;
  }
  .show .bottom p  {
    width: 180px;
    margin-top: -20px;
    margin-left: 19px;
    height: 36px;
    line-height: 27px;
    font-size: 17px;
    color: #848d7f;
  }
  .show .item{
    position: relative;
    background-color: #fff;
    height: 290px;
    width: 230px;
    border: 1px solid #d3e1d2;
    margin-left:20px;
  }
  .show .item img {
    margin-top: 50px;
    line-height: 287px;
  }
  .show .optimize {
    height: 514px;
  }
  .show .Customer{
    height: 500px;
    background-color: #f8fcf9;
  }
  .Customer .item{
    border: none;
    width: 17%;
    height: 70px;
    margin-left: 30px;
    margin-bottom: 30px;
  }
  .Customer .item img{
    margin-top: -4px;
    margin-left: -2px;
  }
  .foot{
    height: 129px;
    background-color: #000;
  }
  .foot p{
    margin-top: 20px;
    line-height: 40px;
    color: #fff;
  }
  .foot p:nth-child(2){
    margin-top: 5px;
  }
</style>

